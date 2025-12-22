import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

// Support both connection string and individual parameters
let sql: ReturnType<typeof postgres>;

if (process.env.POSTGRES_URL) {
  // Clean the URL by removing any surrounding quotes
  const cleanUrl = process.env.POSTGRES_URL.replace(/^["']|["']$/g, '').trim();
  sql = postgres(cleanUrl, {
    ssl: 'require',
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
  });
} else if (process.env.POSTGRES_HOST) {
  // Use individual parameters
  sql = postgres({
    host: process.env.POSTGRES_HOST,
    port: 6543,
    database: process.env.POSTGRES_DATABASE || 'postgres',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    ssl: 'require',
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
  });
} else {
  throw new Error('Database configuration missing. Set POSTGRES_URL or POSTGRES_HOST');
}

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  trustHost: true,
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    },
  ],
});

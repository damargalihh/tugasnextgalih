## Next.js Dashboard Application

Dashboard aplikasi dengan Next.js 16, NextAuth, dan Supabase PostgreSQL.

## 🚀 Deploy ke Vercel

### Langkah 1: Persiapan Database
1. Pastikan Supabase database sudah aktif
2. Jalankan seeding database (hanya sekali):
   - Akses: `https://your-domain.vercel.app/seed` (hanya di development)
   - Atau manual seed via Supabase SQL Editor

### Langkah 2: Deploy ke Vercel
1. Push kode ke GitHub repository
2. Import project ke Vercel dari GitHub
3. Tambahkan Environment Variables di Vercel:
   ```
   POSTGRES_URL=your_postgres_url
   POSTGRES_PRISMA_URL=your_postgres_prisma_url
   POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
   POSTGRES_USER=your_postgres_user
   POSTGRES_HOST=your_postgres_host
   POSTGRES_PASSWORD=your_postgres_password
   POSTGRES_DATABASE=postgres
   AUTH_SECRET=your_auth_secret (gunakan: openssl rand -base64 32)
   ```
4. Deploy!

### Langkah 3: Login
- Username: `user@nextmail.com`
- Password: `tugasnextgalih`

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Features
- ✅ Authentication dengan NextAuth v5
- ✅ Dashboard dengan invoice management
- ✅ Customer management
- ✅ PostgreSQL database (Supabase)
- ✅ Server Actions untuk form handling
- ✅ Protected routes dengan middleware

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

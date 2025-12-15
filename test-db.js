const postgres = require('postgres');

// Try direct connection (port 5432) instead of pooler (port 6543)
const sql = postgres('postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-0-us-east-1.pooler.supabase.com:5432/postgres', {
  ssl: 'require',
  max: 1,
  connect_timeout: 10,
});

async function testConnection() {
  try {
    console.log('Testing connection to Supabase...');
    const result = await sql`SELECT version()`;
    console.log('✅ Connection successful!');
    console.log('PostgreSQL version:', result[0].version);
    await sql.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    process.exit(1);
  }
}

testConnection();

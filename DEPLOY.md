# Deployment Guide

## Environment Variables yang Perlu Ditambahkan di Vercel:

### 1. Database (dari Supabase)
```
POSTGRES_URL=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x
POSTGRES_PRISMA_URL=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
POSTGRES_URL_NON_POOLING=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require
POSTGRES_USER=postgres
POSTGRES_HOST=db.jibvlfpqvuzbzhyixbtx.supabase.co
POSTGRES_PASSWORD=4klNwPtTd2ePLjCX
POSTGRES_DATABASE=postgres
```

### 2. Authentication
```
AUTH_SECRET=BGX9siHgr8njEh1GceiZD9ZvWLXOlHe7nXMWAwKOKqo=
```

**JANGAN SET AUTH_URL** - Vercel akan otomatis set sesuai deployment URL Anda!

## Langkah Deploy:

### 1. Push ke GitHub
```bash
git add .
git commit -m "Add production configuration with trustHost for Vercel"
git push
```

### 2. Deploy di Vercel
1. Buka https://vercel.com
2. Import project dari GitHub: damargalihh/tugasnextgalih
3. Tambahkan semua Environment Variables di atas
4. **JANGAN tambahkan AUTH_URL** (biarkan kosong/tidak ada)
5. Deploy

### 3. Seed Database (Hanya Sekali)
Setelah deploy berhasil:
- Buka: `https://your-app.vercel.app/seed`
- Atau seed manual via Supabase Dashboard

### 4. Login
- Email: `user@nextmail.com`
- Password: `tugasnextgalih`

## Troubleshooting

Jika masih redirect ke localhost:
1. Pastikan AUTH_URL TIDAK ada di Vercel environment variables
2. Clear browser cache
3. Re-deploy di Vercel

## Supabase Keys (Optional)
```
SUPABASE_URL=https://jibvlfpqvuzbzhyixbtx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYnZsZnBxdnV6YnpoeWl4YnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjY3MTAsImV4cCI6MjA4MTA0MjcxMH0.ABbbTKoky8FZulY8rF23ViLd3UJAfVeLjyqGdVxdFNM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYnZsZnBxdnV6YnpoeWl4YnR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQ2NjcxMCwiZXhwIjoyMDgxMDQyNzEwfQ.Kr4krOhv5Qq_E4tBFVI1etvDADiJZnti2Et-OiCigL8
```

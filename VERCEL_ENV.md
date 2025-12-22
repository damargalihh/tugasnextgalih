# Environment Variables untuk Vercel

## Copy semua variable di bawah ini ke Vercel Dashboard

### 1. Authentication
AUTH_SECRET=BGX9siHgr8njEh1GceiZD9ZvWLXOlHe7nXMWAwKOKqo=

### 2. Database Configuration
POSTGRES_DATABASE=postgres
POSTGRES_HOST=db.jibvlfpqvuzbzhyixbtx.supabase.co
POSTGRES_PASSWORD=4klNwPtTd2ePLjCX
POSTGRES_PRISMA_URL=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
POSTGRES_URL=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x
POSTGRES_URL_NON_POOLING=postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require
POSTGRES_USER=postgres

### 3. Supabase API Keys (Optional)
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYnZsZnBxdnV6YnpoeWl4YnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjY3MTAsImV4cCI6MjA4MTA0MjcxMH0.ABbbTKoky8FZulY8rF23ViLd3UJAfVeLjyqGdVxdFNM
SUPABASE_JWT_SECRET=kgVdFxVS8yTkWJxHuUMZvUi3Nt902R6uLtk+Nu9e5L6KNl9n+e6rW2vO+wWWhMWC/zvtbPQahFh2700gwqPGHQ==
SUPABASE_PUBLISHABLE_KEY=sb_publishable_Vnddn9JQHH8TfntXCjZYvg_SZ5p7pLX
SUPABASE_SECRET_KEY=sb_secret_gT3J6inbFPQBfGwSyhr8NQ_5xlJb9a-
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYnZsZnBxdnV6YnpoeWl4YnR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQ2NjcxMCwiZXhwIjoyMDgxMDQyNzEwfQ.Kr4krOhv5Qq_E4tBFVI1etvDADiJZnti2Et-OiCigL8
SUPABASE_URL=https://jibvlfpqvuzbzhyixbtx.supabase.co

---

## Cara Menambahkan di Vercel:

1. Buka: https://vercel.com/dashboard
2. Pilih project: tugasnextgalih
3. Klik tab **Settings**
4. Klik **Environment Variables** di sidebar
5. Tambahkan satu per satu:
   - Name: `AUTH_SECRET`
   - Value: `BGX9siHgr8njEh1GceiZD9ZvWLXOlHe7nXMWAwKOKqo=`
   - Environment: Production, Preview, Development (pilih semua)
   - Klik **Save**
6. Ulangi untuk semua variable di atas
7. Setelah selesai, klik **Redeploy** di tab Deployments

## PENTING:
- ❌ **JANGAN tambahkan AUTH_URL** - Vercel akan set otomatis
- ✅ Pastikan semua variable database sudah benar
- ✅ Redeploy setelah menambahkan environment variables

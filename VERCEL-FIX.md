# 🔧 Fix Vercel Error: Server-side Exception

## ❌ Masalah
Error: `Application error: a server-side exception has occurred`

## ✅ Solusi

Environment variables di Vercel Dashboard **TIDAK BOLEH** menggunakan tanda kutip.

### Cara Fix di Vercel Dashboard:

1. Buka: https://vercel.com/dashboard
2. Pilih project: **tugasnextgalih**
3. Klik: **Settings** → **Environment Variables**
4. **Hapus semua environment variables yang ada**
5. Tambahkan ulang **TANPA TANDA KUTIP**:

---

### Environment Variables (Copy nilai di bawah TANPA tanda kutip):

**AUTH_SECRET**
```
BGX9siHgr8njEh1GceiZD9ZvWLXOlHe7nXMWAwKOKqo=
```

**POSTGRES_URL**
```
postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
```

**POSTGRES_PRISMA_URL**
```
postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
```

**POSTGRES_URL_NON_POOLING**
```
postgres://postgres.jibvlfpqvuzbzhyixbtx:4klNwPtTd2ePLjCX@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require
```

**POSTGRES_USER**
```
postgres
```

**POSTGRES_HOST**
```
db.jibvlfpqvuzbzhyixbtx.supabase.co
```

**POSTGRES_PASSWORD**
```
4klNwPtTd2ePLjCX
```

**POSTGRES_DATABASE**
```
postgres
```

---

### Cara Menambahkan di Vercel:

Untuk setiap variable:
1. Klik **Add New**
2. Name: `AUTH_SECRET` (contoh)
3. Value: `BGX9siHgr8njEh1GceiZD9ZvWLXOlHe7nXMWAwKOKqo=` (TANPA tanda kutip!)
4. Environment: Pilih **Production**, **Preview**, dan **Development**
5. Klik **Save**

Ulangi untuk semua 8 variables di atas.

---

### Setelah Semua Variable Ditambahkan:

1. Klik tab **Deployments**
2. Klik **Redeploy** pada deployment terbaru
3. Tunggu deployment selesai
4. Buka aplikasi Anda
5. Login dengan:
   - Email: `user@nextmail.com`
   - Password: `tugasnext`

---

## ⚠️ PENTING:

- ❌ **JANGAN** tambahkan tanda kutip `"` di Vercel Dashboard
- ❌ **JANGAN** tambahkan `AUTH_URL` - Vercel set otomatis
- ✅ Copy paste nilai PERSIS seperti di atas (tanpa quotes)
- ✅ Pilih semua environment (Production, Preview, Development)
- ✅ Redeploy setelah semua variable ditambahkan

---

## 🎯 Verifikasi

Setelah redeploy, aplikasi akan:
- ✅ Load tanpa error
- ✅ Menampilkan halaman login
- ✅ Bisa login dengan `user@nextmail.com` / `tugasnext`
- ✅ Redirect ke dashboard setelah login

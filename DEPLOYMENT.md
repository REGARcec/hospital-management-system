# 🚀 DEPLOYMENT GUIDE - Hospital Management System

## **OPTION 1: Deploy ke Vercel SEKARANG (SQLite - 5 menit)**

### Langkah-langkah:

#### 1. **Pastikan kode sudah di GitHub**
```bash
git status
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

#### 2. **Siap di Vercel Dashboard**
- Buka: https://vercel.com
- Login dengan GitHub
- Klik "New Project"
- Pilih repository: `hospital-management-system`
- Klik "Import"
- **Konfigurasi di Vercel:**
  - Framework: Next.js (auto-detected)
  - Build Command: `npm run build` (auto)
  - Install Command: `npm install` (auto)
  - Output Directory: `.next` (auto)

#### 3. **Environment Variables di Vercel**
Di Vercel Dashboard, tambahkan di "Environment Variables":

**For SQLite (fastest - no server needed):**
```
DATABASE_URL=file:./dev.db
JWT_SECRET=your-super-secret-key-change-this-production-safe
```

OR

**For MySQL (requires server setup first):**
```
DATABASE_URL=mysql://root:Basir030926@cloud-ip:3306/hospital
JWT_SECRET=your-super-secret-key-change-this-production-safe
```

#### 4. **Deploy**
- Klik "Deploy"
- Tunggu ± 2-3 menit
- **Dapatkan link publik:** `https://hospital-management-system-xxxx.vercel.app`

---

## **OPTION 2: Setup MySQL Dulu (Recommended untuk Production)**

### Langkah MySQL Setup:

#### A. **Jika MySQL sudah terinstall lokal:**
```bash
# Buka MySQL
mysql -u root -p

# Buat database
CREATE DATABASE hospital;
USE hospital;

# Run migration Prisma
npx prisma migrate deploy
npx prisma db seed
```

#### B. **Jika belum punya MySQL:**

**Download MySQL Community Server:**
- Windows: https://dev.mysql.com/downloads/mysql/
- Or install via: `choco install mysql` (jika punya Chocolatey)

**Atau gunakan cloud MySQL:**
- **AWS RDS** (amazon.com)
- **Google Cloud SQL** (cloud.google.com)
- **Azure Database for MySQL** (azure.microsoft.com)
- **PlanetScale** (planetscale.com) - MySQL serverless

---

## **Update Prisma untuk MySQL**

Jika mau switch dari SQLite ke MySQL:

1. **Update schema.prisma:**
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

2. **Update .env:**
```
DATABASE_URL="mysql://root:password@localhost:3306/hospital"
```

3. **Jalankan migration:**
```bash
npx prisma migrate deploy
npx prisma db seed
```

---

## **MySQL Connection String Format**

```
mysql://USERNAME:PASSWORD@HOST:PORT/DATABASE
```

**Contoh:**
- **Lokal:** `mysql://root:Basir030926@localhost:3306/hospital`
- **Cloud IP:** `mysql://root:Basir030926@192.168.1.100:3306/hospital`
- **AWS RDS:** `mysql://admin:password@mydb.xxxxxxx.us-east-1.rds.amazonaws.com:3306/hospital`

---

## **Test Credentials**

Login dengan:
- **Email:** admin@hospital.com
- **Password:** Password123!

Or:
- **Email:** dokter@hospital.com
- **Password:** Password123!

Or:
- **Email:** pasien@hospital.com
- **Password:** Password123!

---

## **Commands Reference**

```bash
# Development lokal
npm run dev

# Build production
npm run build

# Preview production build lokal
npm run start

# Reset database
npx prisma migrate reset

# Seed data
node prisma/seed.js

# Generate Prisma client
npx prisma generate

# Prisma Studio (GUI untuk database)
npx prisma studio
```

---

## **Troubleshooting**

**Q: Link Vercel tidak bisa diakses?**
- A: Pastikan deployment sudah selesai (cek logs di Vercel Dashboard)

**Q: Database kosong setelah deploy?**
- A: Vercel ephemeral filesystem. Gunakan cloud MySQL untuk data persistent.

**Q: MySQL connection error?**
- A: Check DATABASE_URL format dan pastikan firewall/VPN allow port 3306

---

## **Next Steps**

1. ✅ Deploy ke Vercel dengan SQLite
2. ⬜ Setup cloud MySQL
3. ⬜ Update DATABASE_URL di Vercel
4. ⬜ Migrate database ke MySQL

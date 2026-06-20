# Sistem Rumah Sakit Modern

Aplikasi rumah sakit digital berbasis Next.js + Tailwind CSS dengan konsep landing page modern, dashboard pasien, dokter, admin, dan direktur.

## Fitur Utama

- Landing page profesional dengan 3D scene dan animasi modern
- Dashboard pasien menampilkan jadwal kontrol, rekam medis, dan fitur konsultasi AI
- Dashboard dokter untuk jadwal praktik dan asisten medis AI
- Dashboard admin untuk CRUD pasien, dokter, poli, obat, kamar
- Dashboard direktur menampilkan statistik dan prediksi AI
- API endpoint sederhana untuk simulasi AI symptom checker

## Teknologi

- Next.js
- React
- Tailwind CSS
- Three.js / @react-three/fiber
- Framer Motion

## Cara Menjalankan

1. Buka terminal di folder proyek:

```bash
cd d:/APK
```

2. Pasang dependensi:

```bash
npm install
```

3. Jalankan aplikasi:

```bash
npm run dev
```

4. Buka browser ke `http://localhost:3000`

## Struktur Halaman

- `/` - Landing page
- `/login` - Halaman login dan pilihan dashboard
- `/patient` - Dashboard pasien
- `/doctor` - Dashboard dokter
- `/admin` - Dashboard admin
- `/director` - Dashboard direktur
- `/api/ai-chat` - Endpoint AI chat

## Catatan

Aplikasi ini sudah siap dikembangkan lebih lanjut. Untuk penggunaan API OpenAI sesungguhnya, Anda dapat memperbarui `app/api/ai-chat/route.ts` dengan logika OpenAI dan menambahkan variabel lingkungan.

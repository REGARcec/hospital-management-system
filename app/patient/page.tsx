'use client';

import AiChat from '../../components/AiChat';
import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';
import RequireRoleAuth from '../../components/RequireRoleAuth';


const stats = [
  { label: 'Kontrol Mendatang', value: '2 Janji' },
  { label: 'Riwayat Berobat', value: '7 Catatan' },
  { label: 'Hasil Lab', value: '5 Hasil' },
  { label: 'Resep Aktif', value: '3 Obat' },
];

export default function PatientDashboard() {
  return (
    <RequireRoleAuth roles={['PATIENT']}>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,119,182,0.15),_transparent_46%),_#F5F7FA] px-6 py-10 text-slate-900">

        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-end">
            <LogoutButton />
          </div>
        <header className="mb-8 flex flex-col gap-4 rounded-[32px] bg-white/95 p-8 shadow-glass border border-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Dashboard Pasien</p>
              <h1 className="mt-3 text-4xl font-semibold">Halo, Agus. Selamat datang kembali.</h1>
              <p className="mt-2 max-w-2xl text-slate-600">Pantau jadwal kontrolmu, riwayat medis, dan rekomendasi kesehatan dalam satu tampilan modern.</p>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600">Kembali ke Beranda</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <article key={item.label} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</p>
              </article>
            ))}
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-4">
          <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-glass">
            <h2 className="text-xl font-semibold">Jadwal Kontrol</h2>
            <div className="space-y-4">
              <div className="rounded-3xl bg-brand-50 p-5">
                <p className="text-sm text-brand-700">Klinik Jantung · Dr. Anisa</p>
                <p className="mt-2 text-lg font-semibold">Senin, 24 Juni 2026 · 09:30</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5">
                <p className="text-sm text-slate-600">Poli Gigi · Dr. Tino</p>
                <p className="mt-2 text-lg font-semibold">Rabu, 26 Juni 2026 · 14:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-glass xl:col-span-2">
            <h2 className="text-xl font-semibold">Rekam Medis Digital</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-800">Diagnosa</p>
                <p className="mt-2">Demam, batuk ringan, dan rawat jalan.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-800">Riwayat Obat</p>
                <p className="mt-2">Paracetamol, vitamin C, inhaler.</p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1">
            <AiChat />
          </div>
        </section>
      </div>
    </main>
    </RequireRoleAuth>

  );
}

'use client';

import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';
import RequireRoleAuth from '../../components/RequireRoleAuth';

const directorStats = [
  { title: 'Jumlah Pasien', value: '1.842' },
  { title: 'Jumlah Dokter', value: '48' },
  { title: 'Pendapatan Bulanan', value: 'Rp 1,2 M' },
  { title: 'Okupansi Kamar', value: '87%' },
];

const predictionItems = [
  {
    title: 'Lonjakan Pasien',
    description: 'Diprediksi meningkat 18% pada minggu depan untuk pelayanan IGD.',
    variant: 'brand',
  },
  {
    title: 'Kebutuhan Obat',
    description: 'Stok analgesik harus ditambah 25% untuk dua minggu ke depan.',
    variant: 'default',
  },
  {
    title: 'Kebutuhan Kamar',
    description: 'Perkiraan okupansi kamar isolasi 91% dalam 48 jam.',
    variant: 'default',
  },
];

export default function DirectorDashboard() {
  return (
    <RequireRoleAuth roles={['DIRECTOR']}>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,119,182,0.14),_transparent_45%),_#F5F7FA] px-6 py-10 text-slate-900">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex justify-end">
            <LogoutButton />
          </div>

          <header className="rounded-[32px] bg-white/95 p-8 shadow-glass border border-slate-200">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Dashboard Direktur</p>
                <h1 className="mt-3 text-4xl font-semibold">Insight Rumah Sakit</h1>
                <p className="mt-2 text-slate-600">Ringkasan statistik, okupansi, dan prediksi AI untuk keputusan strategis.</p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </header>

          <section className="grid gap-6 xl:grid-cols-2">
            <article className="rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-glass">
              <h2 className="text-xl font-semibold">Statistik Kunci</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {directorStats.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-glass">
              <h2 className="text-xl font-semibold">Prediksi AI</h2>
              <div className="mt-6 space-y-5 text-slate-600">
                {predictionItems.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-3xl p-6 ${item.variant === 'brand' ? 'bg-brand-50' : 'bg-slate-50'}`}
                  >
                    <p className={`font-semibold ${item.variant === 'brand' ? 'text-brand-800' : 'text-slate-800'}`}>
                      {item.title}
                    </p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </RequireRoleAuth>
  );
}

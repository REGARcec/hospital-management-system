'use client';

import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';
import RequireRoleAuth from '../../components/RequireRoleAuth';


const doctorStats = [
  { label: 'Pasien Hari Ini', value: '12' },
  { label: 'Konsultasi Online', value: '5' },
  { label: 'Hasil Lab Menunggu', value: '3' },
];

export default function DoctorDashboard() {
  return (
    <RequireRoleAuth roles={['DOCTOR']}>
      <main className="min-h-screen bg-[#F5F7FA] px-6 py-10 text-slate-900">

        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex justify-end">
            <LogoutButton />
          </div>
        <section className="rounded-[32px] bg-white/95 p-8 shadow-glass border border-slate-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Dashboard Dokter</p>
              <h1 className="mt-3 text-4xl font-semibold">Dr. Nadia Utami</h1>
              <p className="mt-2 text-slate-600">Kelola pemeriksaan pasien, hasil lab, dan rekomendasi medis dengan bantuan AI.</p>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600">Kembali ke Beranda</Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {doctorStats.map((item) => (
              <article key={item.label} className="rounded-[28px] bg-brand-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-700">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <article className="rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-glass">
            <h2 className="text-xl font-semibold">Pemeriksaan Pasien</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-700">Pasien</p>
                <p className="mt-2 text-lg font-semibold">Rani S.</p>
                <p className="mt-1 text-slate-600">Keluhan: Pusing, mual, dan lemah.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-700">Diagnosa Awal</p>
                <p className="mt-2 text-lg font-semibold">Infeksi Saluran Pernapasan</p>
              </div>
            </div>
          </article>

          <article className="rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-glass">
            <h2 className="text-xl font-semibold">AI Medical Assistant</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>Analisis hasil laboratorium dan prediksi gejala akan membantu rekomendasi obat.</p>
              <div className="rounded-3xl bg-brand-50 p-5">
                <p className="font-semibold text-brand-700">Saran AI</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Periksa suhu ulang dalam 2 jam.</li>
                  <li>Berikan rehidrasi oral.</li>
                  <li>Jadwalkan pemeriksaan ulang dalam 1 hari.</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
    </RequireRoleAuth>

  );
}

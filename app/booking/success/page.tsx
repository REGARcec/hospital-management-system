'use client';

import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] px-6 py-12">
      <section className="mx-auto max-w-2xl">
        <div className="rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-glass">
          <div className="text-brand-700 text-sm font-semibold uppercase tracking-[0.3em]">
            Booking Berhasil
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950">Terima kasih!</h1>
          <p className="mt-3 text-slate-600">
            Pengajuan booking kamu sudah tersimpan di database.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600 text-center"
            >
              Kembali ke Beranda
            </Link>
            <Link
              href="/booking"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 text-center"
            >
              Buat Booking Lagi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


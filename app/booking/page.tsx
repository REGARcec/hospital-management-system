'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const LAYANAN_OPTIONS = [
  { value: 'RAWAT JALAN', label: 'Rawat Jalan' },
  { value: 'RAWAT INAP', label: 'Rawat Inap' },
  { value: 'IGD', label: 'IGD' },
  { value: 'LABORATORIUM', label: 'Laboratorium' },
  { value: 'FARMASI', label: 'Farmasi' },
] as const;

type LayananValue = (typeof LAYANAN_OPTIONS)[number]['value'];

export default function BookingPage() {
  const router = useRouter();

  // Untuk menghindari error Next export/prerender.
  const prefillService = '';

  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [layanan, setLayanan] = useState<LayananValue | ''>('');
  const [tanggal, setTanggal] = useState('');
  const [catatan, setCatatan] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const layananOptions = useMemo(() => LAYANAN_OPTIONS, []);

  useEffect(() => {
    if (!prefillService) return;
    if (LAYANAN_OPTIONS.some((x) => x.value === prefillService)) {
      setLayanan(prefillService as LayananValue);
    }
  }, [prefillService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, telepon, layanan, tanggal, catatan }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.error || 'Gagal membuat booking.');
        setLoading(false);
        return;
      }

      router.push('/booking/success');
    } catch {
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] px-6 py-12">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Booking Layanan</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950">
            Buat Janji dengan Rumah Sakit
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Isi data berikut untuk mengajukan booking layanan. Proses tersimpan ke sistem database.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-glass"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="nama">
                Nama
              </label>
              <input
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                placeholder="Nama lengkap"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="telepon">
                Telepon
              </label>
              <input
                id="telepon"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="layanan">
                Layanan
              </label>
              <select
                id="layanan"
                value={layanan}
                onChange={(e) => setLayanan(e.target.value as LayananValue)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                required
              >
                <option value="" disabled>
                  Pilih layanan
                </option>
                {layananOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="tanggal">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="catatan">
              Catatan (opsional)
            </label>
            <textarea
              id="catatan"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="mt-2 w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              placeholder="Contoh: jam preferensi, keluhan, dll (opsional)"
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {loading ? 'Menyimpan...' : 'Kirim Booking'}
              </button>
            </div>
          </div>

          {message ? <p className="text-sm text-red-600">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}


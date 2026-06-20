import Link from 'next/link';

export default function AdminObatPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-[32px] bg-white/95 p-8 shadow-glass border border-slate-200">
          <Link href="/admin" className="text-brand-600 hover:underline">← Kembali ke Admin</Link>
          <h1 className="mt-4 text-3xl font-semibold">Manajemen Obat</h1>
          <p className="mt-2 text-slate-600">Halaman placeholder untuk CRUD Obat. Tambahkan form stok dan monitoring obat di sini.</p>
        </div>
      </div>
    </main>
  );
}

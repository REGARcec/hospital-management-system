'use client';

import Link from 'next/link';
import LogoutButton from '../../components/LogoutButton';
import RequireRoleAuth from '../../components/RequireRoleAuth';


const adminItems = [
  { title: 'Pasien', description: 'Kelola data pasien lengkap dengan NIK dan alamat.', href: '/admin/pasien' },
  { title: 'Dokter', description: 'Tambah dokter baru dan atur spesialisasi.', href: '/admin/dokter' },
  { title: 'Poli', description: 'Buat dan edit layanan poli rumah sakit.', href: '/admin/poli' },
  { title: 'Obat', description: 'Pantau stok obat dan informasi resep.', href: '/admin/obat' },
  { title: 'Kamar', description: 'Kelola status kamar dan okupansi.', href: '/admin/kamar' },
];

export default function AdminDashboard() {
  return (
    <RequireRoleAuth roles={['ADMIN']}>
      <main className="min-h-screen bg-[#F5F7FA] px-6 py-10 text-slate-900">

        <div className="mx-auto max-w-6xl">
          <div className="flex justify-end">
            <LogoutButton />
          </div>
        <header className="rounded-[32px] bg-white/95 p-8 shadow-glass border border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Dashboard Admin</p>
          <h1 className="mt-3 text-4xl font-semibold">Manajemen Sistem Rumah Sakit</h1>
          <p className="mt-2 text-slate-600">CRUD lengkap untuk pasien, dokter, poli, obat, dan kamar.</p>
        </header>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adminItems.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-[32px] border border-slate-200 bg-white p-6 text-slate-900 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-glass">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-600">{item.title}</p>
              <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-brand-600 opacity-80 group-hover:opacity-100">Lihat detail →</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
    </RequireRoleAuth>

  );
}

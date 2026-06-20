'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Dokter Profesional', value: '48' },
  { label: 'Pasien Terlayani', value: '2.350+' },
  { label: 'Kamar Tersedia', value: '120' },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Tentang Rumah Sakit</span>
          <motion.h2
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl font-semibold text-slate-950"
          >
            Visi misi dan akreditasi yang mengedepankan layanan digital dan manusiawi.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Rumah sakit modern dengan fokus rawat jalan, rawat inap, IGD, dan layanan laboratorium. Teknologi kami membantu pasien cepat mendapat layanan dan dokter lebih siap dalam penanganan.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <motion.article
                key={item.label}
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950">{item.value}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] bg-brand-500/10 p-8 shadow-glass border border-brand-100">
          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Profil Rumah Sakit</h3>
            <p className="mt-3 text-slate-600">Melayani masyarakat dengan fasilitas digital, dokter ahli, dan sistem manajemen terbaru.</p>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Visi Misi</h3>
            <ul className="mt-3 space-y-3 text-slate-600">
              <li>• Menjadi rumah sakit pilihan dengan layanan cepat dan akurat.</li>
              <li>• Mengedepankan standar keselamatan pasien dan humanisme.</li>
              <li>• Menerapkan teknologi digital untuk kemudahan layanan.</li>
            </ul>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Akreditasi</h3>
            <p className="mt-3 text-slate-600">Terakreditasi nasional dengan standar pelayanan sesuai protokol kesehatan modern.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

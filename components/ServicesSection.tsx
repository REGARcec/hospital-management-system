'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Rawat Jalan',
    description: 'Periksa langsung dengan dokter spesialis dan fasilitas modern.',
  },
  {
    title: 'Rawat Inap',
    description: 'Kamar premium dengan layanan 24 jam dan monitoring real-time.',
  },
  {
    title: 'IGD',
    description: 'Prioritas cepat dengan status ketersediaan ruang dan tim medis siap siaga.',
  },
  {
    title: 'Laboratorium',
    description: 'Hasil lab digital cepat dengan pemeriksaan lengkap dan akurat.',
  },
  {
    title: 'Farmasi',
    description: 'Stok obat terpantau, resep digital, dan saran penggunaan yang aman.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Layanan Unggulan</span>
        <h2 className="mt-6 text-4xl font-semibold text-slate-950">Platform layanan lengkap untuk pasien dan staf rumah sakit.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Dari rawat jalan hingga farmasi, setiap fitur didesain dengan tampilan premium dan pengalaman modern.</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
          >
            <div className="mb-5 h-16 w-16 rounded-3xl bg-brand-50 text-brand-700 shadow-sm grid place-items-center text-lg font-bold">{index + 1}</div>
            <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-4 text-slate-600">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

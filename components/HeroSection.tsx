'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="h-full w-full rounded-[32px] bg-slate-950/20">
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      <Float speed={2} rotationIntensity={0.35} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 1.2, 1.2]} />
          <meshStandardMaterial color="#0077b6" metalness={0.45} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.9, -0.8]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.35} roughness={0.15} />
        </mesh>
      </Float>
      <Sparkles count={30} scale={8} color="#88c7ff" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,119,182,0.2),_transparent_40%),_linear-gradient(180deg,_#FFFFFF_0%,_#F5F7FA_100%)] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,119,182,0.12),_transparent_20%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-700 shadow-sm">Sistem Rumah Sakit Modern</span>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Rumah Sakit Digital dengan Dashboard Pasien, Dokter, Admin, dan Direktur
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Solusi rumah sakit profesional dengan AI assistant, rekam medis digital, antrian pintar, dan statistik strategis siap dipresentasikan.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600">
              Mulai Sekarang
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-600">
              Lihat Layanan
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-white/90 p-5 shadow-sm border border-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pengguna</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">8.250+</p>
            </div>
            <div className="rounded-[28px] bg-white/90 p-5 shadow-sm border border-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Fitur AI</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">5+ Modul</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex-1 rounded-[32px] border border-white/80 bg-slate-950/70 p-6 shadow-glass backdrop-blur-xl"
        >
          <div className="absolute inset-x-10 top-8 h-[180px] rounded-[32px] bg-brand-500/10 blur-2xl" />
          <div className="relative h-[500px] overflow-hidden rounded-[32px]">
            <HeroScene />
          </div>
          <div className="absolute left-6 top-6 rounded-3xl bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
            AI Assistant
          </div>
          <div className="absolute right-6 bottom-6 rounded-3xl bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
            Model 3D Dokter
          </div>
        </motion.div>
      </div>
    </section>
  );
}

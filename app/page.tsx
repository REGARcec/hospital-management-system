'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.75 }}
        >
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

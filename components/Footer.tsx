export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white/90 py-10 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">HospitaLink</p>
          <p className="mt-2 max-w-xl text-sm">Platform rumah sakit digital untuk manajemen pasien, dokter, admin, dan direktur dengan sentuhan AI.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">Hubungi Kami</p>
          <p>basirhamzahsiregar@gmail.com</p>
          <p>+62 857-8829-0848</p>
        </div>
      </div>
    </footer>
  );
}

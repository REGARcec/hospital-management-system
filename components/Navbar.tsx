import Link from 'next/link';

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Dashboard', href: '/login' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-brand-700">HospitaLink</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-600">
              {item.label}
            </a>
          ))}
        </nav>
        <Link href="/login" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-600">
          Login
        </Link>
      </div>
    </header>
  );
}

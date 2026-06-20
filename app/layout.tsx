import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistem Rumah Sakit Modern',
  description: 'Aplikasi rumah sakit modern dengan dashboard pasien, dokter, admin, dan direktur.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

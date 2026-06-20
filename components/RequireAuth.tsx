'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch('/api/auth/me');
      if (!response.ok) {
        router.replace('/login');
        return;
      }
      setLoading(false);
    };
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FA] text-slate-700">
        <div className="rounded-3xl bg-white p-8 shadow-glass">Memeriksa sesi...</div>
      </div>
    );
  }

  return <>{children}</>;
}

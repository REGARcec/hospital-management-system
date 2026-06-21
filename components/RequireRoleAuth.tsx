'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  roles: string[];
  /** default route when unauthorized */
  redirectTo?: string;
};

export default function RequireRoleAuth({ children, roles, redirectTo = '/login' }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const normalizedRoles = useMemo(
    () => roles.map((r) => String(r || '').trim().toUpperCase()),
    [roles],
  );

  useEffect(() => {
    const check = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          router.replace(redirectTo);
          return;
        }

        const data = await response.json();
        const role = String(data?.user?.role ?? '').trim().toUpperCase();

        if (!role || !normalizedRoles.includes(role)) {
          router.replace(redirectTo);
          return;
        }

        setLoading(false);
      } catch {
        router.replace(redirectTo);
      }
    };

    check();
  }, [normalizedRoles, redirectTo, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FA] text-slate-700">
        <div className="rounded-3xl bg-white p-8 shadow-glass">Memeriksa izin...</div>
      </div>
    );
  }

  return <>{children}</>;
}


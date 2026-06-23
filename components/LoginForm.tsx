'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.error || 'Login gagal.');
        return;
      }

      const role = String(data?.user?.role ?? '').toUpperCase();

      if (role === 'ADMIN') router.push('/admin');
      else if (role === 'DIRECTOR') router.push('/director');
      else if (role === 'DOCTOR') router.push('/doctor');
      else router.push('/patient');
    } catch {
      setMessage('Terjadi kesalahan koneksi. Coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700">Username / Email</label>
        <input
          type="text"
          value={usernameOrEmail}
          onChange={(event) => setUsernameOrEmail(event.target.value)}
          placeholder="admin: ADMIN_ADMIN_KECE atau user: email user@domain.com"
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          autoComplete="username"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Kata Sandi</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="********"
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          autoComplete="current-password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brand-500 px-6 py-3 text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-200"
      >
        {loading ? 'Memproses...' : 'Masuk'}
      </button>

      {message ? <p role="alert" className="text-sm text-red-600">{message}</p> : null}

      <p className="text-xs text-slate-500 leading-relaxed">
        Tips: admin khusus gunakan username <span className="font-semibold">ADMIN_ADMIN_KECE</span>. 
        User lain gunakan <span className="font-semibold">email</span> dan password sesuai password email.
      </p>
    </form>
  );
}


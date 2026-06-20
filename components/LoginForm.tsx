'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setLoading(true);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setMessage(data.error || 'Login gagal.');
      return;
    }

    router.push('/patient');
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="nama@rumahsakit.com"
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brand-500 px-6 py-3 text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {loading ? 'Memproses...' : 'Masuk'}
      </button>

      {message ? <p className="text-sm text-red-600">{message}</p> : null}
    </form>
  );
}

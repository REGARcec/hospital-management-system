'use client';

import { useState } from 'react';

export default function AiChat() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setReply(null);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setReply(`${data.analysis} Risiko: ${data.risk}. Catatan: ${data.note}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-glass">
      <h3 className="text-xl font-semibold text-slate-950">Konsultasi AI Cepat</h3>
      <p className="mt-3 text-slate-600">Masukkan gejala ringan dan dapatkan saran awal dari AI.</p>
      <form onSubmit={handleSend} className="mt-6 space-y-4">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder="Contoh: Saya demam sejak kemarin dan kepala pusing..."
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            disabled={loading}
          >
            {loading ? 'Memproses...' : 'Kirim ke AI'}
          </button>
          <p className="text-sm text-slate-500">Bukan pengganti dokter, hanya saran awal.</p>
        </div>
      </form>
      {reply ? (
        <div className="mt-5 rounded-3xl bg-brand-50 p-5 text-slate-900 shadow-sm">
          <p className="font-semibold">Hasil Analisis AI</p>
          <p className="mt-3 text-sm leading-7">{reply}</p>
        </div>
      ) : null}
    </div>
  );
}

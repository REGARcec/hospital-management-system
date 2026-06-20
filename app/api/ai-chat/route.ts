import { NextResponse } from 'next/server';

const sampleResponses = [
  {
    prompt: 'demam',
    advice: 'Berdasarkan gejala yang Anda sampaikan, kemungkinan inflamasai ringan. Istirahat, minum cairan, dan pantau suhu dalam 24 jam. Jika demam > 38.5°C, segera konsultasi dokter.',
    risk: 'Rendah',
  },
  {
    prompt: 'batuk',
    advice: 'Gejala batuk bisa disebabkan oleh infeksi pernapasan. Hindari iritan, minum air hangat, dan pertimbangkan pemeriksaan laboratorium jika berlanjut lebih dari 3 hari.',
    risk: 'Sedang',
  },
  {
    prompt: 'sakit perut',
    advice: 'Kemungkinan gangguan pencernaan atau radang ringan. Perhatikan diet, makan lebih ringan, dan konsultasi bila nyeri terus berlanjut.',
    risk: 'Sedang',
  },
];

export async function POST(request: Request) {
  const body = await request.json();
  const message: string = body.message || '';
  const normalized = message.toLowerCase();

  const found = sampleResponses.find((item) => normalized.includes(item.prompt));
  const response = found
    ? {
        analysis: found.advice,
        risk: found.risk,
        note: 'Ini bukan diagnosis resmi. Langkah selanjutnya: periksa dokter di rumah sakit.',
      }
    : {
        analysis: 'Gejala saat ini membutuhkan evaluasi lebih lanjut. Silakan lengkapi informasi gejala dan konsultasikan dengan tenaga medis.',
        risk: 'Tinggi',
        note: 'Ini bukan diagnosis resmi. Informasi hanya bersifat saran awal.',
      };

  return NextResponse.json(response);
}

import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const pasien = await prisma.pasien.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(pasien);
}

export async function POST(request: Request) {
  const body = await request.json();
  const pasien = await prisma.pasien.create({
    data: {
      nama: String(body.nama || ''),
      nik: String(body.nik || ''),
      alamat: String(body.alamat || ''),
      telepon: String(body.telepon || ''),
    },
  });
  return NextResponse.json(pasien, { status: 201 });
}

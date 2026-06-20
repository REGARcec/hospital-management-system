import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const dokter = await prisma.dokter.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(dokter);
}

export async function POST(request: Request) {
  const body = await request.json();
  const dokter = await prisma.dokter.create({
    data: {
      nama: String(body.nama || ''),
      spesialis: String(body.spesialis || ''),
      jadwal: String(body.jadwal || ''),
    },
  });
  return NextResponse.json(dokter, { status: 201 });
}

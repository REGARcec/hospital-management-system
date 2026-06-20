import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const obat = await prisma.obat.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(obat);
}

export async function POST(request: Request) {
  const body = await request.json();
  const obat = await prisma.obat.create({
    data: {
      namaObat: String(body.namaObat || ''),
      stok: Number(body.stok || 0),
    },
  });
  return NextResponse.json(obat, { status: 201 });
}

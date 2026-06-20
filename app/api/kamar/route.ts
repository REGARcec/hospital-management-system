import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const kamar = await prisma.kamar.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(kamar);
}

export async function POST(request: Request) {
  const body = await request.json();
  const kamar = await prisma.kamar.create({
    data: {
      nomor: String(body.nomor || ''),
      status: String(body.status || ''),
    },
  });
  return NextResponse.json(kamar, { status: 201 });
}

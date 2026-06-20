import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const poli = await prisma.poli.findMany({ orderBy: { id: 'asc' } });
  return NextResponse.json(poli);
}

export async function POST(request: Request) {
  const body = await request.json();
  const poli = await prisma.poli.create({
    data: {
      namaPoli: String(body.namaPoli || ''),
    },
  });
  return NextResponse.json(poli, { status: 201 });
}

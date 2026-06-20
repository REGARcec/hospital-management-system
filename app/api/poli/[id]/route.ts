import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const poli = await prisma.poli.findUnique({ where: { id } });
  if (!poli) return NextResponse.json({ error: 'Poli tidak ditemukan' }, { status: 404 });
  return NextResponse.json(poli);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const poli = await prisma.poli.update({
    where: { id },
    data: {
      namaPoli: String(body.namaPoli || ''),
    },
  });
  return NextResponse.json(poli);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.poli.delete({ where: { id } });
  return NextResponse.json({ message: 'Poli dihapus' });
}

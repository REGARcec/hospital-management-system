import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const kamar = await prisma.kamar.findUnique({ where: { id } });
  if (!kamar) return NextResponse.json({ error: 'Kamar tidak ditemukan' }, { status: 404 });
  return NextResponse.json(kamar);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const kamar = await prisma.kamar.update({
    where: { id },
    data: {
      nomor: String(body.nomor || ''),
      status: String(body.status || ''),
    },
  });
  return NextResponse.json(kamar);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.kamar.delete({ where: { id } });
  return NextResponse.json({ message: 'Kamar dihapus' });
}

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const obat = await prisma.obat.findUnique({ where: { id } });
  if (!obat) return NextResponse.json({ error: 'Obat tidak ditemukan' }, { status: 404 });
  return NextResponse.json(obat);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const obat = await prisma.obat.update({
    where: { id },
    data: {
      namaObat: String(body.namaObat || ''),
      stok: Number(body.stok || 0),
    },
  });
  return NextResponse.json(obat);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.obat.delete({ where: { id } });
  return NextResponse.json({ message: 'Obat dihapus' });
}

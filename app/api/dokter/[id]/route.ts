import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const dokter = await prisma.dokter.findUnique({ where: { id } });
  if (!dokter) return NextResponse.json({ error: 'Dokter tidak ditemukan' }, { status: 404 });
  return NextResponse.json(dokter);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const dokter = await prisma.dokter.update({
    where: { id },
    data: {
      nama: String(body.nama || ''),
      spesialis: String(body.spesialis || ''),
      jadwal: String(body.jadwal || ''),
    },
  });
  return NextResponse.json(dokter);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.dokter.delete({ where: { id } });
  return NextResponse.json({ message: 'Dokter dihapus' });
}

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const pasien = await prisma.pasien.findUnique({ where: { id } });
  if (!pasien) return NextResponse.json({ error: 'Pasien tidak ditemukan' }, { status: 404 });
  return NextResponse.json(pasien);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const pasien = await prisma.pasien.update({
    where: { id },
    data: {
      nama: String(body.nama || ''),
      nik: String(body.nik || ''),
      alamat: String(body.alamat || ''),
      telepon: String(body.telepon || ''),
    },
  });
  return NextResponse.json(pasien);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.pasien.delete({ where: { id } });
  return NextResponse.json({ message: 'Pasien dihapus' });
}

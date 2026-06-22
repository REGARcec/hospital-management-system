import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  try {
    const body = await req.json();

    const nama = String(body?.nama || '').trim();
    const telepon = String(body?.telepon || '').trim();
    const layanan = String(body?.layanan || '').trim();
    const tanggal = String(body?.tanggal || '').trim();
    const catatan = String(body?.catatan || '').trim();

    if (!nama || !telepon || !layanan || !tanggal) {
      return NextResponse.json(
        { error: 'Nama, telepon, layanan, dan tanggal harus diisi.' },
        { status: 400 },
      );
    }

    // Normalisasi layanan
    const allowed = ['RAWAT JALAN', 'RAWAT INAP', 'IGD', 'LABORATORIUM', 'FARMASI'];
    const layananNorm = layanan.toUpperCase();
    if (!allowed.includes(layananNorm)) {
      return NextResponse.json({ error: 'Layanan tidak valid.' }, { status: 400 });
    }

    // Validasi tanggal (YYYY-MM-DD)
    const dateObj = new Date(tanggal);
    if (Number.isNaN(dateObj.getTime())) {
      return NextResponse.json({ error: 'Tanggal tidak valid.' }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        nama,
        telepon,
        layanan: layananNorm,
        tanggal: tanggal,
        catatan: catatan || null,
      },
      select: { id: true },
    });

    return NextResponse.json({ message: 'Booking berhasil dibuat', id: booking.id }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Gagal membuat booking.' }, { status: 500 });
  }
}


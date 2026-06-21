import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { verifyToken, unauthorizedResponse } from '../../../../lib/auth';

export async function GET() {
  const token = cookies().get('rs_token')?.value;
  if (!token) return unauthorizedResponse();

  try {
    const decoded = verifyToken(token);
    const role = String(decoded?.role || '').toUpperCase();

    // Admin khusus dibuat tanpa entry user di tabel (userId = -1)
    // Jadi /me tidak boleh selalu melakukan lookup ke Prisma.
    if (role === 'ADMIN') {
      return NextResponse.json({
        user: {
          id: -1,
          name: 'Admin',
          email: 'admin',
          role: 'ADMIN',
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, role: true },
    });

    if (!user) return unauthorizedResponse();
    return NextResponse.json({ user });
  } catch (error) {
    return unauthorizedResponse();
  }
}


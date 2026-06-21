import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { createAuthCookie, signToken } from '../../../../lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const usernameOrEmail = String(body.usernameOrEmail || '').trim();
  const password = String(body.password || '');

  if (!usernameOrEmail || !password) {
    return NextResponse.json({ error: 'Username/Email dan password harus diisi.' }, { status: 400 });
  }

  // 1) Admin khusus (username + password tetap)
  const ADMIN_USERNAME = 'ADMIN_ADMIN_KECE';
  const ADMIN_PASSWORD = 'ADMIN_HIDUPSEHAT00';

  // Untuk admin, biarkan usernameOrEmail case-sensitive (sesuai input asli),
  // sedangkan password tetap harus sama.
  if (usernameOrEmail === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = signToken({ userId: -1, role: 'ADMIN' });

    const response = NextResponse.json({
      message: 'Login admin berhasil',
      user: { id: -1, email: ADMIN_USERNAME, role: 'ADMIN', name: 'Admin' },
    });
    response.headers.append('Set-Cookie', createAuthCookie(token));
    return response;
  }

  // 2) User biasa: input = email, password = password email (berdasarkan bcrypt di tabel User)
  const email = usernameOrEmail.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ error: 'Username/Email atau password salah.' }, { status: 401 });
  }

  const token = signToken({ userId: user.id, role: user.role });
  const response = NextResponse.json({ message: 'Login berhasil', user: { id: user.id, email: user.email, role: user.role, name: user.name } });
  response.headers.append('Set-Cookie', createAuthCookie(token));
  return response;
}

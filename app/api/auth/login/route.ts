import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { createAuthCookie, signToken } from '../../../../lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  if (!email || !password) {
    return NextResponse.json({ error: 'Email dan password harus diisi.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }

  const token = signToken({ userId: user.id, role: user.role });
  const response = NextResponse.json({ message: 'Login berhasil', user: { id: user.id, email: user.email, role: user.role, name: user.name } });
  response.headers.append('Set-Cookie', createAuthCookie(token));
  return response;
}

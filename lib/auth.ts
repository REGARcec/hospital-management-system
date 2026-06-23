import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe-secret-key';
const COOKIE_NAME = 'rs_token';

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { userId: number; role: string };
}

export function createAuthCookie(token: string) {
  // secure cookie bisa membuat cookie tidak terkirim pada environment non-HTTPS.
  // Aktifkan secure hanya jika kita benar-benar yakin pakai HTTPS.
  // Di dev/localhost biasanya tidak ada https, jadi secure harus false.
  const explicitAppUrl = process.env.NEXT_PUBLIC_APP_URL || '';
  const secure = process.env.NODE_ENV === 'production' && explicitAppUrl.startsWith('https');


  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure,
    maxAge: 60 * 60 * 8,
  });
}

export function clearAuthCookie() {
  const secure = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_APP_URL?.startsWith('https');

  return serialize(COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure,
    expires: new Date(0),
  });
}

export function unauthorizedResponse(message = 'Unauthorized') {
  return NextResponse.json({ error: message }, { status: 401 });
}

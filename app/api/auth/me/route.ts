import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { verifyToken, unauthorizedResponse } from '../../../../lib/auth';

export async function GET() {
  const token = cookies().get('rs_token')?.value;
  if (!token) return unauthorizedResponse();

  try {
    const decoded = verifyToken(token);
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

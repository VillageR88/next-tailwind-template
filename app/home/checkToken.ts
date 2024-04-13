'use server';
import { cookies } from 'next/headers';

export default async function checkToken() {
  await Promise.resolve();
  const token = cookies().get('token')?.value;
  if (!token) return null;
  return token;
}

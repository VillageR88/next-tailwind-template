'use server';
import { cookies } from 'next/headers';

export default async function checkToken() {
  const token = cookies().get('token')?.value;
  await Promise.resolve(token);
  if (!token) return null;
  return token;
}

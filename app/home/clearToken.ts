'use server';
import { cookies } from 'next/headers';

export default async function clearToken() {
  await Promise.resolve();
  cookies().delete('token');
}

'use server';
import { cookies } from 'next/headers';

enum Theme {
  dark = 'dark',
  light = 'light',
}

export default async function checkToken() {
  await Promise.resolve();
  const token = cookies().get('token');
  return token;
}

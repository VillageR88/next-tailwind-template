'use server';
import { cookies } from 'next/headers';

export default async function checkToken() {
  'use server';
  const token = cookies().get('token');
  return token;
}

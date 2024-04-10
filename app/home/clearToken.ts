'use server';
import { cookies } from 'next/headers';

export default async function clearToken() {
  'use server';
  cookies().delete('token');
}

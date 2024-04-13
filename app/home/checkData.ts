'use server';
import { cookies } from 'next/headers';

export default async function checkData() {
  await Promise.resolve();
  const data = cookies().get('data')?.value;
  if (!data) return null;
  return data;
}

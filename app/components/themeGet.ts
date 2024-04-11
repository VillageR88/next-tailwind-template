'use server';

import { cookies } from 'next/headers';

export default async function themeGet() {
  await Promise.resolve();
  const themeGet = cookies().get('theme');
  return themeGet;
}

'use server';

import { cookies } from 'next/headers';

enum Theme {
  dark = 'dark',
  light = 'light',
}

export default async function themeChanger({ theme }: { theme: Theme }) {
  await Promise.resolve();
  cookies().set({ name: 'theme', value: theme, httpOnly: true });
}

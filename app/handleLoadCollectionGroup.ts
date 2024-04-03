'use server';

import { CollectionGroup } from '@/app/lib/interfaces';

async function handleLoadCollectionGroup({ token }: { token: string }) {
  try {
    const response = await fetch('https://serverexpress1-production.up.railway.app/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = (await response.json()) as CollectionGroup;
      return data;
    } else {
      console.error('Failed to load collection group', response);
    }
  } catch (error) {
    console.error(error);
  }
}

export default handleLoadCollectionGroup;

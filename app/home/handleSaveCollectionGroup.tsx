'use server';

import { CollectionGroup } from '@/app/lib/interfaces';

const handleSaveCollectionGroup = async ({ data, token }: { data: CollectionGroup; token: string }) => {
  try {
    const response = await fetch('https://serverexpress1-production.up.railway.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return true;
    } else {
      console.error('Failed to save collection group', response);
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default handleSaveCollectionGroup;

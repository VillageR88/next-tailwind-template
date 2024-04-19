'use server';

import { cookies } from 'next/headers';
import { CollectionGroup } from './interfaces';
import { redirect } from 'next/navigation';
import { Routes } from '../routes';

export const checkData = async () => {
  await Promise.resolve();
  const data = cookies().get('data')?.value;
  if (!data) return null;
  return data;
};

export const checkToken = async () => {
  const token = cookies().get('token')?.value;
  await Promise.resolve(token);
  if (!token) return null;
  return token;
};

export const clearToken = async () => {
  await Promise.resolve();
  cookies().delete('token');
};

let server;
if (process.env.NODE_ENV === 'production') {
  server = 'https://serverexpress1-production.up.railway.app/';
} else {
  server = 'http://192.168.1.104:3000/';
}

export const handleLoadCollectionGroup = async ({ token }: { token: string }) => {
  try {
    const response = await fetch(server, {
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
};

export const handleSaveCollectionGroup = async ({ data, token }: { data: CollectionGroup; token: string }) => {
  try {
    const response = await fetch(server, {
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

export const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await fetch(`${server}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const { token } = (await response.json()) as { token: string };
      return token;
    } else {
      return 'unsuccessful';
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleCreateAccount = async ({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  try {
    const response = await fetch(`${server}create-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, passwordConfirm }),
    });

    if (response.ok) {
      const { token } = (await response.json()) as { token: string };
      return token;
    } else {
      const error = await response.text();
      console.error(error);
      return 'unsuccessful';
    }
  } catch (error) {
    console.error(error);
  }
};

export async function createInvoice(formData: FormData) {
  'use server';

  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  };

  const cookieToken = await handleCreateAccount({
    email: rawFormData.email as string,
    password: rawFormData.password as string,
    passwordConfirm: rawFormData.passwordConfirm as string,
  })
    .then((e) => {
      if (e)
        if (e === 'unsuccessful') {
        } else {
          cookies().set({ name: 'token', value: e, httpOnly: true });
          return e;
        }
    })
    .catch((e) => {
      console.error(e);
    });
  if (!cookieToken) return;
  redirect(Routes.home);
}

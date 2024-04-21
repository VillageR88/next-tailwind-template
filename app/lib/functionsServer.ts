'use server';

import { cookies } from 'next/headers';
import { CollectionGroup } from './interfaces';
import { redirect } from 'next/navigation';
import { Routes } from '../routes';

const server = process.env.SERVER;
if (!server) throw new Error('Server not defined');

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
      if (error === 'User already exists') return 'exists';
      else return 'unsuccessful';
    }
  } catch (error) {
    console.error(error);
  }
};
interface ErrorMessage {
  error: string;
}
export async function createInvoiceCreateEmail(prev: ErrorMessage, formData: FormData): Promise<ErrorMessage> {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
  };

  if (rawFormData.password !== rawFormData.passwordConfirm)
    return {
      error: 'Passwords do not match',
    };

  const response = await handleCreateAccount({
    email: rawFormData.email as string,
    password: rawFormData.password as string,
    passwordConfirm: rawFormData.passwordConfirm as string,
  })
    .then((e) => {
      if (!e) return 'Server error';
      if (e === 'unsuccessful') {
        return { error: 'Failed to create account' };
      } else if (e === 'exists') {
        return { error: 'User already exists' };
      } else {
        cookies().set({ name: 'token', value: e, httpOnly: true });
        return 'pass';
      }
    })
    .catch((e) => {
      console.error(e);
      return 'Server error';
    });
  if (response !== 'pass') return response as ErrorMessage;
  redirect(Routes.home);
}

export async function createInvoiceLogin(prev: ErrorMessage, formData: FormData): Promise<ErrorMessage> {
  let response;
  try {
    response = await fetch(`${server}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    if (response.ok) {
      const { token } = (await response.json()) as { token: string };
      cookies().set({ name: 'token', value: token, httpOnly: true });
      return { error: '' };
    } else {
      return { error: 'Failed to login' };
    }
  } catch (error) {
    return { error: 'Server error' };
  } finally {
    if (response?.status === 200) {
      redirect(Routes.home);
    }
  }
}

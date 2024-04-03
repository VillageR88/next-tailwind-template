'use server';

async function handleSubmit({ email, password }: { email: string; password: string }) {
  try {
    const response = await fetch('https://serverexpress1-production.up.railway.app/login', {
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
}

export default handleSubmit;

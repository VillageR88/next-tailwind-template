'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const FormLogin = () => {
  const router = useRouter();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(
      'https://serverexpress1-production.up.railway.app/',

      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );
    if (response.ok) {
      const { token } = (await response.json()) as { token: string };
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } else {
      console.error('response', response);
    }
  }
  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
      className="flex size-full flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <span className="font-materialSymbolsOutlined">email</span>
            <span>Email</span>
          </label>
          <button
            type="button"
            className="flex items-center gap-[6px] text-[14px] text-[orange] transition hover:brightness-[117%]"
          >
            <span className="font-materialSymbolsOutlined text-[16px]">person_add</span>
            <span>Create new account</span>
          </button>
        </div>
        <div>
          <input placeholder="example@domain.com" className="w-full" id="email" type="email" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <span className="font-materialSymbolsOutlined">lock</span>
            <span>Password</span>
          </label>
          <button
            type="button"
            className="flex items-center gap-[6px] text-[14px] text-[orange] transition hover:brightness-[117%]"
          >
            <span className="font-materialSymbolsOutlined text-[16px]">psychology_alt</span>
            <span>Remind my password</span>
          </button>
        </div>
        <input placeholder="Enter your password" id="password" type="password" />
      </div>
      <button
        className="mt-1.5 flex h-[45px] w-full items-center justify-center rounded-[6px] bg-gradient-to-b from-[orange] to-[#9a6502] text-[16px] font-extrabold tracking-[1px] text-white  transition hover:brightness-[118%]"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};
export default FormLogin;

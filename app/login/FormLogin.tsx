'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch('https://serverexpress1-production.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      if (response.ok) {
        const { token } = (await response.json()) as { token: string };
        if (token) {
          localStorage.setItem('token', token);
          router.push('/');
        }
      } else {
        console.error('Failed to log in', response);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      id="form-login"
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
          <input
            value={email}
            autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@domain.com"
            className="w-full"
            id="email"
            type="email"
          />
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
            <span className="font-materialSymbolsOutlined text-[16px]">lock_reset</span>
            <span>Reset my password</span>
          </button>
        </div>
        <input
          value={password}
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          id="password"
          type="password"
        />
      </div>
      <button
        className="mt-1.5 flex h-[45px] w-full items-center justify-center gap-[2px] rounded-[6px] bg-gradient-to-b from-[orange] to-[#b97b08] text-[16px] font-extrabold tracking-[1px] text-white transition hover:brightness-[118%]"
        type="submit"
      >
        <span>Login</span>
        <span className="font-materialSymbolsOutlined">login</span>
      </button>
    </form>
  );
};
export default FormLogin;

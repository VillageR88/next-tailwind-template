'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormLogin = ({ setLoading }: { setLoading: Dispatch<SetStateAction<boolean>> }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  async function handleSubmit() {
    setLoading(true);
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
    setLoading(false);
  }
  return (
    <form
      id="form-login"
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
      className="flex size-full flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <span className="font-materialSymbolsOutlined">email</span>
            <span>Email</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange] transition">
            <span className="font-materialSymbolsOutlined text-[16px]">person_add</span>
            <span className="group-hover:underline">Create new account</span>
          </button>
        </div>
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
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <span className="font-materialSymbolsOutlined">lock</span>
            <span>Password</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange] transition">
            <span className="font-materialSymbolsOutlined text-[16px]">lock_reset</span>
            <span className="group-hover:underline">Reset my password</span>
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
      <button className="button2 group size-full" type="submit">
        <div className="button2Inner">
          <span>Login</span>
          <span className="font-materialSymbolsOutlined">login</span>
        </div>
      </button>
    </form>
  );
};
export default FormLogin;

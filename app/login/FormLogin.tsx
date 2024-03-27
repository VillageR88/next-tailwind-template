'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormLogin = ({ setLoading }: { setLoading: Dispatch<SetStateAction<boolean>> }) => {
  const [email, setEmail] = useState<string>('');
  const [errorGlobal, setErrorGlobal] = useState<string>('');
  console.log(errorGlobal);
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
        localStorage.setItem('token', token);
        router.push('/');
      } else {
        setLoading(false);
        console.error('Failed to log in', response);
        setErrorGlobal('Check your email and password and try again.');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorGlobal('An error occurred. Try again later.');
    }
  }
  return (
    <form
      id="form-login"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex size-full flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <span className="font-materialSymbolsOutlined">email</span>
            <span>Email</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange]">
            <span className="font-materialSymbolsOutlined mt-[-2px] text-[16px]">person_add</span>
            <div className="flex flex-col">
              <span className="leading-[13px]">Create new account</span>
              <div className="h-[1px] w-full transition group-hover:bg-[orange]"></div>
            </div>
          </button>
        </div>
        <input
          required
          value={email}
          autoComplete="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="example@domain.com"
          className="w-full"
          id="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <span className="font-materialSymbolsOutlined">lock</span>
            <span>Password</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange]">
            <span className="font-materialSymbolsOutlined text-[16px]">lock_reset</span>
            <div className="flex flex-col">
              <span className="leading-[13px]">Reset my password</span>
              <div className="h-[1px] w-full transition group-hover:bg-[orange]"></div>
            </div>
          </button>
        </div>
        <input
          required
          minLength={8}
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
      <div className="flex flex-col">
        <button className="button2 group size-full" type="submit">
          <div className="button2Inner">
            <span>Login</span>
            <span className="font-materialSymbolsOutlined">login</span>
          </div>
        </button>
        <div className="flex justify-center h-0">
          <span className="mt-[12px] text-[#ff3333] text-sm">{errorGlobal}</span>
        </div>
      </div>
    </form>
  );
};
export default FormLogin;

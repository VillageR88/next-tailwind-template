'use client';

import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import FormLogin from './FormLogin';
import Logo from '../components/Logo';

export default function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-10 font-instrumentSans">
      {loading ? (
        <RotatingLines strokeColor="orange" />
      ) : (
        <div className="flex w-full max-w-[500px] flex-col items-center justify-between gap-3 ">
          <header className="flex w-full justify-start">
            <Logo />
          </header>
          <main className="mt-[10px] flex min-h-full w-full flex-col gap-[48px] rounded-[6px] border border-[#313131] bg-[#232323] px-8 pb-14 pt-10">
            <div className="flex h-full items-start">
              <h1 className="leading-[32px]">Login</h1>
            </div>
            <div className="size-full">
              <FormLogin setLoading={setLoading} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

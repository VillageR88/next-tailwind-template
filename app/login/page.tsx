'use client';
import Image from 'next/image';
import FormLogin from './FormLogin';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';

export default function Login() {
  const [loadingState, setLoadingState] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-[32px] font-instrumentSans sm:bg-[#FAFAFA]">
      {loadingState && <RotatingLines width="180" strokeColor="cornflowerblue" ariaLabel="loading" />}
      <div
        className={`${
          loadingState ? 'hidden' : 'flex'
        } flex h-[644px] w-full flex-col gap-[64px] sm:h-[573px] sm:w-[476px] sm:items-center sm:justify-between sm:gap-0`}
      >
        <Image
          className="self h-fit w-fit"
          width={10}
          height={10}
          src={'../public/assets/images/logo-devlinks-large.svg' as string}
          alt="devlinks logo"
          priority
        />
        <div className="flex h-[482px] w-full flex-col gap-[40px] rounded-[12px] bg-[white] sm:justify-between sm:gap-0 sm:px-[40px] sm:py-[40px] sm:pt-[32px]">
          <section className="flex h-[92px] w-full flex-col justify-between gap-[8px] sm:h-[80px]">
            <h1 className="headingM">Login</h1>
            <p className="bodyM text-[#737373]">Add your details below to get back into the app</p>
          </section>
          <FormLogin
            passLoadingState={(value) => {
              setLoadingState(value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

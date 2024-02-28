'use client';
import Image from 'next/image';
import FormCreateAccount from './FormCreateAccount';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';

export default function CreateAccount() {
  const [loadingState, setLoadingState] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-[32px] sm:bg-[#FAFAFA]">
      {loadingState && <RotatingLines width="180" strokeColor="cornflowerblue" ariaLabel="loading" />}
      <div
        className={`${
          loadingState ? 'hidden' : 'flex'
        } w-full flex-col justify-between gap-[64px] sm:h-[709px] sm:w-[476px] sm:items-center sm:gap-0`}
      >
        <Image
          className="h-fit w-fit"
          width={10}
          height={10}
          src={'../assets/images/logo-devlinks-large.svg' as string}
          alt="devlinks logo"
          priority
        />
        <div className="flex h-[550px] w-full flex-col justify-between rounded-[12px] bg-[white] sm:h-[618px] sm:px-[40px] sm:py-[40px]">
          <section className="flex h-[80px] w-full flex-col justify-between">
            <h1 className="headingM">Create account</h1>
            <p className="bodyM text-[#737373]">Let’s get you started sharing your links!</p>
          </section>
          <FormCreateAccount
            passLoadingState={(value) => {
              setLoadingState(value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

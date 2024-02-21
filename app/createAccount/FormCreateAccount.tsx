'use client';
import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Status from '../lib/email/enumStatus';
import status from '../lib/email/accessStatus';

const FormCreateAccount = () => {
  const router = useRouter();

  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<Status>(Status.Typing);
  const [passwordStatus, setPasswordStatus] = useState<Status>(Status.Typing);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //handleSubmit().catch((error) => {
        //  console.error('Failed to sign in:', error);
        //});
      }}
      onInvalid={(e) => {
        const value = e.target as HTMLInputElement;
        if (value.id === 'email') if (value.validity.valueMissing) setEmailStatus(Status.Empty);
        //else setEmailStatus(Status.CheckAgain);
        if (value.id === 'password') if (value.validity.valueMissing) setPasswordStatus(Status.Empty);
        //else setPasswordStatus(Status.CheckAgain);
      }}
      className="flex h-[418px] w-full flex-col justify-between"
    >
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="email">
          Email address
        </label>
        <div className="flex h-full w-full items-center">
          <Image
            className="z-10 ml-[1em] mr-[-2em] h-fit w-fit"
            src="/assets/images/icon-email.svg"
            alt="email"
            width={16}
            height={16}
          />
          <input
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            className={`${
              emailStatus !== Status.Typing && 'textFieldError'
            } textField bodyM h-full w-full pl-[44px] pr-[2em]`}
            placeholder="e.g. alex@email.com"
            type="email"
            name="email"
            id="email"
            aria-required="true"
            required
            onKeyDown={() => {
              setEmailStatus(Status.Typing);
              setPasswordStatus(Status.Typing);
            }}
          />
        </div>
        {emailStatus !== Status.Typing && (
          <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
            <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[emailStatus]}</span>
          </div>
        )}
      </div>
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="password">
          Create password
        </label>
        <div className="flex h-full w-full items-center">
          <Image
            className="z-10 ml-[1em] mr-[-2em] h-fit w-fit"
            src="/assets/images/icon-password.svg"
            alt="email"
            width={16}
            height={16}
          />
          <input
            value={passwordValue}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
            className={`${
              passwordStatus !== Status.Typing && 'textFieldError'
            } textField bodyM h-full w-full pl-[44px]`}
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            aria-required="true"
            required
            onKeyDown={() => {
              setPasswordStatus(Status.Typing);
            }}
          />
        </div>
        {passwordStatus !== Status.Typing && (
          <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
            <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[passwordStatus]}</span>
          </div>
        )}
      </div>
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="passwordConfirm">
          Confirm password
        </label>
        <input
          className={`textField h-full w-full bg-[url('../public/assets/images/icon-password.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]`}
          placeholder="At least 8 characters"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          aria-required="true"
          required
        />
      </div>
      <span className="bodyS text-[#737373]">Password must contain at least 8 characters</span>
      <button className="buttonPrimary headingS h-[46px] w-full text-white" type="submit">
        Create new account
      </button>
      <div className="bodyM flex justify-center gap-1">
        <span className="text-[#737373]">Already have an account?</span>
        <Link href={'/login'}>
          <span className="text-[#633CFF]">Login</span>
        </Link>
      </div>
    </form>
  );
};

export default FormCreateAccount;

'use client';
import { useState } from 'react';
import Link from 'next/link';

const FormLogin = () => {
  enum Status {
    Empty,
    CheckAgain,
    Typing,
  }
  const status = {
    [Status.Empty]: "Can't be empty",
    [Status.CheckAgain]: 'Please check again',
  };

  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<Status>(Status.Typing);
  const [passwordStatus, setPasswordStatus] = useState<Status>(Status.Typing);
  return (
    <form
      onInvalid={(e) => {
        const value = e.target as HTMLInputElement;
        if (value.id === 'email')
          if (value.validity.valueMissing) setEmailStatus(Status.Empty);
          else setEmailStatus(Status.CheckAgain);
        if (value.id === 'password')
          if (value.validity.valueMissing) setPasswordStatus(Status.Empty);
          else setPasswordStatus(Status.CheckAgain);
      }}
      className="flex h-[282px] w-full flex-col justify-between"
    >
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="email">
          Email address
        </label>
        <input
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          className={`${
            emailStatus !== Status.Typing && 'textFieldError'
          } textField bodyM h-full w-full bg-[url('../public/assets/images/icon-email.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px] pr-[2em]`}
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
        {emailStatus !== Status.Typing && (
          <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
            <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[emailStatus]}</span>
          </div>
        )}
      </div>
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="password">
          Password
        </label>
        <input
          value={passwordValue}
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          className={`${
            passwordStatus !== Status.Typing && 'textFieldError'
          } textField bodyM h-full w-full bg-[url('../public/assets/images/icon-password.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]`}
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
      <button className="buttonPrimary headingS h-[46px] w-full text-white" type="submit">
        Login
      </button>
      <div className="bodyM flex justify-center gap-1">
        <span className="text-[#737373]">Don&rsquo;t have an account?</span>
        <Link href={'/createAccount'}>
          <span className="text-[#633CFF]">Create account</span>
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;

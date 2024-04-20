'use client';

import IconLogin from '@/app/components/IconLogin';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { TButtonSubmit } from '@/app/lib/interfaces';
import { createMouseLoader, startMouseLoader, stopMouseLoader } from '../lib/functionsClient';

const submitButtonProps = {
  login: {
    title: 'Login',
    icon: <IconLogin />,
  },
  createAccount: {
    title: 'Create Account',
    icon: (
      <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
        <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
      </svg>
    ),
  },
  resetPassword: {
    title: 'Reset Password',
    icon: null,
  },
};

export default function ButtonSubmit({ type, state }: { type: TButtonSubmit; state?: string }) {
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      const mouseLoader = createMouseLoader();
      startMouseLoader({ mouseLoader: mouseLoader });
      return () => {
        stopMouseLoader({ mouseLoader: mouseLoader });
      };
    }
  }, [pending, type]);

  return (
    <div className="flex flex-col">
      <div>
        <button disabled={pending} className="button2 group size-full" type="submit">
          <div className="button2Inner gap-[2px]">
            <span>{submitButtonProps[type].title}</span>
            {submitButtonProps[type].icon}
          </div>
        </button>
      </div>
      <div className="flex h-0 justify-center">
        <span className="mt-[16px] px-1 text-sm font-semibold tracking-[-0.18px] text-[#ff3333] dark:font-normal dark:tracking-normal">
          {state}
        </span>
      </div>
    </div>
  );
}

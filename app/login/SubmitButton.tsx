'use client';

import IconLogin from '@/app/components/IconLogin';
import { useContext, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { DataContext } from '../_providers/DataContext';

enum ErrorType {
  failedLogin = 'Verify your email and password',
  errorOccurred = 'An error occurred. Try again later',
}

export default function SubmitButton() {
  const { setDataContext, setToken, initialDataContext } = useContext(DataContext);
  const [errorGlobal, setErrorGlobal] = useState<string>('');
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      const style = document.createElement('style');
      style.innerHTML = `* { cursor: wait}`;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
        setErrorGlobal(ErrorType.failedLogin);
      };
    }
  }, [initialDataContext, pending, setDataContext, setToken]);

  return (
    <div className="flex flex-col">
      <div>
        <button disabled={pending} className="button2 group size-full" type="submit">
          <div className="button2Inner gap-[2px]">
            <span>Login</span>
            <IconLogin />
          </div>
        </button>
      </div>
      <div className="flex h-0 justify-center">
        <span className="mt-[16px] px-1 text-sm font-semibold tracking-[-0.18px] text-[#ff3333] dark:font-normal dark:tracking-normal">
          {errorGlobal}
        </span>
      </div>
    </div>
  );
}

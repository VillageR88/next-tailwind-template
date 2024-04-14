'use client';

import IconLogin from '@/app/components/IconLogin';
import { useContext, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import checkToken from '../home/checkToken';
import checkData from '../home/checkData';
import { DataContext } from '../_providers/DataContext';
import { CollectionGroup } from '../lib/interfaces';
import { useRouter } from 'next/navigation';

enum ErrorType {
  failedLogin = 'Verify your email and password',
  errorOccurred = 'An error occurred. Try again later',
}

export default function SubmitButton() {
  const router = useRouter();
  const { setDataContext, setToken, setLoaded, initialDataContext } = useContext(DataContext);
  const [errorGlobal, setErrorGlobal] = useState<string>('');
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      const style = document.createElement('style');
      style.innerHTML = `* { cursor: wait}`;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
        void checkToken().then((e) => {
          if (e) {
            setToken(e);
            router.push('/');
            return e;
          } else setErrorGlobal(ErrorType.failedLogin);
        });
        checkData()
          .then((data) => {
            if (data) {
              setDataContext(JSON.parse(data) as CollectionGroup);
              initialDataContext.current = JSON.parse(data) as CollectionGroup;
              setLoaded(true);
            }
          })
          .catch((error) => {
            console.error(error);
            setErrorGlobal(ErrorType.errorOccurred);
          });
      };
    }
  }, [initialDataContext, pending, router, setDataContext, setLoaded, setToken]);

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

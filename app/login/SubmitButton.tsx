'use client';

import IconLogin from '@/app/components/IconLogin';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

enum ErrorType {
  failedLogin = 'Verify your email and password.',
  errorOccurred = 'An error occurred. Try again later',
}

export default function SubmitButton() {
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
  }, [pending]);

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
        <span className="mt-[16px] px-1 text-sm text-[#ff3333]">{errorGlobal}</span>
      </div>
    </div>
  );
}

'use client';

import IconLogin from '@/app/components/IconLogin';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      const style = document.createElement('style');
      style.innerHTML = `* { cursor: wait}`;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [pending]);

  return (
    <button disabled={pending} className="button2 group size-full" type="submit">
      <div className="button2Inner gap-[2px]">
        <span>Login</span>
        <IconLogin />
      </div>
    </button>
  );
}

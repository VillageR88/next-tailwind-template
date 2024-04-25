'use client';

import { createInvoiceResetPassword } from '../lib/functionsServer';
import ButtonSubmit from '../components/ButtonSubmit';
import ButtonLogin from '../components/ButtonLogin';
import { useFormState } from 'react-dom';
import ModuleEmail from '../components/ModuleEmail';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { Routes } from '../routes';

export default function FormLogin() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceResetPassword, { error: '' });
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (state.error === 'success') {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [state.error]);
  useEffect(() => {
    if (timer === 0) {
      redirect(Routes.home);
    }
  }, [timer]);

  if (state.error === 'success') {
    return (
      <div className="h-[60px] w-full flex-col items-stretch">
        <p className="flex w-full items-center justify-center ">Check your email for a link to reset your password</p>
        <p className="mt-[22px] flex size-full items-center justify-center text-center text-sm">
          {`site will close in ${timer} seconds`}
        </p>
      </div>
    );
  } else
    return (
      <form action={action} id="form-login" className="flex size-full flex-col gap-6">
        <ModuleEmail Button={ButtonLogin} />
        <ButtonSubmit state={state.error} type="resetPassword" />
      </form>
    );
}

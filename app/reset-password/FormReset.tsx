'use client';

import { createInvoiceResetPassword } from '../lib/functionsServer';
import ButtonSubmit from '../components/ButtonSubmit';
import ButtonLogin from '../components/ButtonLogin';
import { useFormState } from 'react-dom';
import ModuleEmail from '../components/ModuleEmail';

export default function FormLogin() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceResetPassword, { error: '' });

  if (state.error === 'success') {
    return (
      <div className="mt-[-15px] h-[80px] w-full flex-col items-stretch">
        <p className="w-full items-center justify-center">
          Please check your inbox for an email from <strong>responseserver1@gmail.com</strong> containing a link to
          reset your password. If you do not see the email, we recommend checking your spam folder.
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

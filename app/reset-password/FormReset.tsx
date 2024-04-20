'use client';

import { createInvoiceLogin } from '../lib/functionsServer';
import ButtonSubmit from '../components/ButtonSubmit';
import ButtonLogin from '../components/ButtonLogin';
import { useFormState } from 'react-dom';
import ModuleEmail from '../components/ModuleEmail';

export default function FormLogin() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceLogin, { error: '' });

  return (
    <form action={action} id="form-login" className="flex size-full flex-col gap-6">
      <ModuleEmail Button={ButtonLogin} />
      <ButtonSubmit state={state.error} type="resetPassword" />
    </form>
  );
}

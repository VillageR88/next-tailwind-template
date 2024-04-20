'use client';

import { createInvoiceLogin } from '../lib/functionsServer';
import ButtonSubmit from '../components/ButtonSubmit';
import ButtonCreateAccount from './ButtonCreateAccount';
import { useFormState } from 'react-dom';
import ModuleEmail from '../components/ModuleEmail';
import ModulePassword from '../components/ModulePassword';
import ButtonResetPassword from '@/app/components/ButtonResetPassword';

export default function FormLogin() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceLogin, { error: '' });

  return (
    <form action={action} id="form-login" className="flex size-full flex-col gap-6">
      <ModuleEmail Button={ButtonCreateAccount} />
      <ModulePassword Button={ButtonResetPassword} />
      <ButtonSubmit state={state.error} type="login" />
    </form>
  );
}

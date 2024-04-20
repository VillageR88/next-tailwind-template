'use client';
import { createInvoiceCreateEmail } from '../lib/functionsServer';
import SubmitButton from '../components/SubmitButton';
import { useFormState } from 'react-dom';
import ModuleEmail from '../components/ModuleEmail';
import ModulePassword from '../components/ModulePassword';
import ModulePasswordConfirm from '../components/ModulePasswordConfirm';
import ButtonLogin from '../components/ButtonLogin';

export default function FormCreateAccount() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceCreateEmail, { error: '' });
  return (
    <form action={action} id="form-createAccount" className="flex size-full flex-col gap-6">
      <ModuleEmail Button={ButtonLogin} />
      <ModulePassword />
      <ModulePasswordConfirm />
      <SubmitButton state={state.error} type="createAccount" />
    </form>
  );
}

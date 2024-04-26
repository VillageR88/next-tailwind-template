'use client';

import { createInvoiceReset } from '../../../lib/functionsServer';
import ButtonSubmit from '../../../components/ButtonSubmit';
import { useFormState } from 'react-dom';
import ModulePassword from '../../../components/ModulePassword';
import ModulePasswordConfirm from '@/app/components/ModulePasswordConfirm';

export default function FormReset() {
  let token: string;
  if (typeof window !== 'undefined') {
    token = window.location.pathname.split('/')[3];
  }

  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(
    (state, payload) => createInvoiceReset(state, payload, token),
    {
      error: '',
    },
  );

  return (
    <form action={action} id="form-login" className="flex size-full flex-col gap-6">
      <ModulePassword newPassword />
      <ModulePasswordConfirm />
      <ButtonSubmit state={state.error} type="resetPassword" />
    </form>
  );
}

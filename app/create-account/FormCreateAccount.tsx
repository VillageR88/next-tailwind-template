import { handleCreateAccount } from '../lib/functionsServer';
import { cookies } from 'next/headers';
import SubmitButton from '../components/SubmitButton';
import ButtonLogin from './ButtonLogin';
import { redirect } from 'next/navigation';
import { Routes } from '../routes';

export default function FormCreateAccount() {
  // eslint-disable-next-line @typescript-eslint/require-await
  async function createInvoice(formData: FormData) {
    'use server';

    const rawFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirm: formData.get('passwordConfirm'),
    };

    const cookieToken = await handleCreateAccount({
      email: rawFormData.email as string,
      password: rawFormData.password as string,
      passwordConfirm: rawFormData.passwordConfirm as string,
    })
      .then((e) => {
        console.log(e);
        if (e)
          if (e === 'unsuccessful') {
          } else {
            cookies().set({ name: 'token', value: e, httpOnly: true });
            return e;
          }
      })
      .catch((e) => {
        console.log(e);
        console.log('error occurred');
      });
    if (!cookieToken) return;
    redirect(Routes.home);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={createInvoice} id="form-login" className="flex size-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <svg
              className="transition dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <span>Email</span>
          </label>
          <ButtonLogin />
        </div>
        <input
          name="email"
          required
          autoComplete="email"
          placeholder="example@domain.com"
          className="regularInput transition"
          id="email"
          type="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <svg
              className="transition dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
            <span>Password</span>
          </label>
        </div>
        <input
          className="regularInput transition"
          name="password"
          required
          minLength={8}
          autoComplete="current-password"
          placeholder="Enter your password"
          id="password"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="passwordConfirm">
            <svg
              className="transition dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
            <span>Confirm</span>
          </label>
        </div>
        <input
          className="regularInput transition"
          name="passwordConfirm"
          required
          minLength={8}
          placeholder="Confirm your password"
          id="passwordConfirm"
          type="password"
        />
      </div>
      {<SubmitButton type="createAccount" />}
    </form>
  );
}

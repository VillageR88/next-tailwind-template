'use client';

import { createInvoiceLogin } from '../lib/functionsServer';
import SubmitButton from '../components/SubmitButton';
import ButtonCreateAccount from './ButtonCreateAccount';
import { useFormState } from 'react-dom';

export default function FormLogin() {
  interface ErrorMessage {
    error: string;
  }
  const [state, action] = useFormState<ErrorMessage, FormData>(createInvoiceLogin, { error: '' });

  return (
    <form action={action} id="form-login" className="flex size-full flex-col gap-6">
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
          <ButtonCreateAccount />
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
          <button
            type="button"
            className="group flex items-center gap-[6px] text-[14px] font-semibold tracking-[-0.19px] text-[darkorange] dark:font-normal dark:tracking-normal dark:text-[orange]"
          >
            <svg
              className="fill-[darkorange] dark:fill-[orange]"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 -960 960 960"
              width="18"
            >
              <path d="M520-120q-74 0-138.5-27.5T268-223l57-57q38 37 88 58.5T520-200q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198v7l73-73 57 56-170 170L30-490l57-56 73 74v-8q0-75 28.5-140.5t77-114q48.5-48.5 114-77T520-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T880-480q0 150-105 255T520-120Zm-80-200q-17 0-28.5-11.5T400-360v-120q0-17 11.5-28.5T440-520v-40q0-33 23.5-56.5T520-640q33 0 56.5 23.5T600-560v40q17 0 28.5 11.5T640-480v120q0 17-11.5 28.5T600-320H440Zm40-200h80v-40q0-17-11.5-28.5T520-600q-17 0-28.5 11.5T480-560v40Z" />
            </svg>
            <div className="flex flex-col">
              <span className="hidden leading-[13px] md:block">Reset my password</span>
              <span className="block leading-[1px] md:hidden">reset</span>
              <div className="h-[1px] w-full transition group-hover:bg-[darkorange] dark:group-hover:bg-[orange]"></div>
            </div>
          </button>
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
      <SubmitButton state={state.error} type="login" />
    </form>
  );
}

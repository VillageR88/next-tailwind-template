'use client';

import { useRouter } from 'next/navigation';
import { Routes } from '../routes';

const ButtonLogin = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(Routes.login);
      }}
      type="button"
      className="group flex items-center gap-[6px] text-[14px] font-semibold tracking-[-0.17px] text-[darkorange] dark:font-normal dark:tracking-normal dark:text-[orange]"
    >
      <svg
        className="fill-[darkorange] dark:fill-[orange]"
        xmlns="http://www.w3.org/2000/svg"
        height="18"
        viewBox="0 -960 960 960"
        width="18"
      >
        <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
      </svg>
      <div className="flex flex-col">
        <span className="hidden leading-[13px] md:block">Back to login</span>
        <span className="block leading-[13px] md:hidden">new account</span>
        <div className="h-[1px] w-full transition group-hover:bg-[darkorange] dark:group-hover:bg-[orange]"></div>
      </div>
    </button>
  );
};

export default ButtonLogin;

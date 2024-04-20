import Link from 'next/link';
import { Routes } from '../routes';

export default function ButtonResetPassword() {
  return (
    <Link href={Routes.resetPassword}>
      <button
        type="button"
        className="group flex items-center gap-[6px] text-[14px] font-semibold tracking-[-0.19px] text-[darkorange] active:cursor-wait dark:font-normal dark:tracking-normal dark:text-[orange]"
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
          <span className="block leading-[13px] md:hidden">reset</span>
          <div className="h-[1px] w-full transition group-hover:bg-[darkorange] dark:group-hover:bg-[orange]"></div>
        </div>
      </button>
    </Link>
  );
}

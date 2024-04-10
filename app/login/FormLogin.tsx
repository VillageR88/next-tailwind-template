import Image from 'next/image';
import imageEmail from '@/public/assets/images/mail_FILL0_wght400_GRAD0_opsz24.svg';
import imageLock from '@/public/assets/images/lock_FILL0_wght400_GRAD0_opsz24.svg';
import imagePersonAdd from '@/public/assets/images/person_add_FILL0_wght400_GRAD0_opsz24.svg';
import imageLockReset from '@/public/assets/images/lock_reset_FILL0_wght400_GRAD0_opsz24.svg';
import handleSubmit from './handleSubmit';
import IconLogin from '../components/IconLogin';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

enum ErrorType {
  failedLogin = 'Verify your email and password.',
  errorOccurred = 'An error occurred. Try again later',
}

async function createInvoice(formData: FormData) {
  'use server';
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  await handleSubmit({
    email: rawFormData.email as string,
    password: rawFormData.password as string,
  })
    .then((e) => {
      if (e)
        if (e === 'unsuccessful') {
        } else {
          cookies().set('token', e);
        }
    })
    .catch((e) => {
      console.log(e);
      console.log('error occurred');
    });

  redirect(`/`);
}

const SubmitButton = () => {
  return (
    <button className="button2 group size-full" type="submit">
      <div className="button2Inner gap-[2px]">
        <span>Login</span>
        <IconLogin />
      </div>
    </button>
  );
};

export default function FormLogin() {
  return (
    <form action={createInvoice} id="form-login" className="flex size-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <Image className="size-[18px]" width={18} height={18} src={imageEmail as string} alt="email" />
            <span>Email</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange]">
            <Image height={18} width={18} src={imagePersonAdd as string} alt="add account" />
            <div className="flex flex-col">
              <span className="hidden leading-[13px] md:block">Create new account</span>
              <span className="block leading-[13px] md:hidden">new account</span>
              <div className="h-[1px] w-full transition group-hover:bg-[orange]"></div>
            </div>
          </button>
        </div>
        <input
          name="email"
          required
          autoComplete="email"
          placeholder="example@domain.com"
          className="w-full"
          id="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <Image className="size-[18px]" width={18} height={18} src={imageLock as string} alt="password" />
            <span>Password</span>
          </label>
          <button type="button" className="group flex items-center gap-[6px] text-[14px] text-[orange]">
            <Image width={18} height={18} src={imageLockReset as string} alt="reset password" />
            <div className="flex flex-col">
              <span className="hidden leading-[13px] md:block">Reset my password</span>
              <span className="block leading-[1px] md:hidden">reset</span>
              <div className="h-[1px] w-full transition group-hover:bg-[orange]"></div>
            </div>
          </button>
        </div>
        <input
          name="password"
          required
          minLength={8}
          autoComplete="current-password"
          placeholder="Enter your password"
          id="password"
          type="password"
        />
      </div>
      <div className="flex flex-col">
        <SubmitButton />
        <div className="flex h-0 justify-center">
          {/*<span className="mt-[16px] px-1 text-sm text-[#ff3333]">{errorGlobal}</span>*/}
        </div>
      </div>
    </form>
  );
}

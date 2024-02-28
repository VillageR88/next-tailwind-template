'use client';
import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Status from '../lib/email/enumStatus';
import status from '../lib/email/accessStatus';
import Modal from '../components/Modal';

const FormCreateAccount = ({ passLoadingState }: { passLoadingState(arg0: boolean): void }) => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<Status>(Status.Typing);
  const [passwordStatus, setPasswordStatus] = useState<Status>(Status.Typing);
  const [passwordConfirmStatus, setPasswordConfirmStatus] = useState<Status>(Status.Typing);
  const [submit, setSubmit] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const refs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (passwordValue === passwordConfirmValue) {
      setPasswordConfirmStatus(Status.Typing);
    }
  }, [passwordValue, passwordConfirmValue]);
  useEffect(() => {
    if (submit) {
      const handleSubmit = async () => {
        if (
          passwordStatus === Status.Typing &&
          emailStatus === Status.Typing &&
          passwordConfirmStatus === Status.Typing
        )
          passLoadingState(true);
        {
          const { error } = await supabase.auth.signUp({
            email: emailValue,
            password: passwordValue,
          });

          if (!error) router.push('/main');
          else {
            setEmailStatus(Status.InvalidLoginCredentials);
            setPasswordStatus(Status.InvalidLoginCredentials);
            passLoadingState(false);
            console.error('error', error);
            setShowModal(true);
          }
        }
      };
      void handleSubmit();
      setSubmit(false);
    }
  }, [emailStatus, emailValue, passLoadingState, passwordConfirmStatus, passwordStatus, passwordValue, router, submit]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        refs.current.forEach((item) => {
          item.blur();
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} emailValue={emailValue} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (passwordValue.length < 8) setPasswordStatus(Status.CheckAgain);
          else if (passwordValue !== passwordConfirmValue) setPasswordConfirmStatus(Status.CheckAgain);
          else setSubmit(true);
        }}
        onInvalid={(e) => {
          const value = e.target as HTMLInputElement;
          if (value.id === 'email') if (value.validity.valueMissing) setEmailStatus(Status.Empty);
          if (value.id === 'password') if (value.validity.valueMissing) setPasswordStatus(Status.Empty);
        }}
        className="flex h-[418px] w-full flex-col justify-between"
      >
        <div className="flex h-[70px] flex-col justify-between gap-[4px]">
          <label className="bodyS h-[18px]" htmlFor="email">
            Email address
          </label>
          <div className="flex h-full w-full items-center">
            <Image
              className="z-10 ml-[1em] mr-[-2em] h-fit w-fit"
              src="/assets/images/icon-email.svg"
              alt="email"
              width={16}
              height={16}
            />
            <input
              ref={(el) => (el !== null ? (refs.current[0] = el) : null)}
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
              className={`${
                emailStatus !== Status.Typing && 'textFieldError'
              } textField bodyM h-full w-full pl-[44px] pr-[2em]`}
              placeholder="e.g. alex@email.com"
              type="email"
              name="email"
              id="email"
              aria-required="true"
              autoComplete="email"
              required
              onKeyDown={() => {
                setEmailStatus(Status.Typing);
                setPasswordStatus(Status.Typing);
              }}
            />
          </div>
          {emailStatus !== Status.Typing && (
            <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
              <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[emailStatus]}</span>
            </div>
          )}
        </div>
        <div className="flex h-[70px] flex-col justify-between gap-[4px]">
          <label className="bodyS h-[18px]" htmlFor="password">
            Create password
          </label>
          <div className="flex h-full w-full items-center">
            <Image
              className="z-10 ml-[1em] mr-[-2em] h-fit w-fit"
              src="/assets/images/icon-password.svg"
              alt="email"
              width={16}
              height={16}
            />
            <input
              ref={(el) => (el !== null ? (refs.current[1] = el) : null)}
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              className={`${
                passwordStatus !== Status.Typing && 'textFieldError'
              } textField bodyM h-full w-full pl-[44px]`}
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              aria-required="true"
              required
              onKeyDown={() => {
                setPasswordStatus(Status.Typing);
              }}
            />
          </div>
          {passwordStatus !== Status.Typing && (
            <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
              <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[passwordStatus]}</span>
            </div>
          )}
        </div>
        <div className="flex h-[70px] flex-col justify-between gap-[4px]">
          <label className="bodyS h-[18px]" htmlFor="passwordConfirm">
            Confirm password
          </label>
          <div className="flex h-full w-full items-center">
            <Image
              className="z-10 ml-[1em] mr-[-2em] h-fit w-fit"
              src="/assets/images/icon-password.svg"
              alt="email"
              width={16}
              height={16}
            />
            <input
              ref={(el) => (el !== null ? (refs.current[2] = el) : null)}
              value={passwordConfirmValue}
              onChange={(e) => {
                setPasswordConfirmValue(e.target.value);
              }}
              className={`${
                passwordConfirmStatus !== Status.Typing && 'textFieldError'
              } textField bodyM h-full w-full pl-[44px]`}
              placeholder="At least 8 characters"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              aria-required="true"
              required
              onKeyDown={() => {
                setPasswordConfirmStatus(Status.Typing);
              }}
            />
          </div>
          {passwordConfirmStatus !== Status.Typing && (
            <div className="pointer-events-none absolute z-10 mt-[2.15em] flex w-[24em] max-w-full justify-end">
              <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">{status[passwordConfirmStatus]}</span>
            </div>
          )}
        </div>
        <span className="bodyS text-[#737373]">Password must contain at least 8 characters</span>
        <button className="buttonPrimary headingS h-[46px] w-full text-white" type="submit">
          Create new account
        </button>
        <div className="bodyM flex justify-center gap-1">
          <span className="text-[#737373]">Already have an account?</span>
          <Link href={'/login'}>
            <span className="text-[#633CFF]">Login</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormCreateAccount;

'use client';
import Image from 'next/image';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect, useRef, useState } from 'react';
import Status from '../lib/email/enumStatus';
import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import status from '../lib/email/accessStatus';

export default function Login() {
  const refs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('');
  const [passwordStatus, setPasswordStatus] = useState<Status>(Status.Typing);
  const [passwordConfirmStatus, setPasswordConfirmStatus] = useState<Status>(Status.Typing);
  const [submit, setSubmit] = useState<boolean>(false);
  const handleSubmit = () => {
    if (passwordValue.length < 8) {
      setPasswordStatus(Status.CheckAgain);
    } else if (passwordValue !== passwordConfirmValue) {
      setPasswordConfirmStatus(Status.CheckAgain);
    } else {
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (submit) {
      console.log('submitNow');
      supabase.auth.onAuthStateChange(async (event) => {
        if (event == 'PASSWORD_RECOVERY') {
          setLoadingState(true);
          const newPassword = passwordValue;
          const { data, error } = await supabase.auth.updateUser({ password: newPassword });
          if (data.user) {
            alert('Password updated successfully!');
            router.push('/main');
          }
          if (error) {
            setPasswordStatus(Status.InvalidLoginCredentials);
            setLoadingState(false);
            alert('There was an error updating your password.');
          }
          setSubmit(false);
        }
      });
    }
  }, [passwordValue, router, submit]);
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA] font-instrumentSans">
      {loadingState && <RotatingLines width="180" strokeColor="cornflowerblue" ariaLabel="loading" />}
      <div
        className={`${loadingState ? 'hidden' : 'flex'} flex h-[573px] w-[476px] flex-col items-center justify-between`}
      >
        <Image
          className="h-fit w-fit"
          width={10}
          height={10}
          src={'../assets/images/logo-devlinks-large.svg' as string}
          alt="devlinks logo"
          priority
        />

        <div className="flex h-[482px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
          <section className="flex h-[80px] w-full flex-col justify-between">
            <h1 className="headingM">Password Recovery</h1>
            <p className="bodyM text-[#737373]">Please enter new password.</p>
          </section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('submit');
              handleSubmit();
            }}
            className="flex h-[282px] w-full flex-col justify-between"
          >
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
                  <span className="bodyS self-end bg-white px-2 py-1 text-[#FF3939]">
                    {status[passwordConfirmStatus]}
                  </span>
                </div>
              )}
            </div>
            <span className="bodyS text-[#737373]">Password must contain at least 8 characters</span>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="buttonPrimary headingS h-[46px] w-full"
              type="submit"
            >
              Change Password
            </button>
            <div className="bodyM flex justify-center gap-1"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

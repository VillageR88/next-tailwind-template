'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';

function SignUpForm({ onValidEmail }: { onValidEmail: (email: string) => void }) {
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  function checkEmail() {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setIsValidEmail(isValid);
    setIsTyping(false);

    if (isValid) {
      onValidEmail(email);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-2 pt-10 font-semibold tracking-tighter md:text-xs">
        <span>Email address</span>
        {isValidEmail === true && !isTyping && <span className="label flex text-green-700">Thank You!</span>}
        {isValidEmail === false && !isTyping && <span className="label flex text-tomato">Valid email required</span>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkEmail();
        }}
      >
        <div className="flex flex-col gap-6">
          <input
            onKeyUp={(e) => {
              e.key !== 'Enter' ? setIsTyping(true) : null;
            }}
            className="solid rounded-lg border px-6 py-4 hover:cursor-pointer hover:border-dark-slate-grey"
            type="text"
            name="emailInput"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="solid rounded-lg border bg-[#232742] from-[#FF5378] to-[#FF693E] px-6 py-4 text-white after:bg-white hover:bg-gradient-to-r"
            onClick={checkEmail}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Home() {
  const [navigation, changeStage] = useState<string>('stage2');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');

  function goTo2(email: string) {
    setSubscribedEmail(email);
    changeStage('stage2');
  }

  function goTo1() {
    changeStage('stage1');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {navigation === 'stage2' && (
        <div className="wrapper2 flex flex-col rounded-[2em] bg-white px-14 py-14 text-dark-slate-grey md:w-[32em]">
          <Image className="flex" src={iconSuccess as string} alt="icon" />
          <span className="pt-8 text-[1.2rem] font-bold leading-[1em] tracking-tighter md:text-[3.5rem]">
            Thanks for subscribing!
          </span>
          <span className="pb-10 pt-6">
            A confirmation email has been sent to{' '}
            <span className="pt-6 font-bold">{subscribedEmail || 'ash@loremcompany.com'}</span>. Please open it and
            click the button inside to confirm your subscription.
          </span>
          <button
            className="solid rounded-lg border bg-[#232742] from-[#FF5378] to-[#FF693E] px-6 py-4 text-white after:bg-white hover:bg-gradient-to-r"
            onClick={goTo1}
          >
            Dismiss message
          </button>
        </div>
      )}
      {navigation === 'stage1' && (
        <div className="wrapper1 flex flex-col-reverse rounded-[2em] bg-white pb-12 tracking-tight text-dark-slate-grey md:flex-row md:pb-6 md:pl-6 md:pr-6 md:pt-6">
          <div className="flex w-full flex-col pl-10 pr-14 md:w-[30em]">
            <span className="pt-16 text-[2.5rem] font-bold tracking-tighter md:text-[3.5rem]">Stay updated!</span>
            <span className="w-[20em] pt-4 font-medium md:w-full">
              Join 60,000+ product managers receiving monthly updates on:
            </span>
            <div className="flex gap-4 pt-4 font-medium">
              <Image className="" src={iconList as string} alt="icon of list" />
              <span>Product discovery and building what matters</span>
            </div>
            <div className="flex gap-4 pt-2 font-medium">
              <Image className="" src={iconList as string} alt="icon of list" />
              <span>Measuring to ensure updates are a success</span>
            </div>
            <div className="flex gap-4 pt-2 font-medium">
              <Image className="" src={iconList as string} alt="icon of list" />
              <span>And much more!</span>
            </div>
            <SignUpForm onValidEmail={goTo2} />
          </div>
          <Image className="hidden md:flex" src={illustrationDesktop as string} alt="illustration" />
          <Image
            className="flex w-screen self-center md:hidden"
            src={illustrationMobile as string}
            alt="illustration"
          />
        </div>
      )}
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import iconList from './assets/images/icon-list.svg';
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* wrapper */}
      <div className="flex flex-col-reverse rounded-3xl bg-white pb-12 tracking-tight text-dark-slate-grey md:flex-row md:pb-5 md:pr-5 md:pt-5">
        {/* column1 */}
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
          <div className="flex justify-between pb-2 pt-10 font-semibold tracking-tighter md:text-xs">
            <span>Email address</span>
            <span className="tom text-tomato">Valid email required</span>
          </div>

          <div className="flex flex-col gap-6">
            <input
              className="solid rounded-lg border px-6 py-4"
              type="text"
              name="emailInput"
              id="emailInput"
              placeholder="email@company.com"
            />
            <button className="solid rounded-lg border bg-[#232742] px-6 py-4 text-white">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        {/* column2 */}
        <Image className="hidden md:flex" src={illustrationDesktop as string} alt="illustration" />
        <Image className="flex w-screen self-center md:hidden" src={illustrationMobile as string} alt="illustration" />
      </div>
      {/* Add the SignUpForm component here */}
      <SignUpForm />
    </main>
  );
}

// SignUpForm component
function SignUpForm() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function isValidEmail(email: string) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  function handleSubmit() {
    if (isValidEmail(email)) {
      setErrorMessage('Thank you!');
    } else {
      setErrorMessage('Please provide a valid email address');
    }
  }

  return (
    <div>
      <div>
        <span>Email address</span>
        <span className="errorMessage text-tomato">{errorMessage || 'Valid email required'}</span>
      </div>
      <div>
        <input
          className="solid rounded-lg border px-6 py-4"
          type="text"
          name="emailInput"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="solid rounded-lg border bg-[#232742] px-6 py-4 text-white" onClick={handleSubmit}>
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}

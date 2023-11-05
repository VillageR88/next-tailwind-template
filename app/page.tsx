'use client';
import React, { useState } from 'react';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';

import Image from 'next/image';

enum isType {
  isName,
  isNumber,
}

const MyComponent = (
  placeholderText: string,
  width: string,
  maxInputLength: number,
  groupDigits: boolean,
  type: isType,
) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: string) => {
    const rawValue = type === isType.isNumber ? e.replace(/[^0-9]/g, '') : e.replace(/[^A-Za-z\s\-.'"]+/g, '');
    setInputValue(groupDigits ? formatWithSpaces(rawValue) : rawValue);
  };

  const formatWithSpaces = (value: string) => {
    const matches = value.match(new RegExp(/.{0,4}/g));
    if (matches) {
      return matches.join(' ').trim();
    } else {
      return '';
    }
  };

  const inputElement = (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
      className={`text-veryDarkViolet ${width} rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium text-veryDarkViolet placeholder-[#C8C4C9] outline-0 focus:border-violet-900`}
      maxLength={maxInputLength}
      placeholder={placeholderText}
    />
  );

  const elementsArray = [inputElement, inputValue];

  return elementsArray;
};

export default function Home() {
  const cardNumber = MyComponent('e.g. 1234 5678 9123 0000', 'w-full', 19, true, isType.isNumber);

  return (
    <main className="main flex min-h-screen max-w-full font-spaceGrotesk md:pb-[1.7em] md:pt-[1.72em]">
      {/* main wrapper */}
      <div className="flex max-h-full w-full flex-col gap-4 bg-white md:flex-row md:pr-8">
        {/* first column */}
        <div className="flex w-full justify-center bg-bgMainDesktop bg-cover md:w-1/2 md:bg-[length:30.2em_100%] md:bg-no-repeat">
          {/* first column wrapper */}
          <div className="flex h-full w-full flex-col items-center justify-center md:max-w-full md:gap-[2.3em]">
            {/* card1 */}
            <div className="flex h-[12em] w-full flex-col justify-around rounded-[0.8em] bg-bgCardFront bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:h-[15.5em] md:w-[27.9em] md:max-w-full xl:ml-[6em]">
              <Image
                className=" ml-8 flex h-auto w-[5em]"
                src={'./images/card-logo.svg' as string}
                alt="card logo"
                width={10}
                height={10}
              />
              <div className="space-y-[1.5em]">
                <div
                  className={`flex w-full justify-center gap-[2.5%] px-[1em] text-[1.75rem] text-white md:tracking-[0.12em]`}
                >
                  <span className="md:whitespace-nowrap">
                    {cardNumber[1] !== '' ? cardNumber[1] : '0000 0000 0000 0000'}
                  </span>
                </div>
                <div className="flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]">
                  <span>JANE APPLESEED</span>
                  <div>
                    <span>00</span>
                    <span>/</span>
                    <span>00</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex h-[12em] w-full items-center justify-end rounded-[0.8em] bg-bgCardBack bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:h-[15.5em] md:w-[27.9em] md:max-w-full xl:ml-[17em]">
              <span className="mb-1 mr-16 text-sm tracking-widest text-white">000</span>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] md:mr-[4em] md:w-1/2">
          <div className="flex">
            <form className="max-h-auto flex flex-col gap-[1.4em] ">
              <div>
                <label
                  className="mb-2 block text-[0.75rem] font-bold tracking-[0.1em] text-gray-700"
                  htmlFor="username"
                >
                  CARDHOLDER NAME
                </label>
                {MyComponent('e.g. Jane Appleseed', 'w-full', 40, false, isType.isName)[0]}
              </div>
              <div className="">
                <label className="mb-2 block text-[0.8rem] font-bold tracking-[0.1em] text-gray-700" htmlFor="username">
                  CARD NUMBER
                </label>
                {cardNumber[0]}
              </div>
              <div className="flex justify-between gap-5">
                <div>
                  <label
                    className="mb-2 block w-full text-[0.8rem] font-bold tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
                    htmlFor="username"
                  >
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex gap-[0.7em]">
                    {MyComponent('MM', 'w-[4.5em]', 2, false, isType.isNumber)[0]}
                    {MyComponent('YY', 'w-[4.5em]', 2, false, isType.isNumber)[0]}
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block w-full text-[0.8rem] font-bold tracking-[0.1em] text-gray-700"
                    htmlFor="username"
                  >
                    CVC
                  </label>
                  <div>{MyComponent('YY', 'w-[10.5em]', 3, false, isType.isNumber)[0]}</div>
                </div>
              </div>
              <button className="mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

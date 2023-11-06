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

enum entity {
  cardNumber = 'CARD NUMBER',
  cardOwner = 'CARDHOLDER NAME',
  cardMM = 'MM',
  cardYY = 'YY',
  cardCVC = 'CVC',
}

enum placeholder {
  JaneAppleseed = 'JANE APPLESEED',
  MM = 'MM',
  YY = 'YY',
  eg123Short = 'e.g. 123',
  eg123Long = '1234 5678 9123 0000',
  zerosShort = '00',
  zerosLong = '0000 0000 0000 0000',
  exp = 'EXP. DATE (MM/YY)',
}

enum contractualMdLength {
  _4n5 = 'md:w-[4.5em]',
  _10 = 'md:w-[10em]',
  full = 'md:w-full',
}

enum warning {
  blank = `Can't be blank`,
  incomplete = `Incomplete`,
  nameIncomplete = `Require First name (max 8 letters) and last name (max 11 letters)`,
}

const MyComponent = (
  idText: string,
  showStandardLabel: boolean,
  placeholderText: string,
  width: string,
  maxInputLength: number,
  groupDigits: boolean,
  type: isType,
) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: string) => {
    const rawValue = type === isType.isNumber ? e.replace(/[^0-9]/g, '') : e;
    setInputValue(groupDigits ? formatWithSpaces(rawValue) : rawValue);
  };

  const formatWithSpaces = (value: string) => {
    const matches =
      type === isType.isNumber
        ? value.match(new RegExp(/.{0,4}/g))
        : value.match(new RegExp(/(?! )[A-Za-z\-.'"]{1,8}(?![A-Za-z\-.'"]) {0,1}[A-Za-z\-.'"]{0,11}/));
    if (matches && type == isType.isNumber) {
      return matches.join(' ').trim();
    } else if (matches && type == isType.isName) return matches.join(' ');
    else {
      return '';
    }
  };

  function warningMessage() {
    if (inputValue == '') return warning.blank;
    else if (inputValue.length < maxInputLength && type === isType.isNumber) return warning.incomplete;
    else if (inputValue.length < maxInputLength && !inputValue.match(/ ./)) return warning.nameIncomplete;
    else return '';
  }

  const inputElement = (
    <div className="flex flex-col">
      <label
        className="mb-2 block w-full text-[0.8rem] font-bold tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
        htmlFor={idText}
      >
        {showStandardLabel ? idText : ''}
      </label>
      <input
        id={idText}
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        className={`flex w-full text-veryDarkViolet ${width} rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium text-veryDarkViolet placeholder-[#C8C4C9] outline-0 focus:border-violet-900`}
        maxLength={maxInputLength}
        placeholder={placeholderText}
      />
      <span className={`${'flex'} text-xs font-medium text-redInputErrors`}>{warningMessage()}</span>
    </div>
  );

  const elementsArray = [inputElement, inputValue];

  return elementsArray;
};

export default function Home() {
  const cardNumber = MyComponent(
    entity.cardNumber,
    true,
    placeholder.eg123Long,
    contractualMdLength.full,
    19,
    true,
    isType.isNumber,
  );
  const cardOwner = MyComponent(
    entity.cardOwner,
    true,
    placeholder.JaneAppleseed,
    contractualMdLength.full,
    24,
    true,
    isType.isName,
  );
  const cardMM = MyComponent(entity.cardMM, false, placeholder.MM, contractualMdLength._4n5, 2, false, isType.isNumber);
  const cardYY = MyComponent(entity.cardYY, false, placeholder.YY, contractualMdLength._4n5, 2, false, isType.isNumber);
  const cardCVC = MyComponent(
    entity.cardCVC,
    true,
    placeholder.eg123Short,
    contractualMdLength._10,
    3,
    false,
    isType.isNumber,
  );

  const [labelForEXP, switchLabelForEXP] = useState(entity.cardYY);
  function SwitchLabelForEXP() {
    switchLabelForEXP(labelForEXP === entity.cardYY ? entity.cardMM : entity.cardYY);
  }

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
                    {cardNumber[1] !== '' ? cardNumber[1] : placeholder.zerosLong}
                  </span>
                </div>
                <div className="flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]">
                  <span>
                    {typeof cardOwner[1] === 'string' && cardOwner[1] != ''
                      ? cardOwner[1].toUpperCase()
                      : placeholder.JaneAppleseed}
                  </span>
                  <div>
                    <span>{cardMM[1] !== '' ? cardMM[1] : placeholder.zerosShort}</span>
                    <span>/</span>
                    <span>{cardYY[1] !== '' ? cardYY[1] : placeholder.zerosShort}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex h-[12em] w-full items-center justify-end rounded-[0.8em] bg-bgCardBack bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:h-[15.5em] md:w-[27.9em] md:max-w-full xl:ml-[17em]">
              <span className="mb-1 mr-16 text-sm tracking-widest text-white">
                {cardCVC[1] !== '' ? cardCVC[1] : placeholder.zerosLong}
              </span>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] md:mr-[5.5em] md:w-1/2">
          <div className="flex">
            <form className="max-h-auto flex flex-col gap-[1.4em] ">
              <div>{cardOwner[0]}</div>
              <div className="">{cardNumber[0]}</div>
              <div className="flex justify-between gap-5">
                <div className="flex flex-col">
                  <label
                    onClick={SwitchLabelForEXP}
                    htmlFor={labelForEXP}
                    className="mb-2 mt-[0.60em] w-full text-[0.8rem] font-bold leading-[4px] tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
                  >
                    {placeholder.exp}
                  </label>
                  <div className="inline-flex space-x-3">
                    {cardMM[0]}
                    {cardYY[0]}
                  </div>
                </div>
                <div>
                  <div>{cardCVC[0]}</div>
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
('Swim away fugu fish! Swim awaaaayyyyy!');

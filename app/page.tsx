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
  isNumberMM,
  isNumberYY,
}

enum entity {
  cardNumber = 'CARD NUMBER',
  cardOwner = 'CARDHOLDER NAME',
  cardMM = 'MM',
  cardYY = 'YY',
  cardCVC = 'CVC',
}

enum placeholder {
  JaneAppleseedShort = 'JANE APPLESEED',
  JaneAppleseedLong = 'e.g. Jane Appleseed',
  MM = 'MM',
  YY = 'YY',
  eg123Short = 'e.g. 123',
  eg123Long = 'e.g. 1234 5678 9123 0000',
  zerosShort = '00',
  zerosMedium = '000',
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
  nameIncomplete = `Require first name (max 8 letters) and last name (max 11 letters)`,
}

enum borderStyleLayout {
  error = 'border-redInputErrors',
  normal = 'focus:border-violet-900',
  initial = 'border-current',
}

interface InputComponentProps {
  idText: string;
  showStandardLabel: boolean;
  placeholderText: string;
  width: string;
  maxInputLength: number;
  groupDigits: boolean;
  type: isType;
  onValueChange: (value: string) => void;
  justOnChange: () => void;
  showText: boolean;
  onWarningTextChange: (warningText: string) => void;
}

const InputComponent = ({
  idText,
  showStandardLabel,
  placeholderText,
  width,
  maxInputLength,
  groupDigits,
  type,
  onValueChange,
  justOnChange,
  showText,
  onWarningTextChange,
}: InputComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const warningText = warningMessage();
  const currentYear = new Date().getFullYear();

  const handleInputChange = (e: string) => {
    let rawValue =
      type === isType.isNumber || type === isType.isNumberMM || type === isType.isNumberYY
        ? e.replace(/[^0-9]/g, '')
        : e;
    type === isType.isNumberMM && (Number(rawValue) > 12 && (rawValue = '12'), rawValue === '00' && (rawValue = '01'));
    console.log(rawValue);
    type === isType.isNumberYY &&
      (rawValue.startsWith('0') || rawValue.startsWith('1')
        ? (rawValue = '23')
        : Number(rawValue) > 9 && Number(rawValue) < Number(currentYear.toString().slice(-2)) && (rawValue = '23'));
    const formattedValue = groupDigits ? formatWithSpaces(rawValue) : rawValue;
    setInputValue(formattedValue);
    onValueChange(formattedValue);
    justOnChange();
  };

  const formatWithSpaces = (value: string) => {
    const matches =
      type === isType.isNumber
        ? value.match(new RegExp(/.{0,4}/g))
        : value.match(new RegExp(/(?! )[A-Za-z\-.'"]{1,8}(?![A-Za-z\-.'"]) {0,1}[A-Za-z\-.'"]{0,11}/));
    if (matches && (type === isType.isNumber || type === isType.isNumberMM || type === isType.isNumberYY)) {
      return matches.join(' ').trim();
    } else if (matches && type == isType.isName) return matches.join(' ');
    else {
      return '';
    }
  };

  function warningMessage() {
    const text =
      inputValue === ''
        ? warning.blank
        : inputValue.length < maxInputLength &&
          (type === isType.isNumber || type === isType.isNumberMM || type === isType.isNumberYY)
        ? warning.incomplete
        : inputValue.length < maxInputLength && !inputValue.match(/ ./)
        ? warning.nameIncomplete
        : '';

    // (I leave this comment here Piotr because I would like to understand it later and the thing is I have no freakin' idea what is going on here...)
    //Check if onWarningTextChange is a function before calling it
    // (I have no idea why this 'if (typeof onWarningTextChange === 'function')' has to be added to make onWarningTextChange(text) actually be passed on)
    if (typeof onWarningTextChange === 'function') {
      onWarningTextChange(text);
    }
    return text;
  }

  return (
    <div className="flex flex-col">
      <label
        className="mb-2 block w-full pt-2 text-[0.8rem] font-bold tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
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
          warningMessage();
        }}
        className={`flex w-full ${width} ${
          showText && warningText !== '' ? borderStyleLayout.error : borderStyleLayout.normal
        } rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium text-veryDarkViolet placeholder-[#C8C4C9] outline-0 `}
        maxLength={maxInputLength}
        placeholder={placeholderText}
      />
      <span className="flex pt-2 text-xs font-medium text-redInputErrors">{showText ? warningText : ''}</span>
    </div>
  );
};

export default function Home() {
  const [ownerValue, setOwnerValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [mmValue, setMmValue] = useState('');
  const [yyValue, setYyValue] = useState('');
  const [cvcValue, setCvcValue] = useState('');
  const [ownerWarning, setOwnerWarning] = useState(false);
  const [numberWarning, setNumberWarning] = useState(false);
  const [mmWarning, setMmWarning] = useState(false);
  const [yyWarning, setYyWarning] = useState(false);
  const [cvcWarning, setCvcWarning] = useState(false);
  const [labelForEXP, switchLabelForEXP] = useState(entity.cardYY);
  const [submitted, setSubmitted] = useState(false);
  const [ownerWarningText, setOwnerWarningText] = useState('');
  const [numberWarningText, setNumberWarningText] = useState('');
  const [mmWarningText, setMmWarningText] = useState('');
  const [yyWarningText, setYyWarningText] = useState('');
  const [cvcWarningText, setCvcWarningText] = useState('');

  return (
    <main className="main flex h-full max-w-full font-spaceGrotesk md:min-h-screen md:pb-[1.7em] md:pt-[1.72em]">
      {/* main wrapper */}
      <div className="flex max-h-full w-full flex-col gap-4 bg-white md:flex-row md:pr-8">
        {/* first column */}
        <div className="flex h-[20em] w-full justify-center bg-bgMainDesktop bg-[length:100%_80%] bg-no-repeat md:h-full md:w-1/2 md:bg-[length:30.2em_100%] md:px-0">
          {/* first column wrapper */}
          <div className="mx-4 flex h-full w-full flex-col items-center justify-center md:mx-0 md:h-full md:max-w-full md:gap-[2.3em]">
            {/* card1 */}
            <div className="container absolute z-10 mb-7 mt-32 flex h-[10em] max-w-[19em] flex-col justify-around self-start rounded-[0.8em] bg-bgCardFront bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:relative md:mb-0 md:mt-0 md:h-[15.5em] md:w-[27.9em] md:max-w-full md:self-auto xl:ml-[6em]">
              <Image
                className=" ml-8 flex h-auto w-[3em] md:w-[5em]"
                src={'./images/card-logo.svg' as string}
                alt="card logo"
                width={10}
                height={10}
              />
              <div className="space-y-[0.5em] md:space-y-[1.5em]">
                <div className={`flex w-full justify-center gap-[2.5%] px-[1em] text-white md:tracking-[0.12em]`}>
                  <span className="text-[1.4rem] md:whitespace-nowrap md:text-[1.75rem]">
                    {numberValue != '' ? numberValue : placeholder.zerosLong}
                  </span>
                </div>
                <div className="flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]">
                  <span>{ownerValue != '' ? ownerValue.toUpperCase() : placeholder.JaneAppleseedShort}</span>
                  <div>
                    <span>{mmValue !== '' ? mmValue : placeholder.zerosShort}</span>
                    <span>/</span>
                    <span>{yyValue !== '' ? yyValue : placeholder.zerosShort}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="absolute mb-20 flex h-[10em] w-9/12 max-w-[19em] items-center justify-end self-end  rounded-[0.8em] bg-bgCardBack bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:relative md:mb-0 md:h-[15.5em] md:w-[27.9em] md:max-w-full md:self-auto xl:ml-[17em]">
              <span className="mt mb-1 mr-9 text-sm tracking-widest text-white md:mr-16">
                {cvcValue !== '' ? cvcValue : placeholder.zerosMedium}
              </span>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] px-6 md:mr-[5.5em] md:w-1/2">
          {!submitted ? (
            <form className="max-h-auto flex flex-col gap-3">
              <div>
                <InputComponent
                  idText={entity.cardOwner}
                  showStandardLabel={true}
                  placeholderText={placeholder.JaneAppleseedLong}
                  width={contractualMdLength.full}
                  maxInputLength={24}
                  groupDigits={true}
                  type={isType.isName}
                  onValueChange={setOwnerValue}
                  justOnChange={() => {
                    setOwnerWarning(false);
                  }}
                  showText={ownerWarning}
                  onWarningTextChange={setOwnerWarningText}
                />
              </div>
              <div className="">
                <InputComponent
                  idText={entity.cardNumber}
                  showStandardLabel={true}
                  placeholderText={placeholder.eg123Long}
                  width={contractualMdLength.full}
                  maxInputLength={19}
                  groupDigits={true}
                  type={isType.isNumber}
                  onValueChange={setNumberValue}
                  justOnChange={() => {
                    setNumberWarning(false);
                  }}
                  showText={numberWarning}
                  onWarningTextChange={setNumberWarningText}
                />
              </div>
              <div className="flex justify-between gap-5">
                <div className="flex flex-col">
                  <label
                    onClick={() => {
                      switchLabelForEXP(labelForEXP === entity.cardYY ? entity.cardMM : entity.cardYY);
                    }}
                    htmlFor={labelForEXP}
                    className="mt-[0.56em] w-full pt-2 text-[0.8rem] font-bold leading-[4px] tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
                  >
                    {placeholder.exp}
                  </label>
                  <div className="inline-flex space-x-3">
                    <div>
                      <InputComponent
                        idText={entity.cardMM}
                        showStandardLabel={false}
                        placeholderText={placeholder.MM}
                        width={contractualMdLength._4n5}
                        maxInputLength={2}
                        groupDigits={false}
                        type={isType.isNumberMM}
                        onValueChange={setMmValue}
                        justOnChange={() => {
                          setMmWarning(false);
                        }}
                        showText={mmWarning}
                        onWarningTextChange={setMmWarningText}
                      />
                    </div>
                    <div>
                      <InputComponent
                        idText={entity.cardYY}
                        showStandardLabel={false}
                        placeholderText={placeholder.YY}
                        width={contractualMdLength._4n5}
                        maxInputLength={2}
                        groupDigits={false}
                        type={isType.isNumberYY}
                        onValueChange={setYyValue}
                        justOnChange={() => {
                          setYyWarning(false);
                        }}
                        showText={yyWarning}
                        onWarningTextChange={setYyWarningText}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <InputComponent
                      idText={entity.cardCVC}
                      showStandardLabel={true}
                      placeholderText={placeholder.eg123Short}
                      width={contractualMdLength._10}
                      maxInputLength={3}
                      groupDigits={false}
                      type={isType.isNumber}
                      onValueChange={setCvcValue}
                      justOnChange={() => {
                        setCvcWarning(false);
                      }}
                      showText={cvcWarning}
                      onWarningTextChange={setCvcWarningText}
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOwnerWarning(true);
                  setNumberWarning(true);
                  setMmWarning(true);
                  setYyWarning(true);
                  setCvcWarning(true);
                  !ownerWarningText &&
                    !numberWarningText &&
                    !mmWarningText &&
                    !yyWarningText &&
                    !cvcWarningText &&
                    setSubmitted(true);
                }}
                className="mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white md:w-[21.6em]"
              >
                Confirm
              </button>
            </form>
          ) : (
            <form className="max-h-auto flex items-center gap-3 text-center">
              <div className="flex flex-col gap-y-2">
                <Image
                  className="flex h-auto w-[5em] self-center"
                  src={'./images/icon-complete.svg' as string}
                  alt="card logo"
                  width={10}
                  height={10}
                />
                <span className="mt-6 text-[1.8rem] font-medium  tracking-widest text-veryDarkViolet">THANK YOU!</span>
                <span className="mb-6 text-[1.1rem] font-medium text-darkGrayishViolet">
                  We&apos;ve added your card details
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setOwnerWarning(false);
                    setNumberWarning(false);
                    setMmWarning(false);
                    setYyWarning(false);
                    setCvcWarning(false);
                    setSubmitted(false);
                    setOwnerValue('');
                    setNumberValue('');
                    setMmValue('');
                    setYyValue('');
                    setCvcValue('');
                  }}
                  className="mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white md:w-[21.6em]"
                >
                  Continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

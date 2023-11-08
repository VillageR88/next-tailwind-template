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
  borderStyle: string;
  maxInputLength: number;
  groupDigits: boolean;
  type: isType;
  onValueChange: (value: string) => void;
}

const InputComponent = ({
  idText,
  showStandardLabel,
  placeholderText,
  width,
  borderStyle,
  maxInputLength,
  groupDigits,
  type,
  onValueChange,
}: InputComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: string) => {
    const rawValue = type === isType.isNumber ? e.replace(/[^0-9]/g, '') : e;
    const formattedValue = groupDigits ? formatWithSpaces(rawValue) : rawValue;
    setInputValue(formattedValue);
    onValueChange(formattedValue);
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
        }}
        className={`flex w-full ${width} ${borderStyle} rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium text-veryDarkViolet placeholder-[#C8C4C9] outline-0 `}
        maxLength={maxInputLength}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default function Home() {
  const [ownerValue, setOwnerValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [mmValue, setMMValue] = useState('');
  const [yyValue, setYYValue] = useState('');
  const [cvcValue, setCVCValue] = useState('');

  const ComponentOwner = (
    <InputComponent
      idText={entity.cardOwner}
      showStandardLabel={true}
      placeholderText={placeholder.JaneAppleseed}
      width={contractualMdLength.full}
      borderStyle={borderStyleLayout.normal}
      maxInputLength={24}
      groupDigits={true}
      type={isType.isName}
      onValueChange={setOwnerValue}
    />
  );

  const ComponentNumber = (
    <InputComponent
      idText={entity.cardNumber}
      showStandardLabel={true}
      placeholderText={placeholder.eg123Long}
      width={contractualMdLength.full}
      borderStyle={borderStyleLayout.normal}
      maxInputLength={19}
      groupDigits={true}
      type={isType.isNumber}
      onValueChange={setNumberValue}
    />
  );

  const ComponentCardMM = (
    <InputComponent
      idText={entity.cardMM}
      showStandardLabel={false}
      placeholderText={placeholder.MM}
      width={contractualMdLength._4n5}
      borderStyle={borderStyleLayout.normal}
      maxInputLength={2}
      groupDigits={false}
      type={isType.isNumber}
      onValueChange={setMMValue}
    />
  );

  const ComponentCardYY = (
    <InputComponent
      idText={entity.cardYY}
      showStandardLabel={false}
      placeholderText={placeholder.YY}
      width={contractualMdLength._4n5}
      borderStyle={borderStyleLayout.normal}
      maxInputLength={2}
      groupDigits={false}
      type={isType.isNumber}
      onValueChange={setYYValue}
    />
  );

  const ComponentCardCVC = (
    <InputComponent
      idText={entity.cardCVC}
      showStandardLabel={true}
      placeholderText={placeholder.eg123Short}
      width={contractualMdLength._10}
      borderStyle={borderStyleLayout.normal}
      maxInputLength={3}
      groupDigits={false}
      type={isType.isNumber}
      onValueChange={setCVCValue}
    />
  );

  const [labelForEXP, switchLabelForEXP] = useState(entity.cardYY);

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
                    {numberValue != '' ? numberValue : placeholder.zerosLong}
                  </span>
                </div>
                <div className="flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]">
                  <span>{ownerValue != '' ? ownerValue.toUpperCase() : placeholder.JaneAppleseed}</span>
                  <div>
                    <span>{mmValue !== '' ? mmValue : placeholder.zerosShort}</span>
                    <span>/</span>
                    <span>{yyValue !== '' ? yyValue : placeholder.zerosShort}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex h-[12em] w-full items-center justify-end rounded-[0.8em] bg-bgCardBack bg-[length:100%_100%] bg-no-repeat drop-shadow-2xl md:h-[15.5em] md:w-[27.9em] md:max-w-full xl:ml-[17em]">
              <span className="mb-1 mr-16 text-sm tracking-widest text-white">
                {cvcValue !== '' ? cvcValue : placeholder.zerosMedium}
              </span>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] md:mr-[5.5em] md:w-1/2">
          <div className="flex">
            <form className="max-h-auto flex flex-col gap-3">
              <div>
                {ComponentOwner}
                <span className="flex pt-2 text-xs font-medium text-redInputErrors">{}</span>
              </div>
              <div className="">
                {ComponentNumber}
                <span className="flex pt-2 text-xs font-medium text-redInputErrors">{}</span>
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
                      {ComponentCardMM}
                      <span className="flex pt-2 text-xs font-medium text-redInputErrors">{}</span>
                    </div>
                    <div>
                      {ComponentCardYY}
                      <span className="flex pt-2 text-xs font-medium text-redInputErrors">{}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {ComponentCardCVC}
                    <span className="flex pt-2 text-xs font-medium text-redInputErrors">{}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  null;
                }}
                className="mt-4 rounded-lg bg-veryDarkViolet py-[0.75em] text-[1.1rem] text-white"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

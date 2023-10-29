'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/800-italic.css';

export default function Home() {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [error1, setError1] = useState<string | null>('');
  const [error2, setError2] = useState<string | null>('');
  const [error3, setError3] = useState<string | null>('');
  const [hasErrors1, setToggle1] = useState<boolean>(false);
  const [hasErrors2, setToggle2] = useState<boolean>(false);
  const [hasErrors3, setToggle3] = useState<boolean>(false);

  const [difference, setDifference] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateDifference = () => {
    const dayValue = parseInt(day, 10);
    const monthValue = parseInt(month, 10);
    const yearValue = parseInt(year, 10);
    const errorField = 'This field is required';
    const errorNotPast = 'Must be in the past';
    const present = new Date();
    if (
      !isNaN(dayValue) &&
      !isNaN(monthValue) &&
      !isNaN(yearValue) &&
      present > new Date(yearValue, monthValue - 1, dayValue)
    ) {
      const yearDifference = yearValue - present.getFullYear();
      const monthDifference = monthValue - 1 - present.getMonth();
      const dayDifference = dayValue - present.getDate();
      setDifference({ years: -yearDifference, months: -monthDifference, days: -dayDifference });
      setToggle1(false);
      setToggle2(false);
      setToggle3(false);
      setError1('');
      setError2('');
      setError3('');
    }
    if (isNaN(dayValue)) {
      setError1(errorField);
      setToggle1(true);
    }
    if (isNaN(monthValue)) {
      setError2(errorField);
      setToggle2(true);
    }
    if (isNaN(yearValue)) {
      setError3(errorField);
      setToggle3(true);
    }
    if (present <= new Date(yearValue, monthValue - 1, dayValue)) {
      setError3(errorNotPast);
      setToggle1(true);
      setToggle2(true);
      setToggle3(true);
    }
  };

  function renderInput(
    placeholder: string,
    label: string,
    error: string,
    hasErrors: boolean,
    setValue: (parameter: string) => void,
    setError: (parameter: string | null) => void,
    setHasErrors: (parameter: boolean) => void,
  ) {
    return (
      <div className="flex flex-col gap-2">
        <label className={` ${hasErrors ? 'text-red-500' : 'text-smokeyGrey'} text-sm font-bold tracking-[0.2em]`}>
          {label}
        </label>
        <input
          className={`${
            hasErrors ? 'border-red-500' : ''
          } input h-14 w-24 rounded-lg border border-solid px-6 font-bold placeholder-grey [appearance:textfield] hover:cursor-pointer md:h-[2.4em] md:w-40 md:text-3xl [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
          type="number"
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            setError(e.target.textContent);
            setHasErrors(false);
          }}
        />
        <span className="text-sm font-light italic text-lightRed">{error}</span>
      </div>
    );
  }

  const years = 'years';
  const months = 'months';
  const days = 'days';
  const DD = 'DD';
  const MM = 'MM';
  const YYYY = 'YYYY';
  const YEAR = 'YEAR';
  const MONTH = 'MONTH';
  const DAY = 'DAY';

  function renderDifference(label: string, valueN: number | undefined) {
    return (
      <div className="flex gap-3">
        <span className={`text-${'#864CFF'}`}>{!hasErrors1 && !hasErrors2 && !hasErrors3 ? valueN : '- -'}</span>
        <span className="text-black">{label}</span>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center font-['Poppins']">
      <div className="flex max-w-full flex-col gap-6 rounded-t-3xl rounded-bl-3xl rounded-br-[12em] bg-white p-6 md:gap-1 md:p-14">
        <div className="flex gap-5 md:gap-8">
          {renderInput(DD, DAY, error1 ?? '', hasErrors1, setDay, setError1, setToggle1)}
          {renderInput(MM, MONTH, error2 ?? '', hasErrors2, setMonth, setError2, setToggle2)}
          {renderInput(YYYY, YEAR, error3 ?? '', hasErrors3, setYear, setError3, setToggle3)}
        </div>
        <div className="flex justify-between">
          <hr className="flex w-full self-center text-[#864CFF] md:w-[40em]"></hr>
          <Image
            className="h-auto w-14 rounded-full bg-[#864CFF] p-4 hover:cursor-pointer hover:bg-black md:w-24 md:p-6"
            src={iconArrow as string}
            alt="arrow image"
            onClick={calculateDifference}
          />
          <hr className="flex w-full self-center text-[#864CFF] md:hidden"></hr>
        </div>
        <div className="flex flex-col text-[3rem] font-[800] italic leading-[1.1em] text-[#864CFF] md:text-[6.5rem]">
          {renderDifference(years, difference?.years)}
          {renderDifference(months, difference?.months)}
          {renderDifference(days, difference?.days)}
        </div>
      </div>
    </main>
  );
}

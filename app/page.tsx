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

  const [difference, setDifference] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateDifference = () => {
    const dayValue = parseInt(day, 10);
    const monthValue = parseInt(month, 10);
    const yearValue = parseInt(year, 10);
    const errorField = 'This field is required';
    if (!isNaN(dayValue) && !isNaN(monthValue) && !isNaN(yearValue)) {
      const currentDate = new Date();
      const yearDifference = yearValue - currentDate.getFullYear();
      const monthDifference = monthValue - 1 - currentDate.getMonth();
      const dayDifference = dayValue - currentDate.getDate();
      setDifference({ years: yearDifference, months: monthDifference, days: dayDifference });
    } else {
      if (isNaN(dayValue)) {
        setError1(errorField);
        document.getElementsByClassName('input')[0].style.borderColor = ' red';
      }
      if (isNaN(monthValue)) {
        setError2(errorField);
        document.getElementsByClassName('input')[1].style.borderColor = ' red';
      }
      if (isNaN(yearValue)) {
        setError3(errorField);
        document.getElementsByClassName('input')[2].style.borderColor = ' red';
      }
    }
  };

  function renderInput(
    label: string,
    valueN: string,
    error: string,
    setValue: (parameter: string) => void,
    setError: (parameter: string | null) => void,
    placeholder: string,
  ) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold tracking-[0.2em] text-smokeyGrey">{label}</span>
        <input
          id="inputs"
          className="input h-14 w-24 rounded-lg border border-solid px-6 font-bold placeholder-grey [appearance:textfield] hover:cursor-pointer md:h-[2.4em] md:w-40 md:text-3xl [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          name={`${label}`}
          placeholder={placeholder}
          value={valueN}
          onChange={(e) => {
            setValue(e.target.value);
            setError(e.target.textContent);
          }}
        />
        <span className="text-sm font-light italic text-lightRed">{error}</span>
      </div>
    );
  }

  const years = 'years';
  const months = 'months';
  const days = 'days';
  const YEAR = 'YEAR';
  const MONTH = 'MONTH';
  const DAY = 'DAY';

  function renderDifference(label: string, valueN: number | undefined) {
    return (
      <div className="flex gap-3">
        <span className={`text-${'#864CFF'}`}>{valueN ?? '- -'}</span>
        <span className="text-black">{label}</span>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center font-['Poppins']">
      <div className="flex max-w-full flex-col gap-6 rounded-t-3xl rounded-bl-3xl rounded-br-[12em] bg-white p-6 md:gap-1 md:p-14">
        <div className="flex gap-5 md:gap-8">
          {renderInput(DAY, day, error1 ?? '', setDay, setError1, 'DD')}
          {renderInput(MONTH, month, error2 ?? '', setMonth, setError2, 'MM')}
          {renderInput(YEAR, year, error3 ?? '', setYear, setError3, 'YYYY')}
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

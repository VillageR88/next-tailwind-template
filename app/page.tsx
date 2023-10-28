'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800-italic.css';

export default function Home() {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [difference, setDifference] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateDifference = () => {
    if (day && month && year) {
      const inputDate = new Date(Number(year), Number(month) - 1, Number(day)); // Dodaj 1 do daty wejściowej
      const currentDate = new Date();

      const yearDifference = inputDate.getFullYear() - currentDate.getFullYear();
      const monthDifference = inputDate.getMonth() - currentDate.getMonth();
      const dayDifference = inputDate.getDate() - currentDate.getDate();

      setDifference({ years: -yearDifference, months: -monthDifference, days: -dayDifference });
    }
  };

  function renderInput(label: string, value: string, setValue: (value: string) => void, placeholder: string) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold tracking-[0.2em] text-smokeyGrey">{label}</span>
        <input
          className="h-14 w-24 rounded-lg border border-solid px-6 font-bold placeholder-grey hover:cursor-pointer md:h-[2.4em] md:w-40 md:text-3xl"
          type="text"
          name={`${label.toLowerCase()}Input`}
          id=""
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    );
  }

  function renderDifference(label: string, value: number | undefined) {
    return (
      <div className="flex gap-3">
        <span className={`text-${'#864CFF'}`}>{value ?? '- -'}</span>
        <span className="text-black">{label}</span>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center font-['Poppins']">
      <div className="flex max-w-full flex-col gap-6 rounded-t-3xl rounded-bl-3xl rounded-br-[12em] bg-white p-6 md:gap-1 md:p-14">
        <div className="flex gap-5 md:gap-8">
          {renderInput('DAY', day, setDay, 'DD')}
          {renderInput('MONTH', month, setMonth, 'MM')}
          {renderInput('YEAR', year, setYear, 'YYYY')}
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
          {renderDifference('years', difference?.years)}
          {renderDifference('months', difference?.months)}
          {renderDifference('days', difference?.days)}
        </div>
      </div>
    </main>
  );
}

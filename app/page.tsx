'use client';
import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import Image from 'next/image';
import { useState } from 'react';

const ShortBox = () => {
  const [dataJson, setDataJson] = useState<JSON>();
  const [dotFiller, setDotFiller] = useState<string>('#BBC0FF');
  const urlJson = './data.json';
  useState(() => {
    fetch(urlJson)
      .then((response) => response.json())
      .then((response) => {
        setDataJson(response as JSON);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  console.log(dataJson?.['0' as keyof JSON]);

  return (
    <div className="flex flex-col">
      <div className="bg-lightRedStudy mb-[-1em] inline-grid h-[3.8em] w-[16em] justify-end  overflow-hidden rounded rounded-t-[0.8em]">
        <Image
          className="mr-[1em] mt-[-0.7em]"
          src="./images/icon-work.svg"
          width="79"
          height="79"
          alt="work icon"
          priority
        />
      </div>
      <div
        className={`bg-darkBlue flex h-[12.5em] w-[16em] flex-col justify-center rounded-[0.8em] pl-7 pr-6 ${
          dotFiller === '#BBC0FF' && 'hover:bg-[#34397B]'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[1.1rem] font-[400] text-white">Work</span>
          <button
            onMouseEnter={() => {
              setDotFiller('white');
            }}
            onMouseLeave={() => {
              setDotFiller('#BBC0FF');
            }}
            className="p-2 hover:fill-white"
          >
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill={dotFiller}
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <span className="mt-4 text-[3.5rem] font-[300] text-white">32hrs</span>
        <span className="text-paleBlue text-[0.9em] font-[300]">Last Week - 36hrs</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <ShortBox />
    </main>
  );
}

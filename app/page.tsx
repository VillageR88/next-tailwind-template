'use client';
import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import Image from 'next/image';
import { useState } from 'react';

const ShortBox = ({ title, timeframes }: { title: string; timeframes: string }) => {
  const [dotFiller, setDotFiller] = useState<string>('#BBC0FF');
  return (
    <div className="flex flex-col">
      <div
        className={`${
          title === 'Work'
            ? 'bg-lightRedWork'
            : title === 'Play'
            ? 'bg-softBluePlay'
            : title === 'Study'
            ? 'bg-lightRedStudy'
            : title === 'Exercise'
            ? 'bg-limeGreenExercise'
            : title === 'Social'
            ? 'bg-violetSocial'
            : title === 'Self Care'
            ? 'bg-softOrangeSelfCare'
            : null
        } mb-[-1em] inline-grid h-[3.8em] md:w-[16em] justify-end overflow-hidden rounded rounded-t-[0.8em]`}
      >
        <Image
          className={`${
            title === 'Play' ? 'mt-[-0.4em]' : title === 'Exercise' ? 'mt-[0em]' : 'mt-[-0.7em]'
          } mr-[1em] h-auto w-auto`}
          src={`./images/icon-${title.replace(' ', '-')}.svg`}
          width="79"
          height="79"
          alt={`${title} icon`}
          priority
        />
      </div>
      <div
        className={`bg-darkBlue flex h-[12.5em] md:w-[16em] flex-col justify-center rounded-[0.8em] pl-7 pr-6 hover:cursor-pointer ${
          dotFiller === '#BBC0FF' && 'hover:bg-[#34397B]'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[1.1rem] font-[400] text-white">{title}</span>
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
        <span className="mt-4 text-[3.5rem] font-[300] text-white">{timeframes.current}hrs</span>
        <span className="text-paleBlue text-[0.9em] font-[300]">Last Week - {timeframes.previous}hrs</span>
      </div>
    </div>
  );
};

export default function Home() {
  const [dataJson, setDataJson] = useState<JSON>();
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
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <div className="gri w-full w-auto grid gap-[1.9em] md:grid-cols-4">
        <div className="md:col-span-1 grid ">
          <div className="z-10 flex h-[22.2em] flex-col justify-between rounded-[0.8em] bg-[#5746EA] px-8 pb-10 pt-9 leading-[3em]">
            <Image
              className="outline-3 rounded-full outline outline-white"
              src="./images/image-jeremy.png"
              width="78"
              height="78"
              alt={`Photo of user`}
              priority
            />
            <div className="flex flex-col">
              <span className="text-paleBlue text-[0.9rem] leading-[1.6em]">Report for</span>
              <span className="whitespace-break-spaces text-[2.5rem] font-[300] text-white">{'Jeremy\nRobson'}</span>
            </div>
            <span></span>
          </div>
          <div className="bg-darkBlue text-desaturatedBlue mt-[-2em] flex h-[11.3em] flex-col justify-center gap-4 rounded-[0.8em] px-8 pt-[2em] text-[1.1rem]">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
        </div>
        <div className="md:col-span-3 grid gap-[1.9em] md:grid-cols-3">
          {dataJson?.map((item, index) => (
            <ShortBox key={index} title={item.title} timeframes={item.timeframes.weekly} />
          ))}
        </div>
      </div>
    </main>
  );
}

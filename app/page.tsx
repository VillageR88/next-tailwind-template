'use client';
import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import Image from 'next/image';
import { useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

interface Items {
  title: string;
  timeframes: TimeFrames;
}
interface TimeFrames {
  current: number;
  previous: number;
}

const ShortBox = ({ title, timeframes }: Items) => {
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
        } mb-[-1em] inline-grid h-[3.8em] justify-end overflow-hidden rounded rounded-t-[0.8em] md:w-[16em]`}
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
        className={`bg-darkBlue flex h-[12.5em] flex-col justify-center rounded-[0.8em] pl-7 pr-6 hover:cursor-pointer md:w-[16em] ${
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
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <span className="text-[3.5rem] font-[300] text-white md:mt-4">{timeframes.current}hrs</span>
          <span className="text-paleBlue text-[0.9em] font-[300]">Last Week - {timeframes.previous}hrs</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  enum buttonsCol1Selection {
    button1 = 'daily',
    button2 = 'weekly',
    button3 = 'monthly',
  }
  const [buttonCol1, setButtonCol1] = useState<buttonsCol1Selection>(buttonsCol1Selection.button2);
  const [dataJson, setDataJson] = useState<Items[]>();
  const urlJson = './data.json';
  useState(() => {
    fetch(urlJson)
      .then((response) => response.json())
      .then((response) => {
        setDataJson(response as Items[]);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      {dataJson ? (
        <div className="grid w-full gap-[1.9em] p-4 py-8 md:w-auto md:grid-cols-1 md:px-4 lg:grid-cols-4 lg:pr-8">
          <div className="grid md:col-span-1 ">
            <div className="z-10 flex flex-row items-center justify-evenly rounded-[0.8em] bg-[#5746EA] pb-10 pt-9 leading-[3em] md:px-8 lg:h-[22.2em] lg:flex-col lg:items-start lg:justify-between">
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
                <span className="text-[1.8rem] font-[300] text-white md:text-[2.5rem] lg:whitespace-break-spaces">
                  {'Jeremy\nRobson'}
                </span>
              </div>
              <span></span>
            </div>
            <div className="bg-darkBlue mt-[-2em] flex h-[6em] flex-row justify-evenly gap-4 rounded-[0.8em] px-8 pt-[2em] text-[1.1rem] lg:h-[11.3em] lg:flex-col lg:justify-center">
              <button
                onClick={() => {
                  setButtonCol1(buttonsCol1Selection.button1);
                }}
                className={`w-fit hover:text-white ${
                  buttonCol1 === buttonsCol1Selection.button1 ? 'text-white' : 'text-desaturatedBlue'
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => {
                  setButtonCol1(buttonsCol1Selection.button2);
                }}
                className={`w-fit hover:text-white ${
                  buttonCol1 === buttonsCol1Selection.button2 ? 'text-white' : 'text-desaturatedBlue'
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => {
                  setButtonCol1(buttonsCol1Selection.button3);
                }}
                className={`w-fit hover:text-white ${
                  buttonCol1 === buttonsCol1Selection.button3 ? 'text-white' : 'text-desaturatedBlue'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="grid gap-[1.9em] md:col-span-1 md:grid-cols-3 lg:col-span-3">
            {dataJson.map((item, index) => (
              <ShortBox key={index} title={item.title} timeframes={item.timeframes[buttonCol1 as keyof undefined]} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      )}
    </main>
  );
}

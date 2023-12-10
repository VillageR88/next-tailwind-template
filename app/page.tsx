'use client';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import { useState } from 'react';

export default function Home() {
  const [annually, setAnnually] = useState<boolean>(false);
  return (
    <main className="flex h-screen flex-col items-center justify-center font-montserrat font-[700]">
      <div className="h-[53.125em] w-full bg-veryLightGrayishBlue">
        <div className="h-full w-full bg-[url('./images/bg-top.svg')] bg-right-top bg-no-repeat ">
          <div className="flex h-full w-full flex-col items-center bg-[url('./images/bg-bottom.svg')] bg-left-bottom bg-no-repeat ">
            <span className="mt-[2.1em] text-[2rem] text-grayishBlue">Our Pricing</span>
            <div className="mt-[2.5em] flex flex-row items-center gap-[1.6em] text-[0.92rem] text-lightGrayishBlue">
              <span>Annually</span>
              <button
                onClick={() => {
                  setAnnually(!annually);
                }}
                className="flex h-[2.15em] w-[3.8em] items-center justify-end rounded-[2em] bg-gradient-to-r from-linearGradient1 to-linearGradient2"
              >
                <div
                  className={`${
                    annually && '-translate-x-6'
                  } mr-1 h-[1.65em] w-[1.65em] rounded-full bg-white duration-300`}
                ></div>
              </button>
              <span>Monthly</span>
            </div>
            <div className="mt-[4em] flex h-[31.2em] w-[21.9em] justify-center rounded-[0.6em] bg-gradient-to-br from-linearGradient1 to-linearGradient2">
              <div className="mt-[3.35em] flex h-full w-full flex-col items-center px-[1.95em]">
                <span className="text-[1.13rem] text-veryLightGrayishBlue">Professional</span>
                <div className="mt-[0.4em] flex items-center gap-[0.5em] text-veryLightGrayishBlue">
                  <span className="text-[2.5rem]">$</span>
                  <span className="text-[4.45rem] tracking-[-0.025em]">24.99</span>
                </div>
                <div className="mt-[0.95em] h-[1px] w-full bg-gradient-to-r from-indigo-300 to-[#969CF4]"></div>
                <span className="mt-[0.95em] text-[0.93rem] text-veryLightGrayishBlue">1 TB Storage</span>
                <div className="mt-[0.95em] h-[1px] w-full bg-gradient-to-r from-indigo-300 to-[#969CF4]"></div>
                <span className="mt-[0.95em] text-[0.93rem] text-veryLightGrayishBlue">5 Users Allowed</span>
                <div className="mt-[0.95em] h-[1px] w-full bg-gradient-to-r from-indigo-300 to-[#969CF4]"></div>
                <span className="mt-[0.95em] text-[0.93rem] text-veryLightGrayishBlue">Send up to 10 GB</span>
                <div className="mt-[0.95em] h-[1px] w-full bg-gradient-to-r from-indigo-300 to-[#969CF4]"></div>
                <button className="mt-[2.6em] h-[3.4em] w-full rounded-[0.4em] bg-white text-[0.8rem] text-linearGradient2 tracking-[0.12em]">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

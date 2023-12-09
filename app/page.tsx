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
                  className={`${annually && '-translate-x-6'} mr-1 h-[1.65em] w-[1.65em] rounded-full bg-white`}
                ></div>
              </button>
              <span>Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

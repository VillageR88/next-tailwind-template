'use client';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(1);
  const [calc, setCalc] = useState<number>(0);
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-leagueSpartan">
      <div className="flex h-[56.25em] w-full flex-col items-center bg-[#3B4664]">
        <div className="flex w-[33.7em] flex-col pt-[5.9em]">
          <div className="flex w-full justify-between">
            <div className="mt-2">
              <span className="absolute pl-[0.2em] text-[1.9rem] text-white">calc</span>
            </div>
            <div className="flex items-end gap-[1.7em]">
              <span className="mb-[0.2em] flex text-[0.75rem] tracking-widest text-white">THEME</span>
              <div>
                <div className="font flex w-full justify-between px-[0.7em] text-[0.85rem] text-white">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <div className="flex h-[1.6em] w-[4.4em] justify-between rounded-full bg-[#252D44]">
                  <div
                    className={`${
                      theme === 1 ? '-translate-x-[1.3em]' : theme === 2 ? 'translate-x-0' : 'translate-x-[1.5em]'
                    } absolute ml-0.5 mt-0.5 flex h-[1.4em] w-[4em] items-center justify-center bg-transparent transition duration-300`}
                  >
                    <div className="h-[1em] w-[1em] rounded-full bg-[#D43D31]"></div>
                  </div>
                  <button
                    onClick={() => {
                      setTheme(1);
                    }}
                    className="z-10 h-full w-full rounded-full bg-transparent"
                  ></button>
                  <button
                    onClick={() => {
                      setTheme(2);
                    }}
                    className="z-10 h-full w-full rounded-full bg-transparent"
                  ></button>
                  <button
                    onClick={() => {
                      setTheme(3);
                    }}
                    className="z-10 h-full w-full rounded-full bg-transparent"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[2em] flex h-[8em] w-full items-center justify-end rounded-[0.6em] bg-[#181F32] pr-[2em] pt-[0.2em]">
            <span className="text-[3.4rem] text-white">{calc.toLocaleString('en-US')}</span>
          </div>
          <div className="col-span-1 mt-[1.5em] grid h-[30em] grid-cols-4 gap-x-[1.55em] rounded-[0.6em] bg-[#252D44] pb-[0.45em] pl-[1.85em] pr-[2em]  pt-[2em]">
            {['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='].map(
              (x, i) => (
                <button
                  key={i}
                  className={`${(i === 16 || i === 17) && 'col-span-2'} ${
                    i === 3 || i === 16 ? 'bg-[#424E6E]' : i === 17 ? 'bg-[#8F2316]' : 'bg-[#B6A499]'
                  } flex h-[4em] flex-col rounded-[0.6em] `}
                >
                  <div
                    className={`${
                      i === 3 || i === 16 ? 'bg-[#647299]' : i === 17 ? 'bg-[#D13F30]' : 'bg-[#EAE3DB]'
                    } flex h-[94%] w-full flex-col items-center justify-center rounded-[0.6em] `}
                  >
                    <span
                      className={`${
                        i === 3 || i === 16 || i === 17 ? 'text-[1.7rem] text-white' : 'text-[2.5rem] text-[#43495A]'
                      } pt-[0.2em]`}
                    >
                      {x}
                    </span>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

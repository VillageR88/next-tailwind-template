'use client';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(1);
  return (
    <main className="font-leagueSpartan flex max-h-screen min-h-screen w-full flex-col items-center justify-center">
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
                      theme === 1 ? '-translate-x-[1.3em]' : theme === 2 ? 'translate-x-0' : 'translate-x-[1.3em]'
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
          <div className="mt-[2em] h-[8em] w-full rounded-[0.6em] bg-[#181F32]"></div>
          <div className="mt-[1.5em] h-[30em] rounded-[0.6em] bg-[#252D44]"></div>
        </div>
      </div>
    </main>
  );
}

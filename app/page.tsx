'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [navHover, setNavHover] = useState<string | null>(null);
  return (
    <div className="font-publicSans flex min-h-screen flex-col items-center justify-center">
      <nav className="flex h-[5em] w-full items-center justify-between bg-[white] px-[10.3em]">
        <Image className="mt-[0.2em]" src={'images/logo.svg'} alt="logo" height={140} width={140} priority />
        <ul className="ml-[1em] flex h-full gap-[1.3em]  pt-[1.8em]">
          {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((x) => (
            <div key={x} className="flex h-full flex-col justify-between">
              <button
                onMouseEnter={() => {
                  setNavHover(x);
                }}
                onMouseLeave={() => {
                  setNavHover(null);
                }}
                className={`${
                  x === 'Blog' || x === 'Careers' ? 'pt-[0.1em] text-[0.95rem]' : 'text-[0.9rem]'
                } tracking-tighter text-[hsl(233,8%,62%)] hover:text-[hsl(233,26%,24%)]`}
              >
                {x}
              </button>
              <div
                className={`${
                  x === navHover ? 'visible' : 'invisible'
                } h-[0.22em] w-[3.2em] bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)]`}
              ></div>
            </div>
          ))}
        </ul>
        <button className="rounded-[2em] bg-slate-200 bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] px-[2.35em] py-[0.8em] text-[0.9rem] text-[white] hover:opacity-65">
          Request Invite
        </button>
      </nav>
      <div className="h-[100em] w-full bg-[#FAFAFA]"></div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [navHover, setNavHover] = useState<number | null>(null);
  return (
    <div className="font-publicSans flex min-h-screen flex-col items-center justify-center">
      <nav className="flex h-[5em] w-full items-center justify-between bg-[white] px-[10.3em]">
        <Image className="mt-[0.2em]" src={'images/logo.svg'} alt="logo" height={140} width={140} priority />
        <ul className="ml-[1em] flex h-full gap-[1.3em]  pt-[1.8em]">
          {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((x, i) => (
            <div key={i} className="flex h-full flex-col justify-between">
              <button
                onMouseEnter={() => {
                  setNavHover(i);
                }}
                onMouseLeave={() => {
                  setNavHover(null);
                }}
                className="text-[0.9rem] tracking-tighter text-[hsl(233,8%,62%)]"
              >
                {x}
              </button>
              <div
                className={`${
                  i === navHover ? 'visible' : 'invisible'
                } h-[0.22em] w-[3.2em] bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)]`}
              ></div>
            </div>
          ))}
        </ul>
        <button className="rounded-[2em] bg-slate-200 bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] px-[2.35em] py-[0.8em] text-[0.9rem] text-[white]">
          Request Invite
        </button>
      </nav>
      <div className="h-[100em] w-full bg-[#FAFAFA]"></div>
    </div>
  );
}

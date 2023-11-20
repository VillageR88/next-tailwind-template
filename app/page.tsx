'use client';
import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import logo from './images/logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="grid h-full w-full grid-cols-2 justify-center">
        <div className="bg-header col-span-2 h-[50em] bg-cover  bg-top ">
          {' '}
          <Image src={logo as string} alt="logo" />
        </div>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
      </div>
    </main>
  );
}

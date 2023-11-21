'use client';
import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import logo from './images/logo.svg';
import Image from 'next/image';

const buttonLayout1 = 'text-white text-[1.1rem] font-barlow font-[600]';

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="col-span-2 flex h-[50em] items-start  bg-header bg-cover bg-top">
        <div className="flex w-full items-center justify-between px-2 pt-9 md:mx-0 md:pl-10 md:pr-12">
          <Image src={logo as string} alt="logo" className="h-auto w-[10.5em]" />
          <div className="flex gap-2 md:gap-12 ">
            <button className={buttonLayout1}>About</button>
            <button className={buttonLayout1}>Services</button>
            <button className={buttonLayout1}>Projects</button>
            <button className="rounded-[2em] bg-white px-7 py-4 font-fraunces font-[700]">CONTACT</button>
          </div>
        </div>
      </nav>
      <main className="md:grid md:grid-cols-2">
        <div className="bg-white">
          <span>TEST</span>
        </div>
        <div className="bg-yellow">
          <span>TEST</span>
        </div>
      </main>
    </div>
  );
}

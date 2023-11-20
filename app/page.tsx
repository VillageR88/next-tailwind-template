'use client';
import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import logo from './images/logo.svg';
import Image from 'next/image';
const buttonLayout1 = '';

export default function Home() {
  return (
    <div className="items-top grid min-h-screen grid-cols-2 flex-col justify-center">
      <nav className="bg-header col-span-2 flex h-[50em] items-start justify-between bg-cover bg-top pl-6 pr-10 pt-6">
        <Image src={logo as string} alt="logo" className="" />
        <div className="flex gap-4 ">
          <button className={buttonLayout1}>About</button>
          <button className={buttonLayout1}>Services</button>
          <button className={buttonLayout1}>Projects</button>
          <button className={buttonLayout1}>CONTACT</button>
        </div>
      </nav>
      <main>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
      </main>
    </div>
  );
}

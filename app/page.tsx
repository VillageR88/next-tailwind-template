'use client';
import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import logo from './images/logo.svg';
import arrowDown from './images/icon-arrow-down.svg';
import Image from 'next/image';
import { useState } from 'react';
//bg-[#FFD9D3] ; #FFFBF8
const buttonLayout1 = 'text-white text-[1.1rem] font-barlow font-[600]';
const textArticleHeader =
  'flex h-[35em] flex-col items-start justify-center gap-[2em] bg-[#FFFBF8] md:px-[5em] lg:pl-[10.5em] lg:pr-[7em]';
const textArticleMain = 'font-barlow text-[1.1rem] font-[600] text-[#8D8C90]';

const HeaderButton = ({ bgNormal, bgHover }: { bgNormal: string; bgHover: string }) => {
  const [hoverOnButton, setHoverOnButton] = useState<boolean>(false);
  return (
    <div>
      <button
        onMouseEnter={() => {
          setHoverOnButton(true);
        }}
        onMouseLeave={() => {
          setHoverOnButton(false);
        }}
        className="rounded-[2em] font-fraunces font-[900] text-veryDarkDesaturatedBlue"
      >
        <span>LEARN MORE</span>
      </button>
      <div
        className={`z-10 mx-[-0.3em] mt-[-0.58em] h-1/2 rounded-[1em] ${!hoverOnButton ? bgNormal : bgHover} py-1`}
      ></div>
    </div>
  );
};

const Article = ({
  headerText,
  mainText,
  normalButtonBg,
  hoverButtonBg,
}: {
  headerText: string;
  mainText: string;
  normalButtonBg: string;
  hoverButtonBg: string;
}) => {
  return (
    <div className={textArticleHeader}>
      <span className="font-fraunces text-[2.5rem] font-[900] leading-[1.2em] text-veryDarkDesaturatedBlue">
        {headerText}
      </span>
      <span className={textArticleMain}>{mainText}</span>
      <HeaderButton bgNormal={normalButtonBg} bgHover={hoverButtonBg} />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="col-span-2 flex h-[50em] flex-col items-center gap-[6em] bg-header bg-cover bg-top">
        <div className="flex w-full items-center  justify-between px-2 pt-9 md:mx-0 md:pl-10 md:pr-12">
          <Image src={logo as string} alt="logo" className="h-auto w-[10.5em]" />
          <div className="flex gap-2 md:gap-12 ">
            <button className={buttonLayout1}>About</button>
            <button className={buttonLayout1}>Services</button>
            <button className={buttonLayout1}>Projects</button>
            <button className="rounded-[2em] bg-white px-7 py-4 font-fraunces font-[700]">CONTACT</button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1.54em] font-fraunces text-[2rem] font-[900] tracking-[0.18em] text-white md:text-[2.8rem] lg:text-[3.5rem]">
          <span>WE ARE CREATIVES</span>
          <Image src={arrowDown as string} className="" alt="arrow down" />
        </div>
      </nav>
      <main>
        {/*six pack*/}
        <div>
          {/*row1*/}
          <div className="grid grid-cols-2">
            {/*row1-col1*/}
            <Article
              headerText="Transform your brand"
              mainText="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
              normalButtonBg="bg-[#FFF1BA]"
              hoverButtonBg="bg-[#FDD406]"
            />
            <div className="bg-egg  bg-center"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

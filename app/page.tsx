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

const buttonLayout1 = 'text-white text-[1.1rem] font-barlow font-[600]';

const ArticleType1Button = ({ bgNormal, bgHover }: { bgNormal: string; bgHover: string }) => {
  const [hoverOnButton, setHoverOnButton] = useState<boolean>(false);
  return (
    <div className="pl-[0.45em] pt-[0.5em]">
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
        className={`mx-[-0.3em] mt-[-0.58em] h-1/2 w-[8em] rounded-[1em] ${!hoverOnButton ? bgNormal : bgHover} py-1`}
      ></div>
    </div>
  );
};

const ArticleType1 = ({
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
    <div className="flex h-[37em] items-center justify-center gap-[2em] bg-[#FFFBF8]">
      <div className="flex flex-col gap-[2em] text-left lg:ml-[3.5em] lg:w-[28em]">
        <span className="font-fraunces text-[2.5rem] font-[900] leading-[1.2em] text-veryDarkDesaturatedBlue">
          {headerText}
        </span>
        <span className="font-barlow text-[1.1rem] font-[600] leading-[1.7em] text-[#8D8C90]">{mainText}</span>
        <ArticleType1Button bgNormal={normalButtonBg} bgHover={hoverButtonBg} />
      </div>
    </div>
  );
};

const ArticleType2 = ({
  background,
  textColor,
  headerText,
  mainText,
}: {
  background: string;
  textColor: string;
  headerText: string;
  mainText: string;
}) => {
  return (
    <div className={`${background} flex h-[37em] items-end justify-center bg-center py-[4em] md:px-[5em] `}>
      <div className={`${textColor} flex flex-col items-center gap-[1.5em] text-center lg:w-[22em]`}>
        <span className=" font-fraunces text-[1.7rem] font-[900]">{headerText}</span>
        <span className="font-barlow font-[600]">{mainText}</span>
      </div>
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
            <ArticleType1
              headerText="Transform your brand"
              mainText="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
              normalButtonBg="bg-[#FFF1BA]"
              hoverButtonBg="bg-[#FDD406]"
            />
            <div className="bg-egg  bg-center"></div>
          </div>
          {/*row2*/}
          <div className="grid grid-cols-2">
            <div className="bg-glass  bg-center"></div>
            <ArticleType1
              headerText="Stand out to the right audience"
              mainText="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&#8217;ll build and extend your brand in digital places."
              normalButtonBg="bg-[#FFD9D3]"
              hoverButtonBg="bg-[#FF7160]"
            />
          </div>
          {/*row3*/}
          <div className="grid grid-cols-2">
            <ArticleType2
              background={'bg-cherries'}
              textColor={'text-darkDesaturatedCyanGraphicDesignText'}
              headerText="Graphic Design"
              mainText="Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients&#8217; attention."
            />
            <ArticleType2
              background={'bg-orange'}
              textColor={'text-darkBluePhotographyText'}
              headerText="Photography"
              mainText="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

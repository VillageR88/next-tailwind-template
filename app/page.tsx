'use client';
import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import interactive from './images/desktop/image-interactive.jpg';
import facebookIcon from './images/icon-facebook.svg';
import twitterIcon from './images/icon-twitter.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instagramIcon from './images/icon-instagram.svg';
import { useState } from 'react';

const deepEarth = [
  'DEEP\nEARTH',
  "bg-[url('./images/mobile/blocks/image-deep-earth.jpg')] md:bg-[url('./images/desktop/blocks/image-deep-earth.jpg')]",
];
const nightArcade = [
  'NIGHT\nARCADE',
  "bg-[url('./images/mobile/blocks/image-night-arcade.jpg')] md:bg-[url('./images/desktop/blocks/image-night-arcade.jpg')]",
];
const soccerTeam = [
  'SOCCER\nTEAM VR',
  "bg-[url('./images/mobile/blocks/image-soccer-team.jpg')] md:bg-[url('./images/desktop/blocks/image-soccer-team.jpg')]",
];
const theGrid = [
  'THE\nGRID',
  "bg-[url('./images/mobile/blocks/image-grid.jpg')] md:bg-[url('./images/desktop/blocks/image-grid.jpg')]",
];
const fromAbove = [
  'FROM UP\nABOVE VR',
  "bg-[url('./images/mobile/blocks/image-from-above.jpg')] md:bg-[url('./images/desktop/blocks/image-from-above.jpg')]",
];
const pocketBorealis = [
  'POCKET\nBOREALIS',
  "bg-[url('./images/mobile/blocks/image-pocket-borealis.jpg')] md:bg-[url('./images/desktop/blocks/image-pocket-borealis.jpg')]",
];
const curiosity = [
  'THE\nCURIOSITY',
  "bg-[url('./images/mobile/blocks/image-curiosity.jpg')] md:bg-[url('./images/desktop/blocks/image-curiosity.jpg')]",
];
const fisheye = [
  'MAKE IT\nFISHEYE',
  "bg-[url('./images/mobile/blocks/image-fisheye.jpg')] md:bg-[url('./images/desktop/blocks/image-fisheye.jpg')]",
];

const blockFeed = [deepEarth, nightArcade, soccerTeam, theGrid, fromAbove, pocketBorealis, curiosity, fisheye];
const rightNavFeed = ['About', 'Careers', 'Events', 'Products', 'Support'];
const iconsFeed = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon];

const Block = ({ value }: { value: string[] }) => {
  const [hoverButton, setHoverButton] = useState<boolean>(false);
  return (
    <button
      className="md-px-0 h-[15em] w-full self-center px-[1em] md:h-full md:w-fit md:px-0"
      onMouseEnter={() => {
        setHoverButton(true);
      }}
      onMouseLeave={() => {
        setHoverButton(false);
      }}
    >
      <div className={`${value[1]} flex h-full w-full bg-center text-start md:h-[28.1em] md:w-[16em] md:bg-cover`}>
        <div className={`h-full w-full ${hoverButton && 'bg-white bg-opacity-75'}`}>
          <div
            className={`${
              !hoverButton ? 'to-transparentDark' : 'to-transparentLight'
            } flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent from-30%`}
          >
            <span
              className={`${
                !hoverButton ? 'text-white text-opacity-90' : 'text-black'
              } whitespace-pre-line pb-[0.5em] pl-[0.5em] font-josefinSans text-[3rem] leading-[1em] md:pb-[1em] md:pl-[1.25em] md:text-[2rem]`}
            >
              {value[0]}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

const RightNavButtons = ({ visibleOnMobile }: { visibleOnMobile: boolean }) => {
  const [hoverButtonRightNav, setHoverButton] = useState<number | null>(null);

  return (
    <div
      className={`${
        visibleOnMobile ? 'flex' : 'hidden'
      } mt-1 h-fit flex-col gap-[2.27em] font-alata text-[0.9rem] text-white opacity-90 md:flex md:flex-row`}
    >
      {rightNavFeed.map((x, i) => (
        <button
          onMouseEnter={() => {
            setHoverButton(i);
          }}
          onMouseLeave={() => {
            setHoverButton(null);
          }}
          key={i}
          className={'bg-center tracking-[0.02em]'}
        >
          <div className="flex flex-col">
            {x}
            {hoverButtonRightNav === i && (
              <div className="flex h-0 w-full justify-center bg-white">
                <div className="mt-2 h-[2px] w-[1.7em] bg-white"></div>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default function Home() {
  const [hoverOn, setHoverOn] = useState<number | null>(null);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="h-[40.6em] w-full bg-[url('./images/desktop/image-hero.jpg')] ">
          <div className="h-full w-full bg-black bg-opacity-40">
            <div className="flex h-full w-full flex-col gap-[8.2em]">
              {/*1st row*/}
              <div className="flex h-fit w-full flex-row items-center justify-between px-[2em] pt-[4em] lg:pl-[10.35em] lg:pr-[10.335em]">
                {/*left*/}
                <Image className="h-fit" src={logo as string} alt="logo of loopstudios" />
                {/*right desktop*/}
                <RightNavButtons visibleOnMobile={false} />
              </div>
              {/*2nd row*/}
              <div className="flex h-fit w-fit flex-col justify-center self-center pt-1 font-josefinSans text-white outline outline-2 outline-white md:ml-[2em] md:h-[17.25em] md:w-[40.5em] md:self-start md:pl-[2.45em] lg:ml-[10.4em] lg:mr-[10.35em]">
                <div className="flex flex-col justify-center whitespace-pre-line p-6 leading-[5em] md:whitespace-normal  md:p-0">
                  {['IMMERSIVE', 'EXPERIENCES', 'THAT\nDELIVER'].map((x, i) => (
                    <span
                      key={i}
                      className="flex h-fit flex-col justify-center pt-2 text-[2.4rem] leading-[1.1em] tracking-[0.009em] md:text-[4.45rem] md:leading-[0.87em]"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="h-full w-full bg-white pb-[6em] md:pb-[11.5em]">
          {/*1st row*/}
          <div className="flex w-full justify-center pt-[10em] xl:pl-[10.3em]">
            <Image
              className="md:mr-[-25em] lg:mr-[-10.1em]"
              src={interactive}
              alt="photo of a person wearing VR googles"
            />
            <div className="flex w-full flex-col items-center justify-end lg:items-start">
              <div className=" flex flex-col gap-[1.63em] bg-white pt-[6em] leading-[1.55em] tracking-[-0.006em] md:w-[27em] md:pl-[3em] md:pr-[3em] lg:w-[40.1em] lg:pl-[6em] lg:pr-[6em]">
                <span className="whitespace-pre-line font-josefinSans leading-[1em] md:text-[2.4rem] lg:text-[3rem]">
                  {'The leader in\ninteractive VR'.toUpperCase()}
                </span>
                <span className="font-alata text-[0.95rem] text-barkGray">
                  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                  best companies around the globe. Our award-winning creations have transformed businesses through
                  digital experiences that bind to their brand.
                </span>
              </div>
            </div>
          </div>
          {/*2nd row*/}
          <div className="flex items-center justify-center pt-[10.8em] text-center md:justify-between md:px-[10.25em] md:text-left">
            <span className="font-josefinSans text-[2rem] md:text-[3rem]">OUR CREATIONS</span>
            {/*button desktop*/}
            <button className="hidden h-full rounded-[0.05em] px-[2.57em] py-[0.535em] font-alata text-[0.92rem] tracking-[0.3em] outline outline-[2px] outline-veryDarkGray hover:bg-black hover:text-white hover:outline-1 md:block">
              SEE ALL
            </button>
          </div>
          {/*3rd row*/}
          <div className="ml-[0.1em] flex w-full justify-center">
            <div className="flex h-full w-full flex-col gap-y-[1.9em]  pt-[4.25em] md:grid md:h-fit md:w-fit md:grid-cols-3 md:gap-x-[1.89em] xl:grid-cols-4 ">
              {blockFeed.map((x, i) => (
                <Block key={i} value={x} />
              ))}
            </div>
          </div>
          <div className="flex h-full w-full justify-center pt-10">
            {/*button mobile*/}
            <button className="flex h-full rounded-[0.05em] px-[2.57em] py-[0.535em] font-alata text-[0.92rem] tracking-[0.3em] outline outline-[2px] outline-veryDarkGray hover:bg-black hover:text-white hover:outline-1 md:hidden">
              SEE ALL
            </button>
          </div>
        </div>
      </main>
      <footer className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-between bg-black px-0 pb-[4em] pt-[4em] md:h-[10em] md:flex-row md:px-[2em] md:pb-0 md:pt-0 lg:pl-[10.35em] lg:pr-[10.3em]">
          {/*1st wrapper*/}
          <div className="flex flex-col gap-[1.45em]">
            <Image className="h-fit w-[10em] md:h-[1.5em] md:w-fit" src={logo as string} alt="logo of loopstudios" />
            <RightNavButtons visibleOnMobile={true} />
          </div>
          {/*2nd wrapper*/}
          <div className="flex flex-col items-end gap-[1.7em] pt-[3.5em] md:pt-0">
            <div className="flex w-full flex-row items-center justify-center gap-[1em] md:justify-end">
              {iconsFeed.map((x, i) => (
                <button
                  onMouseEnter={() => {
                    setHoverOn(i);
                  }}
                  onMouseLeave={() => {
                    setHoverOn(null);
                  }}
                  key={i}
                >
                  <div className="flex flex-col justify-center">
                    <Image className="h-fit w-full" src={x as string} alt={'' + x} />
                    {hoverOn === i && (
                      <div className="h-0 w-full">
                        <div
                          className={`${i !== 1 ? 'mt-[0.5em]' : 'mt-[0.65em]'} h-[2px] w-full items-center bg-white`}
                        ></div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <span className="font-alata text-[0.9rem] tracking-[0.02em] text-barkGray">
              © 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

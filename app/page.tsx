'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import logo from './assets/images/logo.svg';
import navBar from './assets/images/icon-menu.svg';
import navBarClose from './assets/images/icon-menu-close.svg';
import web3Desktop from './assets/images/image-web-3-desktop.jpg';
import web3Mobile from './assets/images/image-web-3-mobile.jpg';
import picture1 from './assets/images/image-retro-pcs.jpg';
import picture2 from './assets/images/image-top-laptops.jpg';
import picture3 from './assets/images/image-gaming-growth.jpg';

import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

export default function Home() {
  const [navbarVisibility, toggleNavbarVisibility] = useState(false);

  return (
    <div>
      <mask
        className={`${navbarVisibility ? 'flex' : 'hidden'} fixed h-screen
        w-full
        bg-veryDarkBlue
        opacity-50
        md:hidden
        `}
      />
      {/* mobile-menu */}
      <div className={`${navbarVisibility ? 'flex' : 'hidden'} fixed h-screen w-full justify-end `}>
        <Image
          className="fixed right-6 top-8 z-10 h-auto hover:cursor-pointer md:hidden"
          src={navBarClose as string}
          alt="close navigation bar"
          onClick={() => {
            toggleNavbarVisibility(!navbarVisibility);
          }}
        />
        <div className="flex w-[17em] flex-col items-start gap-10 bg-white pl-8 pt-24 font-medium text-veryDarkBlue	md:hidden	">
          <button>Home</button>
          <button>New</button>
          <button>Popular</button>
          <button>Trending</button>
          <button>Categories</button>
        </div>
      </div>
      <div className="block w-full gap-6 px-4 pb-20 pt-10 md:px-[5em] md:py-20">
        <nav className="flex justify-between pb-10 ">
          <Image className="h-8 w-14 md:h-auto md:w-auto" src={logo as string} alt="logo" />
          {/* desktop-menu */}
          <div className="hidden gap-10 font-medium text-darkGrayishBlue md:flex">
            <button>Home</button>
            <button>New</button>
            <button>Popular</button>
            <button>Trending</button>
            <button>Categories</button>
          </div>
          <Image
            className={`${navbarVisibility ? 'hidden' : 'flex'} z-10 h-[1.2em] w-auto hover:cursor-pointer md:hidden`}
            src={navBar as string}
            alt="navigation bar"
            onClick={() => {
              toggleNavbarVisibility(!navbarVisibility);
            }}
          />
        </nav>
        <main>
          {/* main-top */}
          <div className="flex flex-col justify-between gap-[4em] md:flex-row md:gap-4">
            {/* main-left */}
            <div className="flex w-full flex-col md:w-[45.5em]">
              <Image className="hidden h-auto w-auto md:flex" src={web3Desktop} alt="colorful image of blocks" />
              <Image className="flex w-full md:hidden" src={web3Mobile} alt="colorful image of blocks" />
              <div className="flex flex-col justify-between gap-6 pt-8 md:flex-row">
                <span className="text-[3rem] font-extrabold leading-[1em] text-veryDarkBlue md:max-w-[6em] md:text-[3.5rem]">
                  The Bright Future of Web 3.0?
                </span>
                <div className="just flex flex-col justify-between gap-6">
                  <span className="pb-1 text-darkGrayishBlue md:max-w-[23em] md:text-[0.95rem]">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into
                    the hands of the people. But is it really fulfilling its promise?
                  </span>
                  <button className="self-start bg-softRed px-10 py-3 text-[0.9rem] font-medium tracking-[0.2em] text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            {/* main-right */}
            <div className="flex flex-col justify-between gap-4 bg-veryDarkBlue pb-10 pl-6 pr-10 pt-6 text-white md:max-w-[22.5em] md:gap-0">
              <span className="text-[2.5rem] font-bold text-softOrange">New</span>
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-bold">Hydrogen VS Electric Cars</span>
                <span className="text-[0.95rem] text-grayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</span>
              </div>
              <hr className="my-4 h-px border-0 bg-darkGrayishBlue"></hr>
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-bold">The Downsides of AI Artistry</span>
                <span className="text-[0.95rem] text-grayishBlue">
                  What are the possible adverse effects of on-demand AI image generation?
                </span>
              </div>
              <hr className="my-4 h-px border-0 bg-darkGrayishBlue"></hr>
              <div className="flex flex-col">
                <span className="text-[1.2rem] font-bold">Is VC Funding Drying Up?</span>
                <span className="text-[0.95rem] text-grayishBlue">
                  Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </span>
              </div>
            </div>
          </div>
          {/* main-bottom */}
          <div className="flex flex-col justify-around  gap-8 pt-20 md:flex-row md:gap-4">
            <div className="flex h-[8em] gap-6">
              <Image className="h-full w-auto" src={picture1} alt="image of retro computer" />
              <div className="flex flex-col justify-between md:max-w-[14em]">
                <span className="text-[2rem] font-bold text-grayishBlue">01</span>
                <span className="text-[1.1rem] font-extrabold">Reviving Retro PCs</span>
                <span className="text-[0.95rem] text-darkGrayishBlue">
                  What happens when old PCs are given modern upgrades?
                </span>
              </div>
            </div>
            <div className="flex h-[8em] gap-6">
              <Image className="h-full w-auto" src={picture2} alt="image of laptop's keyboard" />
              <div className="flex flex-col justify-between md:max-w-[14em]">
                <span className="text-[2rem] font-bold text-grayishBlue">02</span>
                <span className="text-[1.1rem] font-extrabold">Top 10 Laptops of 2022</span>
                <span className="text-[0.95rem] text-darkGrayishBlue">
                  Our best picks for various needs and budgets.
                </span>
              </div>
            </div>
            <div className="flex h-[8em] gap-6">
              <Image className="h-full w-auto" src={picture3} alt="image of gamepad falling on hand" />
              <div className="flex flex-col justify-between md:max-w-[14em]">
                <span className="text-[2rem] font-bold text-grayishBlue">03</span>
                <span className="text-[1.1rem] font-extrabold">The Growth of Gaming</span>
                <span className="text-[0.95rem] text-darkGrayishBlue">
                  How the pandemic has sparked fresh opportunities.
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

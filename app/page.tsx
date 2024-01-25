'use client';
import { Icon } from '@mdi/react';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';
import { useState } from 'react';
import { mdiChevronRight } from '@mdi/js';
import Image from 'next/image';
import logo from './images/logo.png';

const ButtonWithSlider = ({
  width,
  buttonText,
  background1,
  background2,
}: {
  width: string;
  buttonText: string;
  background1: string;
  background2: string;
}) => {
  const [buttonHoverValue, setButtonHoverValue] = useState(0);

  return (
    <button
      onMouseEnter={() => {
        setButtonHoverValue(100);
      }}
      onMouseLeave={() => {
        setButtonHoverValue(0);
      }}
      className={`flex h-[44px] ${width} items-center justify-between rounded-[0.5em] ${background1}`}
    >
      <div className="flex h-full w-full items-center justify-end">
        <span className="absolute z-10 pr-2.5 font-baloo2 text-[1.2rem] font-[500] text-white">{buttonText}</span>
        <div
          style={{ width: `${buttonHoverValue}%` }}
          className={`h-full rounded-l-[0.5em] ${background2} transition-all duration-[400ms] ease-in-out`}
        ></div>
      </div>
      <div className={`flex h-full items-center rounded-r-[0.5em] ${background2} px-1`}>
        <Icon color="white" path={mdiChevronRight} size={1.4} />
      </div>
    </button>
  );
};

export default function Home() {
  const [facebookHover, setFacebookHover] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <nav className="flex h-[2.9em] w-full justify-center bg-[#5DBA3B]">
        <div className="flex w-[75.7em] items-center justify-between pb-[0.1em] text-[0.94rem] text-[#fff]">
          <button>
            <span className="hover:underline">{'Mały Skarb - Centrum twórczego rozwoju'}</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="hover:text-[#FF5157] hover:underline">
              <span className=" text-[1.05rem] ">{'RODO'}</span>
            </button>
            <button
              onMouseEnter={() => {
                setFacebookHover(true);
              }}
              onMouseLeave={() => {
                setFacebookHover(false);
              }}
            >
              <div className="mb-[0.28em] flex h-full w-full items-center justify-center">
                <Icon className="z-10" path={mdiFacebook} size={1} color="#5DBA3B" />
                <div className={`absolute h-[1.2em] w-[0.5em] ${facebookHover ? 'bg-[#FF5157]' : 'bg-white'}`}></div>
              </div>
            </button>
            <button>
              <Icon className="hover:text-[#FF5157]" path={mdiInstagram} size={0.75} />
            </button>
            <button>
              <Icon className=" hover:text-[#FF5157]" path={mdiYoutube} size={0.75} />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex h-[50.5em] w-full flex-col">
        <div className="flex h-full w-full items-center justify-center bg-[url('./images/home-slide_img.jpg')] bg-[50%_0%]">
          <div className="h-[34.5em] w-[69.5em] rounded-[3em] bg-white p-[0.65em]">
            <div className="flex h-full w-full flex-col items-center rounded-[3em] outline-dashed outline-1">
              <Image className="w-[50em] pt-[3.1em]" src={logo} alt="image of child" />
              <div className="mt-[5em] flex w-full justify-around px-[7em]">
                <div className="flex w-[271.88px] flex-col items-center">
                  <ButtonWithSlider
                    width="w-[271.88px]"
                    aria-label="Przedszkole Mały Skarb"
                    buttonText="Przedszkole Mały Skarb"
                    background1="bg-[#ff8b00]"
                    background2="bg-[#e07b21]"
                  />
                  <div>
                    <span className="mt-[2em] flex whitespace-pre-line text-center text-[15px] leading-6 text-[#777]">
                      {`Nasze przedszkole funkcjonuje
                    od 2003 roku. Przedszkolaki korzystają 
                    z barwnych, w pełni przygotowanych
                    do potrzeb dzieci sal oraz ogrodu`}
                    </span>
                  </div>
                </div>
                <div className="flex w-[271.88px] flex-col items-center">
                  <ButtonWithSlider
                    width="w-[211.5px]"
                    aria-label="Centrum rozwoju"
                    buttonText="Centrum rozwoju"
                    background1="bg-[#5255c5]"
                    background2="bg-[#474aab]"
                  />
                  <div>
                    <span className="mt-[2em] flex whitespace-pre-line text-center text-[15px] leading-6 text-[#777]">
                      {`TUS, terapia SI, terapia ręki, fizjoterapia,`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.4em] w-full bg-white"></div>
      </main>
      <footer className="h-[23em] w-full bg-[#5dba3b] bg-[url('./images/absurdity.png')]"></footer>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import logo from '@/app/images/logo.png';
import animatedButterfly from '@/app/images/butterfly2.png';
import animatedBee from '@/app/images/bee.png';
import ButtonWithSlider from '@/app/components/ButtonWithSlider';

const HomePage = () => {
  return (
    <main className="flex w-full flex-col">
      <div className="flex h-[50.5em] w-full flex-col bg-[url('./images/home-slide_img.jpg')] bg-[50%_0%] px-5 sm:px-10">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-0 w-full justify-start xl:w-[69.5em]">
            <Image className="myAnimatedImage1 z-10 h-fit w-fit" src={animatedButterfly} alt="animated butterfly" />
          </div>
          <div className="rounded-[3em] bg-white p-[0.65em] xl:h-[34.5em] xl:w-[69.5em]">
            <div className="flex h-full w-full flex-col items-center rounded-[3em] py-[3.1em] outline-dashed outline-1">
              <Image
                className="w-full px-[2em] sm:px-[1em] md:px-[2em] lg:px-[4em] xl:px-[9em]"
                src={logo}
                alt="image of child"
              />
              <div className="mt-[5em] flex w-full flex-col items-center justify-around gap-[2em] sm:flex-row sm:items-start sm:gap-[0.5em] sm:px-[1em] md:gap-[2em] md:px-[1em] lg:px-[4em] xl:gap-0 xl:px-[7em]">
                <div className="flex flex-col items-center xl:w-[271.88px]">
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
                    <span className="mt-[2em] flex whitespace-pre-line text-center text-[15px] leading-6 text-[#777] md:whitespace-normal">
                      {`TUS, terapia SI, terapia ręki,
               fizjoterapia,`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-0 w-full justify-end xl:w-[69.5em]">
            <Image className="myAnimatedImage2 z-10 h-fit w-fit" src={animatedBee} alt="animated bee" />
          </div>
        </div>
      </div>
      <div className="h-[0.4em] w-full bg-white"></div>
    </main>
  );
};

export default HomePage;

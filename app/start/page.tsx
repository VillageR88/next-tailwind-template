'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Header2 from '@/app/components/Header2';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import image1 from '@/public/images/people1.jpg';
import image2 from '@/public/images/people2.jpg';
import ButtonWithSlider from '@/app/components/ButtonWithSlider';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <Header2 />
      <div className="mt-16 grid h-[50em] w-full grid-cols-3 justify-center gap-[1.9em] xl:w-[71.3em]">
        <div>
          <Image className="rounded-[1.2em]" src={image1} alt="image of people" />
        </div>
        <div>
          <Image className="rounded-[1.2em]" src={image2} alt="image of people" />
        </div>
        <div className="flex h-[30.8em] w-full flex-col items-center justify-center gap-[2em] rounded-[1.2em] bg-[#5dba3b] text-white">
          <h3 className="font-baloo text-[24px]">{'Godziny pracy'}</h3>
          <div className="flex w-full flex-col gap-5 px-16 text-[15px]">
            <div className="flex justify-between">
              <span>{'Poniedziałek'}</span>
              <span>{'6:30 - 17: 00'}</span>
            </div>
            <div className="flex justify-between">
              <span>{'Wtorek'}</span>
              <span>{'6:30 - 17: 00'}</span>
            </div>
            <div className="flex justify-between">
              <span>{'Środa'}</span>
              <span>{'6:30 - 17: 00'}</span>
            </div>
            <div className="flex justify-between">
              <span>{'Czwartek'}</span>
              <span>{'6:30 - 17: 00'}</span>
            </div>
            <div className="flex justify-between">
              <span>{'Piątek'}</span>
              <span>{'6:30 - 17: 00'}</span>
            </div>
          </div>
          <span className="text-[15px] mt-[1em]">
            {'Przedszkole jest czynne '}
            <span className="font-[700] tracking-[0.04em]">{'cały rok.'}</span>
          </span>
          <div className="flex w-full justify-center">
            <ButtonWithSlider
              href="#"
              background1="bg-[#ff5157]"
              background2="bg-[#e04b4e]"
              width="w-[15.5em]"
              buttonText="Skontaktuj się z nami"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Header2 from '@/app/components/Header2';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import image1 from '@/public/images/people1.jpg';
import image2 from '@/public/images/people2.jpg';
import signsInst from '@/public/images/signsInst.png';
import ButtonWithSlider from '@/app/components/ButtonWithSlider';
import { mdiRocketLaunch } from '@mdi/js';
import Icon from '@mdi/react';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <Header2 />
      <div className="mt-16 grid h-[50em] w-full grid-cols-3 justify-center gap-[1.9em] xl:w-[71.3em]">
        <div className="flex flex-col gap-[1em]">
          <Image className="rounded-[1.2em]" src={image1} alt="image of people" />
          <h2 className="font-baloo text-[36px]">{'O nas'}</h2>
          <Image src={signsInst} alt="Image of institutions" />
          <div className="flex flex-col gap-[2em] py-4 text-[15px] text-[#777]">
            <span>{'Witamy serdecznie na stronie Przedszkola Muzyczno-Językowego MAŁY SKARB!'}</span>
            <span>
              {
                'Jesteśmy przedszkolem rodzinny, w którym każde dziecko jest dla nas niezwykle ważne. Naszym celem jest stworzenie atmosfery pełnej ciepła i zrozumienia.'
              }
            </span>
            <span>
              {
                'W codziennej komunikacji korzystamy z metod takich jak NVC (Nonviolent Communication) oraz pozytywna dyscyplina według J. Nelsena.'
              }
            </span>
          </div>
          <ButtonWithSlider
            href="#"
            buttonText="Dowiedz się więcej"
            width="w-[14.3em]"
            background1="bg-[#5dba3b]"
            background2="bg-[#50a033]"
          />
        </div>
        <div>
          <Image className="rounded-[1.2em]" src={image2} alt="image of people" />
          <h2 className="font-baloo text-[36px]">{'Nasza Misja:'}</h2>
          <ul>
            <div className="flex gap-3 text-[15px] text-[#777]">
              <Icon path={mdiRocketLaunch} size={0.8} />
              <span>test</span>
            </div>
          </ul>
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
          <span className="mt-[1em] text-[15px]">
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

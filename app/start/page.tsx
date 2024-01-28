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
import color5 from '@/app/components/color5';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <Header2 />
      <div className="mt-16 grid h-full w-full grid-cols-1 justify-center gap-[1.9em] px-6 pb-16 sm:grid-cols-2 lg:max-w-[71.3em] lg:grid-cols-3 xl:px-0">
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
        <div className="flex flex-col gap-[1em]">
          <Image className="rounded-[1.2em]" src={image2} alt="image of people" />
          <h2 className="font-baloo text-[36px]">{'Nasza Misja:'}</h2>
          <ul className="flex flex-col gap-3">
            {[
              'Jesteśmy przedszkolem rodzinnym',
              'Każde dziecko jest dla nas ważne',
              'Dbamy o rodzinną atmosferę',
              'Stawiamy na szczęśliwe dzieciństwo i na wszechstronny rozwój',
              'Dbamy by dzieci były zdrowe, bezpieczne, kochane i szanowane',
              'Stawiamy na aktywny udział Rodziców w życiu placówki',
              'Pragniemy, aby nasi absolwenci umieli wykazać się kreatywnością, mądrością życiową, otwartością na siebie i innych, wrażliwością na piękno otaczającego świata.',
            ].map((item, index) => (
              <li className="flex gap-4" style={{ color: color5({ index })?.color }} key={item}>
                <Icon path={mdiRocketLaunch} size={0.8} />
                <span className="w-fit text-[15px] text-[#777]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-center sm:col-span-2 lg:col-span-1">
          <div className="flex h-[30.8em] max-w-full flex-col items-center justify-center gap-[2em] rounded-[1.2em] bg-[#5dba3b] px-6 text-white lg:w-full lg:px-0 ">
            <h3 className="font-baloo text-[24px]">{'Godziny pracy'}</h3>
            <div className="flex w-full flex-col gap-5 px-10 text-[15px] xl:px-16">
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
      </div>
      <Footer />
    </div>
  );
}

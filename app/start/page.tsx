'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import logo from '@/app/images/logo.png';
import { mdiEmailOpenOutline, mdiInstagram, mdiMapMarker, mdiPhone, mdiYoutube } from '@mdi/js';
import Icon from '@mdi/react';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <div className="mt-5 flex w-full justify-between px-10 xl:w-[75.7em]">
        <div className="flex flex-col items-center">
          <Image height={60} src={logo} alt="logo" />
          <span className="font-varelaRound mt-[0.3em] text-[1.7rem] font-[800] tracking-[0.1em] text-[#00b596]">
            przedszkole
          </span>
        </div>
        <div className="mt-[2em] grid grid-cols-2 flex-row items-center gap-[3em] text-[15px] text-[#777] md:flex xl:pr-8">
          <div className="flex w-full items-center justify-center gap-[0.5em] md:w-fit">
            <Icon className="text-[#5dba3b]" path={mdiPhone} size={1.6} />
            <div className="flex flex-col gap-[0.2em]">
              <button className="duration-300 hover:text-[#5255c5]">
                <span>{'608-674-006'}</span>
              </button>
              <button className="duration-300 hover:text-[#5255c5]">
                <span>{'698-675-406'}</span>
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-[0.5em]  md:w-fit">
            <Icon className="text-[#ff8b00]" path={mdiMapMarker} size={1.6} />
            <button className="duration-300 hover:text-[#5255c5]">
              <span className="flex whitespace-pre-wrap text-left leading-7">{'11 Listopada 68,\n80-180 Gdańsk'}</span>
            </button>
          </div>
          <div className="col-span-2 flex w-full justify-center gap-[0.5em] md:w-fit">
            <Icon className="text-[#ff5157]" path={mdiEmailOpenOutline} size={1.6} />
            <button className="duration-300 hover:text-[#5255c5]">
              <span>{'poczta@malyskarb.pl'}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[50em] w-full items-center justify-center">
        <span>test</span>
      </div>
      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Header2 from '@/app/components/Header2';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import image1 from '@/public/images/people1.jpg';
import image2 from '@/public/images/people2.jpg';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <Header2 />
      <div className="mt-16 grid h-[50em] gap-[1.9em] w-full grid-cols-3 justify-center xl:w-[71em]">
        <div>
          <Image className="rounded-[1.2em]" src={image1} alt="image of people" />
        </div>
        <div>
          <Image className="rounded-[1.2em]" src={image2} alt="image of people" />
        </div>
        <div className="h-full w-full rounded-[1.2em] bg-[#5dba3b]"></div>
      </div>
      <Footer />
    </div>
  );
}

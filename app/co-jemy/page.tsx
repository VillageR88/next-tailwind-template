'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Header2 from '@/app/components/Header2';
import Footer from '@/app/components/Footer';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <Header2 />
      <div className="flex h-[50em] w-full items-center justify-center">
        <span className="text-[2rem] font-[700]">Co jemy? content</span>
      </div>
      <Footer />
    </div>
  );
}

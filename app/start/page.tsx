'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <div className="flex h-[50em] w-full items-center justify-center">
        <span>test</span>
      </div>
      <Footer />
    </div>
  );
}

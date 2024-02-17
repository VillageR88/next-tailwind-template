'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import supabase from '../lib/supabaseClient';

export default function Links() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="flex h-[709px] w-[476px] flex-col items-center justify-between ">
        <div className="flex h-[618px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
          <section className="flex h-[80px] w-full flex-col justify-between">
            <h1 className="headingM">Links</h1>
            <p className="bodyM text-[#737373]">Let’s get you started sharing your links!</p>
          </section>
        </div>
      </div>
    </div>
  );
}

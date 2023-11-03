'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main id="main" className="main flex h-screen w-full flex-col items-center justify-center">
      <div className="flex h-full w-full flex-col pb-[1.7em] pt-[1.72em] md:flex-row">
        <Image
          className="minTall2:flex hidden h-2/6 w-full md:h-full md:w-[40em]"
          src="./images/bg-main-desktop.png"
          alt="colorful background"
          width={10}
          height={10}
        />
        <div
          className={`minTall2:flex fixed hidden h-auto flex-col justify-center gap-[2.3em] self-center pb-[1.7em] pt-[1.72em] md:w-[30em] md:scale-[60%] lg:scale-75 xl:scale-100`}
        >
          <div className="static ml-0 flex h-auto rounded-[0.8em] bg-red-400 md:ml-[0.1em] md:w-[27.9em] xl:ml-[10.3em]">
            <Image
              className="flex h-auto w-auto"
              src="./images/bg-card-front.png"
              alt="colorful background"
              width={10}
              height={10}
            />
            <Image
              className="absolute ml-8 mt-7 flex h-auto w-auto"
              src={'./images/card-logo.svg' as string}
              alt="card logo"
              width={10}
              height={10}
            />
            <div className="absolute bg-white p-4 top-40">fff</div>
          </div>
          <div className="ml-0 flex h-auto rounded-[0.8em] bg-red-400 sm:ml-0 md:ml-[1.5em] md:w-[27.9em] xl:ml-[16.1em]">
            <Image
              className="flex h-auto w-auto"
              src="./images/bg-card-back.png"
              alt="colorful background"
              width={10}
              height={10}
            />
          </div>
        </div>
        <div className="flex h-auto w-full bg-[#FFFFFF] md:h-full"></div>
      </div>
    </main>
  );
}

'use client';
import { Icon } from '@mdi/react';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';
import { useState } from 'react';

export default function Home() {
  const [facebookHover, setFacebookHover] = useState(false);

  return (
    <div className="font-roboto flex min-h-screen flex-col items-center justify-start">
      <nav className="flex h-[2.9em] w-full justify-center bg-[#5DBA3B]">
        <div className="flex w-[60%] items-center justify-between pb-[0.1em] pr-[1em] text-[0.94rem] text-[#fff]">
          <button>
            <span className="hover:underline">Mały Skarb - Centrum twórczego rozwoju</span>
          </button>
          <div className="flex items-center gap-3">
            <button className="mr-1 hover:text-[#FF5157] hover:underline">
              <span className=" text-[1.05rem] ">RODO</span>
            </button>
            <button
              onMouseEnter={() => {
                setFacebookHover(true);
              }}
              onMouseLeave={() => {
                setFacebookHover(false);
              }}
            >
              <div className="mb-[0.28em] flex  h-full w-full items-center justify-center">
                <Icon className="z-10" path={mdiFacebook as string} size={1} color="#5DBA3B" />
                <div className={`absolute h-[1.2em] w-[0.5em] ${facebookHover ? 'bg-[#FF5157]' : 'bg-white'}`}></div>
              </div>
            </button>
            <button>
              <Icon className="scale-75 hover:bg-[#FF5157]" path={mdiInstagram as string} size={1} />
            </button>
            <button>
              <Icon className="scale-75 hover:bg-[#FF5157]" path={mdiYoutube as string} size={1} />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex h-[50.5em] w-full flex-col">
        <div className="h-full w-full bg-[url('./images/home-slide_img.jpg')] bg-[50%_0%]">
          <div></div>
        </div>
        <div className="h-[0.4em] w-full bg-white"></div>
      </main>
      <footer className="h-[40em] w-full bg-[#58B139]"></footer>
    </div>
  );
}

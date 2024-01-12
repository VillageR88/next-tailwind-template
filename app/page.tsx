'use client';
import Image from 'next/image';
import logo from './images/logo.svg';
import avatar from './images/image-avatar.png';
import { useState } from 'react';

const Cart = () => {
  const [color, setColor] = useState('#69707D');
  return (
    <button
      onMouseEnter={() => {
        setColor('black');
      }}
      onMouseLeave={() => {
        setColor('#69707D');
      }}
    >
      <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill={color}
          fill-rule="nonzero"
        />
      </svg>
    </button>
  );
};

export default function Home() {
  const [hoverNavButtons, setHoverNavButtons] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="font-kumbhSans flex h-[56.25em] w-full flex-col bg-white px-[10.3em] py-[1.85em]">
        <nav className="flex flex-col">
          <div className="flex items-start justify-between">
            <div className="text-darkGrayishBlue mt-[0.9em] flex gap-[3.5em]">
              <Image className="h-fit" src={logo as string} alt="logo" />
              <div className="flex gap-[1.98em] text-[0.95rem]">
                {['Collections', 'Men', 'Women', 'About', 'Contact'].map((x, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center gap-[2.75em]">
                      <button
                        onMouseEnter={() => {
                          setHoverNavButtons(i);
                        }}
                        onMouseLeave={() => {
                          setHoverNavButtons(null);
                        }}
                      >
                        {x}
                      </button>
                      <div
                        className={`${
                          i === 0
                            ? 'w-[5.2em]'
                            : i === 1
                              ? 'w-[2.2em]'
                              : i === 2
                                ? 'w-[3.8em]'
                                : i === 3
                                  ? 'w-[3em]'
                                  : i === 4 && 'w-[4.2em]'
                        } ${hoverNavButtons === i ? 'block' : 'invisible'} bg-orange  h-[0.27em]`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-[2.9em]">
              <Cart />
              <button className="out rounded-full hover:outline outline-2 -outline-offset-[2px] outline-[#EC9858]">
                <Image className="mt-[-0.05em]" height={50} src={avatar} alt="avatar" />
              </button>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#EAE9EC]"></div>
        </nav>
      </div>
    </main>
  );
}

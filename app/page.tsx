'use client';
import Image from 'next/image';
import logo from './images/logo.svg';
import avatar from './images/image-avatar.png';
import shoe1 from './images/image-product-1.jpg';
import shoe2 from './images/image-product-2.jpg';
import shoe3 from './images/image-product-3.jpg';
import shoe4 from './images/image-product-4.jpg';
import shoe1thumb from './images/image-product-1-thumbnail.jpg';
import shoe2thumb from './images/image-product-2-thumbnail.jpg';
import shoe3thumb from './images/image-product-3-thumbnail.jpg';
import shoe4thumb from './images/image-product-4-thumbnail.jpg';
import closeOrange from './images/icon-close_orange.svg';
import { useState } from 'react';

const Close = () => {
  return (
    <button>
      <svg width={'14'} height={'15'} xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill={`${'#69707D'}`}
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

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
  const [shoeSelected, setShoeSelected] = useState<number | null>(null);
  const [lightboxShoeSelected, setLightboxShoeSelected] = useState<number | null>(null);

  return (
    <div
      className={`${
        lightboxShoeSelected !== null ? 'h-screen' : 'min-h-screen'
      } flex flex-col items-center justify-center`}
    >
      {lightboxShoeSelected !== null && (
        <div className="fixed z-10 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
          <div className="flex flex-col gap-[2em]">
            <div className="flex w-full justify-end">
              <button
                onClick={() => {
                  setLightboxShoeSelected(null);
                }}
              >
                <Image src={closeOrange as string} height={23} alt="close" />
              </button>
            </div>
            <Image
              className="h-[34em] w-full rounded-[1em] bg-gray-300"
              src={
                lightboxShoeSelected === 0
                  ? shoe1
                  : lightboxShoeSelected === 1
                    ? shoe2
                    : lightboxShoeSelected === 2
                      ? shoe3
                      : lightboxShoeSelected === 3
                        ? shoe4
                        : shoe1
              }
              alt="image of shoe"
            />
            <div className="flex justify-around gap-2 px-10">
              {[shoe1thumb, shoe2thumb, shoe3thumb, shoe4thumb].map((x, i) => (
                <button
                  onClick={() => {
                    setLightboxShoeSelected(i);
                  }}
                  className={`${
                    lightboxShoeSelected === i && 'outline-orange outline outline-2'
                  } rounded-[0.6em] bg-white`}
                  key={i}
                >
                  <Image
                    src={x}
                    alt="shoe thumbnail"
                    className={`${
                      lightboxShoeSelected === i ? 'opacity-25' : 'hover:opacity-50'
                    } h-[5.5em] w-[5.5em] rounded-[0.6em] bg-gray-300`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
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
              <button className="out rounded-full outline-2 -outline-offset-[2px] outline-[#EC9858] hover:outline">
                <Image className="mt-[-0.05em]" height={50} src={avatar} alt="avatar" />
              </button>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#EAE9EC]"></div>
        </nav>
        <main className="flex h-full w-full items-center justify-between gap-[8em] px-[3em]">
          <div className="flex w-1/2 flex-col">
            <div className="flex flex-col gap-[2em]">
              <button
                onClick={() => {
                  setLightboxShoeSelected(shoeSelected);
                }}
              >
                <Image
                  className="h-[27.8em] w-full rounded-[1em] bg-gray-300"
                  src={
                    shoeSelected === 0
                      ? shoe1
                      : shoeSelected === 1
                        ? shoe2
                        : shoeSelected === 2
                          ? shoe3
                          : shoeSelected === 3
                            ? shoe4
                            : shoe1
                  }
                  alt="image of shoe"
                />
              </button>
              <div className="flex justify-between gap-2 ">
                {[shoe1thumb, shoe2thumb, shoe3thumb, shoe4thumb].map((x, i) => (
                  <button
                    onClick={() => {
                      setShoeSelected(i);
                    }}
                    className={`${shoeSelected === i && 'outline-orange outline outline-2'} rounded-[0.6em]`}
                    key={i}
                  >
                    <Image
                      src={x}
                      alt="shoe thumbnail"
                      className={`${
                        shoeSelected === i ? 'opacity-25' : 'hover:opacity-50'
                      } h-[5.5em] w-[5.5em] rounded-[0.6em] bg-gray-300`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-start">
            <span className="text-[0.9rem] font-[700] text-[orange]">SNEAKER COMPANY</span>
            <span className="text-[2.8rem] font-[700] leading-[1em] text-[#1E1F25]">Fall Limited Edition Sneakers</span>
            <span className="text-darkGrayishBlue">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer.
            </span>
            <div className="flex items-center gap-[1em]">
              <span className="text-[1.8rem] font-[700]">$125.00</span>
              <span className="text-orange bg-paleOrange rounded-md px-[0.6em] font-[700]">50%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-grayishBlue line-clamp-3 font-[700]">$250.00</span>
              <div className="bg-grayishBlue absolute mt-[0.865em] h-[1px] w-[3.7em]"></div>
            </div>
            <div className="flex h-[3em] w-full gap-[1em]">
              <button className="bg-lightGrayishBlue w-[36%] rounded-lg font-[700]">0</button>
              <button className="bg-orange text-paleOrange w-[64%] rounded-lg font-[700]">Add to cart</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

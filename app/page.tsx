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
import closeWhite from './images/icon-close_white.svg';
import closeOrange from './images/icon-close_orange.svg';
import iconMinus from './images/icon-minus.svg';
import iconPlus from './images/icon-plus.svg';
import whiteCart from './images/icon-cart_white.svg';
import iconDelete from './images/icon-delete.svg';
import mobileNav from './images/icon-menu.svg';
import { useEffect, useState } from 'react';

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

export default function Home() {
  const [hoverNavButtons, setHoverNavButtons] = useState<number | null>(null);
  const [shoeSelected, setShoeSelected] = useState<number | null>(null);
  const [lightboxShoeSelected, setLightboxShoeSelected] = useState<number | null>(null);
  const lightboxSelection = [shoe1, shoe2, shoe3, shoe4];
  const [lightboxCloseHover, setLightboxCloseHover] = useState(false);
  const [storage, setStorage] = useState<number>(0);
  const [shoes, setShoes] = useState<number>(0);
  const [cartShown, setCartShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobile(false);
      else {
        setIsMobile(true);
        setLightboxShoeSelected(null);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Cart = () => {
    const [color, setColor] = useState('#69707D');
    return (
      <button
        className="scale-125 p-1 md:scale-100"
        onClick={() => {
          setCartShown(!cartShown);
        }}
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
            fillRule="nonzero"
          />
        </svg>
      </button>
    );
  };

  const IconPrev = () => {
    const [color, setColor] = useState('#1D2026');
    return (
      <button
        onClick={() => {
          if (lightboxShoeSelected !== null)
            if (lightboxShoeSelected > 0) setLightboxShoeSelected(lightboxShoeSelected - 1);
            else setLightboxShoeSelected(lightboxSelection.length - 1);
        }}
        onMouseEnter={() => {
          setColor('#FF7B19');
        }}
        onMouseLeave={() => {
          setColor('#1D2026');
        }}
        className="absolute z-10 ml-[-1.75em] flex h-[3.5em] w-[3.5em] items-center justify-center self-start rounded-full bg-white"
      >
        <svg className="ml-[-0.2em]" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke={color} strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
      </button>
    );
  };

  const IconNext = () => {
    const [color, setColor] = useState('#1D2026');
    return (
      <button
        onClick={() => {
          if (lightboxShoeSelected !== null)
            if (lightboxShoeSelected < lightboxSelection.length - 1) setLightboxShoeSelected(lightboxShoeSelected + 1);
            else setLightboxShoeSelected(0);
        }}
        onMouseEnter={() => {
          setColor('#FF7B19');
        }}
        onMouseLeave={() => {
          setColor('#1D2026');
        }}
        className="absolute mr-[-1.75em] flex h-[3.5em] w-[3.5em] items-center justify-center self-end rounded-full bg-white"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" stroke={color} strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
      </button>
    );
  };

  return (
    <div className={`flex min-h-screen flex-col items-center justify-start bg-white`}>
      {lightboxShoeSelected !== null && !isMobile && (
        <div
          className={`${'overflow-auto'} fixed z-10 flex h-full w-full items-start justify-center  bg-black  bg-opacity-70 pt-[5em]`}
        >
          <div className="flex flex-col gap-[2em]">
            <div className="flex w-full justify-end">
              <button
                onMouseEnter={() => {
                  setLightboxCloseHover(true);
                }}
                onMouseLeave={() => {
                  setLightboxCloseHover(false);
                }}
                onClick={() => {
                  setLightboxShoeSelected(null);
                  setLightboxCloseHover(false);
                }}
              >
                <Image src={(lightboxCloseHover ? closeOrange : closeWhite) as string} height={23} alt="close" />
              </button>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center">
              <IconPrev />
              <Image
                className="h-[34em] w-fit rounded-[1em] bg-gray-300"
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
              <IconNext />
            </div>
            <div className="flex justify-around gap-2 md:px-10 ">
              {[shoe1thumb, shoe2thumb, shoe3thumb, shoe4thumb].map((x, i) => (
                <button
                  onClick={() => {
                    setLightboxShoeSelected(i);
                  }}
                  className={`${
                    lightboxShoeSelected === i && 'outline outline-2 outline-orange'
                  } rounded-[0.75em] bg-white `}
                  key={i}
                >
                  <Image
                    src={x}
                    alt="shoe thumbnail"
                    className={`${
                      lightboxShoeSelected === i ? 'opacity-25' : 'hover:opacity-50'
                    } h-[5.5em] w-fit rounded-[0.6em] bg-gray-300`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className=" flex min-h-full w-full flex-col font-kumbhSans  xl:px-[3em] xxl:px-[10.3em]">
        <nav className="flex flex-col px-[1.5em] py-4 md:px-[2em] md:py-0 md:pt-[1.5em] xxl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex gap-[3.5em] text-darkGrayishBlue">
              <div className="flex gap-4">
                <button className="mt-[0.25em] flex md:hidden">
                  <Image src={mobileNav as string} alt="menu" />
                </button>
                <Image className="h-full md:h-fit" src={logo as string} alt="logo" />
              </div>
              <div
                onMouseEnter={() => {
                  setCartShown(false);
                }}
                className="hidden gap-[1.98em] text-[0.95rem] md:flex"
              >
                {['Collections', 'Men', 'Women', 'About', 'Contact'].map((x, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center ">
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
                        } ${hoverNavButtons === i ? 'block' : 'invisible'} absolute mt-[4.2em] h-[0.27em] bg-orange`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-[0.4em] flex items-center gap-[1.2em] md:mt-0 md:gap-[2.9em]">
              <div>
                <Cart />
                {storage !== 0 && (
                  <span className="pointer-events-none absolute ml-[-1.9em]	 mt-[-0.25em] rounded-[2em] bg-orange px-[0.8em] text-[0.55rem] text-white">
                    {storage}
                  </span>
                )}
                {cartShown && (
                  <div className="absolute left-0 z-10 mt-[2.5em] w-full rounded-[0.5em] px-2 shadow-2xl md:left-auto md:ml-[-15em] md:mt-[1.5em] md:w-[22em] md:px-0 xl:ml-[-10em]">
                    <div
                      onMouseLeave={() => {
                        setCartShown(false);
                      }}
                      className="flex h-[17em] flex-col rounded-[0.5em] bg-white"
                    >
                      <span className="pl-[1.5em] pt-[1.4em] font-[700]">Cart</span>
                      <div className="mt-[1.4em] h-[1px] w-full bg-[#E9E9ED]"></div>
                      <div className="flex h-full w-full items-center justify-center  text-darkGrayishBlue">
                        {storage == 0 ? (
                          <span className="font-[700]">Your cart is empty.</span>
                        ) : (
                          <div className="flex h-full w-full flex-col justify-center gap-[1.8em] px-6">
                            <div className="flex items-center justify-between">
                              <Image src={shoe1thumb} alt="shoe image" className="rounded-[0.3em]" height={50} />
                              <div className="flex flex-col">
                                <span>Fall Limited Edition Sneakers</span>{' '}
                                <div className="flex gap-1.5">
                                  <span>$125.00 x 3</span>
                                  <span className="font-[700] text-black">$375.00</span>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setStorage(0);
                                  setCartShown(false);
                                }}
                              >
                                <Image className="h-fit" src={iconDelete as string} alt="delete" />
                              </button>
                            </div>
                            <button
                              onClick={() => {
                                setStorage(0);
                                setCartShown(false);
                              }}
                              className="rounded-[0.5em] bg-orange py-4 text-[0.95rem] font-[700] text-white"
                            >
                              Checkout
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onMouseEnter={() => {
                  setCartShown(false);
                }}
                className="out rounded-full outline-2 -outline-offset-[2px] outline-[#EC9858] hover:outline"
              >
                <Image
                  className="mt-[-0.45em] scale-[65%] md:mt-[-0.05em] md:scale-100"
                  height={50}
                  src={avatar}
                  alt="avatar"
                />
              </button>
            </div>
          </div>
          <div className="mt-[2em] hidden h-[1px] w-full bg-[#EAE9EC] md:block"></div>
        </nav>
        <main
          onMouseEnter={() => {
            setCartShown(false);
          }}
          className="flex h-full w-full flex-col items-center justify-center pb-[2.5em] pr-0 md:mt-[5.5em] md:flex-row md:gap-0 md:px-0 md:pr-6 lg:gap-[4em] lg:px-[3em] xl:gap-[6em] xxl:gap-[8em]"
        >
          <div className="flex w-full flex-col  md:w-fit md:min-w-fit">
            <div className="flex scale-100 flex-col gap-[2em] md:scale-75 lg:scale-100">
              <button
                onClick={() => {
                  setLightboxShoeSelected(shoeSelected ?? 0);
                }}
              >
                <Image
                  className="h-[20em] w-full object-cover sm:h-[28em] md:w-fit md:rounded-[1em] md:bg-gray-300"
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
              <div className="hidden justify-between gap-2 md:flex ">
                {[shoe1thumb, shoe2thumb, shoe3thumb, shoe4thumb].map((x, i) => (
                  <button
                    onClick={() => {
                      setShoeSelected(i);
                    }}
                    className={`${shoeSelected === i && 'outline outline-2 outline-orange'} rounded-[0.6em]`}
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
          <div className="flex w-full flex-col items-start px-6 py-6 md:w-[33em] md:px-0 md:py-0">
            <span className="mb-[1em] text-[0.85rem] font-[700] tracking-[0.1em] text-[orange]">SNEAKER COMPANY</span>
            <span className="mb-[0.8em] text-[2rem] font-[700] leading-[1em]  text-[#1E1F25] md:text-[2.8rem]">
              Fall Limited Edition Sneakers
            </span>
            <span className="mb-[1em] text-darkGrayishBlue">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer.
            </span>
            <div className="flex w-full items-center justify-between md:flex-col md:items-start">
              <div className="flex items-center gap-[1em]">
                <span className="text-[1.8rem] font-[700]">$125.00</span>
                <span className="rounded-md bg-paleOrange px-[0.6em] font-[700] text-orange">50%</span>
              </div>
              <div className="flex flex-col md:mb-[2em]">
                <span className="line-clamp-3 font-[700] text-grayishBlue">$250.00</span>
                <div className="absolute mt-[0.865em] h-[1px] w-[3.7em] bg-grayishBlue"></div>
              </div>
            </div>
            <div className="mt-4 flex h-full w-full flex-col gap-[1em] md:mt-0 md:h-[3.5em] md:flex-row">
              <div className="flex w-full items-center justify-between rounded-lg bg-lightGrayishBlue py-4 font-[700] md:w-[36%] md:py-0">
                <button
                  onClick={() => {
                    shoes > 0 && setShoes(shoes - 1);
                  }}
                  className="px-4 py-2 hover:opacity-50"
                >
                  <Image src={iconMinus as string} alt="minus" />
                </button>
                <span>{shoes}</span>
                <button
                  onClick={() => {
                    shoes < 1000 && setShoes(shoes + 1);
                  }}
                  className="px-4 py-2 hover:opacity-50"
                >
                  <Image src={iconPlus as string} alt="minus" />
                </button>
              </div>
              <button
                onClick={() => {
                  setStorage(storage + shoes);
                  setShoes(0);
                }}
                className="flex w-full items-center justify-center gap-[1em] rounded-lg bg-orange py-4 font-[700] text-white hover:opacity-60 md:w-[64%] md:py-0"
              >
                <Image height={15} src={whiteCart as string} alt="cart" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

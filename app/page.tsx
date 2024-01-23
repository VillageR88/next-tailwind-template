'use client';
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import imageHero1 from './images/desktop-image-hero-1.jpg';
import imageHero2 from './images/desktop-image-hero-2.jpg';
import imageHero3 from './images/desktop-image-hero-3.jpg';
import imageHero1Mobile from './images/mobile-image-hero-1.jpg';
import imageHero2Mobile from './images/mobile-image-hero-2.jpg';
import imageHero3Mobile from './images/mobile-image-hero-3.jpg';
import iconArrowLeft from './images/icon-angle-left.svg';
import iconArrowRight from './images/icon-angle-right.svg';
import imageAboutDark from './images/image-about-dark.jpg';
import imageAboutLight from './images/image-about-light.jpg';
import iconMobileNav from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';

enum Sequence {
  first,
  second,
  third,
}

enum Direction {
  left,
  right,
}

enum Text {
  text1,
  text2,
  text3,
}

export default function Home() {
  const sequence = {
    [Sequence.first]: [imageHero3, imageHero1, imageHero2] as StaticImageData[],
    [Sequence.second]: [imageHero1, imageHero2, imageHero3] as StaticImageData[],
    [Sequence.third]: [imageHero2, imageHero3, imageHero1] as StaticImageData[],
  };

  const SequenceMobile = {
    [Sequence.first]: [imageHero3Mobile, imageHero1Mobile, imageHero2Mobile] as StaticImageData[],
    [Sequence.second]: [imageHero1Mobile, imageHero2Mobile, imageHero3Mobile] as StaticImageData[],
    [Sequence.third]: [imageHero2Mobile, imageHero3Mobile, imageHero1Mobile] as StaticImageData[],
  };

  const articleText = {
    [Text.text1]: [
      {
        header: 'Discover innovative ways to decorate',
        body: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
      },
    ],
    [Text.text2]: [
      {
        header: 'We are available all across the globe',
        body: 'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
      },
    ],
    [Text.text3]: [
      {
        header: 'Manufactured with the best materials',
        body: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
      },
    ],
  };

  const [carouselDirection, setCarouselDirection] = useState<Direction | null>(null);
  const [currentSequence, setCurrentSequence] = useState<Sequence>(Sequence.first);
  const [text, setText] = useState<Text>(Text.text1);
  const [halfOfTime, setHalfOfTime] = useState<boolean>(false);
  useEffect(() => {
    if (halfOfTime) {
      if (carouselDirection === Direction.left) {
        setText((text) => {
          if (text === Text.text1) {
            return Text.text3;
          }
          return text - 1;
        });
      }
      if (carouselDirection === Direction.right) {
        setText((text) => {
          if (text === Text.text3) {
            return Text.text1;
          }
          return text + 1;
        });
      }
    }
  }, [carouselDirection, halfOfTime]);
  useEffect(() => {
    if (carouselDirection === null) {
      return;
    }

    const timeout = setTimeout(() => {
      if (carouselDirection === Direction.left) {
        setCurrentSequence((currentSequence) => {
          if (currentSequence === Sequence.first) {
            return Sequence.third;
          }

          return currentSequence - 1;
        });
      } else {
        setCurrentSequence((currentSequence) => {
          if (currentSequence === Sequence.third) {
            return Sequence.first;
          }

          return currentSequence + 1;
        });
      }
      setCarouselDirection(null);
    }, 1000);

    const halfOfTimer = setTimeout(() => {
      setHalfOfTime(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(halfOfTimer);
    };
  }, [carouselDirection]);

  useEffect(() => {
    const handleArrowPress = (event: KeyboardEvent) => {
      if (carouselDirection === null) {
        if (event.key === 'ArrowLeft') {
          setHalfOfTime(false);
          setCarouselDirection(Direction.left);
        } else if (event.key === 'ArrowRight') {
          setHalfOfTime(false);
          setCarouselDirection(Direction.right);
        }
      }
    };
    document.addEventListener('keydown', handleArrowPress);
    return () => {
      document.removeEventListener('keydown', handleArrowPress);
    };
  }, [carouselDirection]);

  const [divWidthNHeight, setDivWidthNHeight] = useState<number[]>([0, 0]);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleResize = () => {
      imageRef.current && setDivWidthNHeight([imageRef.current.clientWidth, imageRef.current.clientHeight]);
      if (window.innerWidth > 640) {
        setIsMobileNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [navHover, setNavHover] = useState<number | null>(null);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan ">
      <main className="flex max-h-[50em] w-full flex-col">
        {isMobileNavOpen && (
          <div className=" left-0 top-0 z-20 w-screen">
            <div className="flex h-[7.5em] w-[100%] items-center justify-between gap-12 bg-white px-6">
              <button
                className="mb-[-0.2em] ml-[-0.4em]"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                <Image className="m-2 flex sm:hidden" src={iconClose as string} alt="mobile navigation close" />
              </button>
              <div className="flex w-full justify-between">
                {['home', 'shop', 'about', 'contact'].map((x, i) => (
                  <button className="font-[600]" key={i}>
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="overflow-hidden md:w-[40em] lg:w-[52.5em]">
            <div
              style={{ width: divWidthNHeight[0], height: divWidthNHeight[1] }}
              className="absolute z-10 flex h-full w-full flex-col justify-between "
            >
              <div className="ml-[2em] mt-[2em] flex h-fit w-fit gap-[2em] text-white md:ml-[2em] md:mt-[0.75em] md:gap-6 lg:ml-[3em] lg:mt-[2em] lg:gap-[3.4em] xl:ml-[4em] xl:mt-[3em] ">
                <div className="absolute left-0 w-screen text-[2rem] sm:hidden">
                  {!isMobileNavOpen && (
                    <div className="absolute left-6 top-1">
                      <button
                        onClick={() => {
                          setIsMobileNavOpen(true);
                        }}
                        aria-label="Open mobile navigation"
                      >
                        <Image className="flex sm:hidden" src={iconMobileNav as string} alt="mobile navigation" />
                      </button>
                    </div>
                  )}

                  <div className="flex w-full justify-center">
                    <span>room</span>
                  </div>
                </div>
                <span className="hidden text-[1.9rem] sm:flex">room</span>
                <div className="hidden items-center gap-7 sm:flex md:gap-3 lg:gap-[1.9em]">
                  {['home', 'shop', 'about', 'contact'].map((x, i) => (
                    <div className="flex flex-col items-center gap-[0.3em]" key={i}>
                      <button
                        onMouseEnter={() => {
                          setNavHover(i);
                        }}
                        onMouseLeave={() => {
                          setNavHover(null);
                        }}
                        className={`${
                          ((currentSequence === Sequence.first && carouselDirection === null) ||
                            (currentSequence === Sequence.second && carouselDirection === Direction.left) ||
                            (currentSequence === Sequence.third && carouselDirection === Direction.right)) &&
                          'bg-[#A8ABB0]'
                        } h-fit rounded-xl bg-opacity-0 transition-colors duration-1000 md:bg-opacity-90 md:px-2 lg:bg-opacity-0 lg:px-0`}
                      >
                        {x}
                      </button>
                      {navHover === i && <div className="absolute mt-[1.7em] h-[2px] w-[1em] bg-white"></div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="self-end">
                <button
                  aria-label="Previous"
                  onClick={() => {
                    if (carouselDirection === null) {
                      setCarouselDirection(Direction.left);
                      setHalfOfTime(false);
                    }
                  }}
                  className="xl-p-0 inline-flex bg-black px-[1.5em] py-[1.1em] hover:bg-[#444444] lg:hidden"
                >
                  <Image
                    className="flex justify-center md:h-[80%] md:w-[80%] lg:h-fit lg:w-fit"
                    src={iconArrowLeft as string}
                    alt="left arrow"
                  />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => {
                    if (carouselDirection === null) {
                      setCarouselDirection(Direction.right);
                      setHalfOfTime(false);
                    }
                  }}
                  className="xl-p-0 inline-flex bg-black px-[1.5em] py-[1.1em] hover:bg-[#444444]  lg:hidden"
                >
                  <Image
                    className="md:h-[80%] md:w-[80%] lg:h-fit lg:w-fit"
                    src={iconArrowRight as string}
                    alt="right arrow"
                  />
                </button>
              </div>
            </div>
            <div
              style={{
                transform: `translateX(${
                  carouselDirection === Direction.left ? '0' : carouselDirection === Direction.right ? '-200' : '-100'
                }%)`,
                transition: carouselDirection !== null ? 'transform 1s ease-in-out' : 'none',
              }}
              className="hidden w-full md:flex"
            >
              <Image src={sequence[currentSequence][0]} alt="image of furniture" priority unoptimized />
              <Image ref={imageRef} src={sequence[currentSequence][1]} alt="image of furniture" priority unoptimized />
              <Image src={sequence[currentSequence][2]} alt="image of furniture" priority unoptimized />
            </div>
            <div
              style={{
                transform: `translateX(${
                  carouselDirection === Direction.left
                    ? '0'
                    : carouselDirection === Direction.right
                      ? '-66.666'
                      : '-33.333'
                }%)`,
                transition: carouselDirection !== null ? 'transform 1s ease-in-out' : 'none',
              }}
              className="flex h-auto w-[300%] md:hidden"
            >
              <Image
                className="w-screen"
                src={SequenceMobile[currentSequence][0]}
                alt="image of furniture"
                priority
                unoptimized
              />
              <Image
                className="w-screen"
                src={SequenceMobile[currentSequence][1]}
                alt="image of furniture"
                priority
                unoptimized
              />
              <Image
                className="w-screen"
                src={SequenceMobile[currentSequence][2]}
                alt="image of furniture"
                priority
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col bg-white md:w-[37.5em]">
            <div
              style={{
                transform: `scale(${halfOfTime || carouselDirection === null ? 1 : 0.88})`,
                transition: 'transform 0.5s ease-in-out',
              }}
              className="flex h-full w-full flex-col items-start justify-center self-center px-6 pb-16 pt-14 md:px-[1em] md:pb-0 md:pt-0 lg:mt-[2em] lg:w-[88%] lg:px-[0em] xl:ml-2 xl:mt-[3.5em] xl:w-[68%]"
            >
              <h1 className="text-[2.5rem] font-[600] leading-[0.92em] tracking-tighter md:text-[1.4rem] lg:text-[2.3rem] xl:text-[3.05rem]">
                {articleText[text][0].header}
              </h1>
              <span className="mt-[0.7em] leading-[1.38em] tracking-[-0.02em] text-[#B7B7B7] lg:mt-[1.4em]">
                {articleText[text][0].body}
              </span>
              <div className="mt-[2em] w-full justify-start md:mt-[0.8em] lg:mt-[1.2em]">
                <button className="fill-black hover:fill-[#888888] hover:text-[#B7B7B7]">
                  <div className="flex w-full items-center gap-[1.2em]">
                    <span className="text-[0.95rem] font-[600] tracking-[0.8em]">SHOP NOW</span>
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <button
                aria-label="Previous"
                onClick={() => {
                  if (carouselDirection === null) {
                    setCarouselDirection(Direction.left);
                    setHalfOfTime(false);
                  }
                }}
                className="hidden bg-black hover:bg-[#444444] md:py-[1em] lg:inline-flex lg:px-[2.06em] lg:py-[1.75em]"
              >
                <Image src={iconArrowLeft as string} alt="left arrow" />
              </button>
              <button
                aria-label="Next"
                onClick={() => {
                  if (carouselDirection === null) {
                    setCarouselDirection(Direction.right);
                    setHalfOfTime(false);
                  }
                }}
                className="hidden bg-black hover:bg-[#444444] md:py-[1em] lg:inline-flex  lg:px-[2.06em] lg:py-[1.75em]"
              >
                <Image src={iconArrowRight as string} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row-reverse lg:flex-row ">
          <Image className="w-full lg:w-fit" src={imageAboutDark} alt="image about dark" />
          <div className="ml-0 flex w-full flex-col justify-center gap-2.5 bg-white px-6 py-10 pt-[3em] md:w-[103%] md:px-[1em] md:py-0 md:pt-[0.5em] lg:ml-[-9em] lg:px-[2em] xl:ml-0 xl:px-0 xl:pl-[3em] xl:pr-[2.8em]">
            <h2 className="text-[0.88rem] font-[700] tracking-[0.4em] md:text-[0.91rem] lg:text-[1.02rem]">
              ABOUT OUR FURNITURE
            </h2>
            <span className="leading-[1.4em] tracking-[-0.02em] text-[#B7B7B7]">
              Our multifunctional collection blends design and function to suit your individual taste. Make each room
              unique, or pick a cohesive theme that best express your interests and what inspires you. Find the
              furniture pieces you need, from traditional to contemporary styles or anything in between. Product
              specialists are available to help you create your dream space.
            </span>
          </div>
          <Image
            className="mr-0 w-full md:hidden lg:mr-[-4em] lg:flex lg:w-fit xl:mr-0"
            src={imageAboutLight}
            alt="image about light"
          />
        </div>
      </main>
    </div>
  );
}

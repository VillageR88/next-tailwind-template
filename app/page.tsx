'use client';
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import imageHero1 from './images/desktop-image-hero-1.jpg';
import imageHero2 from './images/desktop-image-hero-2.jpg';
import imageHero3 from './images/desktop-image-hero-3.jpg';
import iconArrowLeft from './images/icon-angle-left.svg';
import iconArrowRight from './images/icon-angle-right.svg';
import imageAboutDark from './images/image-about-dark.jpg';
import imageAboutLight from './images/image-about-light.jpg';

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
      setText((text) => {
        if (text === Text.text1) {
          return Text.text2;
        } else if (text === Text.text2) {
          return Text.text3;
        } else {
          return Text.text1;
        }
      });
    }
  }, [halfOfTime]);
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
    const handleArrowLeftPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCarouselDirection(Direction.left);
      }
    };

    document.addEventListener('keydown', handleArrowLeftPress);

    return () => {
      document.removeEventListener('keydown', handleArrowLeftPress);
    };
  }, []);

  useEffect(() => {
    const handleArrowRightPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCarouselDirection(Direction.right);
      }
    };
    document.addEventListener('keydown', handleArrowRightPress);
    return () => {
      document.removeEventListener('keydown', handleArrowRightPress);
    };
  }, []);
  const [divWidthNHeight, setDivWidthNHeight] = useState<number[]>([0, 0]);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleResize = () => {
      imageRef.current && setDivWidthNHeight([imageRef.current.clientWidth, imageRef.current.clientHeight]);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan ">
      <main className="flex h-[50em] w-full flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-hidden md:w-[40em] lg:w-[52.5em]">
            <div
              style={{ width: divWidthNHeight[0], height: divWidthNHeight[1] }}
              className="absolute z-10 flex h-full w-full flex-col justify-between "
            >
              <div className="flex h-fit w-fit text-white md:ml-[2em] md:mt-[1em] md:gap-6 lg:ml-[3em] lg:mt-[2em] lg:gap-12 xl:ml-[4em] xl:mt-[3em] ">
                <span className="text-[2rem]">room</span>
                <div className="flex items-center md:gap-3 lg:gap-5">
                  {['home', 'shop', 'about', 'contact'].map((x, i) => (
                    <button
                      className="h-fit rounded-xl bg-[#A8ABB0] bg-opacity-90 md:px-2 lg:bg-opacity-0 lg:px-0"
                      key={i}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
              <div className="self-end">
                <button
                  aria-label="Previous"
                  onClick={() => {
                    setCarouselDirection(Direction.left);
                    setHalfOfTime(false);
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
                    setCarouselDirection(Direction.right);
                    setHalfOfTime(false);
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
              className="flex w-full"
            >
              <Image src={sequence[currentSequence][0]} alt="image of furniture" priority unoptimized />
              <Image ref={imageRef} src={sequence[currentSequence][1]} alt="image of furniture" priority unoptimized />
              <Image src={sequence[currentSequence][2]} alt="image of furniture" priority unoptimized />
            </div>
          </div>
          <div className="h-ful flex w-[37.5em] flex-col bg-white">
            <div
              style={{
                transform: `scale(${halfOfTime || carouselDirection === null ? 1 : 0.88})`,
                transition: 'transform 0.5s ease-in-out',
              }}
              className="flex h-full flex-col items-start justify-center self-center md:px-[1em] lg:mt-[2em] lg:w-[88%] lg:px-[0em] xl:ml-2 xl:mt-[3.5em] xl:w-[68%]"
            >
              <h1 className="font-[600] leading-[0.92em] tracking-tighter md:text-[1.5rem] lg:text-[2.3rem] xl:text-[3.05rem]">
                {articleText[text][0].header}
              </h1>
              <span className="mt-[0.7em] leading-[1.38em] tracking-[-0.02em] text-[#B7B7B7] lg:mt-[1.4em]">
                {articleText[text][0].body}
              </span>
              <div className="mt-[0.8em] w-full justify-start lg:mt-[1.2em]">
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
                  setCarouselDirection(Direction.left);
                  setHalfOfTime(false);
                }}
                className="hidden bg-black hover:bg-[#444444] md:py-[1em] lg:inline-flex  lg:px-[2.06em] lg:py-[1.75em]"
              >
                <Image src={iconArrowLeft as string} alt="left arrow" />
              </button>
              <button
                aria-label="Next"
                onClick={() => {
                  setCarouselDirection(Direction.right);
                  setHalfOfTime(false);
                }}
                className="hidden bg-black hover:bg-[#444444] md:py-[1em] lg:inline-flex  lg:px-[2.06em] lg:py-[1.75em]"
              >
                <Image src={iconArrowRight as string} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-row-reverse lg:flex-row ">
          <Image className="md:w-full lg:w-fit" src={imageAboutDark} alt="image about dark" />
          <div className="ml-0 flex w-[103%] flex-col justify-center gap-2.5 bg-white pt-[0.5em] md:px-[1em] lg:ml-[-9em] lg:px-[2em] xl:ml-0 xl:px-0 xl:pl-[3em] xl:pr-[2.8em]">
            <h2 className="font-[700] tracking-[0.4em] md:text-[0.91rem] lg:text-[1.02rem]">ABOUT OUR FURNITURE</h2>
            <span className="leading-[1.4em] tracking-[-0.02em] text-[#B7B7B7]">
              Our multifunctional collection blends design and function to suit your individual taste. Make each room
              unique, or pick a cohesive theme that best express your interests and what inspires you. Find the
              furniture pieces you need, from traditional to contemporary styles or anything in between. Product
              specialists are available to help you create your dream space.
            </span>
          </div>
          <Image
            className="mr-0 md:hidden lg:mr-[-4em] lg:flex xl:mr-0"
            src={imageAboutLight}
            alt="image about light"
          />
        </div>
      </main>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
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

export default function Home() {
  const sequence = {
    [Sequence.first]: [imageHero3, imageHero1, imageHero2] as StaticImageData[],
    [Sequence.second]: [imageHero1, imageHero2, imageHero3] as StaticImageData[],
    [Sequence.third]: [imageHero2, imageHero3, imageHero1] as StaticImageData[],
  };

  const [carouselDirection, setCarouselDirection] = useState<Direction | null>(null);
  const [currentSequence, setCurrentSequence] = useState<Sequence>(Sequence.first);

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

    return () => {
      clearTimeout(timeout);
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan ">
      <main className="flex h-[50em] w-full flex-col">
        <div className="flex">
          <div className="w-[52.5em] overflow-hidden">
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
              <Image src={sequence[currentSequence][1]} alt="image of furniture" priority unoptimized />
              <Image src={sequence[currentSequence][2]} alt="image of furniture" priority unoptimized />
            </div>
          </div>
          <div className="flex h-full w-[37.5em] flex-col bg-white">
            <div className="ml-2 flex h-full flex-col items-center justify-center self-center lg:mt-[2em] lg:w-[85%] xl:mt-[3.5em] xl:w-[68%]">
              <h1 className="font-[600] leading-[0.92em] tracking-tighter lg:text-[2.5rem] xl:text-[3.05rem]">
                Discover innovative ways to decorate
              </h1>
              <span className="mt-[1.4em] leading-[1.38em] tracking-[-0.02em] text-[#B7B7B7]">
                We provide unmatched quality, comfort, and style for property owners across the country. Our experts
                combine form and function in bringing your vision to life. Create a room in your own style with our
                collection and make your property a reflection of you and what you love.
              </span>
              <div className="mt-[1.2em] w-full justify-start">
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
                }}
                className="bg-black hover:bg-[#444444] lg:px-[1.25em] lg:py-[1em] xl:p-0 xl:px-[2.06em] xl:py-[1.75em]"
              >
                <Image src={iconArrowLeft as string} alt="left arrow" />
              </button>
              <button
                aria-label="Next"
                onClick={() => {
                  setCarouselDirection(Direction.right);
                }}
                className="xl-p-0 bg-black hover:bg-[#444444] lg:px-[1.25em] lg:py-[1em] xl:px-[2.06em] xl:py-[1.75em]"
              >
                <Image src={iconArrowRight as string} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <Image src={imageAboutDark} alt="image about dark" />
          <div className="flex flex-col justify-center gap-2.5 bg-white pl-[3em] pr-[2.8em] pt-[0.5em] lg:ml-[-14em] xl:ml-0">
            <h2 className="text-[1.02rem] font-[700] tracking-[0.4em]">ABOUT OUR FURNITURE</h2>
            <span className="leading-[1.4em] tracking-[-0.02em] text-[#B7B7B7]">
              Our multifunctional collection blends design and function to suit your individual taste. Make each room
              unique, or pick a cohesive theme that best express your interests and what inspires you. Find the
              furniture pieces you need, from traditional to contemporary styles or anything in between. Product
              specialists are available to help you create your dream space.
            </span>
          </div>
          <Image src={imageAboutLight} alt="image about light" />
        </div>
      </main>
    </div>
  );
}

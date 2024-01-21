'use client';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import imageHero1 from './images/desktop-image-hero-1.jpg';
import imageHero2 from './images/desktop-image-hero-2.jpg';
import imageHero3 from './images/desktop-image-hero-3.jpg';
import iconArrowLeft from './images/icon-angle-left.svg';
import iconArrowRight from './images/icon-angle-right.svg';
import iconArrow from './images/icon-arrow.svg';

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan ">
      <main className="flex h-[50em] w-full flex-col bg-white">
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
          <div className="flex h-full w-[37.5em] flex-col">
            <div className="mt-[3em] flex h-full w-full flex-col items-center justify-center pl-[6.2em] pr-[6em]">
              <h1 className="text-[3rem] font-[600] leading-[0.9em] tracking-tighter">
                Discover innovative ways to decorate
              </h1>
              <span className="mt-[1.5em] leading-[1.4em] tracking-tight text-[#B7B7B7]">
                We provide unmatched quality, comfort, and style for property owners across the country. Our experts
                combine form and function in bringing your vision to life. Create a room in your own style with our
                collection and make your property a reflection of you and what you love.
              </span>
              <div className="w-full justify-start">
                <button className="fill-black hover:fill-[#888888] hover:text-[#B7B7B7]">
                  <div className="mt-[1.2em] flex w-full items-center gap-[1.2em]">
                    <span className="tracking-[0.7em] ">SHOP NOW</span>
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                        fillRule="nonzero"
                        fill="nonzero"
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
                className="bg-black px-[2.06em] py-[1.75em] hover:bg-[#444444]"
              >
                <Image src={iconArrowLeft as string} alt="left arrow" />
              </button>
              <button
                aria-label="Next"
                onClick={() => {
                  setCarouselDirection(Direction.right);
                }}
                className="bg-black px-[2.06em] py-[1.75em] hover:bg-[#444444]"
              >
                <Image src={iconArrowRight as string} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

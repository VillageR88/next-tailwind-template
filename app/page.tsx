'use client';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import imageHero1 from './images/desktop-image-hero-1.jpg';
import imageHero2 from './images/desktop-image-hero-2.jpg';
import imageHero3 from './images/desktop-image-hero-3.jpg';

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
      <main className="h-[50em] w-full bg-white">
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
          <button
            onClick={() => {
              setCarouselDirection(Direction.left);
            }}
            className="bg-slate-500 p-4"
          >
            LEFT
          </button>
          <button
            onClick={() => {
              setCarouselDirection(Direction.right);
            }}
            className="bg-slate-500 p-4"
          >
            RIGHT
          </button>
        </div>
      </main>
    </div>
  );
}

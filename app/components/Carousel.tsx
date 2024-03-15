'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import imageSlide1 from '@/public/assets/images/image-slide-1.jpg';
import imageSlide2 from '@/public/assets/images/image-slide-2.jpg';
import imageSlide3 from '@/public/assets/images/image-slide-3.jpg';
import imageSlide4 from '@/public/assets/images/image-slide-4.jpg';
import imageSlide5 from '@/public/assets/images/image-slide-5.jpg';
import iconArrowLeft from '@/public/assets/images/icon-arrow-left.svg';
import iconArrowRight from '@/public/assets/images/icon-arrow-right.svg';

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselItems = [
    {
      image: imageSlide1,
      alt: 'image-slide-1',
    },
    {
      image: imageSlide2,
      alt: 'image-slide-2',
    },
    {
      image: imageSlide3,
      alt: 'image-slide-3',
    },
    {
      image: imageSlide4,
      alt: 'image-slide-4',
    },
    {
      image: imageSlide5,
      alt: 'image-slide-5',
    },
  ];

  return (
    <div ref={carouselRef} className="mt-[32px] w-[850px] md:mt-[56px] md:w-[1700px]">
      <Slider slidesToShow={3} speed={500} initialSlide={1}>
        {carouselItems.map((item, index) => {
          return (
            <div className="outline-none" key={index}>
              <Image
                className="min-h-[180px] min-w-[270px] scale-[95%] rounded-[10px] md:min-h-[360px] md:md:min-w-[540px] md:scale-100"
                width={540}
                height={360}
                src={item.image}
                alt={item.alt}
                priority
              />
            </div>
          );
        })}
      </Slider>
      <div className="mt-[22px] flex w-full justify-center gap-[16px] md:mt-[56px]">
        <button
          aria-label="Previous Slide"
          className="flex size-[56px] items-center justify-center rounded-full bg-black transition hover:bg-galacticBlue"
          onClick={() => {
            const element = carouselRef.current?.querySelector('.slick-prev');
            if (element instanceof HTMLElement) {
              element.click();
            }
          }}
        >
          <Image width={15} height={16} src={iconArrowLeft as string} alt="Previous Slide" />
        </button>
        <button
          aria-label="Next Slide"
          className="flex size-[56px] items-center justify-center rounded-full bg-black transition hover:bg-galacticBlue"
          onClick={() => {
            const element = carouselRef.current?.querySelector('.slick-next');
            if (element instanceof HTMLElement) {
              element.click();
            }
          }}
        >
          <Image width={15} height={16} src={iconArrowRight as string} alt="Next Slide" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

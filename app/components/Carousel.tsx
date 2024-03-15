'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import imageSlide1 from '@/public/assets/images/image-slide-1.jpg';
import imageSlide2 from '@/public/assets/images/image-slide-2.jpg';
import imageSlide3 from '@/public/assets/images/image-slide-3.jpg';
import imageSlide4 from '@/public/assets/images/image-slide-4.jpg';
import imageSlide5 from '@/public/assets/images/image-slide-5.jpg';

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const buttons = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
  const carouselItems = [
    {
      image: imageSlide1,
    },
    {
      image: imageSlide2,
    },
    {
      image: imageSlide3,
    },
    {
      image: imageSlide4,
    },
    {
      image: imageSlide5,
    },
  ];

  return (
    <div ref={carouselRef} className="mt-[4em] w-full">
      <Slider
        dots
        infinite
        slidesToShow={3}
        speed={500}
        initialSlide={1}
        dotsClass="slick-dots"
        beforeChange={(_, newIndex) => {
          setSelectedSlide(newIndex as number);
        }}
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div className="mt-20 flex h-[10em] items-center justify-end min-[400px]:h-[18em] md:h-fit md:w-1/2">
                  <Image width={540} height={360} src={item.image} alt="image" priority />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="mt-10 flex w-full flex-col justify-center md:flex-row">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                const element = carouselRef.current?.querySelector(
                  '.slick-dots li:nth-child(' + (index + 1) + ') button',
                );
                if (element instanceof HTMLElement) {
                  element.click();
                }
              }}
              className={`${index === 0 ? 'md:ml-[-2em]' : index === 1 ? 'md:ml-[5em]' : 'md:ml-[6em]'} text-[1.1rem] ${
                selectedSlide === index ? 'text-[hsl(229,31%,21%)]' : 'text-[hsl(229,8%,60%)] md:hover:text-[#DC6465]'
              } transition duration-300 ease-in-out`}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

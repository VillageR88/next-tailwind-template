'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import imageSlide1 from '@/public/assets/images/image-slide-1.jpg';
import imageSlide2 from '@/public/assets/images/image-slide-2.jpg';
import imageSlide3 from '@/public/assets/images/image-slide-3.jpg';
import imageSlide4 from '@/public/assets/images/image-slide-4.jpg';
import imageSlide5 from '@/public/assets/images/image-slide-5.jpg';

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <div ref={carouselRef} className="mt-[4em] size-full">
      <Slider infinite slidesToShow={3} speed={500} initialSlide={1}>
        {carouselItems.map((item, index) => {
          return (
            <Image
              key={index}
              className="rounded-[10px]"
              width={540}
              height={360}
              src={item.image}
              alt="image"
              priority
            />
          );
        })}
      </Slider>
      <div className="mt-10 flex w-full justify-center gap-[24px]">
        <button
          onClick={() => {
            const element = carouselRef.current?.querySelector('.slick-prev');
            if (element instanceof HTMLElement) {
              element.click();
            }
          }}
        >
          LEFT BUTTON
        </button>
        <button
          onClick={() => {
            const element = carouselRef.current?.querySelector('.slick-next');
            if (element instanceof HTMLElement) {
              element.click();
            }
          }}
        >
          RIGHT BUTTON
        </button>
      </div>
    </div>
  );
};

export default Carousel;

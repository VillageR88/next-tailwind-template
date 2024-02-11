'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const buttons = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
  const carouselItems = [
    {
      image: './images/illustration-features-tab-1.svg',
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
      image: './images/illustration-features-tab-2.svg',
      title: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
      image: './images/illustration-features-tab-3.svg',
      title: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slider-container mt-[4em] w-full">
      <div className="m-0 flex w-full justify-center">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className={`${
                index === 0 ? 'ml-[-2em]' : index === 1 ? 'ml-[5em]' : 'ml-[6em]'
              } text-[1.1rem] text-[hsl(229,8%,60%)] hover:text-[#DC6465]`}
            >
              {button}
            </button>
          );
        })}
      </div>
      <Slider
        dots={true}
        infinite
        speed={500}
        initialSlide={0}
        dotsClass="slick-dots"
        appendDots={(dots) => {
          console.log(dots);
          return (
            <div
              style={{
                bottom: '33.3em',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className="flex flex-col">
                <ul className="flex h-1 w-[45.7em] justify-center gap-[13.5em]"> {dots} </ul>
                <div className="h-[1px] w-full bg-[#ddd8d8]"></div>
              </div>
            </div>
          );
        }}
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={index} className="mt-[4em]">
              <div className="flex w-full bg-[white] py-[2.5em]">
                <div className="w-1/2">
                  <Image width={25} height={25} src={item.image} alt="image" className="h-fit w-fit" />
                </div>
                <div className="flex w-1/2 flex-col">
                  <h3 className="text-center text-[1rem] font-[700] text-[hsl(233,26%,24%)]">{item.title}</h3>
                  <p className={`w-[29em] px-4 md:px-0`}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

'use client';
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

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
  console.log(isMobile);

  return (
    <div ref={carouselRef} className="slider-container mt-[4em] w-full">
      <div className="m-0 flex w-full justify-center">
        {buttons.map((button, index) => {
          return (
            <button
              onClick={() => {
                const element = carouselRef.current?.querySelector(
                  '.slick-dots li:nth-child(' + (index + 1) + ') button',
                );
                if (element instanceof HTMLElement) {
                  element.click();
                }
              }}
              key={index}
              className={`${index === 0 ? 'ml-[-2em]' : index === 1 ? 'ml-[5em]' : 'ml-[6em]'} text-[1.1rem] ${
                selectedSlide === index ? 'text-[hsl(229,31%,21%)]' : 'text-[hsl(229,8%,60%)] hover:text-[#DC6465]'
              }`}
            >
              {button}
            </button>
          );
        })}
      </div>
      <Slider
        ref={(slider) => (slider = slider)}
        dots={true}
        infinite
        speed={500}
        initialSlide={0}
        dotsClass="slick-dots"
        afterChange={(index) => {
          setSelectedSlide(index);
        }}
        beforeChange={(index) => {
          setSelectedSlide(index);
        }}
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
              <div className="flex w-full  py-[2.5em]">
                <div className="flex h-fit w-1/2 items-center justify-end">
                  <Image
                    className="mr-[1em] flex h-fit w-fit "
                    width={100}
                    height={100}
                    src={item.image}
                    alt="image"
                    priority
                  />
                </div>
                <div className="flex h-[20em] w-1/2 flex-col items-center justify-center rounded-[1em] bg-[#ffffffda]">
                  <div className="mr-[4em] mt-[1em] flex h-full w-[27em] flex-col items-start justify-center gap-[1.2em]">
                    <h3 className="text-center text-[2rem] font-[500] text-[#282D41]">{item.title}</h3>
                    <p className="text-[1.1rem] text-[hsl(229,8%,60%)]">{item.description}</p>
                    <button
                      className={`mr-[-0.15em] mt-[1.2em] h-[3.7em] w-[8.8em] rounded-[0.3em] border-2 border-[#5266E3] bg-[#5266E3] text-[0.82rem] font-[500] tracking-widest text-[white] shadow-[0_3px_5px_4px_#E5EBF8] transition hover:border-[#DC6465] hover:bg-[white] hover:text-[#DC6465]`}
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="mt-[-23.5em] h-[22em] w-[40em] rounded-r-full bg-[#4D61D0] px-10"> </div>;
    </div>
  );
};

export default Carousel;

'use client';
import React, { useState, useRef } from 'react';
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

  return (
    <div ref={carouselRef} className="slider-container mt-[4em] w-full">
      <div className="block w-full px-10 md:hidden">
        <div className="flex h-[1px]  bg-[#ddd8d8] md:hidden"></div>
      </div>

      <div className="m-0 flex w-full flex-col justify-center md:flex-row">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mt-[1em] flex flex-col gap-[0.7em] px-10 md:mt-0 md:gap-0 md:px-0 ">
              <button
                onClick={() => {
                  const element = carouselRef.current?.querySelector(
                    '.slick-dots li:nth-child(' + (index + 1) + ') button',
                  );
                  if (element instanceof HTMLElement) {
                    element.click();
                  }
                }}
                className={`${
                  index === 0 ? 'md:ml-[-2em]' : index === 1 ? 'md:ml-[5em]' : 'md:ml-[6em]'
                } text-[1.1rem] ${
                  selectedSlide === index ? 'text-[hsl(229,31%,21%)]' : 'text-[hsl(229,8%,60%)] md:hover:text-[#DC6465]'
                } transition duration-300 ease-in-out`}
              >
                {button}
              </button>
              <div className="flex w-full flex-col items-center">
                <div
                  className={`${
                    selectedSlide === index ? 'bg-[#DC6465]' : 'bg-[white]'
                  } translate block h-[5px] w-[8em] transition duration-300 md:hidden`}
                ></div>
                <div className="flex h-[1px] w-full bg-[#ddd8d8] md:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
      <Slider
        ref={(slider) => (slider = slider)}
        dots
        infinite
        speed={500}
        initialSlide={0}
        dotsClass="slick-dots"
        beforeChange={(_, newIndex) => {
          setSelectedSlide(newIndex);
        }}
        appendDots={(dots) => {
          console.log(dots);
          return (
            <div
              style={{
                bottom: '95%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className="flex flex-col">
                <ul className="hidden h-1 justify-center gap-[13.5em] md:flex xl:w-[45.7em]"> {dots} </ul>
                <div className="h-[1px] w-full bg-[#ddd8d8]"></div>
              </div>
            </div>
          );
        }}
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={index} className="md:mt-[4em]">
              <div className="flex w-full flex-col items-center py-[2.5em] md:flex-row">
                <div className="mt-10 flex h-[18em] items-center justify-end md:h-fit md:w-1/2">
                  <Image
                    className="flex h-fit w-fit px-10 md:px-0 lg:mr-[1em]"
                    width={100}
                    height={100}
                    src={item.image}
                    alt="image"
                    priority
                  />
                </div>
                <div className="mt-[5em] flex flex-col items-center justify-center rounded-[1em] md:mt-0 md:h-[20em] md:w-1/2 md:bg-[#ffffffda]">
                  <div className="mx:px-0 mt-[1em] flex h-full flex-col items-center justify-center gap-[1.2em] px-7 pt-5 text-center md:mr-[4em] md:items-start md:text-start lg:w-[27em]">
                    <h3 className="text-center text-[1.65rem]  font-[500] text-[#282D41] md:text-[1.5rem] lg:text-[2rem]">
                      {item.title}
                    </h3>
                    <p className="text-[1rem] text-[hsl(229,8%,60%)] lg:text-[1.1rem]">{item.description}</p>
                    <button
                      className={`invisible mr-[-0.15em] mt-[-6em] h-[3.7em] rounded-[0.3em] border-2 border-[#5266E3] bg-[#5266E3] text-[0.82rem] font-[500] tracking-widest text-[white] shadow-[0_3px_5px_4px_#E5EBF8] hover:border-[hsl(231,69%,60%)] hover:bg-[white]  hover:text-[hsl(231,69%,60%)] md:visible md:mt-[1.2em] md:block md:w-[8.8em] md:transition`}
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
      <div className="hidden h-[8em] w-[80%] rounded-r-full bg-[#4D61D0] px-10 min-[200px]:mt-[-34em] min-[230px]:block min-[300px]:mt-[-30em] min-[350px]:mt-[-26em] min-[400px]:mt-[-28em] min-[400px]:h-[13em] min-[600px]:mt-[-32.4em] min-[600px]:h-[21em] md:mt-[-20.5em] md:h-[18em] md:w-[40%] lg:mt-[-25em] lg:h-[22em] xl:w-[40em]"></div>
    </div>
  );
};

export default Carousel;

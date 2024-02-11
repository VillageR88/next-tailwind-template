'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
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
    <div className="slider-container mt-[5em] w-full">
      <Slider
        dots={true}
        infinite
        speed={500}
        initialSlide={0}
        appendDots={(dots) => (
          <div
            style={{
              position: 'relative',
              scale: '0.4',
              marginTop: '-2em',
              paddingTop: '1em',
              paddingBottom: '2em',
              bottom: '34em',
            }}
          >
            <ul style={{ margin: '0px' }}> {dots} </ul>
          </div>
        )}
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={index}>
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

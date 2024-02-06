'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const carouselItems = [
  {
    avatar: '/images/avatar-anisha.png',
    author: 'Anisha Li',
    quote:
      '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
  },
  {
    avatar: '/images/avatar-ali.png',
    author: 'Ali Bravo',
    quote:
      '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
  },
  {
    avatar: '/images/avatar-richard.png',
    author: 'Richard Watts',
    quote:
      '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
  },
  {
    avatar: '/images/avatar-shanai.png',
    author: 'Shanai Gough',
    quote:
      '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
  },
];
function MultipleItems() {
  return (
    <div className="slider-container mt-[4em] w-full">
      <Slider lazyLoad="progressive" variableWidth infinite speed={500} initialSlide={1} centerMode>
        {carouselItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center ">
              <div className="z-50 mb-[-2em] flex justify-center">
                <Image
                  width={25}
                  height={25}
                  src={item.avatar}
                  alt={item.author}
                  className="h-[4.5em] w-[4.5em] rounded-full"
                />
              </div>
              <div className="bg-[#FAFAFA] py-[2.5em]">
                <h3 className="mt-4 text-center text-[1rem] font-[700] text-[hsl(233,26%,24%)]">{item.author}</h3>
                <div className="mt-4 flex w-full justify-center text-center text-[1rem] text-[hsl(233,8%,62%)]">
                  <p className={index !== 2 ? 'w-[28.8em]' : 'w-[29em]'}>{item.quote}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;

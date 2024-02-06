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
    <div className="slider-container container">
      <Slider centerMode dots infinite speed={500} slidesToShow={3} slidesToScroll={3}>
        {carouselItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image width={20} height={20} src={item.avatar} alt={item.author} className="h-16 w-16 rounded-full" />
              <p className="mt-4 text-center text-[1.6rem] text-[hsl(233,8%,62%)]">{item.quote}</p>
              <h3 className="mt-4 text-[1.6rem] font-[700] text-[hsl(233,26%,24%)]">{item.author}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;

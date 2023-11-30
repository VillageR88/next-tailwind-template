'use client';
import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/800.css';
import React from 'react';
import Slider from '@mui/material/Slider';
import thumbImage from './images/icon-slider.svg';
import { styled } from '@mui/system'; // Import styled from @mui/system

const CustomThumb = styled('span')({
  width: 32,
  height: 32,
  borderRadius: '50%',
  '&::before': {
    content: "''",
    backgroundImage: `url(${thumbImage})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    display: 'block',
    zIndex: 1, // Ensure the thumb is above other elements
  },
  '&:hover': {
    boxShadow: 'none',
  },
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-manrope">
      <div className="flex h-[50em] w-full flex-col items-center bg-[#F9FAFF] bg-[url('./images/bg-pattern.svg')] bg-top bg-no-repeat ">
        {/*top wrapper*/}
        <div className="mt-[3.75em] flex h-[10em] w-fit flex-col items-center justify-center gap-[0.62em] bg-[url('./images/pattern-circles.svg')] bg-center  bg-no-repeat">
          <span className="text-[1.75rem] font-[800] text-darkDesaturatedBlue_TextCTABackground">
            Simple, traffic-based pricing
          </span>
          <span className="text-[0.94rem] font-[600] text-grayishBlue_Text">
            Sign-up for our 30-day trial. No credit card required.
          </span>
        </div>
        {/*main wrapper*/}
        <div className="mt-[2.9em] flex h-[24.8em] w-[33.8em] flex-col rounded-[0.5em] bg-white shadow-xl shadow-slate-200">
          <div className="mt-[3.6em] flex justify-between px-[2.8em]">
            <span className="text-[0.9rem] font-[800]">100K PAGEVIEWS</span>
            <div>
              <span>$16.00</span>
              <span>/ month</span>
            </div>
          </div>
          <Slider
            className="h-[0.5em] w-[82%] self-center"
            max={4}
            min={0}
            components={{ Thumb: CustomThumb }} // Apply the custom thumb component
            sx={{
              '& .MuiSlider-track': {
                backgroundColor: 'hsl(174, 86%, 45%)', // Light gray background for track
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#E0E0E0', // Light gray background for rail
              },
            }}
          />{' '}
        </div>
      </div>
    </main>
  );
}

'use client';
import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/800.css';
import React from 'react';
import Slider from '@mui/material/Slider';
import Image from 'next/image';
import thumbImage from './images/icon-slider.svg';

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
            sx={{
              '& .MuiSlider-thumb': {
                boxShadow: '2px 10px 12px 12px rgba(15, 253, 248, 0.1)', // Add a consistent shadow in rgba(15, 253, 248, 0.3) color to the thumb for all states
                color: '#14D5C8', // Change the color of the thumb
                width: 40, // Set the width of the thumb
                height: 40, // Set the height of the thumb
                backgroundImage: 'url(./images/icon-slider.svg)', // Set the background image of the thumb
                backgroundPosition: 'center', // Position the background image at the center
                backgroundRepeat: 'no-repeat', // Do not repeat the background image
                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible, &:before': {
                  boxShadow: '2px 10px 12px 12px rgba(15, 253, 248, 0.1)', // Add a consistent shadow in rgba(15, 253, 248, 0.3) color to the thumb for all states
                },
              },

              '& .MuiSlider-track': {
                backgroundColor: '#A2F3EB', // Light gray background for track
                border: 0,
              },
              '& .MuiSlider-rail': {
                border: 0,
                backgroundColor: '#E0E0E0', // Light gray background for rail
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}

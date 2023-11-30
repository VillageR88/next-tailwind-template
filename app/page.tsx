'use client';
import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/800.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Image from 'next/image';
import check from './images/icon-check.svg';

interface CustomEventTarget extends EventTarget {
  value: number;
}
const pageViews = ['10K', '50K', '100K', '500K', '1M'];
const perMonth = [8, 12, 16, 24, 36];
export default function Home() {
  const [hoverOnMonthly, setHoverOnMonthly] = useState<boolean>(false);
  const [selection, setSelection] = useState<number>(2);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-manrope">
      <div className="flex h-[50em] w-full flex-col items-center bg-[#F9FAFF] bg-[url('./images/bg-pattern.svg')] bg-top bg-no-repeat ">
        {/*top wrapper*/}
        <div className="mt-[3.75em] flex h-[10em] w-fit flex-col items-center justify-center gap-[0.62em] bg-[url('./images/pattern-circles.svg')] bg-center  bg-no-repeat">
          <span className="text-[1.5rem]  font-[800] text-darkDesaturatedBlue_TextCTABackground md:text-[1.75rem]">
            Simple, traffic-based pricing
          </span>
          <span className="whitespace-pre-line px-[2em] text-center text-[0.94rem] font-[600] text-grayishBlue_Text md:whitespace-normal md:px-0 ">
            {'Sign-up for our 30-day trial.\nNo credit card required.'}
          </span>
        </div>
        {/*main wrapper*/}
        <div className="mt-[2.9em] flex h-[24.8em] flex-col rounded-[0.5em] bg-white shadow-xl shadow-slate-200 md:w-[33.8em]">
          <div className="mt-[2.4em] flex items-center justify-between pl-[2.8em] pr-[3.05em]">
            <span className="mt-[-0.1em] text-[0.89rem] font-[800] tracking-[0.13em] text-grayishBlue_Text">
              {pageViews[selection]} PAGEVIEWS
            </span>
            <div className="flex items-center gap-[0.5em] text-darkDesaturatedBlue_TextCTABackground">
              <span className="text-[2.5rem] font-[800] tracking-[-0.02em]">${perMonth[selection]}.00</span>
              <span className="font-[600] text-grayishBlue_Text">/ month</span>
            </div>
          </div>
          <Slider
            inputMode="none"
            onChange={(e) => {
              const target = e.target as CustomEventTarget;
              setSelection(target.value);
            }}
            className="mt-[1.5em] h-[0.5em] self-center"
            defaultValue={2}
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
                '&:hover': {
                  backgroundColor: '#7CEADF',
                },
                '&.Mui-active': { backgroundColor: '#22AEA1' },
              },

              '& .MuiSlider-track': {
                backgroundColor: '#A2F3EB', // Light gray background for track
                border: 0,
              },
              '& .MuiSlider-rail': {
                border: 0,
                backgroundColor: '#E0E0E0', // Light gray background for rail
              },
              width: 444,
            }}
          />
          <div className="mr-[4em] mt-[2.6em] flex items-center justify-end">
            <span className="mr-[0.3em] text-[0.76rem] font-[600] text-grayishBlue_Text">Monthly Billing</span>
            <Switch
              onMouseEnter={() => {
                setHoverOnMonthly(true);
              }}
              onMouseLeave={() => {
                setHoverOnMonthly(false);
              }}
              color="default"
              className="mx-[0.8em] bg-blue-100"
              size="small"
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  transform: 'translateX(20px)',
                },
                '& .MuiSwitch-thumb': {
                  boxSizing: 'border-box',
                  width: 15,
                  height: 15,
                },
                '& .MuiSwitch-track': {
                  backgroundColor: !hoverOnMonthly ? 'hsl(223, 50%, 87%)' : '#7EE9D9', // Set the track's background color to red for both checked and unchecked states
                  boxShadow: 'none',
                  boxSizing: 'border-box',
                  opacity: 1,
                },
                height: 22,
                width: 43,
                display: 'flex',
                padding: 0,
                borderRadius: '20px',
              }}
            />
            <span className="ml-[0.3em] mr-[0.6em] text-[0.76rem] font-[600] text-grayishBlue_Text">
              Yearly Billing
            </span>
            <span className="h-fit rounded-[1em] bg-lightGrayishRed_DiscountBackground px-[0.6em] pt-[0.1em] text-[0.65rem] font-[800] text-lightRed_Discount_Text">
              25% discount
            </span>
          </div>
          <hr className="mt-[2.6em] opacity-70" />
          <div className=" mt-[1em] flex h-[6.4em] w-full items-center pl-[2.95em] pr-[2.8em]">
            <div className="flex h-full w-full flex-col justify-center gap-[0.54em] ">
              <div className="flex items-center gap-[0.9em]">
                <Image className="h-fit" src={check as string} alt="check icon" />
                <span className="mr-[0.6em] text-[0.76rem] font-[600] text-grayishBlue_Text">Unlimited websites</span>
              </div>
              <div className="flex items-center gap-[0.9em]">
                <Image className="h-fit" src={check as string} alt="check icon" />
                <span className="mr-[0.6em] text-[0.76rem] font-[600] text-grayishBlue_Text">100% data ownership</span>
              </div>
              <div className="flex items-center gap-[0.9em]">
                <Image className="h-fit" src={check as string} alt="check icon" />
                <span className="mr-[0.6em] text-[0.76rem] font-[600] text-grayishBlue_Text">Email reports</span>
              </div>
            </div>
            <button className="flex h-[3.3em] w-[22.2em] items-center justify-center rounded-[2em] bg-darkDesaturatedBlue_TextCTABackground text-[0.77rem]  font-[600] text-paleBlue_CTA_Text hover:text-white">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

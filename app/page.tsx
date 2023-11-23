'use client';
import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { useState } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import arrowLight from './images/icon-arrow-light.svg';
import arrowWhite from './images/icon-arrow-white.svg';
const product = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
const company = ['About', 'Team', 'Blog', 'Careers'];
const connect = ['Contact', 'Newsletter', 'LinkedIn'];

const ButtonWithArrow = ({
  action,
  name,
  list,
  clicked,
}: {
  name: string;
  list: string[];
  clicked: string;
  action(value: string): undefined;
}) => {
  const [arrowColor, setArrowColor] = useState<unknown>(arrowLight);

  return (
    <div>
      <div
        onPointerEnter={() => {
          setArrowColor(arrowWhite);
        }}
        onPointerLeave={() => {
          setArrowColor(arrowLight);
        }}
        onClick={() => {
          action(name);
        }}
        className="flex content-center items-center gap-2 decoration-white decoration-2 hover:cursor-pointer hover:underline"
      >
        <button className="font-ubuntu font-[500] text-[#FFD9D5] hover:text-whiteText">{name}</button>
        <Image
          src={arrowColor as string}
          alt="arrow"
          className={`mt-1 transition-transform ${clicked === name && 'blend rotate-180'}`}
        />
      </div>
      <div
        className={`${
          clicked === name ? 'flex' : 'hidden'
        } absolute ml-[-1.5em] mt-7 w-[10.5em] flex-col items-start gap-2 rounded-[0.3em] bg-white py-7 pl-6`}
      >
        {list.map((x, i) => (
          <button className="font-ubuntu font-[400] hover:font-[600]" key={i}>
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

const ButtonTypeSignUp = ({ name }: { name: string }) => {
  return (
    <button className="w-[8.5em] rounded-[1.5em] bg-white py-[0.75em] font-ubuntu font-[600] text-[#F44D74] decoration-white decoration-2 hover:bg-opacity-25 hover:text-white">
      {name}
    </button>
  );
};

export default function Home() {
  const [clickedOn, setClickedOn] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="bg flex h-[37.5em] w-full justify-center rounded-bl-[6.5em] bg-gradient-to-r from-veryLightRed to-lightRed">
        <div className="flex h-full w-full flex-col bg-[url('./images/bg-pattern-intro-desktop.svg')] bg-[25.4%_52.1%] text-center md:px-[3em] lg:px-[6em] xl:px-0 xl:pl-[10.5em] xl:pr-[11em]">
          {/*first row*/}
          <div className="mt-16 flex w-full place-items-start justify-between gap-4">
            <div className="flex items-center justify-between md:gap-[2rem] lg:gap-[4em]">
              <Image src={logo as string} alt="Logo" priority />
              <div className="flex justify-between gap-8">
                <ButtonWithArrow
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Product"
                  list={product}
                />
                <ButtonWithArrow
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Company"
                  list={company}
                />
                <ButtonWithArrow
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Connect"
                  list={connect}
                />
              </div>
            </div>
            <div className="mt-[-0.3em] flex gap-[2em]">
              <button className="font-ubuntu font-[500] text-[#FFD9D5] decoration-white decoration-2 hover:text-white hover:underline">
                Login
              </button>
              <ButtonTypeSignUp name="Sign Up" />
            </div>
          </div>
          {/*second row*/}
          <span className="mt-[1.8em] flex w-full justify-center font-overpass font-[500] tracking-[-0.03em] text-whiteText md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
            A modern publishing platform
          </span>
          <span className="mt-1 flex justify-center font-overpass text-[1.25rem] font-[300] text-[#FFD9D5]">
            Grow your audience and build your online brand
          </span>
          <div className="mt-[3em] flex justify-center gap-[1em]">
            <ButtonTypeSignUp name="Start for Free" />
            <button className="w-[8.5em] rounded-[1.5em] bg-white bg-opacity-0 py-[0.75em] font-ubuntu font-[600] text-white decoration-white decoration-2 outline-double outline-1 outline-white hover:bg-opacity-100 hover:text-veryLightRedCTAHoverBackground">
              Learn More
            </button>
          </div>
        </div>
      </nav>
      <main className="flex h-[100em] w-full">
        <div className="h-full w-full bg-white">
          {/*first row*/}
          <div className="flex h-[5em] justify-center">TITLE</div>
          {/*second row*/}
          <div className="flex w-full justify-between">
            {/*left col*/}
            <div>LEFT COL</div>
            <div className="h-[55em] w-[35em] justify-end bg-[url('./images/bg-pattern-circlesGray.svg')] bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

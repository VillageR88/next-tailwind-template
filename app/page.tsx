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
import editorDesktop from './images/illustration-editor-desktop.svg';
import phones from './images/illustration-phones.svg';
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

const Article = ({ header, main }: { header: string; main: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="font-overpass font-[600] tracking-[-0.02em] text-veryDarkBlueHeadings md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]">
        {header}
      </span>
      <span className="font-overpass leading-[1.8em] text-veryDarkGrayishBlueBodyCopy">{main}</span>
    </div>
  );
};

export default function Home() {
  const [clickedOn, setClickedOn] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="flex h-[37.5em] w-full justify-center overflow-hidden rounded-bl-[6.5em] bg-gradient-to-r from-veryLightRed to-lightRed">
        <div className="flex h-full w-full flex-col bg-[url('./images/bg-pattern-intro-mobile.svg')] bg-[40%_30%] px-[2em] text-center md:bg-[url('./images/bg-pattern-intro-desktop.svg')] md:bg-[20.5%_52.1%] lg:bg-[23%_52.1%] lg:px-[6em] xl:bg-[25.4%_52.1%] xl:px-0 xl:pl-[10.5em] xl:pr-[11em]">
          {/*first row*/}
          <div className="mt-16 flex w-full place-items-start justify-between gap-4">
            <div className="flex items-center justify-between md:gap-[2rem] lg:gap-[4em]">
              <Image src={logo as string} alt="Logo" priority />
              <div className="hidden justify-between gap-8 md:flex">
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
          <span className="mt-[1.8em] flex w-full justify-center whitespace-break-spaces font-overpass text-[2.6rem] font-[500] tracking-[-0.03em] text-whiteText md:whitespace-normal lg:text-[3.5rem] xl:text-[4rem]">
            {'A modern\npublishing platform'}
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
        <div className="h-full w-full justify-center bg-[#FAFAFA]">
          {/*first row*/}
          <div className="flex justify-center pb-[1.0em] pt-[3.74em] font-overpass text-[2.5rem] font-[600] tracking-[-0.04em] text-veryDarkBlueHeadings lg:mb-[-1em] xl:mb-[-3em] xl:justify-end xl:pr-[13.35em]">
            Designed for the future
          </div>
          {/*second row*/}
          <div className="flex w-full justify-between xl:mt-[-8.8em]">
            {/*left col*/}
            <div className="lg-w-full flex flex-col justify-center gap-[4.5em] pl-[2em] tracking-[0.025em] md:w-2/3 md:pr-[3em] lg:pl-[5em] xl:w-[46em] xl:pl-[10.4em] xl:pr-[2em]">
              <Article
                header="Introducing an extensible editor"
                main="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog."
              />
              <Article
                header="Robust content management"
                main="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
              />
            </div>
            {/*right col*/}
            <Image
              className="bg- h-full md:mr-[-11em] md:w-[70%] lg:mr-[-15em] lg:w-[70%] xl:mr-[-17.2em] xl:w-auto "
              src={editorDesktop as string}
              alt="editor image"
            />
          </div>
          {/*third row*/}
          <div className="mt-[3em] h-[25.1em] w-full rounded-bl-[6em] rounded-tr-[6em] bg-gradient-to-r from-veryDarkGrayBlue to-veryDarkDesaturatedBlue">
            <div className=" h-full w-full justify-end bg-[url('./images/bg-pattern-circles.svg')] bg-[-13.2em_82%] bg-no-repeat">
              <div className="flex h-full w-full justify-between gap-[3em] ">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="mt-[2em] h-auto w-auto md:pl-[2em] lg:pl-[7em]" src={phones as string} alt="phones image" />
                </div>
                <div className="flex w-full flex-col justify-center gap-[0.8em] md:pr-[4em] xl:pr-[14em]">
                  <span className="font-overpass text-[2.5rem] tracking-[-0.02em] text-whiteText">
                    State of the Art Infrastructure
                  </span>
                  <span className="font-overpass font-[300] leading-[1.8em] tracking-[0.03em] text-[#C9C9D9]">
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                    connectivity. This ensures your site will load instantly, no matter where your readers are, keeping
                    your site competitive.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

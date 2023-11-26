'use client';
import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import editorDesktop from './images/illustration-editor-desktop.svg';
import editorMobile from './images/illustration-editor-mobile.svg';
import laptopDesktop from './images/illustration-laptop-desktop.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import phones from './images/illustration-phones.svg';
import arrowLight from './images/icon-arrow-light.svg';
import arrowRed from './images/icon-arrow-dark.svg';
import arrowWhite from './images/icon-arrow-white.svg';
const product = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
const company = ['About', 'Team', 'Blog', 'Careers'];
const connect = ['Contact', 'Newsletter', 'LinkedIn'];

const ButtonWithArrowLight = ({
  action,
  name,
  list,
  clicked,
}: {
  action(value: string): undefined;
  name: string;
  list: string[];
  clicked: string;
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
          className={`mt-1 transition-transform ${clicked === name && 'rotate-180'}`}
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
const ButtonWithArrowDark = ({
  action,
  name,
  list,
  clicked,
}: {
  action(value: string): undefined;
  name: string;
  list: string[];
  clicked: string;
}) => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div
        onClick={() => {
          action(name);
        }}
        className="flex items-center justify-center gap-2 px-4"
      >
        <button
          className={`${
            clicked === name ? 'text-veryDarkGrayishBlueBodyCopy' : 'text-veryDarkGrayBlue'
          } font-overpass text-[1.1rem] font-[600]`}
        >
          {name}
        </button>
        <Image
          src={arrowRed as string}
          alt="arrow"
          className={`mt-1 transition-transform ${clicked === name && 'rotate-180'}`}
        />
      </div>
      <div
        className={`${
          clicked === name ? 'flex' : 'hidden'
        } mx-[1.5em] mt-[1em] flex-col gap-[1em] rounded-[0.3em] bg-[#EFEFF1] py-[1em]`}
      >
        {list.map((x, i) => (
          <button className="font-overpass font-[600] text-veryDarkGrayishBlueBodyCopy" key={i}>
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

const ButtonTypeSignUpDesktop = ({ name }: { name: string }) => {
  return (
    <button className="w-[8.5em] rounded-[1.5em] bg-white py-[0.75em] font-ubuntu font-[600] text-[#F44D74] decoration-white decoration-2 hover:bg-opacity-25 hover:text-white">
      {name}
    </button>
  );
};

const Article = ({ header, main }: { header: string; main: string }) => {
  return (
    <div className="flex flex-col gap-5 text-center md:text-start">
      <span className="font-overpass text-[2rem] font-[600] tracking-[-0.02em] text-veryDarkBlueHeadings md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]">
        {header}
      </span>
      <span className="font-overpass leading-[1.8em] text-veryDarkGrayishBlueBodyCopy">{main}</span>
    </div>
  );
};

const FooterBlock = ({ header, list }: { header: string; list: string[] }) => {
  return (
    <div className="mt-[0.6em] flex flex-col items-center gap-[1.8em] md:items-start">
      <span className="font-overpass text-[1.1rem] text-whiteText md:text-[0.95rem]">{header}</span>
      <div className="flex flex-col items-center gap-[0.6em] md:items-start">
        {list.map((x, i) => (
          <button
            className="font-overpass text-[1.1rem] text-[#C9C9D9] decoration-2 hover:underline md:text-[0.95rem]"
            key={i}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 && setBurgerOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [clickedOn, setClickedOn] = useState<string>('');
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  return (
    <div className={`flex ${burgerOpen ? 'h-screen overflow-hidden' : 'min-h-screen'} flex-col items-center`}>
      <nav className="flex h-[37.5em] w-full justify-center rounded-bl-[6.5em] bg-gradient-to-br from-veryLightRed to-lightRed md:bg-gradient-to-r">
        <div
          className={`flex ${
            burgerOpen ? ' h-[37.5em]' : 'h-full'
          } w-screen flex-col rounded-bl-[6.5em] bg-[url('./images/bg-pattern-intro-mobile.svg')] bg-[35%_45%]  text-center md:h-full md:bg-[url('./images/bg-pattern-intro-desktop.svg')] md:bg-[20.5%_52.1%] md:px-[2em] lg:bg-[23%_52.1%] lg:px-[6em] xl:bg-[25.4%_52.1%] xl:px-0 xl:pl-[10.5em] xl:pr-[11em]`}
        >
          {/*first row*/}
          <div className="mt-16 flex w-full items-start justify-between pl-[2em] md:gap-4 md:pl-0">
            <div className="flex items-center justify-between md:gap-[2rem] lg:gap-[4em]">
              <Image src={logo as string} alt="Logo" priority />
              <div className="hidden justify-between gap-8 md:flex">
                <ButtonWithArrowLight
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Product"
                  list={product}
                />
                <ButtonWithArrowLight
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Company"
                  list={company}
                />
                <ButtonWithArrowLight
                  action={(value) => {
                    clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                  }}
                  clicked={clickedOn}
                  name="Connect"
                  list={connect}
                />
              </div>
            </div>
            {/*right nav desktop*/}
            <div className="mt-[-0.3em] hidden gap-[2em] md:flex">
              <button className="font-ubuntu font-[500] text-[#FFD9D5] decoration-white decoration-2 hover:text-white hover:underline">
                Login
              </button>
              <ButtonTypeSignUpDesktop name="Sign Up" />
            </div>
            {/*right nav mobile*/}
            <div className={`absolute right-0 ${burgerOpen ? 'mt-[0.4em]' : 'mt-[0.7em]'} md:mt-0 md:hidden`}>
              <div className="flex w-screen flex-col items-end gap-[3em]">
                <button
                  onClick={() => {
                    setBurgerOpen(!burgerOpen);
                  }}
                  className="mr-[2em]"
                >
                  <Image src={(!burgerOpen ? hamburger : close) as string} alt="mobile navigation right side" />
                </button>
                <div
                  className={`${
                    burgerOpen ? 'flex' : 'hidden'
                  } w-[85%] flex-col items-center gap-[1.3em] self-center rounded-[0.3em] bg-white py-[2em] shadow-xl`}
                >
                  <ButtonWithArrowDark
                    clicked={clickedOn}
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    name="Product"
                    list={product}
                  />
                  <ButtonWithArrowDark
                    clicked={clickedOn}
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    name="Company"
                    list={company}
                  />
                  <ButtonWithArrowDark
                    clicked={clickedOn}
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    name="Connect"
                    list={connect}
                  />
                  <hr className="mt-[0.2em] w-[85%]" />
                  <button className="font-overpass text-[1.1rem] font-[600] text-veryDarkGrayBlue">Login</button>
                  <button className="rounded-[2em] bg-gradient-to-r from-veryLightRed to-lightRed px-[2.5em] py-[0.7em] font-overpass text-[1.1rem] font-[600] text-whiteText">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*second row*/}
          <span className="mt-[1.8em] flex w-full justify-center whitespace-break-spaces font-overpass text-[2.4rem] font-[500] tracking-[-0.03em] text-whiteText md:whitespace-normal md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
            {'A modern\npublishing platform'}
          </span>
          <span className="mt-1 flex justify-center font-overpass text-[1.25rem] font-[300] text-[#FFD9D5]">
            Grow your audience and build your online brand
          </span>
          <div className="mt-[3em] flex justify-center gap-[1em]">
            <ButtonTypeSignUpDesktop name="Start for Free" />
            <button className="w-[8.5em] rounded-[1.5em] bg-white bg-opacity-0 py-[0.75em] font-ubuntu font-[600] text-white decoration-white decoration-2 outline-double outline-1 outline-white hover:bg-opacity-100 hover:text-veryLightRedCTAHoverBackground">
              Learn More
            </button>
          </div>
        </div>
      </nav>
      <main className="flex h-full w-full md:h-[154em]">
        <div className="flex h-full w-full flex-col items-center bg-[#FAFAFA] md:block">
          {/*first row*/}
          <div className="flex justify-center pb-[1.0em] pt-[4em] font-overpass text-[2rem] font-[600] tracking-[-0.04em] text-veryDarkBlueHeadings md:pt-[3.74em] md:text-[2.5rem] lg:mb-[-1em] xl:mb-[-3em] xl:justify-end xl:pr-[13.35em]">
            Designed for the future
          </div>
          {/*image for mobile*/}
          <Image className="flex pb-10 md:hidden" src={editorMobile as string} alt="image of editor" />
          {/*second row*/}
          <div className="flex w-full justify-center md:justify-between xl:mt-[-8.8em]">
            {/*left col*/}
            <div className="lg-w-full flex w-[80%] flex-col justify-center gap-[3em] tracking-[0.025em] md:w-2/3 md:gap-[4.5em] md:px-0 md:pl-[2em] md:pr-[3em] lg:pl-[5em] xl:w-[46em] xl:pl-[10.4em] xl:pr-[2em]">
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
            {/*right col desktop only*/}
            <Image
              className="hidden h-full md:mr-[-11em] md:flex md:w-[70%] lg:mr-[-15em] lg:w-[70%] xl:mr-[-17.2em] xl:w-[65%]"
              src={editorDesktop as string}
              alt="editor image"
            />
          </div>
          {/*third row*/}
          <div className="flex h-0 items-center justify-center md:hidden">
            {/*phones image mobile*/}
            <Image className="z-10 mt-[41em] h-auto w-auto " src={phones as string} alt="phones image" />
          </div>
          <div className="mt-[20em] h-full w-full overflow-hidden rounded rounded-bl-[6em] rounded-tr-[6em] bg-gradient-to-b from-veryDarkGrayBlue to-veryDarkDesaturatedBlue md:mt-[3em] md:h-[25.1em] md:overflow-visible md:bg-gradient-to-r md:pb-0">
            <div className="h-full w-full bg-[url('./images/bg-pattern-circles.svg')] bg-cover bg-[-9em_-16em] bg-no-repeat md:justify-end md:bg-auto md:bg-[-22em_82%] lg:bg-[-13.2em_82%]">
              <div className="flex w-full flex-col justify-between pb-[10em] pt-[15em] md:h-full md:flex-row md:pb-0 md:pt-0">
                <div className="hidden h-full w-full items-center justify-end md:flex">
                  {/*phones image desktop*/}
                  <Image
                    className="mt-[-13em] h-auto w-auto md:mt-[2em] md:pl-[2em] lg:pl-[7em]"
                    src={phones as string}
                    alt="phones image"
                  />
                </div>
                <div className="flex h-full w-full flex-col content-center justify-center gap-[0.8em] px-[2em] text-center md:px-0 md:pl-[2em] md:pr-[3em] md:text-left xl:pl-[4em] xl:pr-[10em] ">
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
          {/*fourth row*/}
          <div className="mt-[7em] flex items-center justify-center pb-[6em] md:pb-0">
            <div className="ml-[-17.4em] hidden h-auto w-full md:flex">
              <Image src={laptopDesktop as string} alt="laptop image" />
            </div>
            <div className="flex w-[80%] flex-col items-center justify-center gap-[3em] md:w-[60%] md:gap-[4.5em] md:pr-[2em] lg:pr-[6em] xl:pr-[10em]">
              <Article
                header="Free, open, simple"
                main="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
              />
              <Article
                header="Powerful tooling"
                main="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites."
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="h-full w-full rounded-tr-[6.5em] bg-VeryDarkBlackBlueFooterBackground">
        <div className="flex flex-col items-center justify-evenly gap-[4em] py-[5em] md:ml-[-2em] md:mt-[4.4em] md:flex-row md:items-start md:gap-0 md:pr-[9em] md:pt-0">
          <Image src={logo as string} className="mr-[-1em] h-fit" alt="logo" />
          <FooterBlock header="Product" list={product} />
          <FooterBlock header="Company" list={company} />
          <FooterBlock header="Connect" list={connect} />
        </div>
      </footer>
    </div>
  );
}

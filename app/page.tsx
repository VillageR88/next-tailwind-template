'use client';
import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import logoWhite from './images/logoWhite.svg';
import illustrationMockups from './images/illustration-mockups.svg';
import illustrationGrowTogether from './images/illustration-grow-together.svg';
import illustrationFlowingConversation from './images/illustration-flowing-conversation.svg';
import illustrationYourUsers from './images/illustration-your-users.svg';
import iconLocation from './images/icon-location.svg';
import iconPhone from './images/icon-phone.svg';
import iconEmail from './images/icon-email.svg';
import { useState } from 'react';

const IconFacebook = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="p-2"
    >
      <svg
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px]  ${
          hover ? 'outline-[#FE52C0]' : 'outline-veryPaleCyan'
        }`}
        fill={hover ? '#FE52C0' : 'white'}
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 310"
      >
        <g id="XMLID_834_">
          <path
            id="XMLID_835_"
            d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
        c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
        V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
        C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
        c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
          />
        </g>
      </svg>
    </button>
  );
};

const IconInstagram = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="p-2"
    >
      <svg
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px] ${
          hover ? 'outline-[#FE52C0]' : 'outline-veryPaleCyan'
        }`}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          fill={hover ? '#FE52C0' : 'hsl(193, 100%, 96%)'}
        />
        <path
          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
          fill={hover ? '#FE52C0' : 'hsl(193, 100%, 96%)'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
          fill={hover ? '#FE52C0' : 'hsl(193, 100%, 96%)'}
        />
      </svg>
    </button>
  );
};

const IconTwitter = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="p-2"
    >
      <svg
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px] ${
          hover ? 'outline-[#FE52C0]' : 'outline-veryPaleCyan'
        }`}
        fill={hover ? '#FE52C0' : 'white'}
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 310"
      >
        <g id="XMLID_826_">
          <path
            id="XMLID_827_"
            d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
        C307.394,57.037,305.009,56.486,302.973,57.388z"
          />
        </g>
      </svg>
    </button>
  );
};

const LongBox1 = ({
  image,
  header,
  main,
  textWidth,
  fit,
  mr,
  reversed,
}: {
  image: string;
  header: string;
  main: string;
  textWidth: string;
  fit: string;
  mr: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`${
        reversed ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'
      } flex h-full w-full items-center justify-between gap-16 rounded-[1em] px-6 py-10 shadow-[0_1px_15px_-5px_rgba(0,0,0,0.2)] md:h-[27.5em] md:gap-6 md:px-0 md:py-0`}
    >
      <div
        className={`${
          !reversed ? 'md:ml-[2em] lg:ml-[4em] xl:ml-[7.55em]' : 'md:mr-[2em]'
        } flex ${textWidth} flex-col items-center gap-[0.66em] text-center md:items-start md:text-start`}
      >
        <span className="font-poppins text-[1.4rem] font-[700] text-veryDarkCyan md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem]">
          {header}
        </span>
        <span className="font-openSans text-[1.1rem] text-grayishBlue md:text-[0.9rem] lg:text-[1rem] xl:text-[1.125rem]">
          {main}
        </span>
      </div>
      <Image
        className={`${reversed && 'md:ml-[2em] lg:ml-[5em] xl:ml-[7.55em]'} ${mr} h-fit ${fit} w-fit md:w-[33%]`}
        src={image}
        alt="picture of people"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full">
        <div className="flex w-full flex-row bg-veryPaleCyan md:h-[45.06em]">
          <div className="h-full w-full bg-[url('./images/bg-hero-mobile.svg')] px-6 pb-[3em] pt-[2em] md:bg-[url('./images/bg-hero-desktop.svg')] md:px-[2em] md:pt-[3em] lg:px-[3em] xl:px-[5em]">
            <div className=" flex items-center justify-between pb-16 md:px-0 md:pb-0">
              <Image className="h-[1.3em] w-[8em] md:h-[1.95em] md:w-[12.5em]" src={logo as string} alt="logo" />
              <button className="h-[2.7em] w-[10em] rounded-[2em] bg-white font-openSans text-[0.9rem] font-[700] shadow-[0_4px_30px_-13px_rgba(0,0,0,0.3)] hover:text-[#8E98A0] md:h-[3.3em] md:w-[13.8em]">
                Try It Free
              </button>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between md:flex-row">
              <div className="mt-[0.9em] flex flex-col items-center gap-[1.7em] pb-14 text-center md:w-[32em] md:items-start md:pb-0 md:text-left">
                <span className="font-poppins text-[1.8rem] font-[600] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.48rem]">
                  Build The Community Your Fans Will Love
                </span>
                <div className="flex flex-col items-center gap-[2em] md:items-start">
                  <span className="font-openSans md:text-[0.95rem] lg:text-[1rem] xl:text-[1.125rem]">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
                    connections with your users as you engage in genuine discussion.
                  </span>
                  <button className="rounded-[2.5em] bg-[#FE52C0] px-[5.3em] py-[1.3em] font-openSans text-[0.85rem] font-[700] text-veryPaleCyan hover:opacity-60">
                    Get Started For Free
                  </button>
                </div>
              </div>
              <Image
                className="h-fit md:mr-[0.2em] md:w-[54.2%]"
                src={illustrationMockups as string}
                alt="computer image"
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full justify-center bg-white pb-[21.4em]">
          <div className="flex h-full w-[85.5566%] flex-col gap-[2.5em] pt-[6em] md:pt-[10em]">
            <LongBox1
              image={illustrationGrowTogether as string}
              header="Grow Together"
              main="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the
          insightful conversations you miss out on with a feedback form."
              textWidth="md:w-[25em] lg:w-[25em] xl:w-[30em]"
              fit="w-[33%]"
              mr="md:mr-[2em]"
            />
            <LongBox1
              image={illustrationFlowingConversation as string}
              header="Flowing Conversations"
              main="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
            have just-in-time loading for a more natural flow."
              textWidth="md:w-[25em] lg:w-[25em] xl:w-[31em]"
              fit="w-[33.8%]"
              mr="md:0"
              reversed={true}
            />
            <LongBox1
              image={illustrationYourUsers as string}
              header="Your Users"
              main="It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately."
              textWidth="md:w-[25em] lg:w-[25em] xl:w-[30em]"
              fit="w-[34%]"
              mr="md:mr-[1.5em]"
            />
          </div>
        </div>
      </main>
      <footer className="flex h-[35em] w-full flex-col items-center bg-veryDarkCyan px-4 md:px-0">
        <div className="mt-[-10em] flex h-[15em] w-full flex-col items-center justify-center gap-[2.2em] rounded-[1em] bg-white text-center shadow-[0_1px_15px_-5px_rgba(0,0,0,0.2)] md:mt-[-11.5em] md:h-[17.5em] md:w-[40em] lg:w-[45em] lg:px-[2em] xl:w-[50em]">
          <span className="mt-[0.5em] flex font-poppins text-[1.12rem] font-[700] md:text-center md:text-[1.3rem] lg:text-[1.6rem] xl:text-[1.99rem]">
            Ready To Build Your Community?
          </span>
          <button className="rounded-[2.5em] bg-[#FE52C0] px-[3em] py-[1.35em] font-openSans font-[700] text-veryPaleCyan shadow-[0_8px_15px_-2px_rgba(0,0,0,0.2)] hover:opacity-60 md:px-[5.4em] md:text-[0.9rem] lg:text-[1.1rem] xl:text-[1.2rem]">
            Get Started For Free
          </button>
        </div>
        <div className="mt-[6em] flex w-full flex-row items-center justify-between md:px-[2em] lg:px-[4em] xl:px-0 xl:pl-[7.55em] xl:pr-[5em]">
          <div className="flex flex-col ">
            <Image
              className="mb-[2.5em] h-[2.35em] w-[15em]"
              height={10}
              width={10}
              src={logoWhite as string}
              alt="logo"
            />
            <div className="flex flex-col gap-[1.5em]">
              <div className="flex w-[25em] flex-row items-start gap-[1.68em]">
                <Image className="mt-[0.5em] h-fit" src={iconLocation as string} alt="location icon" />
                <span className="font-openSans text-[1rem] text-veryPaleCyan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua
                </span>
              </div>
              <div className="flex w-[25em] flex-row items-center gap-[1.2em]">
                <Image className="ml-[0.15em] h-fit" src={iconPhone as string} alt="phone icon" />
                <span className="font-openSans text-[1rem] text-veryPaleCyan">+1-543-123-4567</span>
              </div>
              <div className="flex w-[25em] flex-row items-center gap-[1.1em]">
                <Image className="ml-[0.13em] h-fit" src={iconEmail as string} alt="email icon" />
                <span className="font-openSans text-[1rem] text-veryPaleCyan">example@huddle.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[2em] xl:gap-[7em]">
            <div className="flex flex-col items-start gap-[1em] pt-[1em]">
              {['About Us', 'What We Do', 'FAQ'].map((x, i) => (
                <button className="font-openSans text-[1.1rem] text-veryPaleCyan hover:underline" key={i}>
                  {x}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-start gap-[1em] pt-[1em] lg:ml-[0.8em]">
              {['Career', 'Blog', 'Contact Us'].map((x, i) => (
                <button className="font-openSans text-[1.1rem] text-veryPaleCyan hover:underline" key={i}>
                  {x}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-[9.5em] flex h-full flex-col justify-between md:w-[10em] md:items-center lg:ml-[1em] lg:items-start xl:ml-[2.8em] xl:w-fit">
            <div className="flex flex-row gap-3">
              <IconFacebook />
              <IconTwitter />
              <IconInstagram />
            </div>
            <span className="pb-[1.5em] font-poppins text-[0.75rem] text-veryPaleCyan">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import logoWhite from './images/logoWhite.svg';
import imageMockup from './images/screen-mockups.svg';
import imageCommunities from './images/icon-communities.svg';
import imageMessages from './images/icon-messages.svg';
import illustrationGrowTogether from './images/illustration-grow-together.svg';
import illustrationFlowingConversation from './images/illustration-flowing-conversation.svg';
import illustrationYourUsers from './images/illustration-your-users.svg';
import iconPhone from './images/icon-phone.svg';
import iconEmail from './images/icon-email.svg';
import { useState } from 'react';

const Facebook = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="flex h-fit w-fit scale-[130%] flex-col items-center rounded-b-[1em]"
    >
      <svg className="w-fit" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill={hover ? '#05BEEB' : 'white'}
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
        />
      </svg>
      <div
        className={`mt-[-0.1em] h-[0.2em] w-full rounded-b-sm md:scale-[95%] ${hover ? 'bg-[#05BEEB]' : 'bg-white'}`}
      ></div>
    </button>
  );
};

const Instagram = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <svg className="scale-[140%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill={hover ? '#05BEEB' : 'white'}
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    </button>
  );
};

const Twitter = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <svg
        className={`ml-[-0.3em] flex h-fit w-fit scale-90 items-center justify-center rounded-[0.3em] px-[0.37em] py-[0.48em] ${
          hover ? 'bg-[#05BEEB]' : 'bg-white'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
      >
        <path
          fill="#00252E"
          d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
        />
      </svg>
    </button>
  );
};

const SmallBlock1 = ({
  image,
  scale,
  text1,
  text2,
}: {
  image: string;
  scale?: string;
  text1: string;
  text2: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start">
      <Image
        className={`${scale} mb-[-0.5em] ml-[-8em] h-fit w-fit md:ml-0 md:pl-[0.3em]`}
        src={image}
        alt="image of communities"
      />
      <span className="font-openSans text-[4em] font-[700] text-veryDarkCyan md:text-[6rem]">{text1}</span>
      <span className="font-openSans text-[1.1rem] text-[#979EA8] md:text-[1.5rem]">{text2}</span>
    </div>
  );
};

const Article1 = ({ header, main, width }: { header: string; main: string; width?: string }) => {
  return (
    <div className={`flex ${width ? width : 'md:w-[44%]'} flex-col gap-[1.4em] text-center md:text-left`}>
      <span className="font-poppins text-[2rem] font-[700] text-veryDarkCyan md:text-[2.5rem]">{header}</span>
      <span className="font-openSans text-veryDarkCyan">{main}</span>
    </div>
  );
};

const Block1 = ({
  header,
  main,
  width,
  image,
  reversed,
  optionalPr,
}: {
  header: string;
  main: string;
  width?: string;
  image: string;
  reversed?: boolean;
  optionalPr?: string;
}) => {
  return (
    <div
      className={`flex ${
        reversed ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'
      } h-full w-full items-center justify-between xl:pl-[8.1em] ${
        optionalPr ? optionalPr : 'xl:pr-[9.5em]'
      } md-[3em] px-[2em] md:py-0 lg:px-[4em] xl:px-0 ${!reversed && 'py-[5em]'} gap-[4em] md:gap-0`}
    >
      <Article1 header={header} main={main} width={width} />
      <Image className="h-fit w-fit items-center md:w-[44.5%]" src={image} alt="image of two people" />
    </div>
  );
};

export default function Home() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [message1, setMessage1] = useState<string>('Please check your email');
  const [message1Color, setMessage1Color] = useState<string>('text-red-400');
  const [showMessage1, setShowMessage1] = useState<boolean>(false);
  const testEmail1 = (value: string) => {
    if (emailRegex.test(value)) {
      setMessage1('Thank you!');
      setMessage1Color('text-teal-400');
    } else {
      setMessage1('Please check your email');
      setMessage1Color('text-red-400');
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <nav className="flex h-full w-full items-center justify-between bg-white px-4 pb-2 pt-6 md:h-[12.2em] md:px-[2em] md:pb-0 md:pt-0 lg:px-[3em] xl:px-0 xl:pl-[5em] xl:pr-[4em]">
        <Image className="h-fit w-[8em] md:w-fit" src={logo as string} alt="logo" />
        <button className="rounded-[2em] px-[1em] py-[0.3em] font-openSans font-[600] text-lightPink shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)] shadow-[#FBE5FC] outline outline-2 duration-150 hover:opacity-50 md:px-[1.7em] md:py-[0.42em]">
          Try It Free
        </button>
      </nav>
      <main className="h-full w-full bg-white ">
        <div className="mt-[9.55em] flex w-full flex-col items-center px-[1em] md:px-[2em]">
          <span className="text-center font-poppins text-[1.7rem] font-[700] text-veryDarkCyan drop-shadow-md md:text-[2.99rem]">
            Build The Community Your Fans Will Love
          </span>
          <span className="mt-[1.15em] text-center font-openSans text-[1rem] font-[400] text-veryDarkCyan drop-shadow-sm md:w-[31em] md:text-[1.25rem]">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </span>
          <button className="mt-[2.35em] rounded-[3em] bg-pink px-[3em] py-[1em] font-openSans font-[600] text-white drop-shadow-xl duration-150 hover:opacity-70 md:px-[5.1em] md:py-[1.25em] md:text-[1.25rem]">
            Get Started For Free
          </button>
          <Image className="mt-[6.86em] h-fit" src={imageMockup as string} alt="image of computer" />
          <div className="mt-[7.45em] flex w-full flex-col justify-between gap-24 px-[4em] md:flex-row md:gap-0 md:px-0 lg:px-[10em] xl:px-[17.5em]">
            <SmallBlock1 image={imageCommunities as string} text1="1.4k+" text2="Communities Formed" />
            <SmallBlock1 scale="scale-[84%]" image={imageMessages as string} text1="2.7m+" text2="Messages Sent" />
          </div>
        </div>
        <div className="mt-[-4em] h-[14em] w-full bg-[url('./images/bg-section-top-mobile-1.svg')] bg-contain bg-bottom bg-no-repeat md:mt-[8.4em] md:h-[9.8em] md:bg-[url('./images/bg-section-top-desktop-1.svg')] md:bg-cover md:bg-top"></div>
        <div className="w-full bg-[#F6FBFF] pt-[2em] md:h-[34em]">
          <Block1
            header="Grow Together"
            main="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful
        conversations you miss out on with a feedback form."
            image={illustrationGrowTogether as string}
          />
        </div>
        <div className="h-[10em] w-full bg-[url('./images/bg-section-bottom-mobile-1.svg')] bg-contain bg-top bg-no-repeat md:h-[8.6em] md:bg-[url('./images/bg-section-bottom-desktop-1.svg')]"></div>
        <div className="md:h-[42.8em] md:pt-[5.5em]">
          <Block1
            header="Flowing Conversations"
            main="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
            width="md:w-[44.2%]"
            image={illustrationFlowingConversation as string}
            reversed={true}
            optionalPr="xl:pr-[7em]"
          />
        </div>
        <div className="h-[14em] w-full bg-[url('./images/bg-section-top-mobile-2.svg')] bg-contain bg-bottom bg-no-repeat md:h-[8.6em] md:bg-[url('./images/bg-section-top-desktop-2.svg')] md:bg-cover md:bg-top"></div>{' '}
        <div className="w-full bg-[#F6FBFF] pt-[1em] md:h-[31em]">
          <Block1
            header="Your Users"
            main="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately."
            image={illustrationYourUsers as string}
            width="md:w-[45%]"
          />
        </div>
        <div className="h-[14em] w-full bg-[url('./images/bg-section-bottom-mobile-2.svg')] bg-contain bg-no-repeat md:h-[8.6em] md:bg-[url('./images/bg-section-bottom-desktop-2.svg')] md:bg-cover "></div>
        <div className="flex flex-col items-center justify-center md:h-[32.5em]">
          <span className="text-center font-poppins text-[1.8rem] font-[700] text-veryDarkCyan md:text-[2.5rem]">
            Ready To Build Your Community?
          </span>
          <button className="mb-[6em] mt-[2em] rounded-[3em] bg-pink px-[2.8em] py-[0.9em] font-openSans text-[1.25rem] font-[600] text-white drop-shadow-xl duration-150 hover:opacity-70 md:mb-0 md:px-[5.1em] md:py-[1.25em]">
            Get Started For Free
          </button>
        </div>
        <div className="h-[9.8em] w-full bg-[url('./images/bg-footer-top-mobile.svg')] bg-contain bg-bottom bg-no-repeat md:bg-[url('./images/bg-footer-top-desktop.svg')] md:bg-cover"></div>
      </main>
      <footer className="h-full w-full bg-veryDarkCyan px-[2em] pb-[4em] md:px-[3em] md:pb-0 lg:px-[4em] xl:px-0 xl:pl-[7.5em] xl:pr-[7.5em]">
        <div className="flex h-full w-full flex-col-reverse justify-between pt-[3em] md:h-[35.2em] md:flex-row md:pt-[7.7em]">
          <div className="mt-[7em] md:mt-0">
            <Image
              className="h-fit w-fit md:mb-[1.6em] md:h-[2.35em] md:w-[15em]"
              height={10}
              width={10}
              src={logoWhite as string}
              alt="logo"
            />
            <div className="flex flex-col gap-[1em]">
              <div className="flex flex-row items-start md:w-[20em]">
                <span className="text-veryPaleCyan pb-[2em] pt-[1em] font-openSans leading-[1.7em] text-white md:pb-0 md:pt-0 md:text-[0.9rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                  vestibulum a, ultrices quis sem.
                </span>
              </div>
              <div className="mt-[0.5em] flex flex-row items-center gap-[1.2em]">
                <Image className="h-fit md:ml-[0.15em]" src={iconPhone as string} alt="phone icon" />
                <span className="text-veryPaleCyan font-openSans text-[1rem] text-white">Phone: +1-543-123-4567</span>
              </div>
              <div className="flex flex-row items-center gap-[1.1em]">
                <Image className="h-fit md:ml-[0.13em]" src={iconEmail as string} alt="email icon" />
                <span className="text-veryPaleCyan font-openSans text-[1rem] text-white">example@huddle.com</span>
              </div>
              <div className="mt-[4em] flex flex-row items-center gap-[2em]">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
          <div className="w-fit">
            <span className="font-openSans text-[1.5rem] font-[600] text-white">NEWSLETTER</span>
            <div className="flex flex-col gap-[1.5em] md:w-fit">
              <span className="text-veryPaleCyan pt-[1.3em] font-openSans text-[1.1rem] font-[600] leading-[1.8em] tracking-[0.015em] text-white md:w-[25em] md:text-[0.85rem]">
                To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you
                spam or pass on your email address
              </span>
              <div className="mt-[1em] flex flex-col items-center gap-[2.5em] md:items-start lg:flex-row">
                <input
                  inputMode="email"
                  type="text"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      setShowMessage1(true);
                      event.preventDefault();
                    } else if (event.key === 'Backspace') {
                      setShowMessage1(false);
                    }
                  }}
                  onChange={(value) => {
                    testEmail1(value.target.value);
                    setShowMessage1(false);
                  }}
                  className={`${
                    showMessage1 && message1 !== 'Thank you!' && 'outline-red-400'
                  } w-full rounded-[0.2em] px-2 py-[0.7em] hover:cursor-pointer md:w-[20em]`}
                ></input>
                <div
                  className={`${message1Color} absolute mt-[4.4em] flex h-0 w-fit justify-center self-center font-openSans text-[0.75rem] font-[700] drop-shadow-sm md:w-fit md:self-start`}
                >
                  {showMessage1 && message1}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowMessage1(true);
                  }}
                  className="self-end rounded-[0.2em] bg-pink px-[2.6em] py-[0.75em] font-openSans text-[1rem] font-[600] text-white drop-shadow-xl duration-150 hover:bg-lightPink md:self-center"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

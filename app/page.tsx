'use client';
import '@fontsource/raleway';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import illustration1 from './images/illustration-1.svg';
import illustration2 from './images/illustration-2.svg';
import person from './images/avatar-testimonial.jpg';
import quotes from './images/icon-quotes.svg';
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
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px] duration-300  ${
          hover ? 'outline-cyanInside_call_to_action_gradient' : 'outline-white'
        }`}
        fill={hover ? 'hsl(176, 68%, 64%)' : 'white'}
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
      className="p-2 duration-300"
    >
      <svg
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px] duration-300 ${
          hover ? 'outline-cyanInside_call_to_action_gradient' : 'outline-white'
        }`}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="duration-300"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          fill={hover ? 'hsl(176, 68%, 64%)' : 'hsl(193, 100%, 96%)'}
        />
        <path
          className="duration-300"
          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
          fill={hover ? 'hsl(176, 68%, 64%)' : 'hsl(193, 100%, 96%)'}
        />
        <path
          className="duration-300"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
          fill={hover ? 'hsl(176, 68%, 64%)' : 'hsl(193, 100%, 96%)'}
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
        className={`h-[1em] w-fit rounded-full outline outline-1 outline-offset-[6px] duration-300 ${
          hover ? 'outline-cyanInside_call_to_action_gradient' : 'outline-white'
        }`}
        fill={hover ? 'hsl(176, 68%, 64%)' : 'white'}
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

const Arrow = ({ alternate }: { alternate: boolean }) => {
  return (
    <svg
      className="mt-[0.2em] duration-300"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id="b" cx="6" cy="6" r="6" />
        <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)">
          <use
            className="duration-300"
            fill={!alternate ? 'hsl(170, 45%, 43%)' : '#7ADCCD'}
            filter="url(#a)"
            xlinkHref="#b"
          />
          <use className="duration-300" fill={!alternate ? 'hsl(170, 45%, 43%)' : '#7ADCCD'} xlinkHref="#b" />
        </g>
        <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="white" />
      </g>
    </svg>
  );
};

export default function Home() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [message, setMessage] = useState<string>('Please check your email');
  const [messageColor, setMessageColor] = useState<string>('text-pink-400');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [hoverColor, setHoverColor] = useState<boolean>(false);

  const testEmail = (value: string) => {
    if (emailRegex.test(value)) {
      setMessage('Thank you!');
      setMessageColor('text-teal-600');
    } else {
      setMessage('Please check your email');
      setMessageColor('text-pink-400');
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex w-full flex-row items-center justify-between bg-white px-[0.5em] pt-[4em] md:px-[2em] lg:px-[3.5em] xl:px-[5em]">
        <Image className="h-fit w-[5em] md:w-fit" src={logo as string} alt="logo" />
        <div className="flex gap-[1em] md:gap-[3.6em]">
          {['Features', 'Team', 'Sign In'].map((x, i) => (
            <button className="font-raleway text-[1rem] text-veryDarkBlue duration-300" key={i}>
              {x}
            </button>
          ))}
        </div>
      </nav>
      <main className="h-full-full bg-white">
        <div className="mt-[5em] flex flex-row items-center bg-[url('./images/bg-curve-desktop.svg')] bg-bottom bg-no-repeat pb-[17.8em] xl:px-[5em]">
          <form className=" flex h-fit w-full flex-col items-center justify-center gap-[1.5em] rounded-[0.5em] text-left">
            <div className="flex flex-col gap-[1em]">
              <span className="font-raleway text-[1.5rem] font-[700] text-veryDarkBlue lg:text-[1.75rem]  xl:text-[2.5rem]">
                All your files in one secure location, accessible anywhere.
              </span>
              <span className="font-openSans w-full leading-[1.4em] tracking-[0.02em] text-veryDarkBlue xl:pr-[3.5em] xl:text-[1.08em]">
                Fylo stores your most important files in one secure location. Access them wherever you need, share and
                collaborate with friends, family, and co-workers.
              </span>
            </div>
            <div className="flex w-full flex-col gap-[1em] md:flex-row">
              <input
                inputMode="email"
                type="text"
                className={`font-openSans flex h-[3em] w-[50%] rounded-[0.2em] px-6 text-[0.9rem] outline outline-1 ${
                  showMessage && message !== 'Thank you!' ? 'outline-pink-400' : 'outline-desaturatedBlue'
                }`}
                placeholder="Enter your email..."
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setShowMessage(true);
                    event.preventDefault();
                  } else if (event.key === 'Backspace') {
                    setShowMessage(false);
                  }
                }}
                onChange={(value) => {
                  testEmail(value.target.value);
                  setShowMessage(false);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setShowMessage(true);
                }}
                className="font-raleway w-[30%] rounded-[0.2em] bg-brightBlue px-[2.1em] py-[0.8em] text-[0.9rem] font-[700] text-white duration-100 hover:opacity-70"
              >
                Get Started
              </button>
              <div
                className={`${messageColor} font-openSans absolute mt-[4.3em] flex h-0 w-full justify-center text-[0.75rem] font-[700] drop-shadow-sm md:mt-[4.1em] md:w-fit`}
              >
                {showMessage && message}
              </div>
            </div>
          </form>
          <Image
            className="h-fit w-1/2"
            src={illustration1 as string}
            alt="illustration of people putting documents in the folder"
          />
        </div>
        <div className="h-full w-full bg-lightGrayishBlue pb-[7em] pt-[4em]">
          <div className="flex w-full flex-col items-center justify-center gap-[3.5em] px-[2em] md:flex-row md:px-[2em]">
            <div className="flex flex-col">
              <span className="font-raleway w-full pb-[0.5em] pl-1 text-[1.1rem] font-[700] leading-[1.25em] text-veryDarkBlue md:pl-0 md:text-[1.75rem] lg:text-[2rem]  xl:text-[2.5rem]">
                Stay productive, wherever you are
              </span>
              <div className="lg:-[0.95rem] font-openSans mt-[1em] flex w-full flex-col gap-[1em] text-veryDarkBlue md:text-[0.9rem] xl:w-[33em] xl:text-[1rem]">
                <span>
                  Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                  storage needs.
                </span>
                <span>
                  Securely share files and folders with friends, family and colleagues for live collaboration. No email
                  attachments required!
                </span>
              </div>
              <div className="flex w-fit flex-col">
                <div className="font-openSans mt-[1.2em] flex h-fit flex-row items-center gap-[0.4em]">
                  <a
                    onMouseEnter={() => {
                      setHoverColor(true);
                    }}
                    onMouseLeave={() => {
                      setHoverColor(false);
                    }}
                    href="#"
                    className={`${hoverColor ? 'text-[#77E1CB]' : 'text-moderateCyan'} duration-300`}
                  >
                    See how Fylo works
                  </a>
                  <Arrow alternate={hoverColor} />
                </div>
                <div
                  className={`${
                    hoverColor ? 'bg-[#77E1CB]' : 'bg-moderateCyan'
                  } mt-[0.2em] h-[1px] w-full duration-300`}
                ></div>
              </div>
              <div className="mt-[3em] flex h-fit w-full items-center rounded-[0.2em] bg-white px-[1.6em] pb-[1.5em] pt-[2em] shadow-[3px_6px_15px_5px_rgba(0,0,0,0.1)] md:w-[22em]">
                <div className="flex flex-col gap-[0.5em]">
                  <Image className="h-[fit]" src={quotes as string} alt="quotation" />
                  <span className="font-openSans text-[0.8rem] tracking-[0.05em] text-veryDarkBlue">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team
                    has become a well-oiled collaboration machine.
                  </span>
                  <div className="flex flex-row items-center gap-[0.5em] pt-[0.5em]">
                    <Image className="h-[2em] w-fit rounded-full" src={person} alt="picture of person" />
                    <div className="flex flex-col justify-center">
                      <span className="font-openSans text-[0.7rem] font-[700] text-veryDarkBlue">Kyle Burton</span>
                      <span className="font-openSans text-[0.6rem] text-veryDarkBlue">Founder & CEO, Huddle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="h-fit md:w-[40%]"
              src={illustration2 as string}
              alt="image of the people showing quotes"
              priority
            />
          </div>
        </div>
        <div className="bg-desaturatedBlue px-6 py-20">
          <form className=" flex h-fit w-full flex-row items-center justify-center gap-[1.5em] rounded-[0.5em] text-left">
            <div className="flex flex-col gap-[1em]">
              <span className="font-raleway text-[1.5rem] font-[700] text-white lg:text-[1.75rem] xl:text-[2rem]">
                Get early access today
              </span>
              <span className="font-openSans w-full leading-[1.4em] tracking-[0.02em] text-slate-200 xl:text-[1.08em]">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
              </span>
            </div>
            <div className="flex w-full flex-col gap-[1em]">
              <input
                inputMode="email"
                type="text"
                className={`font-openSans flex h-[3em] w-[50%] rounded-[0.2em] px-6 text-[0.9rem] outline outline-1 ${
                  showMessage && message !== 'Thank you!' ? 'outline-pink-400' : 'outline-desaturatedBlue'
                }`}
                placeholder="Enter your email..."
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setShowMessage(true);
                    event.preventDefault();
                  } else if (event.key === 'Backspace') {
                    setShowMessage(false);
                  }
                }}
                onChange={(value) => {
                  testEmail(value.target.value);
                  setShowMessage(false);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setShowMessage(true);
                }}
                className="font-raleway w-[30%] rounded-[0.2em] bg-brightBlue px-[2.1em] py-[0.8em] text-[0.9rem] font-[700] text-white duration-100 hover:opacity-70"
              >
                Get Started
              </button>
              <div
                className={`${messageColor} font-openSans absolute mt-[4.3em] flex h-0 w-full justify-center text-[0.75rem] font-[700] drop-shadow-sm md:mt-[4.1em] md:w-fit`}
              >
                {showMessage && message}
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

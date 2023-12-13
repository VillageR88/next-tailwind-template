'use client';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image, { StaticImageData } from 'next/image';
import logo from './images/logo.svg';
import intro from './images/illustration-intro.png';
import iconAccessAnywhere from './images/icon-access-anywhere.svg';
import iconSecurity from './images/icon-security.svg';
import iconCollaboration from './images/icon-collaboration.svg';
import iconAnyFile from './images/icon-any-file.svg';
import illustrationStayProductive from './images/illustration-stay-productive.png';
import person1 from './images/profile-1.jpg';
import person2 from './images/profile-2.jpg';
import person3 from './images/profile-3.jpg';
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
          <use className="duration-300" fill={!alternate ? '#000' : 'white'} filter="url(#a)" xlinkHref="#b" />
          <use className="duration-300" fill={!alternate ? '#62E0D9' : 'white'} xlinkHref="#b" />
        </g>
        <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330" />
      </g>
    </svg>
  );
};

const Article1 = ({
  width,
  image,
  alt,
  header,
  main,
}: {
  width: string;
  image: string;
  alt: string;
  header: string;
  main: string;
}) => {
  return (
    <div className="flex justify-center">
      <div className={`flex ${width} flex-col items-center text-center`}>
        <div className="flex h-[5.5em] justify-center">
          <Image className="h-fit" src={image} alt={alt} />
        </div>
        <span className="font-raleway mt-[1em] text-[1.21rem] font-[700] text-white">{header}</span>
        <span className="font-openSans mt-[0.3em] text-[0.9rem] text-[#BFC6CE]">{main}</span>
      </div>
    </div>
  );
};

const SmallBox = ({ image, name }: { image: StaticImageData; name: string }) => {
  return (
    <div className="flex h-fit w-full items-center rounded-[0.2em] bg-[#21293C] px-[1.6em] pb-[1.5em] pt-[2.5em] shadow-[3px_6px_15px_5px_rgba(0,0,0,5)] shadow-[#1B232E] md:w-[22.6em]">
      <div className="flex flex-col gap-[1.4em]">
        <span className="font-openSans text-[0.85rem] tracking-[0.05em] text-[#BFC6CE]">
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become
          a well-oiled collaboration machine.
        </span>
        <div className="flex flex-row items-center gap-[0.5em]">
          <Image className="h-[1.5em] w-fit rounded-full" src={image} alt="picture of person" />
          <div className="flex flex-col justify-center">
            <span className="font-openSans text-[0.7rem] font-[700] text-white">{name}</span>
            <span className="font-openSans text-[0.6rem] text-[#BFC6CE]">Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [message, setMessage] = useState<string>('Please enter a valid email address');
  const [messageColor, setMessageColor] = useState<string>('text-lightRedError');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [hoverColor, setHoverColor] = useState<boolean>(false);

  const testEmail = (value: string) => {
    if (emailRegex.test(value)) {
      setMessage('Thank you!');
      setMessageColor('text-green-400');
    } else {
      setMessage('Please enter a valid email address');
      setMessageColor('text-lightRedError');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-gradient-to-b from-[#1C2230] from-[10%] to-[#181E2A] to-[12%] md:bg-[#1C2230] md:bg-none">
        <div className="h-full w-full bg-[url('./images/bg-curvy-mobile.svg')] bg-contain bg-[50%_50%] bg-no-repeat px-[1em] md:h-[76.5em] md:bg-[url('./images/bg-curvy-desktop.svg')] md:bg-contain md:bg-bottom md:px-0">
          <nav className="mt-[2em] flex w-full flex-row items-center justify-between px-[0.5em] md:mt-[4.55em] lg:px-[3.5em] xl:px-[5em]">
            <Image className="h-fit w-[5em] md:w-fit" src={logo as string} alt="logo" />
            <div className="flex gap-[1em] md:gap-[3.7em]">
              {['Features', 'Team', 'Sign In'].map((x, i) => (
                <button
                  className="font-raleway text-[0.97rem] text-[#BFC6CE] duration-300 hover:text-white hover:underline"
                  key={i}
                >
                  {x}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-[4.7em] flex h-full w-full flex-col items-center">
            <Image className="h-fit px-[1em] md:px-0" src={intro} alt="image of the people" />
            <div className="mt-[2.2em] flex h-full w-full flex-col items-center text-center">
              <span className="font-raleway w-full text-[1.8rem] font-[700] text-white md:w-[20em] md:px-0 md:text-[2rem] lg:text-[2.2rem] xl:text-[2.52rem]">
                All your files in one secure location, accessible anywhere.
              </span>
              <span className="font-openSans mt-[1.65em] w-full px-[1em] text-[#FBFFFF] md:w-[30em] md:px-0 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.25rem]">
                Fylo stores all your most important files in one secure location. Access them wherever you need, share
                and collaborate with friends family, and co-workers.
              </span>
              <button className="from-cyanInside_call_to_action_gradient font-raleway to-blueInside_call_to_action_gradient mt-[2em] rounded-[2em] bg-gradient-to-r px-[5.95em] py-[1em] font-[700] text-white duration-300 hover:from-[#8CDAE4] hover:to-[#8CDAE4]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-[#181E2A] pt-[10em] md:mt-[-2em]">
          <div className="flex h-full w-full flex-col items-center">
            <div className="grid grid-cols-1 gap-y-20 px-[1.5em] md:grid-cols-2 md:gap-x-[2em] md:px-0 lg:gap-x-[4em] xl:gap-x-[7.5em]">
              <Article1
                width="w-[22em]"
                header="Access your files, anywhere"
                main="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                image={iconAccessAnywhere as string}
                alt="image of computer"
              />
              <Article1
                width="w-[25em]"
                header="Security you can trust"
                main="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
                image={iconSecurity as string}
                alt="image of shield"
              />
              <Article1
                width="w-[25em]"
                header="Real-time collaboration"
                main="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
                image={iconCollaboration as string}
                alt="image of people together"
              />
              <Article1
                width="w-[22em]"
                header="Store any type of file"
                main="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                image={iconAnyFile as string}
                alt="image of folder"
              />
            </div>
            <div className="mt-[11em] flex w-full flex-col items-center justify-center gap-[3.5em] px-[2em] md:mt-[8em] md:flex-row md:px-[2em] lg:px-[4em]">
              <Image
                className="h-fit md:w-[50%] xl:w-fit"
                src={illustrationStayProductive}
                alt="image of the people showing quotes"
                priority
              />
              <div className="flex flex-col">
                <span className="font-raleway w-full pl-1 text-[1.1rem] font-[700] leading-[1.25em] text-white md:pl-0 md:text-[1.75rem] lg:text-[2rem] xl:w-[10em] xl:text-[2.5rem]">
                  Stay productive, wherever you are
                </span>
                <div className="font-openSans lg:-[0.95rem] mt-[1em] flex w-full flex-col gap-[1em] text-[#BFC6CE] md:text-[0.9rem] xl:w-[35em] xl:text-[1rem]">
                  <span>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                  </span>
                  <span>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No
                    email attachments required.
                  </span>
                </div>
                <div className="flex w-fit flex-col">
                  <div className="font-openSans mt-[1.5em] flex h-fit flex-row items-center gap-[0.4em]">
                    <a
                      onMouseEnter={() => {
                        setHoverColor(true);
                      }}
                      onMouseLeave={() => {
                        setHoverColor(false);
                      }}
                      href="#"
                      className={`${hoverColor ? 'text-[#BFC6CE]' : 'text-[#7BB1B3]'} duration-300`}
                    >
                      See how Fylo works
                    </a>
                    <Arrow alternate={hoverColor} />
                  </div>
                  <div
                    className={`${hoverColor ? 'bg-[#BFC6CE]' : 'bg-[#7BB1B3]'} mt-[0.2em] h-[1px] w-full duration-300`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-[#181E2A] px-[2em] pb-[26em] pt-[9em] md:px-0 md:pb-[22.5em]">
          <div className="h-full w-full bg-[url('./images/bg-quotes.png')] bg-[5%_0] bg-no-repeat  md:mx-[2em] md:w-fit md:bg-left-top lg:mx-[4em] xl:mx-[8em]">
            <div className="flex  h-full w-full flex-col justify-between gap-[1.5em] pt-[2.3em] md:flex-row md:px-[0.6em]">
              <SmallBox image={person1} name="Satish Patel" />
              <SmallBox image={person2} name="Bruce McKenzie" />
              <SmallBox image={person3} name="Iva Boyd" />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-darkBlueFooter_background h-full w-full md:h-[32.2em]">
        <div className="flex h-0 w-full justify-center">
          <form className="mx-[1.5em] mt-[-14em] flex h-fit w-full flex-col items-center justify-center gap-[2.3em] rounded-[0.5em] bg-[#1C2230] px-[1.5em] py-[4em] text-center shadow-[4px_5px_8px_3px_rgba(0,0,0,0.2)] md:mx-[2em] md:mt-[-10em] md:h-[17.2em] md:px-0 md:py-0 lg:mx-0 lg:w-[54em]">
            <div className="flex flex-col gap-[1em]">
              <span className="font-raleway text-[1.5rem] font-[700] text-white lg:text-[1.75rem] xl:text-[2rem]">
                Get early access today
              </span>
              <span className="font-openSans w-full text-[0.9rem] tracking-[-0.01em] text-[#BFC6CE] md:w-[45em]">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
              </span>
            </div>
            <div className="flex w-full flex-col gap-[2.1em] md:w-fit md:flex-row md:gap-[1em] lg:gap-[2em]">
              <input
                inputMode="email"
                type="text"
                className={`font-openSans flex h-[3em] w-full rounded-[3em] pl-[2.2em] pr-[1em] text-[0.9rem] md:w-[25em] md:text-[1rem] lg:w-[30em]`}
                placeholder="email@example.com"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setShowMessage(true);
                    event.preventDefault(); // Prevent form submission
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
                className="from-cyanInside_call_to_action_gradient font-raleway to-blueInside_call_to_action_gradient rounded-[2em] bg-gradient-to-r px-[2.1em] py-[0.9em] text-[0.9rem] font-[700] text-white duration-300 hover:from-[#8CDAE4] hover:to-[#8CDAE4]"
              >
                Get Started For Free
              </button>
              <div
                className={`${messageColor} font-openSans absolute mt-[4.3em] flex h-0 w-[75%] justify-center text-[0.75rem] font-[700] md:mt-[4.7em] md:w-fit md:pl-[3em]`}
              >
                {showMessage && message}
              </div>
            </div>
          </form>
        </div>
        <div className="h-full w-full px-[2em] pt-[20em] md:px-0 md:pt-[12.55em]">
          <Image
            className="ml-[1em] h-fit pb-[1em] md:ml-[2em] md:pb-0 lg:ml-[4em] xl:ml-[7.55em]"
            src={logo as string}
            alt="logo"
          />
          <div className="mt-[2.5em] flex w-full flex-col justify-between md:flex-row md:px-[2em] lg:px-[4em] xl:px-0 xl:pl-[7.55em] xl:pr-[5em]">
            <div className="flex flex-col justify-between md:gap-[1.7em] xl:w-[51%] xl:flex-row xl:gap-[3em] ">
              <div className="flex flex-row gap-[1.65em]">
                <Image className="h-fit" src={iconLocation as string} alt="Location" />
                <span className="font-openSans mt-[-0.5em] w-[21em] pb-[2em] text-[#BFC6CE] md:pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua
                </span>
              </div>
              <div className="mt-[-0.4em] flex flex-col gap-[1.2em] xl:ml-[-2em]">
                <div className="flex flex-row items-center gap-[1.6em]">
                  <Image className="h-fit" src={iconPhone as string} alt="Phone" />
                  <span className="font-openSans text-[0.9rem] text-[#BFC6CE]">+1-543-123-4567</span>
                </div>
                <div className="flex flex-row items-center gap-[1.6em]">
                  <Image className="h-fit" src={iconEmail as string} alt="Phone" />
                  <span className="font-openSans text-[0.9rem] text-[#BFC6CE]">example@fylo.com</span>
                </div>
              </div>
            </div>
            <div className="mt-[6em] flex flex-col md:mt-0 md:flex-row md:gap-[3em] lg:gap-[4em] xl:ml-[1em] xl:gap-[5em]">
              <div className="mt-[-0.55em] flex flex-col items-start gap-[0.85em] text-[#BFC6CE] duration-300">
                {['About Us', 'Jobs', 'Press', 'Blog'].map((x, i) => (
                  <button key={i} className="font-openSans duration-300 hover:text-white">
                    {x}
                  </button>
                ))}
              </div>
              <div className="mt-[4em] flex flex-col items-start gap-[0.85em] text-[#BFC6CE] duration-300 md:mt-[-0.55em]">
                {['Contact Us', 'Terms', 'Privacy'].map((x, i) => (
                  <button key={i} className="font-openSans duration-300 hover:text-white">
                    {x}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-[5em] flex h-fit   w-full flex-row justify-center gap-[0.65em] pb-[3em] md:mt-[-0.5em] md:w-fit md:pb-0">
              <IconFacebook />
              <IconTwitter />
              <IconInstagram />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

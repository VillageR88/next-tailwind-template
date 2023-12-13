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
import { useState } from 'react';

const Arrow = () => {
  return (
    <svg
      className="mt-[0.2em]"
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
          <use fill="#000" filter="url(#a)" xlinkHref="#b" />
          <use fill="#62E0D9" xlinkHref="#b" />
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
    <div className="flex h-fit w-[22.6em] items-center rounded-[0.2em] bg-[#21293C] px-[1.6em] pb-[1.5em] pt-[2.5em] shadow-[3px_6px_15px_5px_rgba(0,0,0,5)] shadow-[#1B232E]">
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [message, setMessage] = useState<string>('');
  const [messageColor, setMessageColor] = useState<string>('');

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
      <div className="h-full w-full bg-[#1C2230]">
        <div className="h-[76.5em] w-full bg-[url('./images/bg-curvy-desktop.svg')] bg-bottom bg-no-repeat">
          <nav className="mt-[4.55em] flex w-full flex-row items-center justify-between px-[5em]">
            <Image className="h-fit" src={logo as string} alt="logo" />
            <div className="flex gap-[3.7em]">
              {['Features', 'Team', 'Sign In'].map((x, i) => (
                <button className="font-raleway text-[0.97rem] text-[#BFC6CE]" key={i}>
                  {x}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-[4.7em] flex h-full w-full flex-col items-center">
            <Image className="h-fit" src={intro} alt="image of the people" />
            <div className="mt-[2.2em] flex h-full w-full flex-col items-center text-center">
              <span className="font-raleway w-[20em] text-[2.52rem] font-[700] text-white">
                All your files in one secure location, accessible anywhere.
              </span>
              <span className="font-openSans mt-[1.65em] w-[30em] text-[1.25rem] text-[#FBFFFF]">
                Fylo stores all your most important files in one secure location. Access them wherever you need, share
                and collaborate with friends family, and co-workers.
              </span>
              <button className="from-cyanInside_call_to_action_gradient font-raleway to-blueInside_call_to_action_gradient mt-[2em] rounded-[2em] bg-gradient-to-r px-[5.95em] py-[1em] font-[700] text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[-2em] h-full w-full bg-[#181E2A]">
          <div className="flex h-full w-full flex-col items-center">
            <div className="grid grid-cols-2 gap-x-[7.5em] gap-y-20">
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
            <div className="mt-[8em] flex flex-row items-center gap-[3.5em]">
              <Image src={illustrationStayProductive} alt="image of the people showing quotes" />
              <div className="flex flex-col">
                <span className="font-raleway w-[10em] text-[2.5rem] font-[700] leading-[1.25em] text-white">
                  Stay productive, wherever you are
                </span>
                <div className="font-openSans mt-[1em] flex w-[35em] flex-col gap-[1em] text-[#BFC6CE]">
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
                    <a href="#" className="text-[#7BB1B3]">
                      See how Fylo works
                    </a>
                    <Arrow />
                  </div>
                  <div className="mt-[0.2em] h-[1px] w-full bg-[#7BB1B3]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-[#181E2A] pb-[22.5em] pt-[9em]">
          <div className="mx-[8em] h-full w-[full] bg-[url('./images/bg-quotes.png')] bg-no-repeat">
            <div className="flex h-full w-full justify-between gap-[1.5em] px-[0.6em] pt-[2.3em]">
              <SmallBox image={person1} name="Satish Patel" />
              <SmallBox image={person2} name="Bruce McKenzie" />
              <SmallBox image={person3} name="Iva Boyd" />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-darkBlueFooter_background h-[32.2em] w-full">
        <div className="flex h-0 w-full justify-center">
          <div className="mt-[-10em] flex h-[17.2em] w-[54em] flex-col items-center justify-center gap-[2.3em] rounded-[0.5em] bg-[#1C2230] text-center shadow-[4px_5px_8px_3px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col gap-[1em]">
              <span className="font-raleway text-[2rem] font-[700] text-white">Get early access today</span>
              <span className="font-openSans w-[45em] text-[0.9rem] tracking-[-0.01em] text-[#BFC6CE]">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
              </span>
            </div>
            <div className="flex gap-[2em]">
              <input
                type="text"
                className="font-openSans h-[3em] w-[30em] rounded-[3em] pl-[2.2em] pr-[1em]"
                placeholder="email@example.com"
                onChange={(value) => {
                  testEmail(value.target.value);
                }}
              />
              <button className="from-cyanInside_call_to_action_gradient font-raleway to-blueInside_call_to_action_gradient rounded-[2em] bg-gradient-to-r px-[2.1em] py-[0.9em] text-[0.9rem] font-[700] text-white">
                Get Started For Free
              </button>
              <div
                className={`${messageColor} font-openSans absolute mt-[4.7em] h-0 pl-[3em] text-[0.75rem] font-[700]`}
              >
                {message}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

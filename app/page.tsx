'use client';
import '@fontsource/bai-jamjuree';
import '@fontsource/bai-jamjuree/400.css';
import '@fontsource/bai-jamjuree/600.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import computer from './images/image-computer.png';
import pad from './images/image-devices.png';
import iconBlacklist from './images/icon-blacklist.svg';
import iconText from './images/icon-text.svg';
import iconPreview from './images/icon-preview.svg';
import logoGoogle from './images/logo-google.png';
import logoIBM from './images/logo-ibm.png';
import logoMicrosoft from './images/logo-microsoft.png';
import logoHP from './images/logo-hp.png';
import logoVG from './images/logo-vector-graphics.png';
import { useState } from 'react';

const IconFacebook = () => {
  const [color, setColor] = useState<string>('#4C545C');
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setColor('hsl(171, 66%, 44%)');
      }}
      onMouseLeave={() => {
        setColor('#4C545C');
      }}
    >
      <path
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
};

const IconTwitter = () => {
  const [color, setColor] = useState<string>('#4C545C');
  return (
    <svg
      width="24"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setColor('hsl(171, 66%, 44%)');
      }}
      onMouseLeave={() => {
        setColor('#4C545C');
      }}
    >
      <path
        d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
};

const IconInstagram = () => {
  const [color, setColor] = useState<string>('#4C545C');
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setColor('hsl(171, 66%, 44%)');
      }}
      onMouseLeave={() => {
        setColor('#4C545C');
      }}
    >
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
};

enum CustomButtonType {
  iOS,
  mac,
}

const CustomButton = ({ type }: { type: CustomButtonType }) => {
  return (
    <button
      className={`${
        type === CustomButtonType.iOS ? 'bg-[#2F9681] shadow-[#D5F7E9]' : 'bg-[#5964BE]'
      } flex h-[3.5em] w-full items-start rounded-[3em] shadow-xl hover:opacity-75 md:w-[14.15em]`}
    >
      <div
        className={`${
          type === CustomButtonType.iOS ? 'bg-[#26BBA5]' : 'bg-[#6174FF]'
        } flex h-[94%] w-full items-center justify-center rounded-[3em] pt-[0.2em] text-[1.1rem] font-[600] tracking-[0.05em] text-white`}
      >
        {type === CustomButtonType.iOS ? 'Download for iOS' : 'Download for Mac'}
      </div>
    </button>
  );
};

const Article1 = ({ header, main, mt }: { header: string; main: string; mt?: string }) => {
  return (
    <div className="flex flex-col text-center md:px-[2em] lg:w-[44em]">
      <span className={`${mt ? mt : 'mt-[4.2em]'} text-[1.7rem] font-[600] text-darkGrayishBlue md:text-[2.18rem]`}>
        {header}
      </span>
      <span className="mt-[0.9em] text-[1rem] leading-[1.65em] text-grayishBlue md:text-[1.14rem]">{main}</span>
    </div>
  );
};

const Article2 = ({ header, main }: { header: string; main: string }) => {
  return (
    <div className="flex w-[22em] flex-col md:px-[2em]">
      <span className="text-[1.45rem] font-[600] leading-[1.4em] text-darkGrayishBlue">{header}</span>
      <span className="mt-[0.5em] text-[1rem] leading-[1.85em] text-grayishBlue">{main}</span>
    </div>
  );
};

const Article3 = ({
  image,
  header,
  main,
  optionalMt,
  optionalMt2,
}: {
  image: string;
  header: string;
  main: string;
  optionalMt?: string;
  optionalMt2?: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center md:px-[2em] xl:w-[22em]  ">
      <Image className={`${optionalMt ? optionalMt : 'mt-[1.85em]'} h-fit`} src={image} alt="icon" />
      <span className={`${optionalMt2 ? optionalMt2 : 'mt-[1.85em]'} text-[1.45rem] font-[600] text-darkGrayishBlue`}>
        {header}
      </span>
      <span className="mt-[0.8em] text-[1rem] leading-[1.85em] tracking-[0.01em] text-grayishBlue">{main}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-baiJamjuree">
      <main className="h-full w-full bg-white pb-[9.4em]">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[url('./images/bg-header-mobile.png')] bg-contain bg-[0_0.2em] bg-no-repeat px-[2em] md:bg-[url('./images/bg-header-desktop.png')] md:px-0">
          <div className="flex h-full w-full flex-col items-center text-center md:px-[2em] lg:w-[44em]">
            <Image className="mt-[8.2em] h-fit" src={logo as string} alt="logo" />
            <span className="mt-[1.15em] text-[2rem] font-[600] tracking-[-0.005em] text-darkGrayishBlue md:text-[2.8rem]">
              A history of everything you copy
            </span>
            <span className="mt-[0.55em] text-[1rem] tracking-[0.008em] text-grayishBlue md:text-[1.25rem]">
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
              your devices.
            </span>
            <div className="mt-[3em] flex w-full flex-col gap-[1em] md:w-fit md:flex-row">
              <CustomButton type={CustomButtonType.iOS} />
              <CustomButton type={CustomButtonType.mac} />
            </div>
            <Article1
              header="Keep track of your snippets"
              main="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on
        all your devices. Our Mac and iOS apps will help you organize everything."
            />
          </div>
          <div className="mt-[5em] flex w-full flex-col items-center md:flex-row md:gap-[2em] lg:gap-[4em] xl:gap-[6.9em]">
            <Image className="h-fit md:ml-[-2em] md:w-[50%] xl:w-[52.25%]" src={computer} alt="computer image" />
            <div className="mb-[4.4em] mt-[2.5em] flex flex-col justify-around gap-[3em] text-center md:gap-[1em] md:text-left xl:gap-[3.3em]">
              <Article2
                header="Quick Search"
                main="Easily search your snippets by content, category, web address, application, and more."
              />
              <Article2 header="iCloud Sync" main="Instantly saves and syncs snippets across all your devices." />
              <Article2
                header="Complete History"
                main="Retrieve any snippets from the first moment you started using the app."
              />
            </div>
          </div>
          <Article1
            header="Access Clipboard Anywhere"
            main="Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks."
          />
          <Image className="mt-[3em] h-fit pb-[2em] md:mt-[6em] md:pb-0" src={pad} alt="image of an IPad" />
          <Article1
            header="Supercharge your workflow"
            main="We’ve got the tools to boost your productivity."
            mt={'mt-[2em]'}
          />
          <div className="mt-[4em] grid gap-[1.8em] md:mt-[2.8em] md:grid-cols-3">
            <Article3
              image={iconBlacklist as string}
              header="Create blacklists"
              main="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
              optionalMt="mt-[1.55em]"
              optionalMt2="mt-[1.68em]"
            />
            <Article3
              image={iconText as string}
              header="Plain text snippets"
              main="Remove unwanted formatting from copied text for a consistent look."
            />
            <Article3
              image={iconPreview as string}
              header="Sneak preview"
              main="Quick preview of all snippets on your Clipboard for easy access."
            />
          </div>
          <div className="mt-[10em] flex flex-row items-center justify-around">
            <div className="flex flex-col items-center justify-center gap-[5em] md:grid md:grid-cols-3 xl:flex xl:grid-cols-5 xl:flex-row xl:gap-[6em]">
              <Image className="h-fit w-[85%] md:w-fit" src={logoGoogle} alt="Google logo" />
              <Image className="h-fit w-[80%] md:w-fit" src={logoIBM} alt="IBM logo" />
              <Image className="h-fit w-[80%] md:w-fit" src={logoMicrosoft} alt="Microsoft logo" />
              <Image className="h-fit w-[70%] md:w-fit" src={logoHP} alt="Hewlett Packard logo" />
              <Image className="h-fit w-[70%] md:w-fit" src={logoVG} alt="Vector Graphics logo" />
            </div>
          </div>
          <Article1
            header="Clipboard for iOS and Mac OS"
            main="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
            and you’re ready to start adding to your clipboard."
            mt="md:mt-[4.45em] mt-[7em]"
          />
          <div className="mt-[3em] flex w-full flex-col gap-[1em] md:w-fit md:flex-row">
            <CustomButton type={CustomButtonType.iOS} />
            <CustomButton type={CustomButtonType.mac} />
          </div>
        </div>
      </main>
      <footer className="h-full w-full bg-[#F5F6F8] md:h-[9.38em]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-[3em] py-[4em] md:flex-row md:gap-0 md:px-[2em] md:py-0 lg:px-[5em] xl:px-0 xl:pl-[10.3em] xl:pr-[10.3em]">
          <Image className="h-fit w-[3.4em] md:pb-[0.5em]" src={logo as string} alt="logo" />
          <div className="flex grid-cols-3 flex-col gap-y-[0.9em] text-[1.1rem] text-darkGrayishBlue md:grid md:gap-x-[2em] md:pr-[2em] lg:gap-x-[4em] lg:pr-[5em] xl:pr-[9.5em]">
            {['FAQs', 'Privacy Policy', 'Install Guide', 'Contact Us', 'Press Kit'].map((x, i) => (
              <button className="tracking-wide hover:text-strongCyan md:text-start" key={i}>
                {x}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-[2.2em] md:gap-[1.5em]">
            {[<IconFacebook key={0} />, <IconTwitter key={1} />, <IconInstagram key={2} />].map((x, i) => (
              <button key={i}>{x}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';
import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import logo from './images/logo.svg';
import logo2 from './images/logo2.svg';
import hamburger from './images/icon-hamburger.svg';
import arrowDown from './images/icon-arrow-down.svg';
import thomas from './images/image-thomas.jpg';
import jennie from './images/image-jennie.jpg';
import emily from './images/image-emily.jpg';
import milkBottles from './images/desktop/image-gallery-milkbottles.jpg';
import orange from './images/desktop/image-gallery-orange.jpg';
import cone from './images/desktop/image-gallery-cone.jpg';
import sugarCubes from './images/desktop/image-gallery-sugarcubes.jpg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const buttonLayout1 = 'text-white text-[1.1rem] font-barlow font-[600]';

const ArticleType1Button = ({ bgNormal, bgHover }: { bgNormal: string; bgHover: string }) => {
  const [hoverOnButton, setHoverOnButton] = useState<boolean>(false);
  return (
    <div className="pl-[0.45em] pt-[0.5em]">
      <button
        onMouseEnter={() => {
          setHoverOnButton(true);
        }}
        onMouseLeave={() => {
          setHoverOnButton(false);
        }}
        className="rounded-[2em] font-fraunces font-[900] text-veryDarkDesaturatedBlue"
      >
        <span>LEARN MORE</span>
      </button>
      <div
        className={`mx-[-0.3em] mt-[-0.58em] h-1/2 w-[8em] rounded-[1em] ${!hoverOnButton ? bgNormal : bgHover} py-1`}
      ></div>
    </div>
  );
};

const ArticleType1 = ({
  headerText,
  mainText,
  normalButtonBg,
  hoverButtonBg,
}: {
  headerText: string;
  mainText: string;
  normalButtonBg: string;
  hoverButtonBg: string;
}) => {
  return (
    <div className="flex h-[37em] items-center justify-center gap-[2em] bg-[#FFFBF8]">
      <div className="flex flex-col gap-[2em] text-left lg:ml-[3.5em] lg:w-[28em]">
        <span className="font-fraunces text-[2.5rem] font-[900] leading-[1.2em] text-veryDarkDesaturatedBlue">
          {headerText}
        </span>
        <span className="font-barlow text-[1.1rem] font-[600] leading-[1.7em] text-[#8D8C90]">{mainText}</span>
        <ArticleType1Button bgNormal={normalButtonBg} bgHover={hoverButtonBg} />
      </div>
    </div>
  );
};

const ArticleType2 = ({
  background,
  textColor,
  headerText,
  mainText,
}: {
  background: string;
  textColor: string;
  headerText: string;
  mainText: string;
}) => {
  return (
    <div className={`${background} flex h-[37em] items-end justify-center bg-center py-[4em] md:px-[5em] `}>
      <div className={`${textColor} flex flex-col items-center gap-[1.5em] text-center lg:w-[22em]`}>
        <span className=" font-fraunces text-[1.7rem] font-[900]">{headerText}</span>
        <span className="font-barlow text-[1.01rem] font-[600] leading-[1.65em]">{mainText}</span>
      </div>
    </div>
  );
};

const Testimonial = ({
  image,
  text,
  name,
  position,
}: {
  image: StaticImageData;
  text: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex w-[21.8em] flex-col items-center gap-[3.5em] text-center">
      <Image className="h-[4.5em] w-[4.5em] rounded-full" src={image} alt="Avatar of person" />
      <span className="font-barlow text-[1.15rem] font-[600] leading-[1.7em] tracking-[-0.3px] text-veryDarkGrayishBlue">
        {text}
      </span>
      <div className="ml-[-1em] mt-[0.8em] flex flex-col gap-[0.5em]">
        <span className="font-fraunces text-[1.13rem] font-[900] text-veryDarkDesaturatedBlue">{name}</span>
        <span className="font-barlow text-[0.87rem] font-[600] text-grayishBlue">{position}</span>
      </div>
    </div>
  );
};

export default function Home() {
  const [facebookColor, setFacebookColor] = useState<string>('#2C7566');
  const [instagramColor, setInstagramColor] = useState<string>('#2C7566');
  const [twitterColor, setTwitterColor] = useState<string>('#2C7566');
  const [pinterestColor, setPinterestColor] = useState<string>('#2C7566');
  return (
    <div className="min-h-screen">
      <nav className="bg-headerMobile col-span-2 flex h-[40em] flex-col items-center gap-[6em] bg-cover bg-bottom bg-no-repeat px-4 md:h-[50em] md:bg-header md:bg-top md:px-0">
        <div className="flex w-full items-center justify-between px-2 pt-9 md:mx-0 md:pl-10 md:pr-12">
          <Image src={logo as string} alt="logo" className="h-auto w-[10.5em]" />
          <Image src={hamburger as string} alt="navigation button" className="flex md:hidden" />
          <div className="hidden gap-2 md:flex md:gap-12 ">
            <button className={buttonLayout1}>About</button>
            <button className={buttonLayout1}>Services</button>
            <button className={buttonLayout1}>Projects</button>
            <button className="rounded-[2em] bg-white px-7 py-4 font-fraunces font-[700] hover:bg-[#6FCFFF] hover:text-white">
              CONTACT
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1.54em] text-center font-fraunces text-[2.5rem] font-[900] tracking-[0.18em] text-white md:text-[2.8rem] lg:text-[3.5rem]">
          <span>WE ARE CREATIVES</span>
          <Image src={arrowDown as string} className="" alt="arrow down" />
        </div>
      </nav>
      <main>
        <div>
          {/*row1*/}
          <div className="flex flex-col-reverse divide-y-reverse md:grid md:grid-cols-2 md:grid-rows-1">
            <ArticleType1
              headerText="Transform your brand"
              mainText="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
              normalButtonBg="bg-[#FFF1BA]"
              hoverButtonBg="bg-[#FDD406]"
            />
            <div className="bg-eggMobile h-[30em] bg-cover bg-center md:h-auto md:bg-egg"></div>
          </div>
          {/*row2*/}
          <div className="grid grid-cols-2">
            <div className="bg-glass  bg-center"></div>
            <ArticleType1
              headerText="Stand out to the right audience"
              mainText="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&#8217;ll build and extend your brand in digital places."
              normalButtonBg="bg-[#FFD9D3]"
              hoverButtonBg="bg-[#FF7160]"
            />
          </div>
          {/*row3*/}
          <div className="grid grid-cols-2">
            <ArticleType2
              background={'bg-cherries'}
              textColor={'text-darkDesaturatedCyanGraphicDesignText'}
              headerText="Graphic Design"
              mainText="Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients&#8217; attention."
            />
            <ArticleType2
              background={'bg-orange'}
              textColor={'text-darkBluePhotographyText'}
              headerText="Photography"
              mainText="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            />
          </div>
          {/*row4*/}
          <div className="flex h-[48.4em] justify-center bg-[#FFFBF8]">
            <div className=" flex flex-col items-center justify-center gap-[5em] ">
              <span className="font-fraunces text-[1.3rem] font-[900] tracking-[0.22em] text-grayishBlue">
                CLIENT TESTIMONIALS
              </span>
              <div className="flex gap-[2em]">
                <Testimonial
                  image={emily}
                  text=" We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                  name="Emily R."
                  position="Marketing Director"
                />
                <Testimonial
                  image={thomas}
                  text="Sunnyside&lsquo;s enthusiasm coupled with their keen interest in our brand&lsquo;s success made it a
        satisfying and enjoyable experience."
                  name="Thomas S."
                  position="Chief Operating Officer"
                />
                <Testimonial
                  image={jennie}
                  text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                  name="Jennie F."
                  position="Business Owner"
                />
              </div>
            </div>
          </div>
          {/*row5*/}
          <div className="grid grid-cols-4">
            <Image src={milkBottles} alt="Milk Bottles" />
            <Image src={orange} alt="Milk Bottles" />
            <Image src={cone} alt="Milk Bottles" />
            <Image src={sugarCubes} alt="Milk Bottles" />
          </div>
          {/*row6*/}
          <div className="flex h-[23em] justify-center bg-[#90D4C5]">
            <div className="mt-[4.6em] flex flex-col items-center justify-start">
              <Image className="h-auto w-[10.5em]" src={logo2 as string} alt="logo" />
              <div className="mt-[2.6em] flex justify-around gap-[4em] font-[600] text-[#509586]">
                <button className="hover:text-white">About</button>
                <button className="hover:text-white">Services</button>
                <button className="hover:text-white">Projects</button>
              </div>
              <div className="mt-[5.5em] flex gap-[1.8em]">
                <button
                  onMouseEnter={() => {
                    setFacebookColor('white');
                  }}
                  onMouseLeave={() => {
                    setFacebookColor('#2C7566');
                  }}
                >
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                      fill={facebookColor}
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button
                  onMouseEnter={() => {
                    setInstagramColor('white');
                  }}
                  onMouseLeave={() => {
                    setInstagramColor('#2C7566');
                  }}
                >
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                      fill={instagramColor}
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button
                  onMouseEnter={() => {
                    setTwitterColor('white');
                  }}
                  onMouseLeave={() => {
                    setTwitterColor('#2C7566');
                  }}
                >
                  <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"
                      fill={twitterColor}
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button
                  onMouseEnter={() => {
                    setPinterestColor('white');
                  }}
                  onMouseLeave={() => {
                    setPinterestColor('#2C7566');
                  }}
                >
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z"
                      fill={pinterestColor}
                      fillRule="nonzero"
                    />
                  </svg>{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';
import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import Image from 'next/image';
import heroDesktop from './images/image-intro-desktop.jpg';
import heroMobile from './images/image-intro-mobile.jpg';
import leftPatternDesktop from './images/bg-pattern-intro-left-desktop.svg';
import rightPatternMobile from './images/bg-pattern-intro-right-mobile.svg';
import logo from './images/logo.svg';
import snappyProcess from './images/icon-snappy-process.svg';
import affordablePrices from './images/icon-affordable-prices.svg';
import peopleFirst from './images/icon-people-first.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconFacebookHover from './images/icon-facebookHover.svg';
import iconTwitter from './images/icon-twitter.svg';
import iconTwitterHover from './images/icon-twitterHover.svg';
import iconPinterest from './images/icon-pinterest.svg';
import iconPinterestHover from './images/icon-pinterestHover.svg';
import iconInstagram from './images/icon-instagram.svg';
import iconInstagramHover from './images/icon-instagramHover.svg';
import burger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import { useEffect, useState } from 'react';

const Article = ({ image, header, main }: { image: string; header: string; main: string }) => {
  return (
    <div className="flex max-w-[22em] flex-col items-center md:items-start">
      <Image src={image} alt="icon" />
      <span className=" mt-[1.2em] font-dMSerifDisplay text-[1.7rem] text-[#2A272E]">{header}</span>
      <span className="mt-[0.8em] text-center font-karla leading-[1.6em] text-darkGrayishViolet md:text-left">
        {main}
      </span>
    </div>
  );
};

const FooterBlock = ({
  title,
  buttons,
  xlOptionalPadding,
}: {
  title: string;
  buttons: string[];
  xlOptionalPadding?: string;
}) => {
  return (
    <div
      className={`flex w-fit flex-col items-center font-karla text-[0.88rem] font-[700] tracking-[0.06em] md:items-start ${xlOptionalPadding}`}
    >
      <span className="mb-[2.2em]  text-darkGrayishViolet">{title}</span>
      <div className="flex flex-col items-center gap-[0.7em] md:items-start">
        {buttons.map((x, i) => (
          <button key={i} className="tracking-[0.06em] text-darkViolet hover:underline">
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [hoverOnFacebook, setHoverOnFacebook] = useState<boolean>(false);
  const [hoverOnTwitter, setHoverOnTwitter] = useState<boolean>(false);
  const [hoverOnPinterest, setHoverOnPinterest] = useState<boolean>(false);
  const [hoverOnInstagram, setHoverOnInstagram] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 && setBurgerOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={`${
        burgerOpen ? 'h-screen overflow-hidden' : 'min-h-screen'
      } flex flex-col items-center justify-center md:h-max `}
    >
      {/*right nav mobile*/}
      {burgerOpen && (
        <div className="absolute top-0 z-20 flex h-full w-full flex-col  bg-[#2B282F]">
          <div className="h-full w-full bg-[url('./images/bg-pattern-mobile-nav.svg')] bg-contain bg-bottom bg-no-repeat">
            <div className="flex h-[5em] w-full items-center justify-between bg-white px-[2em]">
              <Image className="h-fit" src={logo as string} alt="logo" />

              <button
                onClick={() => {
                  setBurgerOpen(false);
                }}
                className="h-fit"
              >
                <Image className="block h-fit md:hidden" src={close as string} alt="navigation button" />
              </button>
            </div>
            <div className="mt-10 flex w-full flex-col justify-center gap-[2em] text-veryLightGray">
              <button>HOW WE WORK</button>
              <button>BLOG</button>
              <button>ACCOUNT</button>
              <button className="mx-4 py-4 outline outline-2">VIEW PLANS</button>
            </div>
          </div>
        </div>
      )}
      <nav className="h-full w-full">
        {/**/}
        <div className="flex h-[5em] w-full items-center justify-between bg-white px-[2em] lg:px-[5em] xl:px-[10.5em]">
          <Image className="h-fit " src={logo as string} alt="logo" />
          {/*right nav desktop*/}
          <div className="mt-[0.2em] hidden gap-[1.86em] font-karla text-[0.83rem] font-[700] md:flex">
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">HOW WE WORK</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">BLOG</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">ACCOUNT</button>
            <button className="ml-[0.75em] px-[1.95em] pb-[0.6em] pt-[0.63em] tracking-[0.1em] outline outline-[0.175em] hover:bg-[#2B282F] hover:px-[1.615em] hover:pb-[0.8em] hover:pt-[0.8em] hover:font-[500] hover:tracking-[0.2em] hover:text-veryLightGray">
              VIEW PLANS
            </button>
          </div>
          {/*burger*/}
          <button
            className="block md:hidden"
            onClick={() => {
              setBurgerOpen(true);
            }}
          >
            <Image src={burger as string} alt="navigation button" />
          </button>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="flex flex-col">
          <Image className="flex h-fit w-full md:hidden" src={heroMobile} alt="image of a family" />
          <div className="flex h-[37.5em] w-full bg-darkViolet">
            <div className="z-10 flex h-full w-full flex-none justify-end bg-[url('./images/bg-pattern-intro-left-mobile.svg')]  bg-no-repeat md:bg-[url('./images/bg-pattern-intro-right-desktop.svg')] md:bg-[length:30.25%] md:bg-[100%_-5em]"></div>
            <div className="absolute flex h-0 w-full justify-center xl:w-[90em]">
              <div className="flex h-[37.5em] w-full justify-center gap-[1.7em] px-[1.5em] pt-[6.55em]">
                <div className="z-10 flex h-full w-full max-w-[34em] flex-col justify-start gap-[2em] pl-[0.1em]">
                  <div className="mb-[2em] hidden h-[1px] max-w-[9.35em] bg-veryLightGray md:block"></div>
                  <span className="whitespace-pre-line text-center font-dMSerifDisplay text-[3rem] leading-[0.9em] tracking-[-0.01em] text-veryLightGray md:text-left md:text-[3rem] xl:text-[4.45rem]">
                    {'Humanizing\n your insurance.'}
                  </span>
                  <span className="mt-[-0.3em] text-center font-karla leading-[1.6em] tracking-[0.004em] text-veryLightGray md:text-left">
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help
                    you find the plan that’s right for you. Ensure you and your loved ones are protected.
                  </span>
                  <button className="self-center px-[2.1em] py-[0.7em] text-[0.78rem] tracking-[0.1em] text-veryLightGray outline outline-[0.17em] hover:bg-veryLightGray hover:py-[0.8em] hover:font-[700] hover:text-darkViolet md:self-start">
                    VIEW PLANS
                  </button>
                </div>
                <Image
                  className="hidden h-fit w-fit md:block md:h-[85%] lg:h-[90%] xl:h-fit"
                  src={heroDesktop}
                  alt="image of family"
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full bg-white pb-[9.35em]">
            <div className="flex w-full justify-end md:justify-start">
              <Image className="mt-[-10.7em] hidden md:flex" src={leftPatternDesktop as string} alt="" />
              <Image className="mt-[-10.7em] flex md:hidden" src={rightPatternMobile as string} alt="" />
            </div>
            <div className="flex w-full flex-col items-center md:items-start md:px-[4em] xl:px-0 xl:pl-[10.35em] xl:pr-[10.3em]">
              <div className="mb-[2.6em] mt-[-1.75em] h-[1px] w-[9.3em] bg-[#BBAEBD]"></div>
              <span className="mb-[1.02em] text-center font-dMSerifDisplay text-[3rem] tracking-[-0.015em] text-[#2A272E] md:text-left md:text-[4.5rem]">
                We’re different
              </span>
              <div className="flex w-full flex-col items-center justify-between gap-[4em] md:flex-row md:gap-[3em] xl:gap-[1em]">
                <Article
                  image={snappyProcess as string}
                  header="Snappy Process"
                  main="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
                />
                <Article
                  image={affordablePrices as string}
                  header="Affordable Prices"
                  main="We don’t want you worrying about high monthly costs. Our prices may be low, 
                  but we still offer the best coverage possible."
                />
                <Article
                  image={peopleFirst as string}
                  header="People First"
                  main="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                  sure you’re covered when you need it."
                />
              </div>
              <div className="pd:h-[15.6em] mt-[10em] h-full w-full bg-darkViolet">
                <div className="flex h-full  w-full flex-col items-center justify-around gap-[2.5em] bg-[url('./images/bg-pattern-how-we-work-mobile.svg')] bg-contain bg-[100%_-2em] bg-no-repeat px-[1.5em] py-[4em] md:flex-row md:justify-between md:bg-[url('./images/bg-pattern-how-we-work-desktop.svg')] md:bg-right md:px-[5em] md:py-0">
                  <span className="max-w-[10em] text-center font-dMSerifDisplay text-[2.5rem] leading-[1em] text-veryLightGray md:whitespace-pre-line md:text-left md:text-[3.4rem]">
                    {'Find out more\nabout how we work'}
                  </span>
                  <button className="px-[1.6em] py-[0.5em] font-karla text-[0.9em] tracking-[0.08em] text-veryLightGray outline outline-2 hover:bg-veryLightGray hover:px-[1.5em] hover:py-[0.6em] hover:font-[700] hover:text-darkViolet">
                    HOW WE WORK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-full w-full">
        <div className="h-full w-full bg-veryLightGray md:h-[24.55em]">
          <div className="h-full w-full bg-[url('./images/bg-pattern-footer-desktop.svg')] bg-no-repeat">
            <div className="h-full w-full pt-[4.2em] md:px-[5em] xl:px-[10.3em]">
              <div className="flex flex-col items-center justify-between gap-[2em] md:flex-row">
                <Image className="h-fit " src={logo as string} alt="logo" />
                <div className="mt-[-0.2em] flex h-fit items-center gap-[1em]">
                  <button
                    onMouseEnter={() => {
                      setHoverOnFacebook(true);
                    }}
                    onMouseLeave={() => {
                      setHoverOnFacebook(false);
                    }}
                  >
                    <Image
                      className="h-fit"
                      src={(hoverOnFacebook ? iconFacebookHover : iconFacebook) as string}
                      alt="facebook logo"
                    />
                  </button>
                  <button
                    onMouseEnter={() => {
                      setHoverOnTwitter(true);
                    }}
                    onMouseLeave={() => {
                      setHoverOnTwitter(false);
                    }}
                  >
                    <Image
                      className="h-fit"
                      src={(hoverOnTwitter ? iconTwitterHover : iconTwitter) as string}
                      alt="twitter logo"
                    />
                  </button>
                  <button
                    onMouseEnter={() => {
                      setHoverOnPinterest(true);
                    }}
                    onMouseLeave={() => {
                      setHoverOnPinterest(false);
                    }}
                  >
                    <Image
                      className="h-fit"
                      src={(hoverOnPinterest ? iconPinterestHover : iconPinterest) as string}
                      alt="pinterest logo"
                    />
                  </button>
                  <button
                    onMouseEnter={() => {
                      setHoverOnInstagram(true);
                    }}
                    onMouseLeave={() => {
                      setHoverOnInstagram(false);
                    }}
                  >
                    <Image
                      className="h-fit"
                      src={(hoverOnInstagram ? iconInstagramHover : iconInstagram) as string}
                      alt="instagram logo"
                    />
                  </button>
                </div>
              </div>
              <div className="mb-[2.8em]  mt-[2.05em] h-[1px] w-full bg-zinc-300"></div>
              <div className="flex w-full flex-col items-center justify-between gap-[2.8em] pb-[6em] md:flex-row md:items-start md:gap-0 md:pb-0 lg:pr-[5em] xl:pr-[11.5em]">
                <FooterBlock title={'OUR COMPANY'} buttons={['HOW WE WORK', 'WHY INSURE?', 'VIEW PLANS', 'REVIEWS']} />
                <FooterBlock
                  title={'HELP ME'}
                  buttons={['FAQ', 'TERMS OF USE', 'PRIVACY POLICY', 'COOKIES']}
                  xlOptionalPadding="xl:pl-[0.5em]"
                />
                <FooterBlock
                  title={'CONTACT'}
                  buttons={['SALES', 'SUPPORT', 'LIVE CHAT']}
                  xlOptionalPadding="xl:pr-[3.2em]"
                />
                <FooterBlock title={'OTHERS'} buttons={['CAREERS', 'PRESS', 'LICENSES']} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
//#2B282F

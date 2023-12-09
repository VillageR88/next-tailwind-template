import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import Image from 'next/image';
import heroDesktop from './images/image-intro-desktop.jpg';
import leftPatternDesktop from './images/bg-pattern-intro-left-desktop.svg';
import logo from './images/logo.svg';
import snappyProcess from './images/icon-snappy-process.svg';
import affordablePrices from './images/icon-affordable-prices.svg';
import peopleFirst from './images/icon-people-first.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconTwitter from './images/icon-twitter.svg';
import iconPinterest from './images/icon-pinterest.svg';
import iconInstagram from './images/icon-instagram.svg';

const Article = ({ image, header, main }: { image: string; header: string; main: string }) => {
  return (
    <div className="flex max-w-[22em] flex-col">
      <Image src={image} alt="icon" />
      <span className=" mt-[1.2em] font-dMSerifDisplay text-[1.7rem] text-[#2A272E]">{header}</span>
      <span className="mt-[0.8em] font-karla leading-[1.6em] text-darkGrayishViolet">{main}</span>
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
      className={`flex w-fit flex-col items-start font-karla text-[0.88rem] font-[700] tracking-[0.06em] ${xlOptionalPadding}`}
    >
      <span className="mb-[2.2em] text-darkGrayishViolet">{title}</span>
      <div className="flex flex-col items-start gap-[0.7em]">
        {buttons.map((x, i) => (
          <button key={i} className="tracking-[0.06em] text-darkViolet">
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="flex h-[5em] w-full items-center justify-between bg-white md:px-[2em] lg:px-[5em] xl:px-[10.5em]">
          <Image className="h-fit " src={logo as string} alt="logo" />
          <div className="mt-[0.2em] flex gap-[1.86em] font-karla text-[0.83rem] font-[700]">
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">HOW WE WORK</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">BLOG</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet hover:text-[#2B282F]">ACCOUNT</button>
            <button className="ml-[0.75em] px-[1.95em] pb-[0.6em] pt-[0.63em] tracking-[0.1em] outline outline-[0.175em] hover:bg-[#2B282F] hover:px-[1.615em] hover:pb-[0.8em] hover:pt-[0.8em] hover:font-[500] hover:tracking-[0.2em] hover:text-veryLightGray">
              VIEW PLANS
            </button>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="flex flex-col">
          <div className="flex h-[37.5em] w-full bg-darkViolet">
            <div className="z-10 flex h-full w-full flex-none justify-end bg-[url('./images/bg-pattern-intro-right-desktop.svg')] bg-[length:30.25%] bg-[100%_-5em] bg-no-repeat"></div>
            <div className="absolute flex h-0 w-full justify-center xl:w-[90em]">
              <div className="flex h-[37.5em] w-full justify-center gap-[1.7em] px-[2em] pt-[6.55em]">
                <div className="z-10 flex h-full w-full max-w-[34em] flex-col justify-start gap-[2em] pl-[0.1em]">
                  <div className="mb-[2em] h-[1px] max-w-[9.35em] bg-veryLightGray"></div>
                  <span className="whitespace-pre-line font-dMSerifDisplay leading-[0.9em] tracking-[-0.01em] text-veryLightGray md:text-[3rem] xl:text-[4.45rem]">
                    {'Humanizing\n your insurance.'}
                  </span>
                  <span className="mt-[-0.3em] font-karla leading-[1.6em] tracking-[0.004em] text-veryLightGray">
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help
                    you find the plan that’s right for you. Ensure you and your loved ones are protected.
                  </span>
                  <button className="self-start px-[2.1em] py-[0.7em] text-[0.78rem] tracking-[0.1em] text-veryLightGray outline outline-[0.17em] hover:bg-veryLightGray hover:font-[700] hover:text-darkViolet">
                    VIEW PLANS
                  </button>
                </div>
                <Image className="h-[90%] w-fit xl:h-fit" src={heroDesktop} alt="image of family" />
              </div>
            </div>
          </div>
          <div className="h-full w-full bg-white pb-[9.35em]">
            <div className="flex flex-col">
              <Image className="mt-[-10.7em]" src={leftPatternDesktop as string} alt="" />
            </div>
            <div className="flex w-full flex-col md:px-[4em] xl:px-0 xl:pl-[10.35em] xl:pr-[10.3em]">
              <div className="mb-[2.6em] mt-[-1.75em] h-[1px] w-[9.3em] bg-[#BBAEBD]"></div>
              <span className="mb-[1.02em] font-dMSerifDisplay text-[4.5rem] tracking-[-0.015em] text-[#2A272E]">
                We’re different
              </span>
              <div className="flex w-full flex-row justify-between md:gap-[3em] xl:gap-[1em]">
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
              <div className="mt-[10em] h-[15.6em] w-full bg-darkViolet">
                <div className="flex h-full w-full items-center justify-between bg-[url('./images/bg-pattern-how-we-work-desktop.svg')] bg-contain bg-right bg-no-repeat px-[5em]">
                  <span className="max-w-[10em] whitespace-pre-line font-dMSerifDisplay text-[3.4rem] leading-[1em] text-veryLightGray">
                    {'Find out more\nabout how we work'}
                  </span>
                  <button className="px-[1.6em] py-[0.5em] font-karla text-[0.9em] tracking-[0.08em] text-veryLightGray outline outline-2">
                    HOW WE WORK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-full w-full">
        <div className="h-[24.55em] w-full bg-veryLightGray">
          <div className="h-full w-full bg-[url('./images/bg-pattern-footer-desktop.svg')] bg-no-repeat">
            <div className="h-full w-full pt-[4.2em] md:px-[5em] xl:px-[10.3em]">
              <div className="flex justify-between">
                <Image className="h-fit " src={logo as string} alt="logo" />
                <div className="mt-[-0.2em] flex h-fit items-center gap-[1em]">
                  <button>
                    <Image className="h-fit" src={iconFacebook as string} alt="facebook logo" />
                  </button>
                  <button>
                    <Image className="h-fit" src={iconTwitter as string} alt="twitter logo" />
                  </button>
                  <button>
                    <Image className="h-fit" src={iconPinterest as string} alt="pinterest logo" />
                  </button>
                  <button>
                    <Image className="h-fit" src={iconInstagram as string} alt="instagram logo" />
                  </button>
                </div>
              </div>
              <div className="mb-[2.8em] mt-[2.05em] h-[1px] w-full bg-zinc-300"></div>
              <div className="flex-row] flex w-full justify-between lg:pr-[5em] xl:pr-[11.5em]">
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

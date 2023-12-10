import '@fontsource/barlow-condensed';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow';
import '@fontsource/barlow/400.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import navMobileOpen from './images/icon-hamburger.svg';
import navMobileClose from './images/icon-close.svg';
import illustration from './images/illustration-devices.svg';

const CustomButton1 = ({ text }: { text: string }) => {
  return (
    <button className="z-10 pt-[0.2em] text-[0.9rem] font-[700] tracking-[0.1em] text-black hover:underline">
      {text}
    </button>
  );
};
const CustomButton2 = ({ text }: { text: string }) => {
  return (
    <button className="z-10 ml-[0.5em] pt-[0.2em] text-[0.9rem] font-[700] tracking-[0.1em] text-[#838790] hover:underline">
      {text}
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex-flex-row h-[24em] w-full md:h-[26.7em]">
        <div className="h-0">
          <div className="flex items-center justify-between px-[2em] pt-[2em] font-barlowCondensed md:px-[3em] md:pt-[4em] lg:px-[5em] xl:px-[10.3em]">
            <Image className="z-10 h-full" src={logo as string} alt="logo" />
            <div className="hidden items-center gap-[2.45em] md:flex">
              <CustomButton1 text="PRODUCT" />
              <CustomButton1 text="FEATURES" />
              <CustomButton1 text="PRICING" />
              <div className="z-10 mt-[0.2em] h-1.5 w-1.5 rounded-full bg-[#CDD3D7]"></div>
              <CustomButton2 text="LOGIN" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full justify-end bg-white">
          <div className=" h-[full] w-[50%] rounded-bl-[3.8em] bg-lightGrayishBlue md:w-[60%] xl:w-[44.05em]"></div>
        </div>
      </nav>
      <main className="w-full bg-white md:h-[23.301em]">
        <div className="mt-[-13.5em] flex flex-col-reverse justify-between gap-[8em] md:flex-row md:gap-0">
          <div className="flex flex-col px-[1.5em] font-barlowCondensed md:ml-[3em] md:px-0 lg:ml-[5em] lg:mt-[2em] xl:ml-[10.3em] xl:mt-[3em]">
            <div className=" flex gap-[1em]">
              <span className="flex h-fit w-[3.3em] justify-center rounded-[1em] bg-veryDarkBlue py-0.5 text-[0.9rem] font-[700] tracking-[0.1em] text-white">
                NEW
              </span>
              <span className="tracking-[0.28em] text-grayishBlue">MONOGRAPH DASHBOARD</span>
            </div>
            <span className="mt-[0.3em] font-barlowCondensed text-[2.5rem] font-[700] leading-[1em] text-veryDarkBlue md:text-[3rem] lg:text-[4rem]">
              POWERFUL INSIGHTS INTO YOUR TEAM
            </span>
            <span className="mt-[1.6em] max-w-[15em] font-barlow text-[1.15rem] leading-[1.4em] tracking-[-0.01em] text-darkGrayishBlue">
              Project planning and time tracking for agile teams
            </span>
            <div className="mt-[2em] md:pb-0 pb-24 flex flex-row items-center gap-[1em] md:mt-[4em] md:flex-col md:items-start md:gap-[0.5em] lg:flex-row lg:items-center xl:gap-[1.4em]">
              <button className="rounded-[0.3em] bg-[#FF5D5E] px-4 py-[0.5em] font-barlowCondensed text-[0.9rem] font-[700] tracking-[0.06em] text-lightGrayishBlue hover:bg-[#FF8584] md:px-8 md:py-[0.7em] md:text-[1.03rem] md:text-[1rem]">
                SCHEDULE A DEMO
              </button>
              <span className="text-[0.8rem] tracking-[0.3em] text-grayishBlue md:text-[1rem]">TO SEE A PREVIEW</span>
            </div>
          </div>
          <Image
            className="translate-x-[5.5em] scale-[140%] md:mr-[-16.75em] md:h-[22em] md:w-fit md:translate-x-0 md:scale-100 lg:h-[25em] xl:h-fit"
            src={illustration as string}
            alt="image of a computer"
            priority
          />
        </div>
      </main>
    </div>
  );
}

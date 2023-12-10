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
      <nav className="flex-flex-row h-[26.7em] w-full">
        <div className="h-0">
          <div className="flex items-center justify-between pt-[4em] font-barlowCondensed md:px-[3em] lg:px-[5em] xl:px-[10.3em]">
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
          <div className=" h-[full] rounded-bl-[3.8em] bg-lightGrayishBlue md:w-[60%] xl:w-[44.05em]"></div>
        </div>
      </nav>
      <main className="h-[23.301em] w-full bg-white">
        <div className="mt-[-13.5em] flex justify-between">
          {/***/}
          <div className="mt-[3em] flex flex-col font-barlowCondensed md:ml-[1em] lg:ml-[5em] xl:ml-[10.3em]">
            <div className="flex gap-[1em]">
              <span className="flex h-fit w-[3.3em] justify-center rounded-[1em] bg-veryDarkBlue py-0.5 text-[0.9rem] font-[700] tracking-[0.1em] text-white">
                NEW
              </span>
              <span className="tracking-[0.28em] text-grayishBlue">MONOGRAPH DASHBOARD</span>
            </div>
            <span className="mt-[0.3em] font-barlowCondensed text-[4rem] font-[700] leading-[1em] text-veryDarkBlue">
              POWERFUL INSIGHTS INTO YOUR TEAM
            </span>
            <span className="mt-[1.6em] max-w-[15em] font-barlow text-[1.15rem] leading-[1.4em] tracking-[-0.01em] text-darkGrayishBlue">
              Project planning and time tracking for agile teams
            </span>
            <div className="mt-[4em] flex xl:flex-row flex-col items-start xl:items-center gap-[0.5em] xl:gap-[1.4em]">
              <button className="rounded-[0.3em] bg-[#FF5D5E] px-8 py-[0.7em] font-barlowCondensed text-[1.03rem] font-[700] tracking-[0.06em] text-lightGrayishBlue hover:bg-[#FF8584]">
                SCHEDULE A DEMO
              </button>
              <span className="tracking-[0.3em] text-grayishBlue">TO SEE A PREVIEW</span>
            </div>
          </div>
          <Image className="mr-[-16.75em] h-fit w-fit" src={illustration as string} alt="image of a computer" />
        </div>
      </main>
    </div>
  );
}

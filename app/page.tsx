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
  return <button className="z-10 pt-[0.2em] text-[0.9rem] font-[700] tracking-[0.1em] text-black">{text}</button>;
};
const CustomButton2 = ({ text }: { text: string }) => {
  return (
    <button className="z-10 pl-[0.5em] pt-[0.2em] text-[0.9rem] font-[700] tracking-[0.1em] text-[#838790]">
      {text}
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex-flex-row h-[26.7em] w-full">
        <div className="h-0">
          <div className="flex items-center justify-between px-[10.3em] pt-[4em] font-barlowCondensed">
            <Image className="z-10 h-full" src={logo as string} alt="logo" />
            <div className="flex items-center gap-[2.45em]">
              <CustomButton1 text="PRODUCT" />
              <CustomButton1 text="FEATURES" />
              <CustomButton1 text="PRICING" />
              <div className="z-10 mt-[0.2em] h-1.5 w-1.5 rounded-full bg-[#CDD3D7]"></div>
              <CustomButton2 text="LOGIN" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full justify-end bg-white">
          <div className=" h-[full] w-[44.05em] rounded-bl-[3.8em] bg-lightGrayishBlue"></div>
        </div>
      </nav>
      <main className="h-[23.301em] w-full bg-white">
        <div className="mt-[-13.5em] flex justify-between">
          <div>
            <div className="ml-[10.3em] mt-[3em] flex flex-col font-barlowCondensed">
              <div className="flex gap-[1em]">
                <span className="flex h-fit w-[3.3em] justify-center rounded-[1em] bg-veryDarkBlue py-0.5 text-[0.9rem] font-[700] tracking-[0.1em] text-white">
                  NEW
                </span>
                <span className="tracking-[0.28em] text-grayishBlue">MONOGRAPH DASHBOARD</span>
              </div>
              <span>Powerful insights into your team</span>
              <span>Project planning and time tracking for agile teams</span>
            </div>
          </div>
          <Image className="mr-[-16.75em]" src={illustration as string} alt="image of a computer" />
        </div>
      </main>
    </div>
  );
}

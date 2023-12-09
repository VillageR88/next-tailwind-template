import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import Image from 'next/image';
import heroDesktop from './images/image-intro-desktop.jpg';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="flex h-[5em] w-full items-center justify-between bg-white px-[10.5em]">
          <Image className="h-fit " src={logo as string} alt="logo" />
          <div className="mt-[0.2em] flex gap-[1.86em] font-karla text-[0.83rem] font-[700]">
            <button className="tracking-[0.1em] text-darkGrayishViolet">HOW WE WORK</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet">BLOG</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet">ACCOUNT</button>
            <button className="ml-[0.75em] px-[1.95em] pb-[0.6em] pt-[0.63em] tracking-[0.1em] outline outline-[0.175em]">
              VIEW PLANS
            </button>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="flex h-[37.5em] w-full bg-darkViolet">
          <div className="z-10 flex h-full w-full flex-none justify-end bg-[url('./images/bg-pattern-intro-right-desktop.svg')] bg-[100%_-5em] bg-no-repeat"></div>
          <div className="absolute flex h-0 w-full justify-center xl:w-[90em]">
            <div className="flex h-[37.5em] w-fit justify-center gap-[2em]">
              <div className="flex z-10  h-full w-full max-w-[34em] flex-col justify-center gap-[2em]">
                <span className="whitespace-pre-line  font-dMSerifDisplay text-[4.5rem] leading-[0.9em] text-veryLightGray">
                  {'Humanizing\n your insurance.'}
                </span>
                <span className="font-karla text-veryLightGray">
                  Get your life insurance coverage easier and faster. We blend our expertise and technology to help you
                  find the plan that’s right for you. Ensure you and your loved ones are protected.
                </span>
                <button className="self-start px-[1.8em] pb-[0.6em] pt-[0.63em] text-[0.8rem] tracking-[0.1em] text-veryLightGray outline outline-[0.175em]">
                  VIEW PLANS
                </button>
              </div>
              <Image className="h-fit" src={heroDesktop} alt="image of family" />
            </div>
          </div>
        </div>
        <div className="h-[50em] bg-white"></div>
      </main>
    </div>
  );
}

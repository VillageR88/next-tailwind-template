import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import Image from 'next/image';
import heroDesktop from './images/image-intro-desktop.jpg';
import leftPatternDesktop from './images/bg-pattern-intro-left-desktop.svg';
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
                  <button className="self-start px-[2.1em] py-[0.7em] text-[0.78rem] tracking-[0.1em] text-veryLightGray outline outline-[0.17em]">
                    VIEW PLANS
                  </button>
                </div>
                <Image className="h-[90%] w-fit xl:h-fit" src={heroDesktop} alt="image of family" />
              </div>
            </div>
          </div>
          <div className="h-[50em] w-full bg-white">
            <div className="flex flex-col">
              <Image className="mt-[-10.7em]" src={leftPatternDesktop as string} alt="" />
            </div>
            <div className=" bg-slate-200">ss</div>
          </div>
        </div>
      </main>
    </div>
  );
}

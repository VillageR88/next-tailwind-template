import Image from 'next/image';
import '@fontsource/epilogue';
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/500.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/epilogue/700.css';

export default function Home() {
  const navButtonsLayout = 'text-[0.9rem] font-[600] text-mediumGray';
  const navDoubleLayout = 'flex items-center gap-1.5 hover:cursor-pointer';
  const navSingleLayout = 'flex items-center hover:cursor-pointer';
  const arrowDown = (
    <Image className="h-[0.5em] w-[0.7em]" src="./images/icon-arrow-down.svg" alt="arrow down" height={1} width={10} />
  );
  return (
    <div className="flex h-full flex-col items-center gap-[2em] py-4 font-epilogue md:min-h-screen md:gap-14 md:px-4 md:py-6">
      <nav className="flex w-full flex-row justify-between xl:pr-10">
        {/*navbar left wrapper*/}
        <div className="flex items-center px-4 md:gap-16 md:px-0">
          <Image
            className="mt-2 h-[1.7em] w-[5.3em]"
            src="./images/logo.svg"
            alt="logo"
            height={10}
            width={10}
            priority
          />
          <div className="hidden gap-8 md:flex ">
            <div className={navDoubleLayout}>
              <span className={navButtonsLayout}>Features</span>
              {arrowDown}
            </div>
            <div className={navDoubleLayout}>
              <span className={navButtonsLayout}>Company</span>
              {arrowDown}
            </div>
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>Careers</span>
            </div>
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>About</span>
            </div>
          </div>
        </div>
        {/*navbar right wrapper(desktop)*/}
        <div className="hidden gap-8 md:flex">
          <div className={navSingleLayout}>
            <span className={navButtonsLayout}>Login</span>
          </div>
          <div className={navSingleLayout}>
            <button
              className={`${navButtonsLayout} rounded-[1em] border-2 border-mediumGray px-5 pb-1.5 pt-2 text-center`}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
      <main className="flex w-full flex-col-reverse justify-around gap-[2em] md:flex-row xl:pl-[8em]">
        {/*1st col wrapper*/}
        <div className="flex w-full flex-col items-center justify-between text-center md:w-1/2 md:items-start md:whitespace-break-spaces md:text-left">
          <span className="text-[2.2rem] font-[700] leading-[1em] text-almostBlack md:pt-[1em] md:text-[3.5rem] xl:text-[4.8rem]">
            {'Make\nremote work'}
          </span>
          <span className="md:text[0.8rem] lg:text[1rem] max-w-[26em] px-4 pb-[2em] pt-[2em] font-[600] text-mediumGray md:px-0 md:pb-[3em] xl:text-[1.1rem]">
            {
              'Get your team in sync, no matter your location.\nStreamline processes, create team rituals, and watch productivity soar.'
            }
          </span>
          <button className="rounded-[1em] bg-almostBlack px-8 py-4 text-[1.1rem] font-[600] text-almostWhite md:self-start md:px-6">
            Learn more
          </button>
          <div className="flex w-full items-center justify-between px-4 pt-[2.5em] md:scale-100 md:justify-start md:gap-1 md:px-0 md:pt-[3em] lg:pt-[7em] xl:gap-10">
            <Image
              className="h-[1em] w-[5em] md:h-[1.3em] md:w-[7em]"
              src="./images/client-databiz.svg"
              alt="databiz logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[2em] w-[4em]  md:h-[2.2em] md:w-[4.4em]"
              src="./images/client-audiophile.svg"
              alt="audiophile logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1em] w-[4em]  md:h-[1.3em] md:w-[6em]"
              src="./images/client-meet.svg"
              alt="meet logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1.4em] w-[5em]  md:h-[1.4em] md:w-[5em]"
              src="./images/client-maker.svg"
              alt="maker logo"
              height={10}
              width={10}
            />
          </div>
        </div>
        {/*2nd col wrapper*/}
        <div className="flex h-full self-center md:w-1/2">
          <Image
            className="hidden h-full w-[30em] md:flex"
            src="./images/image-hero-desktop.png"
            alt="logo"
            height={10}
            width={10}
          />
          <Image
            className="flex h-full w-full md:hidden"
            src="./images/image-hero-mobile.png"
            alt="logo"
            height={10}
            width={10}
          />
        </div>
      </main>
    </div>
  );
}

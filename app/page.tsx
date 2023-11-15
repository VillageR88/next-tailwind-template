import Image from 'next/image';
import '@fontsource/epilogue';
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/500.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/epilogue/700.css';

export default function Home() {
  const navButtonsLayout = 'text-[0.9rem] font-[600] text-mediumGray';
  const navDoubleLayout = 'flex items-center gap-1.5';
  const navSingleLayout = 'flex items-center';
  const arrowDown = (
    <Image className="h-[0.5em] w-[0.7em]" src="./images/icon-arrow-down.svg" alt="arrow down" height={1} width={10} />
  );
  return (
    <div className="flex flex-col items-center gap-14 py-6 font-epilogue md:min-h-screen">
      <nav className="flex w-full flex-row justify-between">
        {/*navbar left wrapper*/}
        <div className="flex items-center gap-16">
          <Image className="h-[1.7em] w-[5.3em]" src="./images/logo.svg" alt="logo" height={10} width={10} priority />
          <div className="flex gap-8">
            <div className={navDoubleLayout}>
              <span className={navButtonsLayout}>Feauters</span>
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
        {/*navbar right wrapper*/}
        <div className="flex gap-8">
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
      <main className="flex w-[85%] flex-col justify-center gap-[8em] md:flex-row">
        {/*1st col wrapper*/}
        <div className="flex flex-col whitespace-break-spaces">
          <span className="pt-[1em] text-[4.8rem] font-[700] leading-[1em] text-almostBlack">{'Make remote work'}</span>
          <span className="max-w-[26em] pb-[3em] pt-[2em] text-[1.1rem] font-[600] text-mediumGray">
            {
              'Get your team in sync, no matter your location.\nStreamline processes, create team rituals, and watch productivity soar.'
            }
          </span>
          <button className="self-start rounded-[1em] bg-almostBlack px-8 py-4 text-[1.1rem] font-[600] text-almostWhite">
            Learn more
          </button>
          <div className="flex justify-between gap-10 pt-[7em]">
            <Image
              className="h-[1.3em] w-[7em]"
              src="./images/client-databiz.svg"
              alt="databiz logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[2.2em] w-[4.4em]"
              src="./images/client-audiophile.svg"
              alt="audiophile logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1.3em] w-[6em]"
              src="./images/client-meet.svg"
              alt="meet logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1.4em] w-[5em]"
              src="./images/client-maker.svg"
              alt="maker logo"
              height={10}
              width={10}
            />
          </div>
        </div>
        {/*2nd col wrapper*/}
        <div className="h-full w-[55%]">
          <Image className="h-full w-full" src="./images/image-hero-desktop.png" alt="logo" height={10} width={10} />
        </div>
      </main>
    </div>
  );
}

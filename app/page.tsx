import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import interactive from './images/desktop/image-interactive.jpg';

export default function Home() {
  const rightNavTracking = 'tracking-[0.02em]';
  const navSecondRowTextSize =
    'text-[4.4rem] h-fit pt-2 flex flex-col justify-center tracking-[0.02em] leading-[0.87em]';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="h-[40.6em] w-full bg-[url('./images/desktop/image-hero.jpg')] bg-center">
          <div className="h-full w-full bg-black bg-opacity-40">
            <div className="flex h-full w-full flex-col gap-[8.2em]">
              {/*first row*/}
              <div className="flex h-fit w-full flex-row items-center justify-between pl-[10.35em] pr-[10.35em] pt-[4em]">
                {/*left*/}
                <Image className="h-fit" src={logo as string} alt="logo image" />
                {/*right desktop*/}
                <div className="mt-1 flex h-fit gap-[2.26em] font-alata text-[0.9rem] tracking-tighter text-white opacity-90">
                  <button className={rightNavTracking}>About</button>
                  <button className={rightNavTracking}>Careers</button>
                  <button className={rightNavTracking}>Events</button>
                  <button className={rightNavTracking}>Products</button>
                  <button className={rightNavTracking}>Support</button>
                </div>
              </div>
              {/*second row*/}
              <div className="hidden h-[17.25em] w-[40.5em] flex-col justify-center pl-[2.5em] pt-1 font-josefinSans text-white outline outline-2 outline-white  md:ml-[2em] md:flex lg:ml-[10.4em] lg:mr-[10.35em]">
                <div className="flex flex-col justify-center">
                  <span className={navSecondRowTextSize}>IMMERSIVE</span>
                  <span className={navSecondRowTextSize}>EXPERIENCES</span>
                  <span className={navSecondRowTextSize}>THAT DELIVER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="h-[120em] w-full bg-white">
          {/*row1*/}
          <div className="flex pl-[10.3em] pt-[10em] bg-fuchsia-300">
            <Image className="mr-[-10.1em]" src={interactive} alt="photo of a person wearing VR googles" />
            <div className="flex flex-col justify-end">
              <div className="flex flex-col gap-[2em] pl-[6em] bg-white">
                <span className="whitespace-pre-line font-josefinSans text-[3rem] leading-[1em]">
                  {'The leader in\ninteractive VR'.toUpperCase()}
                </span>
                <span className="font-alata text-[0.9rem] text-barkGray">
                  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                  best companies around the globe. Our award-winning creations have transformed businesses through
                  digital experiences that bind to their brand.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

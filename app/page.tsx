import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import interactive from './images/desktop/image-interactive.jpg';

const deepEarth = "bg-[url('./images/desktop/blocks/image-deep-earth.jpg')]";
const nightArcade = "bg-[url('./images/desktop/blocks/image-night-arcade.jpg')]";
const soccerTeam = "bg-[url('./images/desktop/blocks/image-soccer-team.jpg')]";
const BlockFeed = [deepEarth, nightArcade, soccerTeam];

const Block = ({ image }: { image: string }) => {
  return <div className={`h-[28.1em] w-[16em] ${image} bg-cover`}></div>;
};

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
              {/*1st row*/}
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
              {/*2nd row*/}
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
        <div className="h-full w-full bg-white">
          {/*1st row*/}
          <div className="flex w-full justify-center pt-[10em] xl:pl-[10.3em]">
            <Image
              className="md:mr-[-25em] lg:mr-[-10.1em]"
              src={interactive}
              alt="photo of a person wearing VR googles"
            />
            <div className="flex w-full flex-col items-center justify-end lg:items-start">
              <div className=" flex flex-col gap-[1.63em] bg-white pt-[6em] leading-[1.55em] tracking-[-0.006em] md:w-[27em] md:pl-[3em] md:pr-[3em] lg:w-[40.1em] lg:pl-[6em] lg:pr-[6em]">
                <span className="whitespace-pre-line font-josefinSans leading-[1em] md:text-[2.4rem] lg:text-[3rem]">
                  {'The leader in\ninteractive VR'.toUpperCase()}
                </span>
                <span className="font-alata text-[0.95rem] text-barkGray">
                  Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                  best companies around the globe. Our award-winning creations have transformed businesses through
                  digital experiences that bind to their brand.
                </span>
              </div>
            </div>
          </div>
          {/*2nd row*/}
          <div className="flex items-center justify-between px-[10.25em] pt-[10.8em]">
            <span className="font-josefinSans text-[3rem]">OUR CREATIONS</span>
            <button className="h-full rounded-[0.05em] px-[2.57em] py-[0.535em] font-alata text-[0.92rem] tracking-[0.3em] outline outline-[2px] outline-veryDarkGray">
              SEE ALL
            </button>
          </div>
          {/*3rd row*/}
          <div className="ml-[0.1em] flex w-full justify-center">
            <div className="grid w-fit grid-cols-3 gap-x-[1.89em] gap-y-[1.9em] pt-[4.25em] xl:grid-cols-4 ">
              {BlockFeed.map((x, i) => (
                <Block image={x} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
{
  /*<div className="grid w-fit grid-cols-3 gap-x-[2.1em] gap-y-[1.9em] pt-[4.25em] lg:pl-[6.3em] lg:pr-[3em] xl:grid-cols-4 xl:pl-[10.3em] xl:pr-[3em]">}*/
}

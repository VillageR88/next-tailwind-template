import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import interactive from './images/desktop/image-interactive.jpg';

const deepEarth = ['DEEP\nEARTH', "bg-[url('./images/desktop/blocks/image-deep-earth.jpg')]"];
const nightArcade = ['NIGHT\nARCADE', "bg-[url('./images/desktop/blocks/image-night-arcade.jpg')]"];
const soccerTeam = ['SOCCER\nTEAM VR', "bg-[url('./images/desktop/blocks/image-soccer-team.jpg')]"];
const theGrid = ['THE\nGRID', "bg-[url('./images/desktop/blocks/image-grid.jpg')]"];
const fromAbove = ['FROM UP\nABOVE VR', "bg-[url('./images/desktop/blocks/image-from-above.jpg')]"];
const pocketBorealis = ['POCKET\nBOREALIS', "bg-[url('./images/desktop/blocks/image-pocket-borealis.jpg')]"];
const curiosity = ['THE\nCURIOSITY', "bg-[url('./images/desktop/blocks/image-curiosity.jpg')]"];
const fisheye = ['MAKE IT\nFISHEYE', "bg-[url('./images/desktop/blocks/image-fisheye.jpg')]"];

const blockFeed = [deepEarth, nightArcade, soccerTeam, theGrid, fromAbove, pocketBorealis, curiosity, fisheye];
const rightNavFeed = ['About', 'Careers', 'Events', 'Products', 'Support'];

const Block = ({ value }: { value: string[] }) => {
  return (
    <div className={`h-[28.1em] w-[16em] ${value[1]} bg-cover`}>
      <div className="to-transparentDark flex h-full w-full flex-col justify-end whitespace-pre-line bg-gradient-to-b from-transparent from-30% pb-[1em] pl-[1.25em] font-josefinSans text-[2rem] leading-[1em] text-white text-opacity-90">
        <span>{value[0]}</span>
      </div>
    </div>
  );
};

export default function Home() {
  const rightNavTracking = 'tracking-[0.02em]';

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
                  {rightNavFeed.map((x, i) => (
                    <button key={i} className={rightNavTracking}>
                      {x}
                    </button>
                  ))}
                </div>
              </div>
              {/*2nd row*/}
              <div className="hidden h-[17.25em] w-[40.5em] flex-col justify-center pl-[2.5em] pt-1 font-josefinSans text-white outline outline-2 outline-white  md:ml-[2em] md:flex lg:ml-[10.4em] lg:mr-[10.35em]">
                <div className="flex flex-col justify-center">
                  {['IMMERSIVE', 'EXPERIENCES', 'THAT DELIVER'].map((x, i) => (
                    <span
                      key={i}
                      className="flex h-fit flex-col justify-center pt-2 text-[4.4rem] leading-[0.87em] tracking-[0.02em]"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="h-full w-full bg-white pb-[11.5em]">
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
              {blockFeed.map((x, i) => (
                <Block value={x} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="h-full w-full">
        <div className="h-[10em] w-full bg-black"></div>
      </footer>
    </div>
  );
}

import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';
import Image from 'next/image';
import DanielImage from './images/image-daniel.jpg';
import JeanetteImage from './images/image-jeanette.jpg';
import JonathanImage from './images/image-jonathan.jpg';
import KiraImage from './images/image-kira.jpg';
import PatrickImage from './images/image-patrick.jpg';

enum People {
  daniel = 'Daniel Clifford',
  jeanette = 'Jeanette Harmon',
  jonathan = 'Jonathan Walters',
  kira = 'Kira Whittle',
  patrick = 'Patrick Abrams',
}
const PeopleImages = {
  [People.daniel]: DanielImage,
  [People.jeanette]: JeanetteImage,
  [People.jonathan]: JonathanImage,
  [People.kira]: KiraImage,
  [People.patrick]: PatrickImage,
};

const Block_1_1 = ({ image, name, header, main }: { image: unknown; name: string; header: string; main: string }) => {
  return (
    <div className="col-span-1 rounded-lg bg-white shadow-2xl">
      <div className="flex h-full w-full flex-col justify-between pb-[1.5em] pl-[2em] pr-[2.5em] pt-[1.5em]">
        <div className="flex flex-row items-center gap-[1em]">
          <Image className="h-fit rounded-full" width={28} height={28} src={image as string} alt="image of a person" />
          <div className="flex flex-col">
            <span className="text-[0.8rem] leading-[1.4em] text-veryDarkBlackishBlue">{name}</span>
            <span className="text-[0.7rem] text-veryDarkBlackishBlue opacity-50">Verified Graduate</span>
          </div>
        </div>
        <span className="text-[1.2rem] leading-[1.25em] text-veryDarkBlackishBlue">{header}</span>
        <span className="text-[0.8rem] text-veryDarkGrayishBlue">{main}</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-barlowSemiCondensed">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-2 gap-x-[1.9em] gap-y-[2.5em] ">
        <div className="col-span-2 h-[17.6em] w-full rounded-lg bg-moderateViolet">
          <div className="h-full w-full bg-[url('./images/bg-pattern-quotation.svg')] bg-[81.7%_top] bg-no-repeat"></div>
        </div>
        <div className="col-span-1 h-[17.6em] rounded-lg bg-veryDarkGrayishBlue shadow-2xl"></div>
        <div className="row-span-2 rounded-lg bg-white shadow-2xl"></div>
        <Block_1_1
          image={PeopleImages[People.jeanette]}
          name={People.jeanette}
          header="An overall wonderful and rewarding experience"
          main="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing
          something I love. ”"
        />
        <div className="col-span-2 rounded-lg bg-veryDarkBlackishBlue shadow-2xl"></div>
      </div>
    </main>
  );
}

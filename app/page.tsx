import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';
import Image from 'next/image';
import DanielImage from './images/image-daniel.jpg';
import JeanetteImage from './images/image-jeanette.jpg';
import JonathanImage from './images/image-jonathan.jpg';
import KiraImage from './images/image-kira.jpg';
import PatrickImage from './images/image-patrick.jpg';

enum Style {
  light,
  punk,
  medium,
  dark,
}

const StylePalette: Record<Style, string[]> = {
  [Style.light]: ['bg-white', 'text-veryDarkBlackishBlue', 'text-veryDarkGrayishBlue'],
  [Style.punk]: [],
  [Style.medium]: [],
  [Style.dark]: [],
};

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

const Block_1_1 = ({ style, person, header, main }: { style: Style; person: People; header: string; main: string }) => {
  return (
    <div className={`${StylePalette[style][0]} col-span-1 rounded-lg shadow-2xl`}>
      <div className="flex h-full w-full flex-col justify-between pb-[1.5em] pl-[2em] pr-[2.5em] pt-[1.5em]">
        <div className="flex flex-row items-center gap-[1em]">
          <Image
            className="h-fit rounded-full"
            width={28}
            height={28}
            src={PeopleImages[person]}
            alt="image of a person"
          />
          <div className="flex flex-col">
            <span className={`${StylePalette[style][1]} text-[0.8rem] leading-[1.4em]`}>{person}</span>
            <span className="text-[0.7rem] text-veryDarkBlackishBlue opacity-50">Verified Graduate</span>
          </div>
        </div>
        <span className={`${StylePalette[style][1]} text-[1.2rem] leading-[1.25em]`}>{header}</span>
        <span className={`${StylePalette[style][2]} text-[0.8rem]`}>{main}</span>
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
          style={Style.light}
          person={People.jeanette}
          header="An overall wonderful and rewarding experience"
          main="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing
          something I love. ”"
        />
        <div className="col-span-2 rounded-lg bg-veryDarkBlackishBlue shadow-2xl"></div>
      </div>
    </main>
  );
}

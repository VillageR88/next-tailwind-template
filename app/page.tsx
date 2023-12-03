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
  [Style.light]: ['bg-white', 'text-veryDarkBlackishBlue'],
  [Style.punk]: [],
  [Style.medium]: ['bg-veryDarkGrayishBlue', 'text-white'],
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

enum BlockSize {
  oneOnOne = 'col-span-1',
  oneOnTwo = 'col-span-2',
}

const Block = ({
  style,
  size,
  person,
  header,
  main,
}: {
  style: Style;
  size?: BlockSize;
  person: People;
  header: string;
  main: string;
}) => {
  return (
    <div className={`${StylePalette[style][0] + ' ' + size} rounded-lg shadow-2xl`}>
      <div className="flex h-full w-full flex-col justify-between pb-[1.5em] pl-[2em] pr-[2.1em] pt-[1.5em]">
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
            <span className={`${StylePalette[style][1]} text-[0.7rem] opacity-50`}>Verified Graduate</span>
          </div>
        </div>
        <span className={`${StylePalette[style][1]} text-[1.25rem] leading-[1.25em] tracking-[0.008em]`}>{header}</span>
        <span className={`${StylePalette[style][1]} text-[0.8rem] leading-[1.4em] tracking-[0.008em] opacity-70`}>
          {main}
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-barlowSemiCondensed">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-[17.6em] gap-x-[1.9em] gap-y-[1.5em]">
        <div className="col-span-2 w-full rounded-lg bg-moderateViolet">
          <div className="h-full w-full bg-[url('./images/bg-pattern-quotation.svg')] bg-[81.7%_top] bg-no-repeat"></div>
        </div>
        <Block
          style={Style.medium}
          person={People.jonathan}
          header="The team was very supportive and kept me motivated"
          main="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”"
        />{' '}
        <div className="row-span-2 rounded-lg bg-white shadow-2xl"></div>
        <Block
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

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
  [Style.punk]: ['bg-moderateViolet', 'text-white'],
  [Style.medium]: ['bg-veryDarkGrayishBlue', 'text-white'],
  [Style.dark]: ['bg-veryDarkBlackishBlue', 'text-white'],
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
  twoOnOne = 'col-span-2',
  oneOnTwo = 'md:col-span-2 xl:row-span-2 xl:col-span-1',
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
      <div
        className={`${
          style === Style.punk && "bg-[url('./images/bg-pattern-quotation.svg')] bg-[81.7%_top] bg-no-repeat"
        } flex h-full w-full flex-col justify-between gap-4 pb-[1.5em] pl-[2em] pr-[2.01em] pt-[1.5em] screen850:gap-3`}
      >
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
      <div className="screen850:grid-cols-3 screen850:grid screen850:px-0 screen850:py-0 flex h-[35.7em] flex-col gap-x-[1.9em] gap-y-[1.5em] px-4 screen850:w-[50em] lg:grid-cols-3 xl:w-[69.4em] xl:grid-cols-4 xl:grid-rows-[17.6em]">
        <Block
          style={Style.punk}
          size={BlockSize.twoOnOne}
          person={People.daniel}
          header="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
          in the company I joined. I honestly feel I got every penny’s worth."
          main="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
        />
        <Block
          style={Style.medium}
          person={People.jonathan}
          header="The team was very supportive and kept me motivated"
          main="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”"
        />
        <Block
          style={Style.light}
          size={BlockSize.oneOnTwo}
          person={People.kira}
          header="Such a life-changing experience. Highly recommended!"
          main="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! ”"
        />
        <Block
          style={Style.light}
          person={People.jeanette}
          header="An overall wonderful and rewarding experience"
          main="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing
          something I love. ”"
        />
        <Block
          style={Style.dark}
          size={BlockSize.twoOnOne}
          person={People.patrick}
          header="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy."
          main="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”"
        />
      </div>
    </main>
  );
}

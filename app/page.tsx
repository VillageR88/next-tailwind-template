import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-barlowSemiCondensed">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-2 gap-x-[1.9em] gap-y-[2.5em] ">
        <div className="col-span-2 h-[17.6em] w-full rounded-lg bg-moderateViolet">
          <div className="h-full w-full bg-[url('./images/bg-pattern-quotation.svg')] bg-[81.7%_top] bg-no-repeat"></div>
        </div>
        <div className="col-span-1 h-[17.6em] rounded-lg bg-veryDarkGrayishBlue shadow-2xl"></div>
        <div className="row-span-2 rounded-lg bg-white shadow-2xl"></div>
        <div className="col-span-1 rounded-lg bg-white shadow-2xl">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                className="h-fit rounded-full"
                width={28}
                height={28}
                src={'./images/image-jeanette.jpg'}
                alt="image of a person"
              />
              <div className="flex flex-col">
                <span className="text-[0.8rem] text-veryDarkBlackishBlue">Jeanette Harmon</span>
                <span className="text-[0.7rem] text-veryDarkGrayishBlue">Verified Graduate</span>
              </div>
            </div>
            <span className="text-[1.2rem] text-veryDarkBlackishBlue">
              An overall wonderful and rewarding experience
            </span>
            <span className="text-[0.8rem] text-veryDarkGrayishBlue">
              “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while
              doing something I love. ”
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg bg-veryDarkBlackishBlue shadow-2xl"></div>
      </div>
    </main>
  );
}

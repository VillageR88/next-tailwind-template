import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';

export default function Home() {
  return (
    <main className="font-barlowSemiCondensed flex min-h-screen flex-col items-center justify-center">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-2 gap-x-[1.9em] gap-y-[2.5em]">
        <div className="col-span-2 h-[17.6em] bg-moderateViolet"></div>
        <div className="col-span-1 h-[17.6em] bg-veryDarkGrayishBlue"></div>
        <div className="row-span-2 bg-white"></div>
        <div className="col-span-1 bg-white "></div>
        <div className="col-span-2 bg-veryDarkBlackishBlue"></div>
      </div>
    </main>
  );
}

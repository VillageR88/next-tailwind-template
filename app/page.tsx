import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-barlowSemiCondensed">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-2 gap-x-[1.9em] gap-y-[2.5em] ">
        <div className="col-span-2 h-[17.6em] w-full rounded-lg bg-moderateViolet">
          <div className="h-full w-full bg-[url('./images/bg-pattern-quotation.svg')] bg-no-repeat bg-[81.7%_top]"></div>
        </div>
        <div className="col-span-1 h-[17.6em] rounded-lg bg-veryDarkGrayishBlue shadow-2xl"></div>
        <div className="row-span-2 rounded-lg bg-white shadow-2xl"></div>
        <div className="col-span-1 rounded-lg bg-white shadow-2xl"></div>
        <div className="col-span-2 rounded-lg bg-veryDarkBlackishBlue shadow-2xl"></div>
      </div>
    </main>
  );
}

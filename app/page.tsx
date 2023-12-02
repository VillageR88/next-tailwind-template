import '@fontsource/barlow-semi-condensed/500.css';
import '@fontsource/barlow-semi-condensed/600.css';

export default function Home() {
  return (
    <main className="font-barlowSemiCondensed flex min-h-screen flex-col items-center justify-center">
      <div className="grid h-[35.7em] w-[69.4em] grid-cols-4 grid-rows-2 bg-green-500">
        <div className="col-span-2 bg-moderateViolet"></div>
        <div className="col-span-1 bg-veryDarkGrayishBlue"></div>
        <div className="row-span-2 bg-white"></div>
        <div className="col-span-1 bg-white"></div>
        <div className="col-span-2 bg-veryDarkBlackishBlue"></div>
      </div>
    </main>
  );
}

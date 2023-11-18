import '@fontsource/space-mono';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-spaceMono">
      {/*main wrapper*/}
      <div className="flex flex-col place-items-center gap-16">
        {/*top wrapper*/}
        <div className="grid w-[6em] grid-cols-4 text-center">
          {'SPLITTER'.split('').map((x) => (
            <span className="text-[1.4rem] font-[700] text-veryDarkCyan" key={x}>
              {x}
            </span>
          ))}
        </div>
        {/*bottom wrapper*/}
        <div className="flex justify-center gap-8 rounded-[0.8em] bg-white p-6">
          {/*first column*/}
          <div className="flex w-full flex-col">
            <span>Bill</span>
            <div className="flex flex-row justify-between">
              <span>$</span>
              <span>142.55</span>
            </div>
            <span>Select Tip %</span>
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-sky-500">PHDR</button>
              <button className="bg-sky-500">PHDR</button>
              <button className="bg-sky-500">PHDR</button>
              <button className="bg-sky-500">PHDR</button>
              <button className="bg-sky-500">PHDR</button>
              <button className="bg-sky-500">PHDR</button>
            </div>
            <span>Number of People</span>
            <div className="flex flex-row justify-between">
              <span>@</span>
              <span>5</span>
            </div>
          </div>
          {/*second column*/}
          <div className="bg-veryDarkCyan text-white">Right wrapper</div>
        </div>
      </div>
    </main>
  );
}

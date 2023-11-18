import '@fontsource/space-mono';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

export default function Home() {
  return (
    <main className="font-spaceMono flex min-h-screen flex-col items-center justify-center">
      {/*main wrapper*/}
      <div className="flex flex-col place-items-center">
        {/*top wrapper*/}
        <div className="grid w-[8em] grid-cols-4  text-center">
          {'SPLITTER'.split('').map((x) => (
            <span className="text-veryDarkCyan p-[0.2em] text-[1.4rem] font-[700]" key={x}>
              {x}
            </span>
          ))}
        </div>
        {/*bottom wrapper*/}
        <div className="flex justify-center gap-8 rounded-[0.8em] bg-white p-6">
          <div>
            <span>Bill</span>
            <div>
              <span>$</span>
              <span>142.55</span>
            </div>
          </div>
          <div className="bg-veryDarkCyan text-white">Right wrapper</div>
        </div>
      </div>
    </main>
  );
}

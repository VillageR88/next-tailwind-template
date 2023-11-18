import '@fontsource/space-mono';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

export default function Home() {
  return (
    <main className="font-spaceMono flex min-h-screen flex-col items-center justify-center">
      {/*main wrapper*/}
      <div className="flex flex-col">
        {/*top wrapper*/}
        <div className="grid grid-cols-4">
          {'SPLITTER'.split('').map((x) => (
            <span className="p-[0.2em] text-[1.4rem] font-[700] text-veryDarkCyan" key={x}>
              {x}
            </span>
          ))}
        </div>
        {/*bottom wrapper*/}
        <div className="flex justify-center">
          <div>L</div>
          <div>R</div>
        </div>
      </div>
    </main>
  );
}

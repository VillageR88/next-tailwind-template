import '@fontsource/space-mono';
import '@fontsource/space-mono/400.css';

export default function Home() {
  return (
    <main className="font-spaceMono flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-4">
        {'SPLITTER'.split('').map((x) => (
          <span className="p-[0.2em] font-[700]" key={x}>
            {x}
          </span>
        ))}
      </div>
    </main>
  );
}

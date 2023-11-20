import '@fontsource/barlow';
import '@fontsource/barlow/600.css';
import '@fontsource/fraunces';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="grid h-full w-full grid-cols-2 justify-center">
        <div className="bg-header col-span-2 h-full w-full bg-cover bg-[100%_100%] ">
          <p className="font-barlow text-lg">Hello</p>
          <p className="font-fraunces text-lg">Hello</p>
          <p className="text-lg">Hello</p>
          <p className="font-mono">World 🌍</p>
        </div>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
        <div className="col-span-1 ">
          <span>TEST</span>
        </div>
      </div>
    </main>
  );
}

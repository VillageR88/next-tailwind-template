import '@fontsource/barlow-condensed';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow';
import '@fontsource/barlow/400.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex-flex-row h-[26.7em] w-full">
        <div className="flex h-full w-full justify-end bg-white">
          <div className="bg-lightGrayishBlue h-[full] rounded-bl-[3.8em] w-[44.05em]"></div>
        </div>
      </nav>
      <main className="h-[23.3em] w-full bg-white"></main>
    </div>
  );
}

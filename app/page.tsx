import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="h-[5em] w-full bg-white"></div>
      </nav>
      <main className="h-full w-full"><div className='h-[100em] bg-slate-600'></div></main>
    </div>
  );
}

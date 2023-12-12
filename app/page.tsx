import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-[45.06em] w-full bg-veryPaleCyan">
        <div className="h-full w-full bg-[url('./images/bg-hero-desktop.svg')] md:px-[5em]">
          <div className="mt-[3em] flex items-center justify-between">
            <Image className="h-[1.95em] w-[12.5em]" src={logo as string} alt="logo" />
            <button className="h-[3.3em] w-[13.8em] rounded-[2em] bg-white font-openSans text-[0.9rem] font-[700] shadow-[0_4px_30px_-13px_rgba(0,0,0,0.3)]">
              Try It Free
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100em] w-full bg-white"></div>
    </main>
  );
}

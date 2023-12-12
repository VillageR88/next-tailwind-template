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
        <div className="h-full md:px-[5em] w-full bg-[url('./images/bg-hero-desktop.svg')]">
          <div className="mt-[3.55em]">
            <Image className="h-[1.95em] w-[12.5em]" src={logo as string} alt="logo" />
          </div>
        </div>
      </div>
      <div className="h-[100em] w-full bg-white"></div>
    </main>
  );
}

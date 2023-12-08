import '@fontsource/dm-serif-display';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/karla';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="flex h-[5em] w-full items-center justify-between bg-white px-[10.5em]">
          <Image className="h-fit " src={logo as string} alt="logo" />
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="h-[37.5em] bg-darkViolet"></div>
        <div className="h-[50em] bg-white"></div>
      </main>
    </div>
  );
}

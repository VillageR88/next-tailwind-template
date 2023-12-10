import '@fontsource/barlow-condensed';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow';
import '@fontsource/barlow/400.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import navMobileOpen from './images/icon-hamburger.svg';
import navMobileClose from './images/icon-close.svg';
import illustration from './images/illustration-devices.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex-flex-row h-[26.7em] w-full">
        <div className="h-0">
          <div className="h-0 px-[10.3em] pt-[4em]">
            <Image className="h-fit" src={logo as string} alt="logo" />
          </div>
        </div>
        <div className="flex h-full w-full justify-end bg-white">
          <div className="h-[full] w-[44.05em] rounded-bl-[3.8em] bg-lightGrayishBlue"></div>
        </div>
      </nav>
      <main className="h-[23.301em] w-full bg-white"></main>
    </div>
  );
}

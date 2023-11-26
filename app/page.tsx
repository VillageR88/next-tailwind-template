import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-commissioner">
      <nav className="h-full w-full">
        <div className="h-[25em] w-full bg-[url('./images/image-hero-desktop.jpg')]">
          <div className="flex justify-between">
            <Image className="h-fit" src={logo as string} alt="logo image" />
            <div className="text-white">
              <button>About</button>
              <button>Discover</button>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

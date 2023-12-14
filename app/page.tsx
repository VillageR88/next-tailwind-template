import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex h-[12.2em] w-full items-center justify-between bg-white pl-[5em] pr-[4em]">
        <Image src={logo as string} alt="logo" />
        <button className="rounded-[2em] px-[1.7em] py-[0.42em] font-openSans font-[600] text-lightPink shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)] shadow-[#FBE5FC] outline outline-2 hover:opacity-50">
          Try It Free
        </button>
      </nav>
      <main className="h-[100em] w-full bg-white">
        <div className="mt-[9.55em] flex w-full flex-col items-center">
          <span className="font-poppins text-[2.99rem] font-[700] text-veryDarkCyan">
            Build The Community Your Fans Will Love
          </span>
        </div>
      </main>
    </div>
  );
}

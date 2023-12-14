import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import imageMockup from './images/screen-mockups.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex h-[12.2em] w-full items-center justify-between bg-white md:px-[2em] lg:px-[3em] xl:px-0 xl:pl-[5em] xl:pr-[4em]">
        <Image src={logo as string} alt="logo" />
        <button className="rounded-[2em] px-[1.7em] py-[0.42em] font-openSans font-[600] text-lightPink shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)] shadow-[#FBE5FC] outline outline-2 hover:opacity-50">
          Try It Free
        </button>
      </nav>
      <main className="h-[200em] w-full bg-white">
        <div className="mt-[9.55em] flex w-full flex-col items-center">
          <span className="text-center font-poppins text-[2.99rem] font-[700] text-veryDarkCyan drop-shadow-md">
            Build The Community Your Fans Will Love
          </span>
          <span className="mt-[1.15em] w-[31em] text-center font-openSans text-[1.25rem] font-[400] text-veryDarkCyan drop-shadow-sm">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </span>
          <button className="mt-[2.35em] rounded-[3em] bg-pink px-[5.1em] py-[1.25em] font-openSans text-[1.25rem] font-[600] text-white drop-shadow-xl">
            Get Started For Free
          </button>
          <Image className="mt-[6.86em] h-fit" src={imageMockup as string} alt="image of computer" />
        </div>
      </main>
    </div>
  );
}

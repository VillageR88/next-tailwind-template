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
          <div className="mt-[0.2em] flex gap-[1.86em] font-karla text-[0.83rem] font-[700]">
            <button className="tracking-[0.1em] text-darkGrayishViolet">HOW WE WORK</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet">BLOG</button>
            <button className="tracking-[0.1em] text-darkGrayishViolet">ACCOUNT</button>
            <button className="ml-[0.75em] px-[1.95em] pt-[0.63em] pb-[0.6em] tracking-[0.1em] outline outline-2">
              VIEW PLANS
            </button>
          </div>
        </div>
      </nav>
      <main className="h-full w-full">
        <div className="h-[37.5em] bg-darkViolet"></div>
        <div className="h-[50em] bg-white"></div>
      </main>
    </div>
  );
}

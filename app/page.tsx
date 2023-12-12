import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import illustrationMockups from './images/illustration-mockups.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-[45.06em] w-full bg-veryPaleCyan">
        <div className="h-full w-full bg-[url('./images/bg-hero-desktop.svg')] pb-[3em] pt-[3em] md:px-[5em]">
          <div className=" flex items-center justify-between">
            <Image className="h-[1.95em] w-[12.5em]" src={logo as string} alt="logo" />
            <button className="h-[3.3em] w-[13.8em] rounded-[2em] bg-white font-openSans text-[0.9rem] font-[700] shadow-[0_4px_30px_-13px_rgba(0,0,0,0.3)]">
              Try It Free
            </button>
          </div>
          <div className="flex h-full w-full items-center justify-between">
            <div className="mt-[0.9em] flex w-[32em] flex-col items-start gap-[1.7em]">
              <span className="font-poppins text-[2.48rem] font-[600]">Build The Community Your Fans Will Love</span>
              <div className="flex flex-col items-start gap-[2em]">
                <span className="font-openSans text-[1.125rem]">
                  Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
                  connections with your users as you engage in genuine discussion.
                </span>
                <button className="rounded-[2.5em] bg-[#FE52C0] px-[5.3em] py-[1.3em] font-openSans text-[0.85rem] font-[700] text-white">
                  Get Started For Free
                </button>
              </div>
            </div>
            <Image className="mr-[0.2em] h-fit w-[54.2%]" src={illustrationMockups as string} alt="computer image" />
          </div>
        </div>
      </div>
      <div className="flex h-[100em] w-full justify-center bg-white">
        <div className="flex h-full w-[85.5566%] flex-col pt-[10em]">
          <div className="h-[27.5em] w-full rounded-[1em] shadow-[0_1px_15px_-5px_rgba(0,0,0,0.2)]"></div>
        </div>
      </div>
    </main>
  );
}

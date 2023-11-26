import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import bookmark from './images/icon-bookmark.svg';
import mastercraft from './images/logo-mastercraft.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-commissioner">
      <nav className="h-full w-full">
        <div className="h-[25em] w-full  bg-[url('./images/image-hero-desktop.jpg')]">
          <div className="from-customDark flex h-[8.05em] items-end justify-between bg-gradient-to-b from-5% to-transparent to-100% pb-[3.8em] pl-[10.4em] pr-[10.3em]">
            <Image className="h-fit" src={logo as string} alt="logo image" />
            <div className="flex gap-[2.44em] text-[0.83rem] text-gray-50">
              <button>About</button>
              <button>Discover</button>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex flex-col gap-[1.6em]">
          {/*first block*/}
          <div className="border-1 mt-[-5.67em] flex h-[16.7em] w-[45.5em] flex-col items-center rounded-[0.5em] bg-white outline outline-1 outline-gray-100">
            <div className="z-10 mt-[-1.8em] h-0 pb-[1.8em]">
              <Image src={mastercraft as string} alt="mastercraft logo" />
            </div>
            <span className="mt-[1.88em] text-[1.72rem] font-[700] tracking-[0.010em]">
              Mastercraft Bamboo Monitor Riser
            </span>
            <span className="mt-[0.6em] font-[400] text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </span>
            <div className="mt-[2.38em] flex w-full justify-between pl-[3em] pr-[3em]">
              <button className="rounded-[1.8em] bg-moderateCyan px-[2.5em] py-[1em] text-[1rem] font-[500] text-white">
                Back this project
              </button>
              <button>
                <div className="flex items-center gap-[1em] rounded-[3em] bg-[#F4F4F4] pr-[1.5em]">
                  <Image src={bookmark as string} alt="bookmark image" />
                  <span className="font-[700] text-darkGray">Bookmark</span>
                </div>
              </button>
            </div>
          </div>
          {/*second block*/}
          <div className="border-1 h-[13.15em] w-[45.5em] rounded-[0.5em] bg-white outline outline-1 outline-gray-100"></div>
          <div className="border-1 h-[60em] w-[45.5em] rounded-[0.5em] bg-white outline outline-1 outline-gray-100"></div>
        </div>
      </main>
    </div>
  );
}

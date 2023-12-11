import '@fontsource/bai-jamjuree';
import '@fontsource/bai-jamjuree/400.css';
import '@fontsource/bai-jamjuree/600.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="font-baiJamjuree flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full bg-white">
        <div className="flex h-[140em] w-full justify-center bg-[url('./images/bg-header-desktop.png')] bg-[0_0.2em] bg-no-repeat">
          <div className="flex h-full w-[43em] flex-col items-center text-center">
            <Image className="mt-[8.2em] h-fit" src={logo as string} alt="logo" />
            <span className="mt-[1.15em] text-[2.8rem] font-[600] tracking-[-0.005em] text-darkGrayishBlue">
              A history of everything you copy
            </span>
            <span className="mt-[0.55em] text-[1.25rem] tracking-[0.008em] text-grayishBlue">
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
              your devices.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

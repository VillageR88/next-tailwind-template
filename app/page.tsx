import '@fontsource/bai-jamjuree';
import '@fontsource/bai-jamjuree/400.css';
import '@fontsource/bai-jamjuree/600.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="font-baiJamjuree flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full bg-white">
        <div className="flex h-[140em] w-full flex-col items-center bg-[url('./images/bg-header-desktop.png')] bg-[0_0.2em] bg-no-repeat">
          <Image className="mt-[8.2em] h-fit" src={logo as string} alt="logo" />
          <span className="mt-[1.15em] text-[2.8rem] tracking-[-0.005em] font-[600] text-darkGrayishBlue">A history of everything you copy</span>
        </div>
      </main>
    </div>
  );
}

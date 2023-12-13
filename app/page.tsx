import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-[#1C2230]">
        <div className="h-[81em] w-full bg-[url('./images/bg-curvy-desktop.svg')] bg-bottom bg-no-repeat">
          <nav className="mt-[4.55em] flex w-full flex-row items-center justify-between px-[5em]">
            <Image className="h-fit" src={logo as string} alt="logo" />
            <div className="flex gap-[3.7em]">
              {['Features', 'Team', 'Sign In'].map((x, i) => (
                <button className="font-raleway text-[0.97rem] text-[#BFC6CE]" key={i}>
                  {x}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="h-[81em] w-full bg-[#181E2A]"></div>
      </div>
    </div>
  );
}

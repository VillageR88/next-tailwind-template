import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import intro from './images/illustration-intro.png';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-[#1C2230]">
        <div className="h-[76.5em] w-full bg-[url('./images/bg-curvy-desktop.svg')] bg-bottom bg-no-repeat">
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
          <div className="mt-[4.7em] flex h-full w-full flex-col items-center">
            <Image className="h-fit" src={intro} alt="image of the people" />
            <div className="mt-[2.2em] flex h-full w-full flex-col items-center text-center">
              <span className="font-raleway w-[20em] text-[2.52rem] font-[700] text-white">
                All your files in one secure location, accessible anywhere.
              </span>
              <span className="font-openSans mt-[1.65em] w-[30em] text-[1.25rem] text-[#FBFFFF]">
                Fylo stores all your most important files in one secure location. Access them wherever you need, share
                and collaborate with friends family, and co-workers.
              </span>
              <button className="mt-[2em] from-cyanInside_call_to_action_gradient to-blueInside_call_to_action_gradient rounded-[2em] bg-gradient-to-r px-[6em] py-[1em] text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="h-[81em] w-full bg-[#181E2A]"></div>
      </div>
    </div>
  );
}

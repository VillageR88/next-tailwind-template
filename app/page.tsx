import Image from 'next/image';
import logo from './assets/images/logo.svg';
import web3Desktop from './assets/images/image-web-3-desktop.jpg';
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

export default function Home() {
  return (
    <div className="px-[5em] py-20">
      <nav className="flex justify-between pb-10">
        <Image src={logo as string} alt="logo" />
        <div className="text-darkGrayishBlue flex gap-10 font-medium">
          <button>Home</button>
          <button>New</button>
          <button>Popular</button>
          <button>Trending</button>
          <button>Categories</button>
        </div>
      </nav>
      <main className="flex justify-between gap-4">
        {/* main-left */}
        <div className="flex w-[46em] flex-col ">
          <Image className="h-auto w-auto" src={web3Desktop} alt="colorful image of blocks" />
          <div className="flex justify-between pt-8">
            <span className="text-veryDarkBlue max-w-[6em] text-[3.5rem] font-extrabold leading-[1em]">
              The Bright Future of Web 3.0?
            </span>
            <div className="just flex flex-col justify-between">
              <span className="text-darkGrayishBlue max-w-[23em] text-[0.95rem]">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </span>
              <button className="bg-softRed self-start px-10 py-3 text-[0.9rem] font-medium tracking-[0.2em]  text-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* main-right */}
        <div className="bg-veryDarkBlue flex w-[22.5em] flex-col justify-between pb-10 pl-6 pr-10 pt-6 text-white">
          <span className="text-softOrange text-[2.5rem] font-bold">New</span>
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold">Hydrogen VS Electric Cars</span>
            <span className="text-grayishBlue text-[0.95rem]">Will hydrogen-fueled cars ever catch up to EVs?</span>
          </div>
          <hr className="bg-darkGrayishBlue my-4 h-px border-0"></hr>
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold">The Downsides of AI Artistry</span>
            <span className="text-grayishBlue text-[0.95rem]">
              What are the possible adverse effects of on-demand AI image generation?
            </span>
          </div>
          <hr className="bg-darkGrayishBlue my-4 h-px border-0"></hr>
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-bold">Is VC Funding Drying Up?</span>
            <span className="text-grayishBlue text-[0.95rem]">
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

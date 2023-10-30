import Image from 'next/image';
import logo from './assets/images/logo.svg';
import web3Desktop from './assets/images/image-web-3-desktop.jpg';
import web3Mobile from './assets/images/image-web-3-mobile.jpg';
import picture1 from './assets/images/image-retro-pcs.jpg';
import picture2 from './assets/images/image-top-laptops.jpg';
import picture3 from './assets/images/image-gaming-growth.jpg';

import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

export default function Home() {
  return (
    <div className="block w-full gap-6 p-4 md:px-[5em] md:py-20">
      <nav className="flex justify-between pb-10 ">
        <Image src={logo as string} alt="logo" />
        <div className="text-darkGrayishBlue hidden gap-10 font-medium md:flex">
          <button>Home</button>
          <button>New</button>
          <button>Popular</button>
          <button>Trending</button>
          <button>Categories</button>
        </div>
      </nav>
      <main>
        {/* main-top */}
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {/* main-left */}
          <div className="flex w-full flex-col md:w-[45.5em]">
            <Image className="hidden h-auto w-auto md:flex" src={web3Desktop} alt="colorful image of blocks" />
            <Image className="flex w-full md:hidden" src={web3Mobile} alt="colorful image of blocks" />
            <div className="flex flex-col justify-between pt-8 md:flex-row">
              <span className="text-veryDarkBlue text-[3.5rem] font-extrabold leading-[1em] md:max-w-[6em]">
                The Bright Future of Web 3.0?
              </span>
              <div className="just flex flex-col justify-between">
                <span className="text-darkGrayishBlue text-[0.95rem] md:max-w-[23em]">
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
          <div className="bg-veryDarkBlue flex flex-col justify-between pb-10 pl-6 pr-10 pt-6 text-white md:max-w-[22.5em]">
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
        </div>
        {/* main-bottom */}
        <div className="flex flex-col justify-between gap-4 pt-20  md:flex-row">
          <div className="flex h-[8em] gap-6">
            <Image className="h-full w-auto" src={picture1} alt="image of retro computer" />
            <div className="flex flex-col justify-between md:w-[14em]">
              <span className="text-grayishBlue text-[2rem] font-bold">01</span>
              <span className="text-[1.1rem] font-extrabold">Reviving Retro PCs</span>
              <span className="text-darkGrayishBlue text-[0.95rem]">
                What happens when old PCs are given modern upgrades?
              </span>
            </div>
          </div>
          <div className="flex h-[8em] gap-6">
            <Image className="h-full w-auto" src={picture2} alt="image of laptop's keyboard" />
            <div className="flex flex-col justify-between md:w-[14em]">
              <span className="text-grayishBlue text-[2rem] font-bold">02</span>
              <span className="text-[1.1rem] font-extrabold">Top 10 Laptops of 2022</span>
              <span className="text-darkGrayishBlue text-[0.95rem]">Our best picks for various needs and budgets.</span>
            </div>
          </div>
          <div className="flex h-[8em] gap-6">
            <Image className="h-full w-auto" src={picture3} alt="image of gamepad falling on hand" />
            <div className="flex flex-col justify-between md:w-[14em]">
              <span className="text-grayishBlue text-[2rem] font-bold">03</span>
              <span className="text-[1.1rem] font-extrabold">The Growth of Gaming</span>
              <span className="text-darkGrayishBlue text-[0.95rem]">
                How the pandemic has sparked fresh opportunities.
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';
import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { useState } from 'react';
import Image from 'next/image';
import logo from './images/logo.svg';
import arrowLight from './images/icon-arrow-light.svg';
const product = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];

const ButtonWithArrow = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div
      onClick={() => {
        setClicked(!clicked);
      }}
      className="flex content-center items-center gap-2 decoration-white decoration-2 hover:cursor-pointer hover:underline"
    >
      <button className="font-ubuntu font-[500] text-white">Product</button>
      <Image src={arrowLight as string} alt="arrow" className={`mt-1 ${clicked && 'rotate-180'}`} />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="bg flex h-[37.5em] w-full justify-center overflow-hidden rounded-bl-[6.5em] bg-gradient-to-r from-veryLightRed to-lightRed">
        <div className="flex h-full w-full justify-center bg-[url('./images/bg-pattern-intro-desktop.svg')] bg-[25.4%_52.1%]">
          <div>
            {/*first row*/}
            <div>
              <div className="flex w-[20em] items-center justify-between">
                <Image src={logo as string} alt="Logo" />
                <ButtonWithArrow />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

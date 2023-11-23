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
import arrowWhite from './images/icon-arrow-white.svg';
const product = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
const company = ['About', 'Team', 'Blog', 'Careers'];
const connect = ['Contact', 'Newsletter', 'Linkedin'];

const ButtonWithArrow = ({
  action,
  name,
  list,
  clicked,
}: {
  name: string;
  list: string[];
  clicked: string;
  action(value: string): undefined;
}) => {
  const [arrowColor, setArrowColor] = useState<unknown>(arrowLight);

  return (
    <div>
      <div
        onPointerEnter={() => {
          setArrowColor(arrowWhite);
        }}
        onPointerLeave={() => {
          setArrowColor(arrowLight);
        }}
        onClick={() => {
          action(name);
        }}
        className="flex content-center items-center gap-2 decoration-white decoration-2 hover:cursor-pointer hover:underline"
      >
        <button className="font-ubuntu font-[500] text-[#FFD9D5] hover:text-whiteText">{name}</button>
        <Image
          src={arrowColor as string}
          alt="arrow"
          className={`mt-1 transition-transform ${clicked === name && 'blend rotate-180'}`}
        />
      </div>
      <div
        className={`${
          clicked === name ? 'flex' : 'hidden'
        } absolute ml-[-2em] mt-8 w-[12em] flex-col items-start gap-4 rounded-[0.6em] bg-white py-8 pl-8`}
      >
        {list.map((x, i) => (
          <button className="font-ubuntu font-[400] hover:font-[600]" key={i}>
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [clickedOn, setClickedOn] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="bg flex h-[37.5em] w-full justify-center overflow-hidden rounded-bl-[6.5em] bg-gradient-to-r from-veryLightRed to-lightRed">
        <div className="flex h-full w-full justify-center bg-[url('./images/bg-pattern-intro-desktop.svg')] bg-[25.4%_52.1%]">
          <div>
            {/*first row*/}
            <div className="flex">
              <div className="flex w-[30em] items-center justify-between">
                <Image src={logo as string} alt="Logo" />
                <div className="flex w-[19em] justify-between">
                  <ButtonWithArrow
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    clicked={clickedOn}
                    name="Product"
                    list={product}
                  />
                  <ButtonWithArrow
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    clicked={clickedOn}
                    name="Company"
                    list={company}
                  />
                  <ButtonWithArrow
                    action={(value) => {
                      clickedOn !== value ? setClickedOn(value) : setClickedOn('');
                    }}
                    clicked={clickedOn}
                    name="Connect"
                    list={connect}
                  />
                </div>
              </div>
              <div className="flex">
                <button className="font-ubuntu">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

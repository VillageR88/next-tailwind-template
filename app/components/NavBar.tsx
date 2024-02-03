'use client';

import Image from 'next/image';
import { useState } from 'react';
import ButtonRequestInvite from './ButtonRequestInvite';

const navItems = { Home: 'Home', About: 'About', Contact: 'Contact', Blog: 'Blog', Careers: 'Careers' };
const NavBar = () => {
  const [navHover, setNavHover] = useState<number | null>(null);
  return (
    <nav className="z-20 flex h-[5em] w-full items-center justify-between bg-[white] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <Image className="mt-[0.2em] h-fit w-fit" src={'images/logo.svg'} width={140} height={140} alt="logo" priority />
      <ul className="ml-[1em] flex h-full gap-[1.3em] pt-[1.8em]">
        {Object.values(navItems).map((x, i) => (
          <li key={i} className="flex h-full flex-col justify-between">
            <button
              aria-label={Object.values(x).toString()}
              onMouseEnter={() => {
                setNavHover(i);
              }}
              onMouseLeave={() => {
                setNavHover(null);
              }}
              className={`${
                x === navItems.Blog || x === navItems.Careers ? 'pt-[0.1em] text-[0.95rem]' : 'text-[0.9rem]'
              } tracking-tighter text-[hsl(233,8%,62%)] hover:text-[hsl(233,26%,24%)]`}
            >
              {Object.values(x)}
            </button>
            <div
              className={`${
                i === navHover ? 'visible' : 'invisible'
              } h-[0.22em] w-[3.2em] bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)]`}
            ></div>
          </li>
        ))}
      </ul>
      <ButtonRequestInvite />
    </nav>
  );
};

export default NavBar;

'use client';
import ButtonFacebook from './ButtonFacebook';
import ButtonTwitter from './ButtonTwitter';
import mobileMenuItems from './navAndFooterMiddleItems';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const ButtonMobileMenu = ({ menuOpen }: { menuOpen(val: boolean): void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [customHeight, setCustomHeight] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > 500) setCustomHeight(true);
      else setCustomHeight(false);

      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        menuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);
  useEffect(() => {
    isMenuOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
    if (isMenuOpen) {
      window.scrollTo(0, 0);
    }
  });
  return (
    <div className="block md:hidden">
      <button
        className="absolute right-6 z-10"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          menuOpen(!isMenuOpen);
        }}
        aria-label="mobile menu"
      >
        <Image
          className={`mt-[-0.5em] h-fit w-fit self-center ${isMenuOpen && 'mr-0.5 mt-[-0.55em]'}`}
          src={isMenuOpen ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'}
          width={20}
          height={20}
          alt="menu"
        />
      </button>

      {isMenuOpen && (
        <ul className="absolute left-0 top-0 h-full w-full bg-[#252b46ef] px-[2em] pt-[5em]">
          <div className="flex flex-col items-center gap-[1.5em] rounded-[0.3em] py-[2em]">
            <div className="h-[1px] w-full bg-[#4C516C]"></div>
            {mobileMenuItems.map((item) => (
              <li className="flex w-full flex-col justify-center gap-[1em]" key={item}>
                <button className="text-[1.3rem] font-[400] tracking-[0.1em] text-[white]">{item}</button>
                <div className="h-[1px] w-full bg-[#4C516C]"></div>
              </li>
            ))}
          </div>
        </ul>
      )}
      <div className={`absolute ${customHeight ? 'bottom-0' : 'top-10'} left-0 z-10 w-full`}>
        <div className={`mb-[4em] ${isMenuOpen ? 'flex' : 'hidden'} w-full justify-center gap-[3em]`}>
          <ButtonFacebook />
          <ButtonTwitter />
        </div>
      </div>
    </div>
  );
};
export default ButtonMobileMenu;

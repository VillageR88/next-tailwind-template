'use client';
import mobileMenuItems from './navAndFooterMiddleItems';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const ButtonMobileMenu = ({ menuOpen }: { menuOpen(val: boolean): void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
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
        <ul className="absolute left-0 top-0 h-full w-full bg-[#252b46d8] px-6 pt-[10em]">
          <div className="flex flex-col items-center gap-[1.5em] rounded-[0.3em] bg-[white] py-[2em]">
            {Object.values(mobileMenuItems).map((x) => (
              <li key={x}>
                <button className="font-[700] text-[hsl(228,39%,23%)]">{x}</button>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};
export default ButtonMobileMenu;

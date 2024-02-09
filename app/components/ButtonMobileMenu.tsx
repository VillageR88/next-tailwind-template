'use client';
import { useEffect, useState } from 'react';
import NavBarItemsFirst from './NavBar/NavBarItemsFirst';
import NavBarItemsSecond from './NavBar/NavBarItemsSecond';
const ButtonMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    isMenuOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
    if (isMenuOpen) {
      window.scrollTo(0, 0);
    }
  });
  return (
    <div className="block md:hidden">
      <button
        className="absolute right-6 top-[30px] z-10 flex justify-center text-[2rem] font-[500] text-[#9D9CA4]"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-label="mobile menu"
      >
        <span>☰</span>
      </button>
      {isMenuOpen && (
        <ul className="absolute left-0 top-0 h-fit w-full px-6 pt-[6em]">
          <div className="z-40 flex flex-col items-center gap-[1.5em] rounded-[0.6em] bg-[#3A3053] pb-[2.5em] pt-[2em]">
            <NavBarItemsFirst forMobile />
            <div className="h-[1px] w-[84%] bg-[#544A6D]"></div>
            <NavBarItemsSecond forMobile />
          </div>
        </ul>
      )}
    </div>
  );
};
export default ButtonMobileMenu;

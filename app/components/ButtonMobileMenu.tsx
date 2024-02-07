'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const ButtonMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuItems = {
    pricing: 'Pricing',
    product: 'Product',
    aboutUs: 'About Us',
    careers: 'Careers',
    community: 'Community',
  };

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
        className="absolute right-6 z-10"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
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
        <ul className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent from-10% to-[#3b3e5883] to-60% px-6 pt-[10em]">
          <div className="flex flex-col items-center gap-[1.5em] rounded-[0.3em] bg-white py-[2em]">
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

import Image from 'next/image';
import { useEffect, useState } from 'react';
const ButtonMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuItems = { Home: 'Home', About: 'About', Contact: 'Contact', Blog: 'Blog', Careers: 'Careers' };

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
    <div className="z-10 block md:hidden">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-label="mobile menu"
      >
        <Image
          className={`h-fit w-fit self-center ${isMenuOpen && 'mr-1 mt-2'}`}
          src={isMenuOpen ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'}
          width={20}
          height={20}
          alt="menu"
        />
      </button>
      {isMenuOpen && (
        <ul className="absolute left-0 mt-[1.45em] h-full w-full bg-[#3b3e5883] px-6">
          <div className="top-[6em] mt-[2em] flex flex-col items-center gap-[1.5em] rounded-[0.3em] bg-white py-[2em]">
            {Object.values(mobileMenuItems).map((x) => (
              <li key={x}>
                <button>{x}</button>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};
export default ButtonMobileMenu;

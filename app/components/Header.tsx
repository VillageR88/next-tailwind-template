import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import bgMainDesktop from '@/public/assets/images/bg-main-desktop.png';
import bgPattern1 from '@/public/assets/images/bg-pattern-1.svg';

const Header = () => (
  <header>
    <div className="flex h-0 w-full justify-end">
      <Image
        className=" mt-[-40px] h-fit w-fit z-10"
        width={312}
        height={468}
        src={bgPattern1 as string}
        alt="background pattern"
      />
    </div>
    <div className="flex h-0 w-full items-start justify-start">
      <Image className="ml-[-50px] mt-[-50px] scale-x-125 scale-y-125" src={bgMainDesktop} alt="background pattern" />
    </div>
    <Image className="z-10 ml-[166px] mt-[62px]" width={147} height={33} src={logo as string} alt="logo" />
  </header>
);

export default Header;

import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import bgMainDesktop from '@/public/assets/images/bg-main-desktop.png';
import bgPattern1 from '@/public/assets/images/bg-pattern-1.svg';

const Header = () => (
  <header>
    <div className="flex h-0 w-full justify-end">
      <Image
        className="mt-[-40px] h-fit w-fit"
        width={312}
        height={468}
        src={bgPattern1 as string}
        alt="background pattern"
      />
    </div>
    <div className="flex h-0 w-full items-start justify-start">
      <Image className="mt-[-100px]" src={bgMainDesktop} alt="background pattern" />
    </div>
    <Image className="ml-[312px] mt-[62px]" width={147} height={33} src={logo as string} alt="logo" />
  </header>
);

export default Header;

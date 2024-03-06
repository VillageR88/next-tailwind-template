import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import bgMainDesktop from '@/public/assets/images/bg-main-desktop.png';
import bgMainTablet from '@/public/assets/images/bg-main-tablet.png';
import bgMainMobile from '@/public/assets/images/bg-main-mobile.png';
import bgPattern1 from '@/public/assets/images/bg-pattern-1.svg';

const Header = () => (
  <header>
    <div className="flex h-0 w-full justify-end">
      <Image
        className="z-10 mr-[-40px] mt-[-40px] hidden h-[400px] w-[266px] md:block lg:mr-0 lg:h-fit lg:w-fit "
        width={312}
        height={468}
        src={bgPattern1 as string}
        alt="background pattern"
      />
    </div>
    <div className="flex h-0 w-full items-start justify-start">
      <Image
        className="ml-[-50px] mt-[-50px] hidden scale-x-125 scale-y-125 lg:block"
        src={bgMainDesktop}
        alt="background pattern"
      />
      <Image
        className="ml-[-20px] mt-[-130px] hidden scale-x-[250%] scale-y-100 md:block"
        src={bgMainTablet}
        alt="background pattern"
      />
      <Image
        className="mt-[-200px] block w-fit min-[400px]:ml-[150px] ml-[100px] min-[450px]:ml-[200px] sm:ml-[300px] md:hidden"
        src={bgMainMobile}
        alt="background pattern"
      />
    </div>
    <Image
      className="z-10 ml-[24px] mt-[40px] md:ml-[33px] md:mt-[62px] lg:ml-[100px] xl:ml-[166px]"
      width={147}
      height={33}
      src={logo as string}
      alt="logo"
    />
  </header>
);

export default Header;

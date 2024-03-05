import Image from 'next/image';
import logoDark from '@/public/assets/images/logo-dark.svg';

const Nav = () => (
  <nav className="mt-[16px] flex w-full items-center justify-between pl-[16px] pr-[16px] sm:mt-[24px] sm:pl-[39px] sm:pr-[40px] lg:pl-[80px] lg:pr-[80px] xl:mt-0 xl:pl-0 xl:pr-0">
    <Image className="xl:ml-[166px] xl:mt-[39px]" width={112} height={29} src={logoDark as string} alt="skilled logo" />
    <button
      className="h-[56px] w-[167px] rounded-[28px] bg-[#13183F] text-[18px] font-semibold leading-[28px] text-white transition hover:bg-[#666CA3] xl:mr-[165px] xl:mt-[24px]"
      aria-label="Get Started"
    >
      Get Started
    </button>
  </nav>
);

export default Nav;

import Image from 'next/image';
import logoDark from '@/public/assets/logo-dark.svg';

const Nav = () => (
  <nav className="flex w-full items-center justify-between">
    <Image className="lg:ml-[166px] lg:mt-[39px]" width={112} height={29} src={logoDark as string} alt="skilled logo" />
    <button
      className="mr-[165px] mt-[24px] h-[56px] w-[167px] rounded-[28px] bg-[#13183F] text-[18px] font-semibold leading-[28px] text-white transition hover:bg-[#666CA3]"
      aria-label="Get Started"
    >
      Get Started
    </button>
  </nav>
);

export default Nav;

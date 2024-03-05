import Image from 'next/image';
import logoLight from '@/public/assets/images/logo-light.svg';

const Footer = () => (
  <footer className="flex h-[120px] w-full items-center justify-between bg-[#13183F] px-[165px]">
    <Image src={logoLight as string} alt="skilled logo" />
    <button className="flex h-[56px] w-[167px] flex-col items-center justify-center rounded-[28px] bg-white text-[18px] font-semibold leading-[28px] text-white transition">
      <div className="flex h-[56px] w-[167px] flex-col items-center justify-center rounded-[28px] bg-gradient-to-b from-[#8842DD] to-[#F02AA6] text-[18px] font-semibold leading-[28px] text-white transition hover:opacity-50">
        <span>Get Started</span>
      </div>
    </button>
  </footer>
);

export default Footer;

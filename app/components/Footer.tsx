import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

const Footer = () => (
  <footer className="mt-[202px] flex w-full justify-between px-[165px] pb-[91px]">
    <div className="flex items-start gap-[138px]">
      <Image className="z-10" width={147} height={33} src={logo as string} alt="logo" />
      <span className="max-w-[366px] whitespace-pre-wrap text-[16px] leading-[26px]">
        {'All rights reserved © Equalizer 2021\nHave any problems? Contact us via social media or email us at '}
        <span className="font-bold">equalizer@example.com</span>
      </span>
    </div>
    <div className="flex items-center">ICONS</div>
  </footer>
);

export default Footer;

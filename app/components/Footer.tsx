import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';

const Footer = () => (
  <footer className="mt-[202px] flex w-full justify-between pb-[91px] md:px-[33px] lg:px-[100px] xl:px-[165px]">
    <div className="flex flex-col items-start gap-[32px] lg:flex-row lg:gap-[80px] xl:gap-[138px]">
      <Image className="z-10" width={147} height={33} src={logo as string} alt="logo" />
      <span className="max-w-[366px] whitespace-pre-wrap text-[16px] leading-[26px]">
        {'All rights reserved © Equalizer 2021\nHave any problems? Contact us via social media or email us at '}
        <span className="font-bold">equalizer@example.com</span>
      </span>
    </div>
    <div className="flex items-center justify-between gap-[20px]">
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  </footer>
);

export default Footer;

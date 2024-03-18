import Image from 'next/image';
import logoLight from '@/public/assets/images/logo-light.svg';

const Footer = () => (
  <footer className="mt-[180px] flex min-h-[244px] w-full items-center justify-center bg-almostBlack">
    <div className="flex size-full max-w-[1110px] justify-between">
      <div className="flex h-[84px] w-[730px] items-start justify-between">
        <Image width={160} height={58} src={logoLight as string} alt="logo" />
        <p className="BodyS h-[84px] w-[430px] text-white">
          The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King
          Street, Newport, USA.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

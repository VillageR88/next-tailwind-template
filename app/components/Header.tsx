import Image from 'next/image';
import logoIcon from '@/public/assets/images/logo.svg';

const Header = () => (
  <header className="flex w-full justify-center">
    <Image
      className="ml-[1px] mt-[50px] xl:mt-[80px]"
      width={119}
      height={28}
      src={logoIcon as string}
      alt="meet logo"
    />
  </header>
);

export default Header;

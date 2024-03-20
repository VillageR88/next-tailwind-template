import Image from 'next/image';
import logo from '@/public/assets/images/shared/logo.svg';
import Button1n2 from './Button1n2';

const MainPart1 = () => (
  <div className="flex size-full justify-center px-8">
    <div className="flex h-[58px] w-full max-w-[1110px] items-center justify-between">
      <Image width={40} height={40} src={logo as string} alt="logo" />
      <Button1n2 type={1} />
    </div>
  </div>
);

export default MainPart1;

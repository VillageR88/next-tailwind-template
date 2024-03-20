import Image from 'next/image';
import logo from '@/public/assets/images/shared/logo.svg';
import Button1n2 from './Button1n2';

const MainPart1 = () => (
  <div className="flex h-[58px] w-full items-center justify-between">
    <Image width={40} height={40} src={logo as string} alt="logo" />
    <Button1n2 type={1} />
  </div>
);

export default MainPart1;

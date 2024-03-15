import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import Button1And2 from './Button1And2';

const MainBar = ({ additionalClass }: { additionalClass?: string }) => (
  <div
    className={`${additionalClass} flex h-[64px] w-full max-w-[1111px] items-center justify-between px-[39px] transition-all xl:px-0`}
  >
    <Image height={64} width={64} src={logo as string} alt="logo" />
    <Button1And2 type={1} />
  </div>
);

export default MainBar;

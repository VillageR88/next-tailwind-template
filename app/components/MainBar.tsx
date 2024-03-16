import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

const MainBar = () => (
  <div className="flex w-full max-w-[689px] items-center justify-between xl:max-w-[1108px]">
    <Image width={78.4} height={24.8} src={logo as string} alt="logo" />
    <button className="h-[56px] w-full max-w-[219px] rounded-[6px] border border-darkBlue text-[16px] font-bold leading-[32px] transition hover:bg-darkBlue hover:text-creamWhite">
      Request Beta Access
    </button>
  </div>
);

export default MainBar;

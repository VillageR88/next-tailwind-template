import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

const MainBar = () => (
  <div className="flex w-full max-w-[343px] items-center justify-between transition-all md:max-w-[689px] xl:max-w-[1108px]">
    <Image width={78.4} height={24.8} src={logo as string} alt="logo" />
    <button className="h-[48px] w-full max-w-[182px] rounded-[6px] border border-darkBlue text-[14px] font-bold leading-[24px] transition hover:bg-darkBlue hover:text-creamWhite md:h-[56px] md:max-w-[219px] md:text-[16px] md:leading-[32px]">
      Request Beta Access
    </button>
  </div>
);

export default MainBar;

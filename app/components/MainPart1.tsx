import Image from 'next/image';
import logo from '@/public/assets/images/shared/logo.svg';

const MainPart1 = () => (
  <div className="flex h-[58px] w-full items-center justify-between">
    <Image width={40} height={40} src={logo as string} alt="logo" />
    <button className="h-[58px] w-full max-w-[175px] rounded-[8px] bg-[#E8EFF2] text-[16px] font-bold leading-[26px] text-[#162542]">
      {'Pre-order now'.toUpperCase()}
    </button>
  </div>
);

export default MainPart1;

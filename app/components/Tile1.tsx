import Image from 'next/image';
import patternGraphicDesign from '@/public/assets/images/pattern-graphic-design.svg';

const Tile1 = () => (
  <div className="flex h-[364px] w-[354px] flex-col justify-between rounded-[8px] bg-galacticBlue p-[24px]">
    <Image className="self-end" width={128} height={192} src={patternGraphicDesign as string} alt="pattern" />
    <span className="text-[24px] font-bold text-white">Graphic Design</span>
  </div>
);

export default Tile1;

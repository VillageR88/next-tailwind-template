import Image from 'next/image';
import patternPhotography from '@/public/assets/images/pattern-photography.svg';
import patternMotionGraphics from '@/public/assets/images/pattern-motion-graphics.svg';

const Tile3 = () => (
  <div className="flex grow basis-0 flex-wrap justify-center gap-[24px]">
    <div className="flex h-[182px] w-[354px] flex-col justify-between rounded-[8px] bg-cyan p-[24px]">
      <Image className="self-end" width={160} height={64} src={patternPhotography as string} alt="pattern" />
      <span className="text-[24px] font-bold text-white">Photography</span>
    </div>
    <div className="flex h-full max-h-[182px] min-h-[158px] w-[354px] flex-col justify-between rounded-[8px] bg-darkPurple p-[24px] lg:h-auto">
      <Image className="self-end" width={128} height={64} src={patternMotionGraphics as string} alt="pattern" />
      <span className="text-[24px] font-bold text-white">Motion Graphics</span>
    </div>
  </div>
);

export default Tile3;

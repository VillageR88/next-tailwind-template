import Image from 'next/image';
import patternUIUX from '@/public/assets/images/pattern-ui-ux.svg';
import patternApps from '@/public/assets/images/pattern-apps.svg';
import patternIllustrations from '@/public/assets/images/pattern-illustrations.svg';

const Tile2 = () => (
  <div className="grid h-[364px] w-[354px] grid-cols-2 gap-[24px]">
    <div className="flex h-[182px] w-[164px] flex-col justify-between rounded-[8px] bg-summerYellow p-[24px]">
      <Image className="self-end" width={64} height={64} src={patternUIUX as string} alt="pattern" />
      <span className="text-[24px] font-bold text-white">UI/UX</span>
    </div>
    <div className="flex h-[182px] w-[164px] flex-col justify-between rounded-[8px] bg-pink p-[24px]">
      <Image className="self-end" width={64} height={64} src={patternApps as string} alt="pattern" />
      <span className="text-[24px] font-bold text-white">Apps</span>
    </div>
    <div className="flex h-[158px] w-[354px] flex-col justify-between rounded-[8px] bg-lightRed p-[24px]">
      <Image className="self-end" width={128} height={64} src={patternIllustrations as string} alt="pattern" />
      <span className="text-[24px] font-bold text-white">Illustrations</span>
    </div>
  </div>
);

export default Tile2;

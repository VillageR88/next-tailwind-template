import Image from 'next/image';
import heroLeft from '@/public/assets/images/desktop/image-hero-left.png';
import heroRight from '@/public/assets/images/desktop/image-hero-right.png';
import heroSmall from '@/public/assets/images/tablet/image-hero.png';
import MainPart1MiddleDiv from './MainPart1MiddleDiv';
import Numerator from './Numerator';

const MainPart1 = () => (
  <div className="flex min-h-full min-w-[calc(100%+64px)]  flex-col items-center">
    <div className="flex w-full justify-center gap-[32px] xl:gap-[88px]">
      <Image
        className="hidden self-end pt-[61px] md:block xl:self-start"
        width={394}
        height={303}
        src={heroLeft}
        alt="avatars of people"
      />
      <MainPart1MiddleDiv additionalClass="xl:flex hidden pt-[108px]" />
      <Image
        className="hidden self-end pt-[116px] md:block"
        width={394}
        height={303}
        src={heroRight}
        alt="avatars of people"
      />
    </div>
    <Image className="block pt-[54px] md:hidden" width={820} height={303} src={heroSmall} alt="avatars of people" />
    <MainPart1MiddleDiv additionalClass="xl:hidden flex pt-[72px]" />
    <Numerator number={1} additionalClass="relative xl:mt-[110px] mt-[80]px]" />
  </div>
);

export default MainPart1;

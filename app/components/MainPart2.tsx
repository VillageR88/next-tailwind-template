import Image from 'next/image';
import imageJeremyLarge from '@/public/assets/images/image-jeremy-large@2x.webp';
import pattern2 from '@/public/assets/images/pattern-curved-line-2.svg';

const MainPart2 = () => (
  <div className="z-10 mt-[210px] flex min-h-[748px] w-full max-w-[375px]  flex-col items-center rounded-[15px] bg-darkBlue pb-[64px] transition-all duration-500 md:mt-[calc(273px+181px+10px)] md:min-h-[684px] md:max-w-[689px] xl:mt-[199px] xl:min-h-[545px] xl:max-w-[1109px] xl:flex-row xl:items-stretch xl:pb-0">
    <div className="relative mt-[-181px] min-h-[402px] w-[252px] xl:ml-[112px] xl:mt-[-55px] xl:min-h-[600px] xl:w-[375px]">
      <Image className="size-full" fill src={imageJeremyLarge} alt="image of Jeremy" />
    </div>
    <Image
      className="mt-[40px] size-fit min-h-[40px] w-[49px] xl:ml-[30px] xl:mt-[161px] xl:min-h-[52px] xl:w-[64px]"
      width={64}
      height={52}
      src={pattern2 as string}
      alt="pattern"
    />
    <section className="mt-[37px] flex min-h-[282px] max-w-[343px] flex-col gap-[40px] px-2 text-center md:w-[573px] md:px-0 xl:ml-[52px] xl:mt-[88px] xl:min-h-[369px] xl:w-[350px] xl:text-start">
      <h2 className="text-[40px] leading-[48px] tracking-[-0.5px] text-creamWhite xl:text-[48px] xl:leading-[56px]">
        It just <span className="HeadingL">works.</span>
      </h2>
      <p className="Quote text-cream">
        “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need
        separate tools to do the same job. This thing is a miracle worker.”
      </p>
      <section className="flex flex-col">
        <h3 className="HeadingM text-creamWhite">JEREMY ROBINSON</h3>
        <p className="HeadingS text-white">CMO, FYLO</p>
      </section>
    </section>
  </div>
);

export default MainPart2;

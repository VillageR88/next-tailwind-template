import Image from 'next/image';
import imageJeremyLarge from '@/public/assets/images/image-jeremy-large.webp';
import pattern2 from '@/public/assets/images/pattern-curved-line-2.svg';

const MainPart2 = () => (
  <div className="z-10 mt-[199px] flex h-[545px] w-full max-w-[1109px] rounded-[15px] bg-darkBlue">
    <Image className="ml-[112px] mt-[-55px]" height={600} width={375} src={imageJeremyLarge} alt="image of Jeremy" />
    <Image className="ml-[30px] mt-[161px] size-fit" width={64} height={52} src={pattern2 as string} alt="pattern" />
    <section className="ml-[52px] mt-[88px] flex h-[369px] w-[350px] flex-col gap-[40px]">
      <h2 className="text-[48px] leading-[56px] tracking-[-0.5px] text-creamWhite">
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

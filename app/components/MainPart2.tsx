import Image from 'next/image';
import imageAmy from '@/public/assets/images/image-amy.webp';
import Button1And2 from './Button1And2';

const MainPart2 = () => (
  <div className="ml-[-53px] mt-[120px] flex w-full max-w-[772px] items-center justify-between gap-[69px] xl:ml-0  xl:max-w-[1110px]">
    <Image className="size-[364px] xl:size-[445px]" width={445} height={445} src={imageAmy} alt="picture of Amy" />
    <div className="flex max-w-[339px] flex-col justify-between gap-[24px] xl:max-w-[540px] xl:gap-[32px]">
      <section className="flex flex-col justify-between gap-[24px] xl:gap-[34px]">
        <h2 className="HeadingM">I’m Amy, and I’d love to work on your next project</h2>
        <p className="BodyM max-w-[730px] text-mediumBrown">
          I love working with others to create beautiful design solutions. I’ve designed everything from brand
          illustrations to complete mobile apps. I’m also handy with a camera!
        </p>
      </section>
      <Button1And2 type={2} />
    </div>
  </div>
);

export default MainPart2;

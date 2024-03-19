import Button1And2 from '@/app/components/Button1And2';
import Link from 'next/link';

const MainPart1 = () => (
  <div className="flex size-full h-[700px] w-full max-w-[1040px] justify-between self-center pr-8 min-[900px]:pl-8 min-[940px]:pr-16 min-[1000px]:pr-24 xl:h-[800px] xl:max-w-[1375px] xl:justify-start xl:pl-0 xl:pr-8">
    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname*/}
    <h1 className="HeadingXL absolute z-10 ml-[165px] mt-[189px] hidden whitespace-pre bg-gradient-to-r from-white from-[63.6%] to-black to-[63.6%] bg-clip-text text-[2rem] text-transparent xl:block">
      {'MODERN\nART GALLERY'}
    </h1>
    <div className="hidden size-full max-w-[450px] bg-almostBlack xl:block"></div>
    <div className="h-full w-[437px] bg-[url('../public/assets/images/tablet/image-hero@2x.jpg')] bg-cover xl:w-[540px] xl:bg-[url('../public/assets/images/desktop/image-hero@2x.jpg')]"></div>
    <div className="BodyM ml-[-65px] mt-[145px] flex h-[410px] w-[339px] flex-col justify-between gap-[48px] xl:mt-[190px] xl:h-[296px] xl:w-[350px]">
      <div className="h-[130px] max-w-[330px] xl:hidden">
        <h1 className="font-bigShouldersDisplay text-[70px] font-black leading-[65px] ">MODERN ART GALLERY</h1>
      </div>
      <div className="flex size-full flex-col justify-between gap-[48px] xl:gap-[64px]">
        <p className="text-darkGrey">
          The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these
          pieces inspire you? Visit us and find out.
        </p>
        <Link href="/location">
          <Button1And2 type={1} />
        </Link>
      </div>
    </div>
  </div>
);

export default MainPart1;

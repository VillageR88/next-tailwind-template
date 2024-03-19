import Button1and2 from '@/app/components/Button1and2';
import Link from 'next/link';

const MainPart1 = () => (
  <div className="flex h-full w-screen flex-col items-center justify-between self-center  md:min-h-[700px] md:flex-row md:items-stretch md:pr-8 min-[900px]:pl-8 min-[940px]:pr-16 min-[1000px]:pr-24 xl:h-[800px]  xl:justify-start xl:pl-0 xl:pr-8">
    <div className="hidden h-full w-[51%] self-center bg-almostBlack  xl:block"></div>
    <div className="h-full w-0">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname*/}
      <h1 className="HeadingXL absolute z-10 ml-[-285px] mt-[189px] hidden whitespace-pre bg-gradient-to-r from-white from-[63.6%] to-black to-[63.6%] bg-clip-text text-[2rem] text-transparent xl:block">
        {'MODERN\nART GALLERY'}
      </h1>
    </div>
    <div className="min-h-[240px] w-full max-w-[630px] bg-[url('../public/assets/images/mobile/image-hero@2x.jpg')] bg-cover bg-center md:w-[437px] md:max-w-full md:bg-[url('../public/assets/images/tablet/image-hero@2x.jpg')] md:before:max-w-[437px] xl:w-[540px] xl:bg-[url('../public/assets/images/desktop/image-hero@2x.jpg')]"></div>
    <div className="BodyM mt-[32px] flex h-fit w-full max-w-[640px] flex-col justify-between gap-[32px] px-4 md:ml-[-65px] md:mt-[145px] md:min-h-[358px] md:max-w-[339px] md:px-0 lg:min-h-[410px] lg:gap-[48px] xl:mt-[190px] xl:h-[296px] xl:w-[350px]">
      <div className="min-h-[112px] w-full max-w-[330px] md:h-[130px] xl:hidden">
        <h1 className="max-w-[280px] font-bigShouldersDisplay text-[60px] font-black leading-[55px] md:max-w-full lg:text-[70px] lg:leading-[65px] ">
          MODERN ART GALLERY
        </h1>
      </div>
      <div className="flex size-full flex-col justify-between gap-[32px] md:gap-[48px] xl:size-fit xl:gap-[64px]">
        <p className="text-darkGrey">
          The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these
          pieces inspire you? Visit us and find out.
        </p>
        <Link href="/location">
          <Button1and2 type={1} />
        </Link>
      </div>
    </div>
  </div>
);

export default MainPart1;

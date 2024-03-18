import Image from 'next/image';
import arrowRight from '@/public/assets/images/icon-arrow-right.svg';

const MainPart1 = () => (
  <div className="flex size-full h-[800px] w-full max-w-[1275px]">
    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname*/}
    <h1 className="HeadingXL absolute z-10 ml-[165px] mt-[189px] whitespace-pre bg-gradient-to-r from-white from-[63.6%] to-black to-[63.6%] bg-clip-text text-[2rem] text-transparent">
      {'MODERN\nART GALLERY'}
    </h1>
    <div className="size-full max-w-[450px] overflow-hidden bg-almostBlack"></div>
    <div className="h-full w-[540px] overflow-hidden bg-[url('../public/assets/images/desktop/image-hero@2x.jpg')] bg-cover"></div>
    <div className="BodyM ml-[-65px] mt-[190px] flex h-[296px] w-[350px] flex-col justify-between text-darkGrey">
      <p>
        The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces
        inspire you? Visit us and find out.
      </p>
      <button className="group flex h-[72px] w-[260px] transition">
        <div className="flex h-full w-[204px] items-center justify-center bg-almostBlack font-bigShouldersDisplay text-[20px] font-extrabold tracking-[3.64px] text-white group-hover:bg-gold">
          OUR LOCATION
        </div>
        <div className="flex h-full w-[56px] items-center justify-center bg-gold group-hover:bg-almostBlack">
          <Image width={8} height={24} src={arrowRight as string} alt="arrow right" />
        </div>
      </button>
    </div>
  </div>
);

export default MainPart1;

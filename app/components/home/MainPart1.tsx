import Button1and2 from '../Button1and2';

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
      <Button1and2 type={1} />
    </div>
  </div>
);

export default MainPart1;

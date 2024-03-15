import Tile1 from './Tile1';

const MainPart1Tiles = () => (
  <div className="mt-[80px] flex max-w-[1110px] flex-wrap justify-center gap-[24px]">
    <Tile1 />
    <div className="grid h-[364px] w-[354px] grid-cols-2 gap-[24px]">
      <div className="h-[182px] w-[164px] rounded-[8px] bg-summerYellow"></div>
      <div className="h-[182px] w-[164px] rounded-[8px] bg-pink"></div>
      <div className="h-[158px] w-[354px] rounded-[8px] bg-lightRed"></div>
    </div>
    <div className="flex grow basis-0 flex-wrap justify-center gap-[24px]">
      <div className="h-[182px] w-[354px] rounded-[8px] bg-cyan"></div>
      <div className="h-full max-h-[182px] min-h-[158px] w-[354px] rounded-[8px] bg-darkPurple lg:h-auto"></div>
    </div>
  </div>
);

export default MainPart1Tiles;

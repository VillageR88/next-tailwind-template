import Tile1 from './Tile1';
import Tile2 from './Tile2';

const MainPart1Tiles = () => (
  <div className="mt-[80px] flex max-w-[1110px] flex-wrap justify-center gap-[24px]">
    <Tile1 />
    <Tile2 />
    <div className="flex grow basis-0 flex-wrap justify-center gap-[24px]">
      <div className="h-[182px] w-[354px] rounded-[8px] bg-cyan"></div>
      <div className="h-full max-h-[182px] min-h-[158px] w-[354px] rounded-[8px] bg-darkPurple lg:h-auto"></div>
    </div>
  </div>
);

export default MainPart1Tiles;

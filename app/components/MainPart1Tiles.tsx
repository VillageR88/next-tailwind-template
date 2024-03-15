import Tile1 from './Tile1';
import Tile2 from './Tile2';
import Tile3 from './Tile3';

const MainPart1Tiles = () => (
  <div className="mt-[32px] flex w-full max-w-[1110px] flex-wrap justify-center gap-[24px] md:mt-[80px]">
    <Tile1 />
    <Tile2 />
    <Tile3 />
  </div>
);

export default MainPart1Tiles;

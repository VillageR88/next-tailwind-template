const MainPart1Tiles = () => (
  <div className="mt-[80px] flex max-w-[1110px] flex-wrap justify-center gap-[24px]">
    <div className="h-[364px] w-[354px] rounded-[8px] bg-galacticBlue"></div>
    <div className="grid h-[364px] w-[354px] grid-cols-2 gap-[24px]">
      <div className="h-[182px] w-[164px] rounded-[8px] bg-summerYellow"></div>
      <div className="h-[182px] w-[164px] rounded-[8px] bg-pink"></div>
      <div className="h-[158px] w-[354px] rounded-[8px] bg-lightRed"></div>
    </div>
    <div className="flex grow basis-0 flex-wrap justify-center gap-[24px]">
      <div className="h-[182px] w-[354px] rounded-[8px] bg-cyan"></div>
      <div className="min-h-[158px] w-[354px] rounded-[8px] bg-darkPurple"></div>
    </div>
  </div>
);

export default MainPart1Tiles;

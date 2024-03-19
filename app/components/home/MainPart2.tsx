const MainPart2 = () => (
  <div className="mt-[120px] flex h-[1131px] w-full max-w-[1110px] flex-col gap-[30px] self-center px-8 xl:px-0">
    <div className="flex min-h-[400px] w-full justify-between gap-6 xl:gap-0">
      <div className="flex h-[299px] max-w-[223px] flex-col justify-between lg:h-[280px] lg:max-w-[350px]">
        <h2 className="HeadingM text-almostBlack">{'Your Day at the Gallery'.toUpperCase()}</h2>
        <p className="BodyM text-darkGrey">
          Wander through our distinct collections and find new insights about our artists. Dive into the details of
          their creative process.
        </p>
      </div>
      <div className="h-[400px] w-[635px] bg-[url('../public/assets/images/desktop/image-grid-1@2x.jpg')] bg-cover bg-center"></div>
    </div>
    <div className="flex min-h-[720px] w-full justify-between gap-6 xl:gap-0">
      <div className="h-full w-[635px] bg-[url('../public/assets/images/desktop/image-grid-2@2x.jpg')] bg-cover bg-center"></div>
      <div className="flex h-full w-[445px] flex-col justify-between gap-[30px]">
        <div className="h-[313px] w-full bg-[url('../public/assets/images/desktop/image-grid-3@2x.jpg')] bg-cover bg-center"></div>
        <div className="flex h-[377px] w-full gap-[32px] bg-almostBlack px-[47px] py-[64px] text-white">
          <div className="flex h-[248px] w-[223px] flex-col justify-between lg:w-[350px]">
            <h2 className="HeadingM">COME & BE INSPIRED</h2>
            <p className="BodyM">
              We’re excited to welcome you to our gallery and see how our collections influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainPart2;

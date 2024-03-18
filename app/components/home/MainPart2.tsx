const MainPart2 = () => (
  <div className="mt-[120px] flex h-[1131px] w-full max-w-[1110px] flex-col gap-[30px] self-center">
    <div className="flex min-h-[400px] w-full justify-between">
      <div className="flex h-[280px] w-[350px] flex-col justify-between">
        <h2 className="HeadingM text-almostBlack">{'Your Day at the Gallery'.toUpperCase()}</h2>
        <p className="BodyM text-darkGrey">
          Wander through our distinct collections and find new insights about our artists. Dive into the details of
          their creative process.
        </p>
      </div>
      <div className="h-[400px] w-[635px] bg-[url('../public/assets/images/desktop/image-grid-1@2x.jpg')] bg-cover"></div>
    </div>
    <div className="flex min-h-[720px] w-full justify-between">
      <div className="h-full w-[635px] bg-[url('../public/assets/images/desktop/image-grid-2@2x.jpg')] bg-cover"></div>
      <div className="flex h-full w-[445px] flex-col justify-between gap-[30px]">
        <div className="h-[313px] w-full bg-[url('../public/assets/images/desktop/image-grid-3@2x.jpg')] bg-cover"></div>
        <div className="flex h-[377px] w-full flex-col gap-[32px]  bg-almostBlack px-[47px] py-[64px] text-white">
          <h2 className="HeadingM">COME & BE INSPIRED</h2>
          <p className="BodyM">
            We’re excited to welcome you to our gallery and see how our collections influence you.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MainPart2;

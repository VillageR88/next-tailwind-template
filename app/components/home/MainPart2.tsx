const MainPart2 = () => (
  <div className="mt-[120px] flex h-[1605px] w-full max-w-[1110px] flex-col gap-[30px] self-center px-4 md:h-[1131px] md:px-8 xl:px-0">
    <div className="flex min-h-[400px] w-full flex-col-reverse items-center justify-between gap-6 md:flex-row xl:gap-0">
      <div className="flex min-h-[160px] max-w-[480px] flex-col justify-between gap-6 md:h-[299px] md:max-w-[223px] md:gap-0 lg:h-[280px] lg:max-w-[350px]">
        <h2 className="HeadingM whitespace-pre-wrap text-almostBlack md:whitespace-normal">
          {'Your Day\nat the Gallery'.toUpperCase()}
        </h2>
        <p className="BodyM text-darkGrey">
          Wander through our distinct collections and find new insights about our artists. Dive into the details of
          their creative process.
        </p>
      </div>
      <div className="h-[320px] w-full max-w-[635px] bg-[url('../public/assets/images/mobile/image-grid-1@2x.jpg')] bg-cover bg-center min-[480px]:bg-[url('../public/assets/images/desktop/image-grid-1@2x.jpg')] md:h-[400px]"></div>
    </div>
    <div className="flex min-h-[720px] w-full flex-col items-center justify-between gap-6 md:flex-row xl:gap-0">
      <div className="min-h-[480px] w-full max-w-[635px] bg-[url('../public/assets/images/mobile/image-grid-2@2x.jpg')] bg-cover bg-center md:min-h-full md:bg-[url('../public/assets/images/tablet/image-grid-2@2x.jpg')] min-[950px]:bg-[url('../public/assets/images/desktop/image-grid-2@2x.jpg')]"></div>
      <div className="flex size-full max-w-[640px] flex-col justify-between gap-[30px] md:max-w-[445px]">
        <div className="h-[313px] w-full bg-[url('../public/assets/images/mobile/image-grid-3@2x.jpg')] bg-cover bg-center md:bg-[url('../public/assets/images/tablet/image-grid-3@2x.jpg')] lg:bg-[url('../public/assets/images/desktop/image-grid-3@2x.jpg')]"></div>
        <div className="flex min-h-[377px] w-full gap-[32px] bg-almostBlack px-[47px] py-[64px] text-white">
          <div className="flex min-h-[248px] w-[223px] flex-col justify-between lg:w-[350px]">
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

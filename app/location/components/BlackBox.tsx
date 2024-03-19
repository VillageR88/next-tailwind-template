const BlackBox = () => (
  <div className="flex min-h-[493px] w-full justify-center bg-almostBlack px-[40px] pb-[56px] pt-[48px] md:min-h-[520px] md:py-0 lg:min-h-[548px]">
    <div className="flex min-h-[316px] w-full max-w-[1040px] flex-col justify-between  md:mt-[104px] md:flex-row xl:max-w-[1110px]">
      <div className="h-fit md:max-w-[223px] xl:max-w-[350px]">
        <h1 className="HeadingL text-white">OUR LOCATION</h1>
      </div>
      <div className="flex w-full flex-col justify-between gap-[32px] md:h-[316px] md:max-w-[398px] lg:max-w-[540px]">
        <div className="flex min-h-[156px] w-full flex-col gap-[24px] md:max-w-[445px]">
          <h2 className="HeadingS mt-[48px] text-gold md:mt-0">99 King Street</h2>
          <p className="BodyM whitespace-pre-wrap text-white">{'Newport\nRI 02840\nUnited States of America'}</p>
        </div>
        <div className="BodyM min-h-[128px] text-white md:max-w-[540px]">
          Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is
          free to all visitors and open seven days a week from 8am to 9pm.
        </div>
      </div>
    </div>
  </div>
);

export default BlackBox;

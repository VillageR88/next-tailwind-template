const BlackBox = () => (
  <div className="flex min-h-[548px] w-full max-w-[1440px] justify-center bg-almostBlack">
    <div className="mt-[104px] flex min-h-[316px] w-full max-w-[1110px] justify-between">
      <div className="h-fit max-w-[350px]">
        <h1 className="HeadingL text-white">OUR LOCATION</h1>
      </div>
      <div className="flex h-[316px] w-full max-w-[540px] flex-col justify-between gap-[32px]">
        <div className="flex min-h-[156px] w-full max-w-[445px] flex-col gap-[24px]">
          <h2 className="HeadingS text-gold">99 King Street</h2>
          <p className="BodyM whitespace-pre-wrap text-white">{'Newport\nRI 02840\nUnited States of America'}</p>
        </div>
        <div className="BodyM min-h-[128px] max-w-[540px] text-white">
          Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is
          free to all visitors and open seven days a week from 8am to 9pm.
        </div>
      </div>
    </div>
  </div>
);

export default BlackBox;

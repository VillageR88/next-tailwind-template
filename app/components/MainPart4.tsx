import Button1And2 from './Button1And2';

const MainPart4 = () => (
  <div className="flex w-full items-center justify-center px-[39px]">
    <div className="mt-[88px] flex min-h-[352px] w-full max-w-[1110px] flex-col items-center justify-center gap-[26px] rounded-[10px] bg-black px-[57px] text-center lg:min-h-[320px] lg:flex-row lg:justify-between lg:gap-8 lg:pr-[80px] lg:text-left xl:pr-[103px]">
      <section className="flex max-w-[540px] flex-col gap-[25px] text-lightCream">
        <h2 className="HeadingM">Book a call with me</h2>
        <p className="BodyM">
          I&rsquo;d love to have a chat to see how I can help you. The best first step is for us to discuss your project
          during a free consultation. Then we can move forward from there.
        </p>
      </section>
      <Button1And2 type={2} />
    </div>
  </div>
);

export default MainPart4;

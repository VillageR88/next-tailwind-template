import Button1And2 from './Button1And2';

const MainPart4 = () => (
  <div className="mt-[88px] flex min-h-[320px] w-full max-w-[1110px] items-center justify-between rounded-[10px] bg-black pl-[57px] pr-[103px]">
    <section className="flex max-w-[540px] flex-col gap-[25px] text-lightCream">
      <h2 className="HeadingM">Book a call with me</h2>
      <p className="BodyM">
        I&rsquo;d love to have a chat to see how I can help you. The best first step is for us to discuss your project
        during a free consultation. Then we can move forward from there.
      </p>
    </section>
    <Button1And2 type={2} />
  </div>
);

export default MainPart4;

import ButtonGetStarted from './ButtonGetStarted';

const MainRow4 = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[1.5em] bg-[hsl(12,88%,59%)] bg-[url('../public/images/bg-simplify-section-mobile.svg')] bg-left bg-no-repeat px-6 py-[6em] md:h-[13.75em] md:flex-row md:justify-between md:bg-[url('../public/images/bg-simplify-section-desktop.svg')] md:bg-cover md:bg-[1em_bottom] md:px-[2em] md:py-0 lg:bg-[10em_bottom] lg:px-[5em] xl:bg-[15em_bottom] min-[1458px]:px-[10.3em]">
      <h2 className="text-center text-[2.4rem] font-[500] leading-[1.2em] tracking-[0.001em] text-[white] md:w-[12em] md:text-left">
        Simplify how your team works today.
      </h2>
      <ButtonGetStarted inverted />
    </div>
  );
};
export default MainRow4;

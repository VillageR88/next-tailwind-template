import ButtonGetStarted from './ButtonGetStarted';

const MainRow4 = () => {
  return (
    <div className="flex h-[13.75em] w-full items-center justify-between bg-[hsl(12,88%,59%)] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <h2 className="w-[12em] text-[2.4rem] font-[500] leading-[1.2em] tracking-[0.001em] text-[white]">
        Simplify how your team works today.
      </h2>
      <ButtonGetStarted inverted />
    </div>
  );
};
export default MainRow4;

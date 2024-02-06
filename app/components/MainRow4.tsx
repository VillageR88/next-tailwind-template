import ButtonGetStarted from './ButtonGetStarted';

const MainRow4 = () => {
  return (
    <div className="flex h-[13em] w-full items-center justify-between bg-[hsl(12,88%,59%)] px-[10em]">
      <h2 className="w-[12em] text-[2.4rem] font-[500] leading-[1.2em] text-[hsl(13,100%,96%)]">
        Simplify how your team works today.
      </h2>
      <ButtonGetStarted inverted />
    </div>
  );
};
export default MainRow4;

import MultipleItems from './MultipleItems';
import ButtonGetStarted from './ButtonGetStarted';

const MainRow3 = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#FFFFFF] pb-[10em] pt-[7em]">
      <h2 className="text-[2.4rem] font-[700] text-[hsl(233,26%,24%)]">What they’ve said</h2>
      <MultipleItems />
      <div className="mt-[2.5em]">
        <ButtonGetStarted />
      </div>
    </div>
  );
};
export default MainRow3;

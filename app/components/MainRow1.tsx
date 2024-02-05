import Image from 'next/image';
import ButtonGetStarted from './ButtonGetStarted';

const MainRow1 = () => {
  return (
    <div className="flex w-full flex-col-reverse gap-[2em] bg-[#FFFFFF] pb-[5em] md:h-[39.3em] md:flex-row md:gap-0 md:pb-0">
      <div className="mb-[0.4em] flex flex-col items-center justify-center px-6 text-center md:w-[49.7%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h1 className="scale-y-[105%] text-[2.65rem] font-[700] leading-[1.16em] text-[hsl(233,26%,24%)] md:text-[2.65rem] lg:text-[2.8rem] xl:text-[3.25rem]">
          Bring everyone together to build better products.
        </h1>
        <span className="mb-[2.4em] mt-[2.2em] max-w-[20em] tracking-[-0.03em] text-[hsl(233,8%,62%)] xl:text-[1.05rem]">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
          view.
        </span>
        <ButtonGetStarted />
      </div>
      <div className="z-10 flex items-center justify-start md:w-[50.3%]">
        <Image
          className="h-fit w-fit min-w-[26em]"
          height={100}
          width={100}
          src={'images/illustration-intro.svg' as string}
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default MainRow1;

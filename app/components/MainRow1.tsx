import Image from 'next/image';
import ButtonGetStarted from './ButtonGetStarted';

const MainRow1 = () => {
  return (
    <div className="flex w-full flex-col-reverse bg-[#FFFFFF] px-2 pb-[4em] md:h-[34.2em] md:flex-row md:gap-0 md:px-0 md:pb-0 lg:gap-[2em]">
      <div className="flex flex-col items-center justify-center px-6 text-center md:mb-[0.4em] md:w-[53%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h1 className="pb-[0.5em] pt-[0.8em] text-[2.65rem] font-[700] leading-[1.12em] tracking-[-0.025em] text-[#34313C] md:mb-4 md:py-0 md:pt-0 lg:text-[2.8rem] xl:mb-0 xl:text-[5rem]">
          More than just shorter links
        </h1>
        <p className="mb-[1.6em] px-1 text-[1.2rem] leading-[1.6em] tracking-[-0.006em] text-[#A5A4A9] md:px-0 md:text-[1rem] xl:text-[1.4rem]">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <ButtonGetStarted />
      </div>
      <div className="flex items-center justify-start md:w-[47%]">
        <Image
          className="mb-[0.3em] ml-[1em] h-fit w-fit min-w-[30em] md:ml-[2em] lg:min-w-[111%] xl:ml-[3.2em]"
          height={100}
          width={100}
          src={'images/illustration-working.svg' as string}
          alt="illustration"
          priority
        />
      </div>
    </div>
  );
};

export default MainRow1;

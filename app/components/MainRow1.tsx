import Image from 'next/image';

const MainRow1 = () => {
  return (
    <div className="flex w-full flex-col-reverse bg-[#FFFFFF] px-2 pb-[5em] md:h-[34.2em] md:flex-row md:gap-0 md:px-0 md:pb-0 lg:gap-[2em]">
      <div className="z-20 mb-[0.4em] flex flex-col items-center justify-center px-6 text-center md:w-[53%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h1 className="text-[2.3rem] font-[700] leading-[1.12em] tracking-[-0.025em] text-[#34313C] md:text-[2.65rem] lg:text-[2.8rem] xl:text-[5rem]">
          More than just shorter links
        </h1>
        <p className="mb-[1.6em] px-1 leading-[1.6em] tracking-[-0.006em] text-[#A5A4A9] md:px-0 xl:text-[1.4rem]">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="rounded-[2em] bg-[hsl(180,66%,49%)] px-[2.2em] pb-[0.67em] pt-[0.77em] text-[1.2rem] font-[700] text-[white] transition hover:bg-opacity-60">
          Get Started
        </button>
      </div>
      <div className="flex items-center justify-start md:w-[47%]">
        <Image
          className="z-20 mb-[0.3em] h-fit md:ml-[2em] md:min-w-[30em] lg:min-w-[111%] xl:ml-[3.2em]"
          height={100}
          width={100}
          src={'images/illustration-working.svg' as string}
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default MainRow1;

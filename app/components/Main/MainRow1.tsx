import Image from 'next/image';

const MainRow1 = () => {
  return (
    <div className="flex h-full w-full flex-col-reverse gap-[3em] bg-[white] px-2 pb-[1em] md:h-[35.5em] md:flex-row md:gap-0 md:px-0 md:pl-[2em] lg:pl-[5em] min-[1458px]:pl-[10.3em]">
      <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center md:w-1/2 md:items-start md:px-0 md:pr-[3em] md:text-left lg:pr-[2em]">
        <h1 className="lg:[2.5rem] text-[1.8rem] font-[500] leading-[1.1em]  text-[hsl(229,31%,21%)] md:text-[2.2rem] xl:text-[2.95rem]">
          A Simple Bookmark Manager
        </h1>
        <p className="mb-[1.8em] mt-[1.3em] text-[0.92rem] leading-[1.6em] text-[hsl(229,8%,60%)] md:text-[1.13rem]">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.
        </p>
        <div className="flex flex-wrap justify-center gap-[1.3em] md:flex-nowrap">
          <button
            className={`h-[3.6em] w-[12.5em] rounded-[0.3em] border-2 border-[#5267DB] bg-[#5267DB] text-[0.82rem] font-[500] tracking-[0.04em] text-[white] shadow-[0_3px_5px_4px_#E5EBF8] transition hover:border-[#606AA5] hover:bg-[white] hover:text-[#5267DB]`}
          >
            Get it on Chrome
          </button>
          <button
            className={`h-[3.4em] w-[10.8em] rounded-[0.3em] border-2 border-[#F7F7F7] bg-[#F7F7F7] text-[0.9rem] font-[500] tracking-[0.01em] text-[#5a5a61] shadow-[0_5px_5px_0.5px_#E5EBF8] transition hover:border-[#5F616C] hover:bg-[white] hover:text-[#5a5a61]`}
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="mt-[10em] flex h-full w-[1/2] items-center justify-end md:mt-[5.8em]">
        <div className="mr-[-5em] flex h-[60%] w-full rounded-l-full bg-[#4D61D0] md:ml-[10em] md:mr-[-2px] md:h-[62%] lg:ml-[15em]">
          <Image
            className="ml-[-5em] mt-[-6em] h-fit w-fit md:ml-[-9.2em] md:mt-[-6.8em] md:min-w-[35em] xl:mr-[6.4em] xl:scale-[117%]"
            width={100}
            height={100}
            src={'./images/illustration-hero.svg'}
            alt="image of bookmark"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MainRow1;

import Image from 'next/image';

const MainRow1 = () => {
  return (
    <div className="flex h-[35em] w-full bg-[white] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex h-full w-1/2 flex-col justify-center pr-[1.5em]">
        <h1 className="text-[2.95rem] font-[500] leading-[1.1em] text-[hsl(229,31%,21%)]">A Simple Bookmark Manager</h1>
        <p className="mb-[1.8em] mt-[1.3em] text-[1.1rem] leading-[1.6em] text-[hsl(229,8%,60%)]">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.
        </p>
        <div className="flex gap-[1.3em]">
          <button
            className={`h-[3.6em] w-[12.5em] rounded-[0.3em] border-2 border-[#5267DB] bg-[#5267DB] text-[0.82rem] font-[500] tracking-[0.04em] text-[white] shadow-[0_3px_5px_4px_#E5EBF8] transition hover:border-[#606AA5] hover:bg-[white] hover:text-[#5267DB]`}
          >
            Get it on Chrome
          </button>
          <button
            className={`h-[3.4em] w-[10.8em] rounded-[0.3em] border-2 border-[#F7F7F7] bg-[#F7F7F7] text-[0.9rem] font-[500] tracking-[0.01em] text-[#5a5a61] shadow-[0_5px_5px_1px_#E5EBF8] transition hover:border-[#5F616C] hover:bg-[white] hover:text-[#5a5a61]`}
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="flex h-full w-[1/2] items-center">
        <Image
          className="h-fit w-fit"
          width={100}
          height={100}
          src={'./images/illustration-hero.svg'}
          alt="image of bookmark"
        />
      </div>
    </div>
  );
};

export default MainRow1;

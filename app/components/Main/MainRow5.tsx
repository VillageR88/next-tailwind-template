const MainRow5 = () => {
  return (
    <div className="flex h-[22.5em] flex-col items-center bg-[#5266DF]">
      <section className="mt-[4.3em] flex w-full flex-col items-center gap-[2.15em] text-center font-[500] md:w-[33em]">
        <span className="text-[0.8rem] tracking-[0.4em] text-[white]">35,000+ ALREADY JOINED</span>
        <h2 className="w-[15em] text-[1.98rem] font-[500] leading-[1.28em] text-[white]">
          Stay up-to-date with what we’re doing
        </h2>
        <form className="mt-[0.18em] flex gap-[1.12em]" action="">
          <div className="mt-[-2px] h-[4.35em] w-[18.725em] rounded-[0.3em] border-[2px] border-[#DC6465] bg-[#FB5859]">
            <input className="h-[2.75em] w-full rounded-[0.2em]" autoComplete="" type="email" />
          </div>
          <button
            className={`mr-[-0.15em] h-[3em] w-[9.4em] rounded-[0.3em] border-2 border-[#FB5859] bg-[#FB5859] text-[0.82rem] font-[500] tracking-widest text-[white] transition hover:border-[#DC6465] hover:bg-[white] hover:text-[#DC6465]`}
          >
            LOGIN
          </button>
        </form>
      </section>
    </div>
  );
};

export default MainRow5;

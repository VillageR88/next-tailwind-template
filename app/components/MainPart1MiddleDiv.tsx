const MainPart1MiddleDiv = ({ additionalClass }: { additionalClass?: string }) => (
  <div
    className={`${
      additionalClass ? additionalClass : 'flex pt-[108px]'
    }  min-h-[304px] max-w-[540px] flex-col gap-[32px] px-[48px] xl:min-w-[420px] `}
  >
    <section className="flex flex-col items-center gap-[34px]">
      <h1 className="xm:max-w-[445px] text-center text-[48px] font-[900] leading-[48px] text-[#28283D] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] xl:text-[64px] xl:leading-[64px]">
        Group Chat for Everyone
      </h1>
      <p className="text-center text-[16px] leading-[26px] sm:max-w-[540px] xl:text-[18px]">
        Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
      </p>
    </section>
    <div className="flex flex-col items-center justify-center gap-[16px] md:flex-row">
      <button
        aria-label="Download ver v1.3 button"
        className="flex h-[58px] w-[193px] items-center justify-center gap-[4px] rounded-[29px] bg-[#4D96A9] text-[16px] font-[900] leading-[26px] transition hover:bg-[#71C0D4]"
      >
        <span className="text-white">Download</span>
        <span className="text-[#8FE3F9]">v1.3</span>
      </button>
      <button
        aria-label="What is it? button"
        className="h-[58px] w-[139px] rounded-[29px] bg-[#855FB1] text-[16px] font-[900] leading-[26px] text-white transition hover:bg-[#B18BDD]"
      >
        What is it?
      </button>
    </div>
  </div>
);

export default MainPart1MiddleDiv;

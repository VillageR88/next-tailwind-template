const MainSection1 = () => (
  <div className="flex h-full w-full justify-between">
    <div className="ml-[165px] mt-[186px] flex h-full w-[457px] flex-col items-start justify-between gap-[40px]">
      <section className="flex flex-col gap-[29px]">
        <h1 className="HeadingXL whitespace-pre-wrap text-[#13183F]">{'Maximize skill,\nminimize budget'}</h1>
        <p className="BodyM w-full max-w-[457px] text-[#83869A]">
          Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life
          you want.
        </p>
      </section>
      <button className="h-[63px] w-[167px] rounded-[32px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] text-[18px] font-semibold leading-[28px] text-white transition hover:opacity-50">
        Get Started
      </button>
    </div>
    <div className="pointer-events-none mr-[-280px] mt-[-230px] h-[937px] w-[992px] bg-[url('../public/assets/images/image-hero-desktop.webp')]  bg-no-repeat"></div>
  </div>
);

export default MainSection1;

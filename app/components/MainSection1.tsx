const MainSection1 = () => (
  <div className="flex h-full w-full justify-between">
    <div className="ml-[39px] mt-[86px] flex h-full w-[457px] flex-col items-start justify-between gap-[40px] lg:ml-[80px] lg:mt-[240px] xl:ml-[165px] xl:mt-[186px]">
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
    <div className="pointer-events-none mt-[-160px] h-[937px] w-[992px] bg-[url('../public/assets/images/image-hero-tablet.webp')] bg-no-repeat mr-[-580px] min-[1024px]:mr-[-50px] min-[1100px]:mr-[-200px] lg:bg-[url('../public/assets/images/image-hero-desktop.webp')] min-[1200px]:mr-[-300px] xl:mr-[-280px] xl:mt-[-230px]"></div>
  </div>
);

export default MainSection1;

import Image from 'next/image';
import heroMobile from '@/public/assets/images/image-hero-mobile@2x.webp';

const MainSection1 = () => (
  <div className="flex h-full w-full flex-col items-center justify-between  sm:flex-row sm:items-start">
    <div className="mt-[48px] flex h-full w-fit max-w-[457px] flex-col items-start justify-between gap-[40px] px-[16px] sm:ml-[39px] sm:mt-[86px] sm:px-0 lg:ml-[80px] lg:mt-[240px] xl:ml-[165px] xl:mt-[186px]">
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
    <div className="pointer-events-none mr-0 hidden bg-no-repeat sm:mt-[-160px] sm:block sm:h-[730px] sm:w-[992px] sm:bg-[url('../public/assets/images/image-hero-tablet.webp')] min-[640px]:mr-[-100px] min-[700px]:mr-[-250px] min-[740px]:mr-[-300px] min-[770px]:mr-[-400px] min-[820px]:mr-[-500px] min-[860px]:mr-[-580px] lg:h-[937px] lg:bg-[url('../public/assets/images/image-hero-desktop.webp')] min-[1024px]:mr-[-50px] min-[1100px]:mr-[-200px] min-[1200px]:mr-[-300px] xl:mr-[-280px] xl:mt-[-230px]"></div>
    <Image
      className="mt-[60px] flex h-full w-full scale-[122%] sm:hidden"
      width={327}
      height={301}
      src={heroMobile}
      alt="hero image"
    />
  </div>
);

export default MainSection1;

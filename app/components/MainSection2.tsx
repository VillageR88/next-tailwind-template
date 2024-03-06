import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';
import iconApple from '@/public/assets/images/icon-apple.svg';
import iconAndroid from '@/public/assets/images/icon-android.svg';

const Section2 = () => (
  <div className="z-10 mt-[230px] flex justify-center md:px-[33px] lg:px-[100px] xl:mt-[321px] xl:px-[165px]">
    <div className="flex w-full max-w-[450px] flex-col items-center justify-between rounded-[12px] bg-[#191826] bg-[url('../public/assets/images/bg-pattern-2.svg')] bg-[43.1%_0%] bg-no-repeat sm:min-w-[375px] md:h-[600px] md:max-w-full md:flex-row md:items-stretch md:bg-[43.1%_-30%]">
      <Image
        className="mt-[-138px] h-[430px] w-[208px] md:ml-[64px] md:h-[556px] md:w-[270px] xl:ml-[110px] xl:mt-[-213px] xl:h-[642px] xl:w-[312px]"
        width={369}
        height={642}
        src={illustrationApp}
        alt="illustration"
      />
      <div className="mt-[150px] flex h-full flex-col rounded-[12px] bg-[#FA7453] pb-[47px] pl-[36px] pr-[37px] pt-[48px] md:ml-[-85px] md:mr-[95px] md:h-[546px] md:min-w-[399px] md:max-w-[399px] md:pb-0 md:pl-[48px] md:pr-[49px] xl:mt-[90px] xl:h-[625px] xl:w-[446px] xl:max-w-[625px] xl:pl-[54px] xl:pr-[59px] xl:pt-[58px]">
        <section className="flex flex-col gap-[12px] xl:gap-[22px]">
          <h2 className="text-[32px] font-bold leading-[40px] text-[#FCFAF9] xl:text-[40px] xl:leading-[52px]">
            Premium EQ
          </h2>
          <p className="text-[18px] leading-[28px] text-[#FCFAF9] xl:text-[20px] xl:leading-[34px]">
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening
            experience to a whole new level and access all our incredible features!
          </p>
        </section>
        <div className="flex items-center gap-[16px] pt-[36px] text-[#FCFAF9] xl:pt-[39px]">
          <span className="text-[65px] font-bold leading-[52px]">$4</span>
          <span className="text-[20px] leading-[32px]">/ month</span>
        </div>
        <button
          aria-label="apple IOS Download"
          className="mt-[32px] flex h-[61px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#191826] transition hover:bg-[#66E2DC] lg:max-w-[333px] xl:mt-[46px]"
        >
          <Image width={18} height={20} src={iconApple as string} alt="apple icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#FCFAF9]">iOS Download</span>
        </button>
        <button className="mt-[16px] flex h-[61px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#FCFAF9] transition hover:bg-[#FFB964] lg:max-w-[333px]">
          <Image width={17} height={20} src={iconAndroid as string} alt="android icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#191826]">Android Download</span>
        </button>
      </div>
    </div>
  </div>
);

export default Section2;

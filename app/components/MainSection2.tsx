import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';
import iconApple from '@/public/assets/images/icon-apple.svg';
import iconAndroid from '@/public/assets/images/icon-android.svg';

const Section2 = () => (
  <div className="z-10 mt-[321px] lg:px-[100px] md:px-[33px] xl:px-[165px]">
    <div className="flex h-[600px] w-full justify-between rounded-[12px] bg-[#191826] bg-[url('../public/assets/images/bg-pattern-2.svg')] bg-[43.1%_-30%] bg-no-repeat">
      <Image
        className="ml-[64px] mt-[-213px] h-[642px] w-[312px] xl:ml-[110px]"
        width={369}
        height={642}
        src={illustrationApp}
        alt="illustration"
      />
      <div className="ml-[-105px] mr-[95px] mt-[150px] flex h-[546px] flex-col rounded-[12px] bg-[#FA7453] pl-[48px] pr-[49px] pt-[48px] sm:min-w-[399px] sm:max-w-[399px] xl:mt-[90px] xl:h-[625px] xl:w-[446px] xl:max-w-[625px] xl:pl-[54px] xl:pr-[59px] xl:pt-[58px]">
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
          className="mt-[32px] flex h-[61px] w-full max-w-[333px] items-center justify-center gap-[8px] rounded-[12px] bg-[#191826] transition hover:bg-[#66E2DC] xl:mt-[46px]"
        >
          <Image width={18} height={20} src={iconApple as string} alt="apple icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#FCFAF9]">iOS Download</span>
        </button>
        <button className="mt-[16px] flex h-[61px] w-full max-w-[333px] items-center justify-center gap-[8px] rounded-[12px] bg-[#FCFAF9] transition hover:bg-[#FFB964]">
          <Image width={17} height={20} src={iconAndroid as string} alt="android icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#191826]">Android Download</span>
        </button>
      </div>
    </div>
  </div>
);

export default Section2;

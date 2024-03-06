import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';
import iconApple from '@/public/assets/images/icon-apple.svg';
import iconAndroid from '@/public/assets/images/icon-android.svg';

const Section2 = () => (
  <div className="z-10 mt-[321px] px-[165px]">
    <div className="flex h-[600px] w-full justify-between rounded-[12px] bg-[#191826] bg-[url('../public/assets/images/bg-pattern-2.svg')] bg-[43.1%_-30%] bg-no-repeat">
      <Image
        className="ml-[110px] mt-[-213px] h-[642px] w-[312px]"
        width={369}
        height={642}
        src={illustrationApp}
        alt="illustration"
      />
      <div className="mr-[95px] mt-[90px] flex h-[625px] w-[446px] flex-col rounded-[12px] bg-[#FA7453] pl-[54px] pr-[59px] pt-[58px]">
        <section className="flex flex-col gap-[22px]">
          <h2 className="text-[40px] font-bold leading-[52px] text-[#FCFAF9]">Premium EQ</h2>
          <p className="text-[20px] leading-[34px] text-[#FCFAF9]">
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening
            experience to a whole new level and access all our incredible features!
          </p>
        </section>
        <div className="flex items-center gap-[16px] pt-[39px] text-[#FCFAF9]">
          <span className="text-[65px] font-bold leading-[52px]">$4</span>
          <span className="text-[20px] leading-[32px]">/ month</span>
        </div>
        <button
          aria-label="apple IOS Download"
          className="mt-[46px] flex h-[61px] w-[333px] items-center justify-center gap-[8px] rounded-[12px] bg-[#191826] transition hover:bg-[#66E2DC]"
        >
          <Image width={18} height={20} src={iconApple as string} alt="apple icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#FCFAF9]">iOS Download</span>
        </button>
        <button className="mt-[16px] flex h-[61px] w-[333px] items-center justify-center gap-[8px] rounded-[12px] bg-[#FCFAF9] transition hover:bg-[#FFB964]">
          <Image width={17} height={20} src={iconAndroid as string} alt="android icon" />
          <span className="mt-1 text-[18px] font-bold leading-[32px] text-[#191826]">Android Download</span>
        </button>
      </div>
    </div>
  </div>
);

export default Section2;

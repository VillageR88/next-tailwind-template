import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';

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
        <button className="mt-[46px] h-[61px] w-[333px] rounded-[12px] bg-[#66E2DC]"></button>
        <button className="mt-[16px] h-[61px] w-[333px] rounded-[12px] bg-[#FFB964]"></button>
      </div>
    </div>
  </div>
);

export default Section2;

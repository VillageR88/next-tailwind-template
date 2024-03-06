import Image from 'next/image';
import heroLeft from '@/public/assets/images/desktop/image-hero-left.png';
import heroRight from '@/public/assets/images/desktop/image-hero-right.png';

const MainPart1 = () => (
  <div className="flex w-[calc(100%+64px)] flex-col items-center">
    <div className="flex w-full justify-center gap-[88px]">
      <Image className="self-start pt-[61px]" width={394} height={303} src={heroLeft} alt="avatars of people" />
      <div className="flex h-[304px] w-[540px] flex-col gap-[32px] pt-[108px] ">
        <section className="flex flex-col items-center gap-[34px]">
          <h1 className="max-w-[445px] text-center text-[64px] font-[900] leading-[64px] text-[#28283D] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
            Group Chat for Everyone
          </h1>
          <p className="max-w-[540px] text-center text-[18px] leading-[26px]">
            Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
          </p>
        </section>
        <div className="flex justify-center gap-[16px]">
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
      <Image className="self-end pt-[116px]" width={394} height={303} src={heroRight} alt="avatars of people" />
    </div>
    <div className="mt-[110px] flex h-[140px] w-[56px] flex-col items-center">
      <div className="h-[84px] w-[1px] bg-[#D8D8D8]"></div>
      <div className="border-1 flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#D8D8D8] text-[16px] font-[900] leading-[26px] text-[#87879D]">
        01
      </div>
    </div>
  </div>
);

export default MainPart1;

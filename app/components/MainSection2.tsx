import Image from 'next/image';
import imageFounder from '/public/assets/images/image-founder.webp';
import bgPattern3 from '/public/assets/images/bg-pattern-3.svg';

const MainSection2 = () => (
  <div className="mt-[110px] flex h-[648px] w-full max-w-[1112px] justify-between">
    <Image className="max-h-[477px] max-w-[477px]" width={477} height={477} src={imageFounder} alt="image of founder" />
    <div className="ml-[-100px] mt-[173px] flex h-[413px] w-[730px] flex-col justify-between bg-darkPurple p-[64px]">
      <section className="flex h-full w-full flex-col justify-between">
        <h2 className="HeadingM text-white">Be the first to test</h2>
        <p className="Body text-white">
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for
          our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
        </p>
        <button className="primaryDefault h-[61px] w-[190px] text-[18px] font-[600]">Apply for access</button>
      </section>
      <div className="flex h-0 justify-end">
        <Image
          className="mr-[20px] mt-[-87px] h-fit w-fit"
          width={221}
          height={212}
          src={bgPattern3 as string}
          alt="background pattern"
        />
      </div>
    </div>
  </div>
);

export default MainSection2;

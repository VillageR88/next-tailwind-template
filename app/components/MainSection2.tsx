import Image from 'next/image';
import imageFounder from '/public/assets/images/image-founder.webp';
import bgPattern3 from '/public/assets/images/bg-pattern-3.svg';

const MainSection2 = () => (
  <div className="mt-[110px] flex h-[526px] w-full max-w-[689px] justify-between lg:max-h-[700px] lg:max-w-[900px] xl:h-[648px] xl:max-w-[1112px]">
    <Image
      className="max-h-[281px] max-w-[281px] lg:max-h-[350px] lg:max-w-[350px] xl:max-h-[477px] xl:max-w-[477px]"
      width={477}
      height={477}
      src={imageFounder}
      alt="image of founder"
    />
    <div className="ml-[-100px] mt-[173px] flex max-h-[375px] max-w-[514px] flex-col justify-between bg-darkPurple px-[60px] py-[40px] lg:max-h-[413px] lg:max-w-[730px] xl:p-[64px]">
      <section className="flex h-full w-full flex-col justify-between">
        <h2 className="HeadingM2 text-white">Be the first to test</h2>
        <p className="Body text-white">
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for
          our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
        </p>
        <button className="primaryDefault h-[55px] w-[172px] text-[18px] font-[600] transition xl:h-[61px] xl:w-[190px]">
          Apply for access
        </button>
      </section>
      <div className="hidden h-0 justify-end md:flex">
        <Image
          className="mr-[-50px] mt-[-70px] h-fit w-fit md:mr-[-70px] lg:mr-[10px] lg:mt-[-87px] xl:mr-[20px]"
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

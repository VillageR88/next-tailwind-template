import Image from 'next/image';
import imageHeroDesktop from '@/public/assets/images/image-hero-portrait@2x.webp';
import patternLine1 from '@/public/assets/images/pattern-curved-line-1.svg';

const items = [
  { number: '2K+', text: 'COMPANIES' },
  { number: '8', text: 'LANGUAGES' },
  { number: '1.2M', text: 'LEADS' },
];

const MainPart1 = () => (
  <div className="mt-[67px] flex size-full h-full max-w-[343px] flex-col items-center px-2 transition-all duration-500 sm:px-0 md:h-[990px] md:max-h-[482px] md:max-w-[689px] xl:h-[600px] xl:max-w-[1110px] xl:flex-row xl:items-stretch">
    <div className="flex size-full flex-col justify-between md:flex-row">
      <div className="hidden size-0 min-[340px]:block">
        <div className="absolute ml-[154px] mt-[42px] size-fit md:ml-[223px] xl:ml-[289px] xl:mt-[45px]">
          <Image
            className="h-[19px] w-[151px] md:h-[29px] md:w-[231px] xl:h-[36px] xl:w-[287px]"
            width={287}
            height={36}
            src={patternLine1 as string}
            alt="pattern"
          />
        </div>
      </div>
      <div className="z-10 mt-[88px] flex w-full max-w-[573px] flex-col gap-[52px] sm:h-[354px] xl:mt-[103px] xl:h-[405px] xl:max-w-[635px]">
        <section className="flex flex-col gap-[40px]">
          <h1 className="HeadingXL text-darkBlue">
            A <strong className="whitespace-pre-wrap">{'super solution\n'}</strong> for your <strong>business.</strong>
          </h1>{' '}
          <p className="Body w-full max-w-[350px] text-grey sm:h-[96px]">
            Our marketing and sales automations help you scale your outreach to get more leads for your company.
          </p>
        </section>
        <button className="relative flex min-h-[61px] w-full max-w-[256px] items-center justify-center rounded-[6px] bg-darkBlue bg-gradient-to-br text-[18px] font-bold leading-[32px] tracking-[-0.18px] text-creamWhite transition *:opacity-0 hover:opacity-100 *:hover:opacity-100 ">
          <div className="absolute flex size-full items-center justify-center rounded-[6px] bg-gradient-to-br from-linear1 via-linear2 to-linear3 transition">
            Request Beta Access
          </div>
          Request Beta Access
        </button>
      </div>
      <div className="mt-[38px] size-full h-[240px] w-[343px] self-center bg-[url('/assets/images/image-hero-landscape@2x.webp')] bg-cover md:ml-[-165px] md:mt-0 md:h-[482px] md:w-[281px] md:bg-[url('/assets/images/image-hero-portrait@2x.webp')] xl:ml-[-161px] xl:h-[600px] xl:w-[350px]"></div>
    </div>
    <div className="mt-[16px] flex h-[375px] w-full max-w-[190px] flex-col justify-center gap-[32px] md:mt-[106px] md:flex-row md:gap-[63px] xl:ml-[96px] xl:flex-col">
      {items.map((item) => (
        <section key={item.text} className="flex flex-col items-center gap-[1px] xl:items-stretch">
          <h2 className="text-[48px] font-bold leading-[56px] text-darkBlue">{item.number}</h2>
          <p className="HeadingS text-grey">{item.text}</p>
        </section>
      ))}
    </div>
  </div>
);

export default MainPart1;

import Image from 'next/image';
import imageHeroDesktop from '@/public/assets/images/image-hero-portrait@2x.webp';
import patternLine1 from '@/public/assets/images/pattern-curved-line-1.svg';

const items = [
  { number: '2K+', text: 'COMPANIES' },
  { number: '8', text: 'LANGUAGES' },
  { number: '1.2M', text: 'LEADS' },
];

const MainPart1 = () => (
  <div className="mt-[67px] flex size-full max-h-[482px] flex-col items-center xl:max-h-[600px] xl:max-w-[1110px] xl:flex-row xl:items-stretch">
    <div className="flex justify-between">
      <div className="size-0">
        <div className="absolute ml-[223px] mt-[42px] size-fit xl:ml-[289px] xl:mt-[45px]">
          <Image
            className="h-[29px] w-[231px] xl:h-[36px] xl:w-[287px]"
            width={287}
            height={36}
            src={patternLine1 as string}
            alt="pattern"
          />
        </div>
      </div>
      <div className="z-10 mt-[88px] flex h-[354px] w-full max-w-[573px] flex-col gap-[52px] xl:mt-[103px] xl:h-[405px] xl:max-w-[635px]">
        <section className="flex flex-col gap-[40px]">
          <h1 className="HeadingXL text-darkBlue">
            A <strong className="whitespace-pre-wrap">{'super solution\n'}</strong> for your <strong>business.</strong>
          </h1>{' '}
          <p className="Body h-[96px] w-full max-w-[350px] text-grey">
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
      <Image
        className="ml-[-78px] size-full max-h-[482px] max-w-[281px] xl:ml-[-161px] xl:max-h-[600px] xl:max-w-[350px]"
        src={imageHeroDesktop}
        alt="hero element"
      />
    </div>
    <div className="mt-[106px] flex h-[375px] w-full max-w-[190px] flex-row justify-center gap-[63px] xl:ml-[96px] xl:flex-col">
      {items.map((item) => (
        <section key={item.text} className="flex flex-col gap-[1px]">
          <h2 className="text-[48px] font-bold leading-[56px] text-darkBlue">{item.number}</h2>
          <p className="HeadingS text-grey">{item.text}</p>
        </section>
      ))}
    </div>
  </div>
);

export default MainPart1;

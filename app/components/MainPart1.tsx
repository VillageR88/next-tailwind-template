import Image from 'next/image';
import imageHeroDesktop from '@/public/assets/images/image-hero-portrait.webp';
import patternLine1 from '@/public/assets/images/pattern-curved-line-1.svg';

const itemsRightSide = [
  { number: '2K+', text: 'COMPANIES' },
  { number: '8', text: 'LANGUAGES' },
  { number: '1.2M', text: 'LEADS' },
];

const MainPart1 = () => (
  <div className="mt-[67px] flex size-full max-h-[600px] max-w-[1110px]">
    <div className="size-0">
      <div className="absolute ml-[289px] mt-[45px] size-fit">
        <Image width={287} height={36} src={patternLine1 as string} alt="pattern" />
      </div>
    </div>
    <div className="z-10 mt-[103px] flex h-[405px] w-full max-w-[635px] flex-col gap-[52px]">
      <section className="flex flex-col gap-[40px]">
        <h1 className="text-[72px] leading-[78px] text-darkBlue">
          A <strong className="tracking-[-1px]">super solution</strong> for your{' '}
          <strong className="tracking-[-1px]">business.</strong>
        </h1>{' '}
        <p className="Body h-[96px] w-full max-w-[350px] text-grey">
          Our marketing and sales automations help you scale your outreach to get more leads for your company.
        </p>
      </section>
      <button className="relative flex h-[61px] w-full max-w-[256px] items-center justify-center rounded-[6px] bg-darkBlue bg-gradient-to-br text-[18px] font-bold leading-[32px] tracking-[-0.18px] text-creamWhite transition *:opacity-0 hover:opacity-100 *:hover:opacity-100 ">
        <div className="absolute flex size-full items-center justify-center rounded-[6px] bg-gradient-to-br from-linear1 via-linear2 to-linear3 transition">
          Request Beta Access
        </div>
        Request Beta Access
      </button>
    </div>
    <Image className="ml-[-161px] size-full max-h-[600px] max-w-[350px]" src={imageHeroDesktop} alt="hero element" />
    <div className="ml-[96px] mt-[106px] flex h-[375px] w-full max-w-[190px] flex-col gap-[63px]">
      {itemsRightSide.map((item) => (
        <section key={item.text} className="flex flex-col gap-[1px]">
          <h2 className="text-[48px] font-bold leading-[56px] text-darkBlue">{item.number}</h2>
          <p className="HeadingS text-grey">{item.text}</p>
        </section>
      ))}
    </div>
  </div>
);

export default MainPart1;

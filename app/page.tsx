import Image from 'next/image';
import logoLight from '../public/assets/images/logo-light.svg';
import bgPattern1 from '../public/assets/images/bg-pattern-1.svg';
import bgPattern2 from '../public/assets/images/bg-pattern-2.svg';
import bgPattern3 from '../public/assets/images/bg-pattern-3.svg';
import imageHero from '../public/assets/images/image-hero.webp';
import itemsList from './lib/itemsList';

export default function Home() {
  return (
    <div className="flex min-h-[2494px] flex-col items-center justify-start bg-[#FCF8FF]">
      <nav className="flex h-[730px] w-full flex-col items-center justify-start bg-[url('../public/assets/images/background1.svg')] bg-center">
        <div className="flex h-0 w-full items-start justify-between">
          <Image
            className="ml-[-139px] mt-[116px]"
            width={341}
            height={317}
            src={bgPattern1 as string}
            alt="background pattern"
          />
          <Image className="mt-[454px]" width={767} height={441} src={imageHero} alt="background pattern" />
          <Image
            className="mr-[-48px] mt-[314px]"
            width={174}
            height={181}
            src={bgPattern2 as string}
            alt="background pattern"
          />
        </div>
        <div className="flex w-full justify-between">
          <Image className="ml-[165px] mt-[58px]" width={97} height={26} src={logoLight as string} alt="logo" />
          <button className="mr-[165px] mt-[56px] font-[manrope] text-[18px] font-[500] text-white underline decoration-eucalyptus decoration-[3px] underline-offset-[9px] transition hover:text-eucalyptus">
            Apply for access
          </button>
        </div>
        <div className="mt-[62px] flex h-[258px] w-[635px] flex-col items-center justify-between text-center">
          <h1 className="headingL">
            Data{' '}
            <span className="underline decoration-eucalyptus decoration-[3px] underline-offset-[10px]">tailored</span>{' '}
            to your needs.
          </h1>
          <button className="primaryDefault h-[61px] w-[161px] font-[Manrope] text-[18px] font-[900] transition">
            Learn more
          </button>
        </div>
      </nav>
      <main className="flex h-full w-full flex-col items-center text-black">
        <ul className="mt-[255px] flex h-[308px] w-[1114px] justify-between gap-[26px]">
          {itemsList.map((item, index) => {
            return (
              <li key={index} className="flex w-fit flex-col items-center justify-between">
                <div className="border-davysGrey flex h-[56px] w-[56px] items-center justify-center rounded-full border font-[Fraunces144] text-[24px] font-[500] text-darkPurple">
                  {index + 1}
                </div>
                <h2 className="font-[Fraunces144] text-[32px] font-[500] text-darkPurple">{item.title}</h2>
                <p className="Body w-[354px] text-center text-[18px] text-darkPurple">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

import Image from 'next/image';
import logoLight from '../public/assets/images/logo-light.svg';
import bgPattern1 from '../public/assets/images/bg-pattern-1.svg';
import bgPattern2 from '../public/assets/images/bg-pattern-2.svg';
import bgPattern3 from '../public/assets/images/bg-pattern-3.svg';
import imageHero from '../public/assets/images/image-hero.webp';
import imageFounder from '../public/assets/images/image-founder.webp';
import itemsList from './lib/itemsList';

export default function Home() {
  return (
    <div className="flex min-h-[2494px] flex-col items-center justify-start bg-white">
      <nav className="z-10 flex h-[730px] w-full flex-col items-center justify-start bg-[url('../public/assets/images/background1.svg')] bg-center">
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
          <h1 className="HeadingL">
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
        <div className="mt-[-225px] flex h-[960px] w-full max-w-[1440px] justify-center bg-[url('../public/assets/images/background2.svg')] bg-center">
          <ul className="mt-[481px] flex h-[308px] w-full max-w-[1114px] justify-between gap-[26px]">
            {itemsList.map((item, index) => {
              return (
                <li key={index} className="flex w-fit flex-col items-center justify-between">
                  <div className="border-davysGrey flex h-[56px] w-[56px] items-center justify-center rounded-full border font-[Fraunces144] text-[24px] font-[500] text-darkPurple">
                    {index + 1}
                  </div>
                  <h2 className="font-[Fraunces144] text-[32px] font-[500] text-darkPurple">{item.title}</h2>
                  <p className="Body w-full max-w-[354px] text-center text-[18px] text-darkPurple">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-[110px] flex h-[648px] w-full max-w-[1112px] justify-between">
          <Image
            className="max-h-[477px] max-w-[477px]"
            width={477}
            height={477}
            src={imageFounder}
            alt="image of founder"
          />
          <div className="ml-[-100px] mt-[173px] flex h-[413px] w-[730px] flex-col justify-between bg-darkPurple p-[64px]">
            <section className="flex h-full w-full flex-col justify-between">
              <h2 className="HeadingM text-white">Be the first to test</h2>
              <p className="Body text-white">
                Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester
                for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a
                call.
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
      </main>
    </div>
  );
}

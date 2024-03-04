import Image from 'next/image';
import logoLight from '/public/assets/images/logo-light.svg';
import imageHero from '/public/assets/images/image-hero.webp';
import bgPattern1 from '/public/assets/images/bg-pattern-1.svg';
import bgPattern2 from '/public/assets/images/bg-pattern-2.svg';

const Nav = () => (
  <nav className="z-10 flex h-[730px] w-full flex-col items-center justify-start bg-[url('../public/assets/images/background1.svg')] bg-center">
    <div className="flex h-0 w-full items-start justify-between">
      <Image
        className="ml-[-139px] mt-[116px]"
        width={341}
        height={317}
        src={bgPattern1 as string}
        alt="background pattern"
      />
      <Image
        className="mr-[-48px] mt-[314px]"
        width={174}
        height={181}
        src={bgPattern2 as string}
        alt="background pattern"
      />
    </div>
    <div className="flex h-0 w-full items-start justify-center">
      <Image className="mt-[454px]" width={767} height={441} src={imageHero} alt="background pattern" />
    </div>
    <div className="flex w-full justify-between">
      <Image className="ml-[165px] mt-[58px]" width={97} height={26} src={logoLight as string} alt="logo" />
      <button className="mr-[165px] mt-[56px] font-[manrope] text-[18px] font-[500] text-white underline decoration-eucalyptus decoration-[3px] underline-offset-[9px] transition hover:text-eucalyptus">
        Apply for access
      </button>
    </div>
    <div className="mt-[62px] flex h-[258px] w-[635px] flex-col items-center justify-between text-center">
      <h1 className="HeadingL">
        Data <span className="underline decoration-eucalyptus decoration-[3px] underline-offset-[10px]">tailored</span>{' '}
        to your needs.
      </h1>
      <button className="primaryDefault h-[61px] w-[161px] font-[Manrope] text-[18px] font-[900] transition">
        Learn more
      </button>
    </div>
  </nav>
);

export default Nav;

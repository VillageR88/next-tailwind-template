import Image from 'next/image';
import logoLight from '/public/assets/images/logo-light.svg';
import imageHero from '/public/assets/images/image-hero.webp';
import bgPattern1 from '/public/assets/images/bg-pattern-1.svg';
import bgPattern2 from '/public/assets/images/bg-pattern-2.svg';

const Nav = () => (
  <nav className="z-10 flex h-[482px] w-full flex-col items-center justify-start bg-[url('../public/assets/images/background1Small.svg')] bg-cover bg-bottom md:h-[540px] md:bg-[url('../public/assets/images/background1Medium.svg')] lg:h-[730px] lg:bg-[url('../public/assets/images/background1.svg')]">
    <div className="hidden h-0 w-full items-start justify-between md:flex">
      <Image
        className="ml-[-229px] mt-[116px] lg:ml-[-139px]"
        width={341}
        height={317}
        src={bgPattern1 as string}
        alt="background pattern"
      />
      <Image
        className="mr-[-95px] mt-[314px] lg:mr-[-48px]"
        width={174}
        height={181}
        src={bgPattern2 as string}
        alt="background pattern"
      />
    </div>
    <div className="flex h-0 w-full items-start justify-center">
      <Image
        className="mt-[389px] h-[184px] max-h-fit w-[320px] max-w-fit md:mt-[392px] md:h-[296px] md:w-[514px] md:pl-0 md:pr-0 lg:mt-[454px] lg:h-[441px] lg:w-[767px]"
        width={767}
        height={441}
        src={imageHero}
        alt="hero image"
      />
    </div>
    <div className="mt-[32px] flex w-full justify-between pl-[16px] pr-[16px] md:pl-[39px] md:pr-[40px] lg:mt-0 lg:pl-0 lg:pr-0">
      <Image className="lg:ml-[165px] lg:mt-[58px]" width={97} height={26} src={logoLight as string} alt="logo" />
      <button className="font-[manrope] text-[18px] font-[500] text-white underline decoration-eucalyptus decoration-[3px] underline-offset-[9px] transition hover:text-eucalyptus lg:mr-[165px] lg:mt-[56px]">
        Apply for access
      </button>
    </div>
    <div className="mt-[62px] flex h-[195px] w-[635px] flex-col items-center justify-between text-center md:h-[215px] lg:h-[258px]">
      <h1 className="HeadingL whitespace-pre">
        Data <span className="underline decoration-eucalyptus decoration-[3px] underline-offset-[10px]">tailored</span>{' '}
        {'to\nyour needs.'}
      </h1>
      <button className="primaryDefault h-[61px] w-[161px] font-[Manrope] text-[18px] font-[900] transition">
        Learn more
      </button>
    </div>
  </nav>
);

export default Nav;

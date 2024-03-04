import Image from 'next/image';
import logoLight from '../public/assets/images/logo-light.svg';

export default function Home() {
  return (
    <div className="flex min-h-[2494px] flex-col items-center justify-start bg-[#FCF8FF]">
      <div className="flex h-[730px] w-full flex-col items-center justify-start bg-[url('../public/assets/images/background1.svg')]">
        <nav className="flex w-full justify-between">
          <Image className="ml-[165px] mt-[58px]" width={97} height={26} src={logoLight as string} alt="logo" />
          <button className="decoration-eucalyptus hover:text-eucalyptus mr-[165px] mt-[56px] font-[manrope] text-[18px] font-[500] text-white underline decoration-[3px] underline-offset-[9px] transition">
            Apply for access
          </button>
        </nav>
        <div className="mt-[62px] flex h-[258px] w-[635px] flex-col items-center justify-between text-center">
          <h1 className="headingL">
            Data{' '}
            <span className="decoration-eucalyptus underline decoration-[3px] underline-offset-[10px]">tailored</span>{' '}
            to your needs.
          </h1>
          <button className="primaryDefault font-manrope h-[61px] w-[161px] text-[18px] font-[900] transition">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

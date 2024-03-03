import Image from 'next/image';
import logoLight from '../public/assets/images/logo-light.svg';

export default function Home() {
  return (
    <main className="flex min-h-[2494px] flex-col items-center justify-start bg-[#FCF8FF]">
      <div className="flex h-[730px] w-full items-start justify-center bg-[url('../public/assets/images/background1.svg')]">
        <div className="flex w-full justify-between">
          <Image className="ml-[165px] mt-[58px]" width={97} height={26} src={logoLight as string} alt="logo" />
          <button className="decoration-eucalyptus mr-[165px] mt-[56px] font-[manrope] text-[18px] font-[500] text-white underline decoration-[3px] underline-offset-[9px]">
            Apply for access
          </button>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import logo from './images/logo.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="font-kumbhSans h-[56.25em] px-[10.3em] py-[2.7em] w-full bg-white">
        <div className="">
          <Image src={logo as string} alt="logo" />
        </div>
      </div>
    </main>
  );
}

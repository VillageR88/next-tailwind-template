import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex h-full w-full flex-col pb-[1.7em] pt-[1.72em] md:flex-row">
        <Image
          className="flex h-2/6 w-full md:h-full md:w-[40em]"
          src="./images/bg-main-desktop.png"
          alt="colorful background"
          width={10}
          height={10}
        />
        <div className="fixed flex h-full w-[30em] flex-col justify-center gap-10 self-center pb-[1.7em] pt-[1.72em]">
          <div className="ml-[10.3em] h-[15em] w-[28em] bg-red-400"></div>
          <div className="ml-[10.3em] h-[15em] w-[28em] bg-red-400"></div>
        </div>
        <div className="flex h-4/6 w-full bg-[#FFFFFF] md:h-full"></div>
      </div>
    </main>
  );
}

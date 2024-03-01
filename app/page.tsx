import Image from 'next/image';
import hero from '../public/assets/images/avatar-jessica.jpeg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex h-[60em] w-full items-center justify-center bg-[#141414]">
        <div className="mb-[0.1em] flex h-[38.15em] w-[24em] flex-col items-center justify-start rounded-[12px] bg-[#1F1F1F] pt-[40px]">
          <Image className="h-[88px] w-[88px] rounded-full" height={176} width={176} src={hero} priority alt="avatar" />
        </div>
      </div>
    </main>
  );
}

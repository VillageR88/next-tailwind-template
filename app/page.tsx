import Image from 'next/image';
import hero from '../public/assets/images/avatar-jessica.jpeg';
export default function Home() {
  const socials = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center sm:min-h-screen ">
      <div className="flex min-h-[100dvh] w-full items-center justify-center bg-[#141414] px-4 py-10 sm:h-[60em] sm:px-0">
        <div className="mb-[0.1em] flex w-full max-w-[22em] flex-col items-center justify-start gap-[24px] rounded-[12px] bg-[#1F1F1F] px-[24px] pb-[24px] pt-[24px] sm:min-h-[610px] sm:w-[24em] sm:max-w-full sm:px-[40px] sm:pt-[40px]">
          <section className="flex min-h-[218px] flex-col items-center text-center">
            <Image
              className="h-[88px] w-[88px] select-none rounded-full"
              height={176}
              width={176}
              src={hero}
              priority
              alt="avatar"
            />
            <h1 className="mt-[24px] text-[24px] font-[500] text-white">Jessica Randall</h1>
            <p className="mt-[6px] scale-y-[90%] text-[14px] font-[600] text-[hsl(75,94%,57%)]">
              London, United Kingdom
            </p>
            <p className="mt-[23px] text-[14px] text-[#D7D7D7]">&quot;Front-end developer and avid reader.&quot;</p>
          </section>
          <ul className="flex h-full w-full flex-col items-center justify-start gap-[16px]">
            {socials.map((item, index) => (
              <li className="h-full w-full" key={index}>
                <button className="flex h-[45px] w-full select-none items-center justify-center rounded-[8px] bg-[#333333] text-white transition hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,8%)]">
                  <span className="text-[14px] font-[600]">{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

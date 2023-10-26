import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* wrapper */}
      <div className="flex flex-col-reverse rounded-3xl bg-white pb-12 tracking-tight text-dark-slate-grey md:flex-row md:pb-5 md:pr-5 md:pt-5">
        {/* column1 */}
        <div className="flex w-full flex-col pl-10 pr-14 md:w-[30em]">
          <span className="pt-16 text-[2.5rem] font-bold tracking-tighter md:text-[3.5rem]">Stay updated!</span>
          <span className="w-[20em] pt-4 font-medium md:w-full">
            Join 60,000+ product managers receiving monthly updates on:
          </span>
          <div className="flex gap-4 pt-4 font-medium">
            <Image className="" src={iconList as string} alt="icon of list" />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="flex gap-4 pt-2 font-medium">
            <Image className="" src={iconList as string} alt="icon of list" />
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="flex gap-4 pt-2 font-medium">
            <Image className="" src={iconList as string} alt="icon of list" />
            <span>And much more!</span>
          </div>
          <span className="pb-2 pt-10 font-semibold tracking-tighter md:text-xs">Email address</span>
          <div className="flex flex-col gap-6">
            <input
              className="solid rounded-lg border px-6 py-4"
              type="text"
              name="emailAddress"
              id="emailAddress"
              placeholder="email@company.com"
            />
            <button className="solid rounded-lg border bg-[#232742] px-6 py-4 text-white">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        {/* column2 */}
        <Image className="hidden md:flex" src={illustrationDesktop as string} alt="illustration" />
        <Image className="flex w-screen self-center md:hidden" src={illustrationMobile as string} alt="illustration" />
      </div>
    </main>
  );
}

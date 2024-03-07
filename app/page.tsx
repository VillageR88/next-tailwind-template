'use client';
import Image from 'next/image';
import logo from '../public/assets/images/desktop/logo.svg';
import bgPatternDots from '../public/assets/images/desktop/bg-pattern-dots.svg';
import socialIcons from './lib/socialIcons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-chivo">
      <div className="flex min-h-[900px] w-full items-center justify-end bg-[#121725]">
        <div className="h-[640px] w-[1275px]  bg-[url('../public/assets/images/desktop/image-host.jpg')] bg-[length:888px_100%] bg-right bg-no-repeat">
          <div className="flex h-[640px] flex-col items-start justify-between">
            <Image className="mt-[-28px]" src={logo as string} width={135} height={56} alt="pod logo" />
            <div className="size-0">
              <div className="mt-[-509px] flex h-[509px] w-[732px] items-end bg-[#121725]">
                <div className="h-[421px] w-[665px]">
                  <h1 className="flex h-[124px] w-[665px] flex-col justify-between">
                    <span className="text-[52px] font-[100] leading-[62px] text-[#54E6AF]">
                      {'Publish your podcasts'.toUpperCase()}
                    </span>
                    <span className="text-[52px] font-[100] leading-[62px] text-[#FFFFFF]">
                      {'Everywhere.'.toUpperCase()}
                    </span>
                  </h1>
                  <p className="mt-[24px] h-[84px] w-[445px] text-[18px] font-[100] leading-[28px] text-[#C2CBE5]">
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple
                    Podcasts, Google Podcasts, Pocket Casts and more!
                  </p>
                  <div className="flex flex-col">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                      action="submit"
                      id="emailForm"
                      className="mt-[40px] flex h-[56px] w-[427px] items-center justify-between rounded-[28px] bg-[#2C344B] pr-[5px]"
                    >
                      <input
                        placeholder="Email address"
                        className="size-full rounded-l-[28px] bg-transparent pl-[32px] pr-[12px] text-[14px] font-[700] leading-[28px] text-white outline-none placeholder:text-gray-400"
                        type="email"
                      />
                      <div className="flex flex-col">
                        <button
                          aria-label="Request Access"
                          className="h-[46px] min-w-[162px] rounded-[28px] bg-[#54E6AF] text-[14px] font-[700] leading-[28px] text-[#121725] transition duration-150 hover:bg-[#B3FFE2]"
                        >
                          Request Access
                        </button>
                      </div>
                    </form>
                    <div className="ml-[32px] mt-[8px] h-0">
                      <span className={`hidden text-[#FB3E3E]`}>Oops! Please check your email</span>
                    </div>
                    <ul className="mt-[64px] flex h-[29px] w-[536px] items-center">
                      {socialIcons.map((icon, index) => (
                        <li
                          key={index}
                          className={`${index === 0 ? 'mr-[40px]' : index === 1 ? 'mr-[41px]' : index === 2 && 'mr-[27px]'} inline-block`}
                        >
                          <Image src={icon.src} alt={icon.alt} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[-52px] flex h-[104px] w-full justify-end">
            <Image width={232} height={104} src={bgPatternDots as string} alt="background pattern" />
          </div>
        </div>
      </div>
    </main>
  );
}

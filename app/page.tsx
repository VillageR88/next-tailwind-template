'use client';
import Image from 'next/image';
import logo from '../public/assets/images/desktop/logo.svg';
import bgPatternDots from '../public/assets/images/desktop/bg-pattern-dots.svg';
import socialIcons from './lib/socialIcons';
import validateEmail from './lib/validateEmail';
import EmailStatus from './lib/enumEmailStatus';
import emailStatus from './lib/emailStatus';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [emailState, setEmailState] = useState<EmailStatus>(EmailStatus.typing);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center font-chivo md:min-h-screen">
      <div className="flex w-full items-center justify-end bg-[#121725] px-[24px] md:min-h-[900px] md:pl-[39px] md:pr-0">
        <div className="w-full bg-right bg-no-repeat md:h-[767px] md:w-[1275px] md:bg-[url('../public/assets/images/tablet/image-host.jpg')] md:bg-[length:491px_100%] xl:h-[640px] xl:bg-[url('../public/assets/images/desktop/image-host.jpg')] xl:bg-[length:888px_100%]">
          <div className="flex flex-col items-center justify-between md:h-[767px] md:items-start xl:h-[640px]">
            <Image className="md:mt-[-28px]" src={logo as string} width={135} height={56} alt="pod logo" />
            <div className="w-full text-center md:size-0 md:text-left">
              <div className="flex w-full max-w-[635px] items-end bg-[#121725] md:mt-[-508px] md:h-[509px] xl:w-[732px]">
                <div className="w-full max-w-[665px] md:h-[421px]">
                  <h1 className="flex w-full max-w-[665px] flex-col justify-between text-[48px] font-[100] leading-[56px] sm:w-[665px] md:h-[112px] xl:h-[124px] xl:text-[52px] xl:leading-[62px]">
                    <span className="text-[#54E6AF]">{'Publish your podcasts'.toUpperCase()}</span>
                    <span className="text-[#FFFFFF]">{'Everywhere.'.toUpperCase()}</span>
                  </h1>
                  <p className="mt-[31px] w-full text-[18px] font-[100] leading-[28px] text-[#C2CBE5] sm:w-[445px] md:h-[84px] md:max-w-[445px] xl:mt-[24px]">
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple
                    Podcasts, Google Podcasts, Pocket Casts and more!
                  </p>
                  <div className="flex flex-col">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (validateEmail(email)) {
                          setEmailState(EmailStatus.valid);
                        } else {
                          setEmailState(EmailStatus.invalid);
                        }
                      }}
                      action="submit"
                      id="emailForm"
                      className="mt-[40px] flex h-[56px] items-center justify-between rounded-[28px] bg-[#2C344B] pr-[5px] md:w-[427px]"
                    >
                      <input
                        value={email}
                        onKeyDown={() => {
                          setEmailState(EmailStatus.typing);
                        }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailState(EmailStatus.typing);
                        }}
                        placeholder="Email address"
                        className={`${emailStatus[emailState].color} size-full rounded-l-[28px] bg-transparent pl-[32px] pr-[12px] text-[14px] font-[700] leading-[28px] text-white outline-none placeholder:text-gray-400`}
                        type="text"
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
                    <div className="ml-[32px] mt-[8px] h-0 text-[12px]">
                      <span className={emailStatus[emailState].color}>{emailStatus[emailState].text}</span>
                    </div>
                    <ul className="mt-[64px] flex h-[29px] items-center md:w-[536px]">
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
          <div className="mt-[153px] hidden h-[104px] w-full md:flex xl:mt-[-52px] xl:justify-end">
            <Image width={232} height={104} src={bgPatternDots as string} alt="background pattern" />
          </div>
        </div>
      </div>
    </main>
  );
}

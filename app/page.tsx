'use client';
import Image from 'next/image';
import logo from '../public/assets/images/desktop/logo.svg';
import bgPatternDots from '../public/assets/images/desktop/bg-pattern-dots.svg';
import socialIcons from './lib/socialIcons';
import validateEmail from './lib/validateEmail';
import { useState } from 'react';

export default function Home() {
  enum EmailStatus {
    valid,
    invalid,
    typing,
  }
  const emailStatus = {
    [EmailStatus.valid]: { text: 'Thank you!', color: 'text-[#54E6AF]' },
    [EmailStatus.invalid]: { text: 'Oops! Please check your email', color: 'text-[#FB3E3E]' },
    [EmailStatus.typing]: { text: '', color: 'text-transparent' },
  };
  const [email, setEmail] = useState<string>('');
  const [emailState, setEmailState] = useState<EmailStatus>(EmailStatus.typing);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-chivo">
      <div className="flex min-h-[900px] w-full items-center justify-end bg-[#121725] pl-[39px]">
        <div className="h-[767px] w-[1275px] bg-[url('../public/assets/images/tablet/image-host.jpg')] bg-[length:491px_100%] bg-right  bg-no-repeat xl:h-[640px] xl:bg-[url('../public/assets/images/desktop/image-host.jpg')] xl:bg-[length:888px_100%]">
          <div className="flex h-[767px] flex-col items-start justify-between xl:h-[640px]">
            <Image className="mt-[-28px]" src={logo as string} width={135} height={56} alt="pod logo" />
            <div className="size-0">
              <div className="mt-[-508px] flex h-[509px] w-[635px] items-end bg-[#121725] xl:w-[732px]">
                <div className="h-[421px] w-[665px]">
                  <h1 className="flex h-[112px] w-[665px] flex-col justify-between text-[48px] font-[100] leading-[56px] xl:h-[124px] xl:text-[52px] xl:leading-[62px]">
                    <span className="text-[#54E6AF]">{'Publish your podcasts'.toUpperCase()}</span>
                    <span className="text-[#FFFFFF]">{'Everywhere.'.toUpperCase()}</span>
                  </h1>
                  <p className="mt-[31px] h-[84px] w-[445px] text-[18px] font-[100] leading-[28px] text-[#C2CBE5] xl:mt-[24px]">
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
                      className="mt-[40px] flex h-[56px] w-[427px] items-center justify-between rounded-[28px] bg-[#2C344B] pr-[5px]"
                    >
                      <input
                        value={email}
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
                    <div className="ml-[32px] mt-[8px] h-0">
                      <span className={emailStatus[emailState].color}>{emailStatus[emailState].text}</span>
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
          <div className="mt-[153px] flex h-[104px] w-full xl:mt-[-52px] xl:justify-end">
            <Image width={232} height={104} src={bgPatternDots as string} alt="background pattern" />
          </div>
        </div>
      </div>
    </main>
  );
}

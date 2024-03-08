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
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-[url('../public/assets/images/tablet/image-host.jpg')] bg-cover font-chivo md:min-h-screen md:bg-none">
      <div className="flex min-h-[100dvh] w-full items-center justify-end bg-[#121725]/90 px-[24px] py-6 md:h-fit md:items-stretch md:bg-transparent md:py-0 md:pl-[39px] md:pr-0  xl:min-h-[100dvh]  xl:items-center xl:py-2">
        <div className="w-full bg-right bg-no-repeat md:h-[767px] md:w-[1275px] md:bg-[url('../public/assets/images/tablet/image-host.jpg')] md:bg-[length:491px_100%] xl:h-[640px] xl:bg-[url('../public/assets/images/desktop/image-host.jpg')] xl:bg-[length:888px_100%]">
          <div className="flex flex-col items-center justify-between md:h-[767px] md:items-start xl:h-[640px]">
            <Image className="md:mt-[50px] xl:mt-[-28px]" src={logo as string} width={135} height={56} alt="pod logo" />
            <div className="w-full text-center md:size-0 md:text-left">
              <div className="flex w-full items-end md:mt-[-508px] md:h-[509px] md:max-w-[635px] md:bg-[#121725] xl:w-[732px]">
                <div className="flex w-full flex-col items-center md:block md:h-[421px] md:max-w-[665px]">
                  <h1 className="mt-[57px] flex w-full flex-col justify-between text-[26px] font-[100] leading-[38px] sm:w-[665px] md:mt-0 md:h-[112px] md:max-w-[665px] md:text-[48px] md:leading-[56px] xl:h-[124px] xl:text-[52px] xl:leading-[62px]">
                    <span className="text-[#54E6AF]">{'Publish your podcasts'.toUpperCase()}</span>
                    <span className="text-[#FFFFFF]">{'Everywhere.'.toUpperCase()}</span>
                  </h1>
                  <p className="mt-[16px] w-full text-[15px] font-[100] leading-[25px] text-[#C2CBE5] sm:w-[445px] md:mt-[31px] md:h-[84px] md:max-w-[445px] md:text-[18px] md:leading-[28px] xl:mt-[24px]">
                    Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple
                    Podcasts, Google Podcasts, Pocket Casts and more!
                  </p>
                  <div className="flex flex-col-reverse items-center md:flex-col md:items-stretch">
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
                      className="mt-[48px] flex w-full flex-col justify-between rounded-[28px] pr-[5px] md:mt-[40px] md:h-[56px] md:w-[427px] md:flex-row md:items-center md:bg-[#2C344B]"
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
                        className={`${emailStatus[emailState].color} size-full h-[46px] w-full rounded-[28px] bg-[#2C344B] pl-[32px] pr-[12px] text-[14px] font-[700] leading-[28px] text-white outline-none placeholder:text-gray-400 md:rounded-l-[28px] md:bg-transparent`}
                        type="text"
                      />
                      <div className="ml-[32px] block h-0 w-[200px] pb-[5px] pt-[2px] text-[12px] md:hidden">
                        <span className={emailStatus[emailState].color}>{emailStatus[emailState].text}</span>
                      </div>
                      <div className="flex flex-col">
                        <button
                          aria-label="Request Access"
                          className="mt-[16px] h-[46px] w-full rounded-[28px] bg-[#54E6AF] text-[14px] font-[700] leading-[28px] text-[#121725] transition duration-150 hover:bg-[#B3FFE2] md:mt-0 md:min-w-[162px]"
                        >
                          Request Access
                        </button>
                      </div>
                    </form>
                    <div className="ml-[32px] mt-[8px] hidden h-0 w-[200px] text-[12px] md:block">
                      <span className={emailStatus[emailState].color}>{emailStatus[emailState].text}</span>
                    </div>
                    <ul className="mt-[33px] flex h-[17px] w-full max-w-[315px] items-center justify-between md:mt-[100px] md:h-[29px] md:w-[536px] md:max-w-none md:min-[1100px]:mt-[64px]">
                      {socialIcons.map((icon, index) => (
                        <li
                          key={index}
                          className={`${index === 0 ? 'mr-[23px] md:mr-[40px]' : index === 1 ? 'mr-[25px] md:mr-[41px]' : index === 2 && 'mr-[16px] md:mr-[27px]'} md:inline-block`}
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
          <div className="mt-[153px] hidden min-h-[104px] w-full pb-[78px] md:flex xl:mt-[-52px] xl:justify-end">
            <Image width={232} height={104} src={bgPatternDots as string} alt="background pattern" />
          </div>
        </div>
      </div>
    </main>
  );
}

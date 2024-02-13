'use client';
import Image from 'next/image';
import { useState } from 'react';

const MainRow5 = () => {
  enum EmailStatus {
    Valid,
    Invalid,
    Typing,
  }
  const errorText = {
    [EmailStatus.Valid]: 'Thank you for subscribing!',
    [EmailStatus.Invalid]: "Whoops, make sure it's an email",
    [EmailStatus.Typing]: '',
  };
  const [emailStatus, setEmailStatus] = useState(EmailStatus.Typing);
  const [email, setEmail] = useState<string>('');
  const checkEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  return (
    <div className="flex min-h-[22.5em] flex-col items-center bg-[#5266DF] px-6 pb-12 ">
      <section className="mt-[4.3em] flex w-full flex-col items-center gap-[1.2em] text-center font-[500] md:w-[33em] md:gap-[2.15em]">
        <span className="text-[0.8rem] tracking-[0.4em] text-[white]">35,000+ ALREADY JOINED</span>
        <h2 className="pb-4 text-[1.98rem] font-[500] leading-[1.28em] text-[white] md:w-[15em] md:pb-0">
          Stay up-to-date with what we’re doing
        </h2>
        <form
          className="mt-[0.18em] flex w-full flex-col justify-center gap-[1em] md:flex-row md:gap-[1.12em]"
          action=""
        >
          <div
            className={` h-[4.35em] w-full rounded-[0.3em] md:w-[18.725em]  ${
              emailStatus === EmailStatus.Invalid &&
              'mt-[-2px] scale-[101.2%] border-[2px] border-[#FB5859] bg-[#FB5859]'
            } `}
          >
            <input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (checkEmail(email)) {
                    setEmailStatus(EmailStatus.Valid);
                  } else {
                    setEmailStatus(EmailStatus.Invalid);
                  }
                } else {
                  setEmailStatus(EmailStatus.Typing);
                }
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email address"
              className="h-[3.2em] w-full rounded-[0.2em] px-[1em] text-[0.9rem] font-[400] outline-none placeholder:text-[#e2e1e1]"
              autoComplete="email"
              type="email"
            />
            <div className="flex h-full w-full items-start justify-between">
              <span className="ml-2 mt-[4px] text-[0.6rem] font-[400] italic tracking-[0.04em] text-[white]">
                {errorText[emailStatus]}
              </span>
              <div className="mr-[1em] mt-[-2em]">
                <Image
                  className={`${emailStatus === EmailStatus.Invalid ? 'block' : 'hidden'} h-fit w-fit`}
                  src={'./images/icon-error.svg' as string}
                  alt="error icon"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (checkEmail(email)) {
                setEmailStatus(EmailStatus.Valid);
              } else {
                setEmailStatus(EmailStatus.Invalid);
              }
            }}
            aria-label="Contact Us"
            type="button"
            className={`mr-[-0.15em] h-[3.5em] rounded-[0.3em] border-2 border-[#FB5859] bg-[#FB5859] text-[0.82rem] font-[500] tracking-widest text-[white] transition hover:border-[#DC6465] hover:bg-[white] hover:text-[#DC6465] md:w-[9.4em]`}
          >
            Contact Us
          </button>
        </form>
      </section>
    </div>
  );
};

export default MainRow5;

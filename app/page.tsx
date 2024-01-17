'use client';
import { useEffect, useState } from 'react';

const IconFacebook = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill={`${isHovered ? 'hsl(345, 95%, 68%)' : '#8385A9'}`}
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
        />
      </svg>
    </button>
  );
};

const IconPinterest = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill={`${isHovered ? 'hsl(345, 95%, 68%)' : '#8385A9'}`}
          d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
        />
      </svg>
    </button>
  );
};

const IconInstagram = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill={`${isHovered ? 'hsl(345, 95%, 68%)' : '#8385A9'}`}
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    </button>
  );
};

export default function Home() {
  enum TimerType {
    minutes,
    seconds,
  }

  const initialValue1 = 100;
  const initialValue2 = 0;
  const initialValue3 = 0;
  const initialValue4 = -2.2;
  const [value1, setValue1] = useState<number>(initialValue1);
  const [value2, setValue2] = useState<number>(initialValue2);
  const [value3, setValue3] = useState<number>(initialValue3);
  const [value4, setValue4] = useState<number>(initialValue4);
  const [seconds, setSeconds] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(55);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 768 ? false : true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobile(false);
      else {
        setIsMobile(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const multiplier = isMobile ? 20 : 10;
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (value1 > 0) {
          setValue1((prev) => prev - 1 * multiplier);
          setValue2((prev) => prev + 0.022 * multiplier);
        }
        if (value1 == 0 && value3 < 100) {
          setValue3((prev) => prev + 1 * multiplier);
          setValue4((prev) => prev + 0.022 * multiplier);
        }
      },
      isMobile ? 16 : 18,
    );
    return () => {
      clearInterval(interval);
    };
  }, [isMobile, multiplier, value1, value3]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes >= 1) setMinutes((prev) => prev - 1);
        else {
          setMinutes(59);
        }
      }
      if (seconds >= 1) setSeconds((prev) => prev - 1);
      else {
        setSeconds(59);
      }
      setValue1(100);
      setValue2(0);
      setValue3(0);
      setValue4(-2.2);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const formattedTime = ({ next, value }: { next?: boolean; value: number }) => {
    if (!next) return value.toString().length == 1 ? '0' + value : value;
    else {
      if (value == 0) return '59';
      else return (value - 1).toString().length == 1 ? '0' + (value - 1) : value - 1;
    }
  };
  const TimeComponent = ({ value, timerType }: { value: number; timerType: TimerType }) => {
    let newValue1 = value1;
    let newValue2 = value2;
    let newValue3 = value3;
    let newValue4 = value4;

    if (timerType == TimerType.minutes) {
      if (seconds !== 0) {
        newValue1 = initialValue1;
        newValue2 = initialValue2;
        newValue3 = initialValue3;
        newValue4 = initialValue4;
      }
    }
    return (
      <div className="flex w-full flex-col">
        <div className="]  mt-[6.3em] h-[9.4em] w-[9.16em] overflow-hidden rounded-[5%] bg-[#1A1A24]">
          <div className="flex h-[93%] w-full flex-col justify-center overflow-hidden bg-inherit">
            <div
              style={{ scale: `100% ${newValue1}%`, translate: `0 ${newValue2}em` }}
              className="z-20 flex h-[50%] w-[100%] items-center justify-center overflow-clip rounded-[5%] bg-[#2C2C44]  "
            >
              <span className="z-10 mt-[1.05em] scale-x-[120%] scale-y-[95%] cursor-default pb-[0.1em] pl-[0.02em] text-[5.55rem] font-[600] tracking-tighter text-[#D45070]">
                {formattedTime({ value: value })}
              </span>
            </div>
            <div style={{ scale: `100% ${newValue1 - newValue3}%` }} className="z-30 flex h-0 w-full">
              <div className="ml-[-0.85em] mt-[-0.4em] h-[0.8em] w-[1.2em] rounded-full bg-[#1A1A24]"></div>
              <div className="h-[1px] w-full bg-[#222435] bg-opacity-10"></div>
              <div className="mr-[-0.85em] mt-[-0.4em] h-[0.8em] w-[1.2em] rounded-full bg-[#1A1A24]"></div>
            </div>
            <div className="flex h-[50%] w-full items-center justify-center overflow-clip rounded-[0.5em] bg-[#34364F] ">
              <span className="mb-[0.53em] flex  scale-x-[120%] scale-y-[95%] cursor-default pb-[0.1em] pl-[0.02em] text-[5.55rem] font-[600] tracking-tighter text-[#F95F83]">
                {formattedTime({ value: value })}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[-9.4em] h-[9.4em] w-[9.15em] overflow-hidden rounded-[5%] bg-transparent">
          <div className="flex h-[93%] w-full flex-col justify-center rounded-[5%]">
            <div className=" flex h-[50%] w-full items-center justify-center overflow-clip rounded-[5%] bg-[#2C2C44]  ">
              <span className="z-0 mt-[1.05em] scale-x-[120%] scale-y-[95%] cursor-default pb-[0.1em] pl-[0.02em] text-[5.55rem] font-[600] tracking-tighter text-[#D45070]">
                {formattedTime({ value: value, next: true })}
              </span>
            </div>
            <div className="z-10 flex h-0 w-full">
              <div className="ml-[-0.85em] mt-[-0.4em] h-[0.8em] w-[1.2em] rounded-full bg-[#1A1A24]"></div>
              <div className="h-[1px] w-full bg-[#2A2D43] bg-opacity-25"></div>
              <div className="mr-[-0.85em] mt-[-0.4em] h-[0.8em] w-[1.2em] rounded-full bg-[#1A1A24]"></div>
            </div>
            <div
              style={{ scale: `100% ${newValue3}%`, translate: `0 ${newValue4}em` }}
              className="z-10 flex h-[50%] w-[100%] items-center justify-center overflow-clip rounded-[0.5em] bg-[#34364F] "
            >
              <span className="mb-[0.53em] flex scale-x-[120%] scale-y-[95%] cursor-default pb-[0.1em] pl-[0.02em] text-[5.55rem] font-[600] tracking-tighter text-[#F95F83]">
                {formattedTime({ value: value, next: true })}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan">
      <div className="flex h-[50em] w-full flex-col bg-gradient-to-b from-[#1e1e28] via-[hsl(272,21%,14%)] via-70% to-[#241E2C]">
        <div className="absolute h-[0.2em] w-[70%] self-center bg-[#1E1E28]"></div>
        <div className="flex h-full w-full flex-col items-center justify-between bg-[url('./images/bg-stars.svg')] bg-[0%_1.5%] ">
          <div className="flex flex-col items-center">
            <span className="mt-[6em] text-[1.4rem] font-[700] tracking-[0.4em] text-white">
              WE&prime;RE LAUNCHING SOON
            </span>
            <div className="flex gap-[1em]">
              <TimeComponent value={minutes} timerType={TimerType.minutes} />
              <TimeComponent value={seconds} timerType={TimerType.seconds} />
            </div>
          </div>
          <div className="h-[14.2em] w-full bg-[#241E2C]">
            <div className="flex h-full w-full flex-col justify-center bg-[url('./images/pattern-hills.svg')] bg-bottom bg-no-repeat">
              <div className="mt-[3.8em] flex h-fit w-full justify-center gap-[2em]">
                <IconFacebook />
                <IconPinterest />
                <IconInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

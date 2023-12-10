'use client';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import { useState } from 'react';

const Block = ({
  title,
  amount,
  line1,
  line2,
  line3,
  alternate,
  annually,
}: {
  title: string;
  amount: string;
  line1: string;
  line2: string;
  line3: string;
  alternate?: boolean;
  annually: boolean;
}) => {
  const Breaker = () => (
    <div
      className={`${
        alternate ? 'bg-gray-300' : 'bg-gradient-to-r from-indigo-300 to-[#969CF4]'
      } mt-[0.95em] h-[1px] w-full`}
    ></div>
  );
  const Liner = ({ text }: { text: string }) => (
    <span className={`${alternate ? 'text-grayishBlue' : 'text-veryLightGrayishBlue'} mt-[0.95em] text-[0.93rem]`}>
      {text}
    </span>
  );

  return (
    <div
      className={`${
        alternate ? 'h-[28em] bg-white' : 'z-10 h-[31.2em] bg-gradient-to-br from-linearGradient1 to-linearGradient2'
      } mt-[4em] flex w-full justify-center rounded-[0.6em] shadow-2xl shadow-slate-300 lg:w-[18em] xl:w-[21.9em]`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center px-[1.5em] xl:px-[1.95em]">
        <span className={`${alternate ? 'text-grayishBlue' : 'text-veryLightGrayishBlue'} text-[1.13rem]`}>
          {title}
        </span>
        <div
          className={`${
            alternate ? 'text-darkGrayishBlue' : 'text-veryLightGrayishBlue'
          } mt-[0.4em] flex items-center gap-[0.5em]`}
        >
          <span className="text-[2.5rem]">$</span>
          <div className="lg:-text-[4rem] flex flex-row text-[3.5rem] tracking-[-0.025em] xl:text-[4.45rem]">
            <span>{amount}</span>
            <span
              className={`${!annually ? 'translate-y-[-300%] text-[5px] opacity-0' : 'translate-y-[0%]'} duration-500`}
            >
              9
            </span>
            <span>.99</span>
          </div>
        </div>
        <Breaker />
        <Liner text={line1} />
        <Breaker />
        <Liner text={line2} />
        <Breaker />
        <Liner text={line3} />
        <Breaker />
        <button
          className={`${
            alternate
              ? 'bg-gradient-to-r from-linearGradient1 to-linearGradient2 text-veryLightGrayishBlue hover:from-transparent hover:text-linearGradient2 hover:outline-grayishBlue'
              : 'bg-white text-linearGradient2 hover:bg-transparent hover:text-veryLightGrayishBlue'
          } mt-[2.6em] h-[3.4em] w-full rounded-[0.4em]  text-[0.8rem] tracking-[0.12em] hover:outline hover:outline-1`}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [annually, setAnnually] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-montserrat font-[700]">
      <div className="h-full w-full bg-veryLightGrayishBlue  pb-[5em] md:h-[53.125em]  md:pb-0">
        <div className="h-full w-full bg-[url('./images/bg-top.svg')] bg-[15em_0] bg-no-repeat px-[2em] md:bg-right-top md:px-0">
          <div className="flex h-full w-full flex-col items-center bg-left-bottom bg-no-repeat md:bg-[url('./images/bg-bottom.svg')] ">
            <span className="mt-[2.1em] text-[2rem] text-grayishBlue">Our Pricing</span>
            <div className="mt-[2.5em] flex flex-row items-center gap-[1.6em] text-[0.92rem] text-lightGrayishBlue">
              <span>Annually</span>
              <button
                onClick={() => {
                  setAnnually(!annually);
                }}
                className="z-20 flex h-[2.15em] w-[3.8em] items-center justify-end rounded-[2em] bg-gradient-to-r from-linearGradient1 to-linearGradient2 hover:opacity-50"
              >
                <div
                  className={`${
                    annually && '-translate-x-6'
                  } mr-1 h-[1.65em] w-[1.65em] rounded-full bg-white duration-300 ease-in-out`}
                ></div>
              </button>
              <span>Monthly</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center md:w-fit md:flex-row">
              <Block
                title="Basic"
                amount={`19`}
                line1="500 GB Storage"
                line2="2 Users Allowed"
                line3="Send up to 3 GB"
                alternate={true}
                annually={annually}
              />
              <Block
                title="Professional"
                amount={`24`}
                line1="1 TB Storage"
                line2="5 Users Allowed"
                line3="Send up to 10 GB"
                annually={annually}
              />
              <Block
                title="Master"
                amount={`39`}
                line1="2 TB Storage"
                line2="10 Users Allowed"
                line3="Send up to 20 GB"
                alternate={true}
                annually={annually}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

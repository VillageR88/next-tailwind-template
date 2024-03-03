'use client';
import Image from 'next/image';
import backgroundImageDesktop from '../public/assets/images/background-pattern-desktop.svg';
import backgroundImageMobile from '../public/assets/images/background-pattern-mobile.svg';
import iconStar from '../public/assets/images/icon-star.svg';
import articleItems from './lib/articleItems';
import iconPlus from '../public/assets/images/icon-plus.svg';
import iconMinus from '../public/assets/images/icon-minus.svg';
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState<boolean[]>([false, false, false, false]);
  return (
    <main className="font-workSans flex min-h-[100dvh] flex-col items-start justify-center sm:min-h-screen sm:items-center">
      <>
        <Image
          className="hidden h-fit min-h-[320px] w-full object-cover sm:block"
          width={1440}
          height={320}
          src={backgroundImageDesktop as string}
          alt="background image"
          priority
        />
        <Image
          className="block h-fit min-h-[322px] w-full object-cover object-top sm:hidden"
          width={1440}
          height={322}
          src={backgroundImageMobile as string}
          alt="background image"
          priority
        />
      </>
      <div className="flex min-h-[calc(100dvh-322px)] w-full items-start justify-center bg-[hsl(275,100%,97%)] px-[24px] pb-[40px] sm:min-h-[calc(100dvh-320px)]">
        <div className="mt-[-152px] min-h-fit w-[600px] rounded-[15px] bg-white px-[30px] py-[20px] pt-[32px] sm:px-[40px]">
          <section className="flex items-center gap-[24px]">
            <Image className="h-fit w-[41px]" width={40} height={41} src={iconStar as string} alt="star icon" />
            <h1>FAQs</h1>
          </section>
          <ul>
            {articleItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    articleItems.length !== index + 1 && 'border-b-2 border-[hsl(240,6%,97%)]'
                  } flex w-full flex-col py-[24px]`}
                >
                  <button
                    onClick={() => {
                      const newQuestion = [...question];
                      newQuestion[index] = !newQuestion[index];
                      setQuestion(newQuestion);
                    }}
                    className="relative z-10 flex items-center justify-between gap-[24px] text-left transition duration-150 hover:text-[#B526F8]"
                  >
                    <h2 className="font-bold">{item.question}</h2>
                    <Image
                      className="h-fit w-[30px]"
                      width={24}
                      height={24}
                      src={(question[index] ? iconMinus : iconPlus) as string}
                      alt={`${question[index] ? 'minus' : 'plus'} icon`}
                    />
                  </button>
                  <p className={`${!question[index] ? 'h-0 opacity-0' : 'mt-[16px] h-fit opacity-100'} transition-all`}>
                    {question[index] ? articleItems[index].answer : articleItems[index].answer.slice(0, 50)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

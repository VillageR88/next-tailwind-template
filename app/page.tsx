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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [question, setQuestion] = useState<boolean[]>([false, false, false, false]);
  return (
    <main className="font-workSans flex min-h-screen flex-col items-center justify-center">
      <Image
        className="min-h-[320px] w-full object-cover"
        width={1440}
        height={320}
        src={backgroundImageDesktop as string}
        alt="background image"
        priority
      />
      <div className="flex min-h-[calc(100vh-320px)] w-full items-start justify-center bg-[hsl(275,100%,97%)] pb-[24px]">
        <div className="mt-[-152px] min-h-fit w-[600px] rounded-[15px] bg-white px-[40px] py-[20px] pt-[32px]">
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
                    articleItems.length !== index + 1 && 'border-b-[1px] border-[hsl(240,6%,92%)]'
                  } flex w-full flex-col py-[24px]`}
                >
                  <button
                    onClick={() => {
                      const newQuestion = [...question];
                      newQuestion[index] = !newQuestion[index];
                      setQuestion(newQuestion);
                    }}
                    className="relative z-10 flex items-center justify-between text-left"
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

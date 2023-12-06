'use client';
import '@fontsource/inter';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import Image from 'next/image';
import tanya from './images/image-tanya.jpg';
import john from './images/image-john.jpg';
import arrowPrev from './images/icon-prev.svg';
import arrowNext from './images/icon-next.svg';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

enum Stage {
  stage1,
  stage2,
}
const testimony = {
  [Stage.stage1]: [
    '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    'Tanya Sinclair',
    'UX Engineer',
    tanya,
  ],
  [Stage.stage2]: [
    '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    'John Tarkpor',
    'Junior Front-end Developer',
    john,
  ],
};

const Testimony = ({
  data,
  buttonPrevious,
  buttonNext,
}: {
  data: keyof typeof testimony;
  buttonPrevious(): undefined;
  buttonNext(): undefined;
}) => {
  return (
    <div className="flex h-full w-full flex-col-reverse items-center justify-center md_lg:flex-row md_lg:justify-between md_lg:gap-8 md_lg:px-[10.3em] xl:gap-0">
      <div className="z-10 mb-[1em] flex h-fit w-full flex-col justify-center gap-[2.2em] bg-[url('./images/pattern-quotes.svg')] bg-[length:4em] bg-[50%_0%] bg-no-repeat pb-1 md:w-[34em] md_lg:h-fit md_lg:w-[30em] md_lg:bg-[length:7.5em] md_lg:bg-[18.4%_0%] md_lg:pt-[4em] xl:mr-[-17em] xl:w-[39.5em]">
        <span className="w-[18em] self-center text-center text-[1.1rem] font-[300] leading-[1.38em] text-darkBlue md_lg:w-fit md_lg:text-left md_lg:text-[1.2rem] md_lg_lg:text-[1.4rem] lg:text-[1.75rem] xl:text-[2rem]">
          {testimony[data][0] as string}
        </span>
        <div className="flex flex-col items-center text-[1rem] md_lg:flex-row md_lg:gap-[0.5em] md_lg:text-[1.25rem]">
          <span className="font-[700] text-darkBlue"> {testimony[data][1] as string}</span>
          <span className="font-[500] text-grayishBlue"> {testimony[data][2] as string}</span>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col bg-[url('./images/pattern-bg.svg')] bg-[length:20em] bg-center bg-no-repeat pb-[0.3em] pt-[3em] md_lg:h-fit md_lg:w-fit md_lg:bg-none md_lg:pt-0 xl:pl-[13.25em]">
        <Image
          className="w-[15em] self-center shadow-xl md_lg:w-[35em] xl:w-fit"
          src={testimony[data][3]}
          alt="Image of person"
          priority
        />
        <div className="mt-[-1.8em] w-fit self-center rounded-full shadow-xl md_lg:ml-[3.85em] md_lg:self-start">
          <button onClick={buttonPrevious} className="w-fit rounded-l-full bg-white py-[1.2em] pl-[1.34em] pr-[1.38em]">
            <Image className="h-fit" src={arrowPrev as string} alt="previous" />
          </button>
          <button onClick={buttonNext} className="h-fit w-fit rounded-r-full bg-white py-[1.2em] pl-[1.4em] pr-[1.3em]">
            <Image className="h-fit" src={arrowNext as string} alt="previous" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [stage, setStage] = useState<Stage>(Stage.stage1);
  const [direction, setDirection] = useState<string>('right');

  const goPrevious = () => {
    setDirection('right');
    setStage(stage !== Stage.stage1 ? stage - 1 : Stage.stage2);
  };
  const goNext = () => {
    setDirection('left');
    setStage(stage !== Stage.stage2 ? stage + 1 : Stage.stage1);
  };
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrevious();
      else if (event.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });
  const transitions = useTransition(stage, {
    from: { opacity: 1, transform: direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)', immediate: true },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    to: { opacity: 0, transform: direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)' },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden font-inter">
      <div className="h-screen w-full bg-white md_lg:h-[50em]">
        <div className="h-full w-full bg-[url('./images/pattern-curve.svg')] bg-75% bg-left-bottom bg-no-repeat md_lg:bg-[size:42.3%]">
          <div className="h-full w-full bg-no-repeat md_lg:bg-[url('./images/pattern-bg.svg')] md_lg:bg-[90.2%_35%]">
            {transitions((style, item) => (
              <animated.div
                style={style}
                className="flex h-full w-[full] flex-col-reverse items-center justify-center md_lg:flex-row md_lg:justify-between md_lg:gap-8  xl:gap-0"
                key={item}
              >
                <Testimony
                  buttonNext={() => {
                    goNext();
                  }}
                  buttonPrevious={() => {
                    goPrevious();
                  }}
                  data={stage}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

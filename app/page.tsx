'use client';
import { useState } from 'react';

export default function Home() {
  enum Theme {
    theme1 = 1,
    theme2 = 2,
    theme3 = 3,
  }

  const composition = {
    [Theme.theme1 as Theme]: {
      backgroundMain: 'bg-[#3B4664]',
      text1: 'text-white',
      text2: 'text-[#43495A]',
      backgroundThemeSelector: 'bg-[#252D44]',
      backgroundResult: 'bg-[#181F32]',
      backgroundButtons: 'bg-[#252D44]',
      switchNormal: 'bg-[#D43D31]',
      switchHover: 'bg-[#FA6A5F]',

      buttonNormalBackground1: 'bg-[#EAE3DB]',
      buttonNormalBackground1Hover: 'hover:bg-[#FFFFFF]',
      buttonNormalBackground2: 'bg-[#B6A499]',

      buttonSpecialBackground1: 'bg-[#647299]',
      buttonSpecialBackground1Hover: 'hover:bg-[#A2B2E2]',
      buttonSpecialBackground2: 'bg-[#424E6E]',

      buttonSpecial2Background1: 'bg-[#D13F30]',
      buttonSpecial2Background1Hover: 'hover:bg-[#F96C5B]',
      buttonSpecial2Background2: 'bg-[#8F2316]',
    },
  };

  const [switchHover, setSwitchHover] = useState<number | null>(null);
  const [theme, setTheme] = useState<Theme>(Theme.theme1);
  const [calc, setCalc] = useState<string>('0');
  const [storedNumber, setStoredNumber] = useState<string | null>(null);
  const [storedOperation, setStoredOperation] = useState<string | null>(null);
  const [lastInputNumber, setLastInputNumber] = useState<string | null>(null);
  const [lastOperation, setLastOperation] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-leagueSpartan">
      <div className={`${composition[theme].backgroundMain} flex h-[56.25em] w-full flex-col items-center`}>
        <div className="flex w-[33.7em] flex-col pt-[5.9em]">
          <div className="flex w-full justify-between">
            <div className="mt-2">
              <span className={`${composition[theme].text1} absolute pl-[0.2em] text-[1.9rem]`}>calc</span>
            </div>
            <div className="flex items-end gap-[1.7em]">
              <span className={`${composition[theme].text1} mb-[0.2em] flex text-[0.75rem] tracking-widest`}>
                THEME
              </span>
              <div>
                <div
                  className={`${composition[theme].text1} font flex w-full justify-between px-[0.7em] text-[0.85rem]`}
                >
                  {['1', '2', '3'].map((x, i) => (
                    <span key={i}>{x}</span>
                  ))}
                </div>
                <div
                  className={`${composition[theme].backgroundThemeSelector} flex h-[1.6em] w-[4.4em] justify-between rounded-full`}
                >
                  <div
                    className={`${
                      theme === Theme.theme1
                        ? '-translate-x-[1.3em]'
                        : theme === Theme.theme2
                          ? 'translate-x-0'
                          : 'translate-x-[1.5em]'
                    } absolute ml-0.5 mt-0.5 flex h-[1.4em] w-[4em] items-center justify-center bg-transparent transition duration-300`}
                  >
                    <div
                      className={`${
                        switchHover === theme ? composition[theme].switchHover : composition[theme].switchNormal
                      } h-[1em] w-[1em] rounded-full transition-colors duration-300`}
                    ></div>
                  </div>
                  {[1, 2, 3].map((x) => (
                    <button
                      key={x}
                      onMouseEnter={() => {
                        setSwitchHover(x);
                      }}
                      onMouseLeave={() => {
                        setSwitchHover(null);
                      }}
                      onClick={() => {
                        if (x !== (theme as number)) setTheme(x);
                        else setTheme(x + 1 > 3 ? 1 : x + 1);
                      }}
                      className="z-10 h-full w-full rounded-full bg-transparent"
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${composition[theme].backgroundResult} mt-[2em] flex h-[8em] w-full items-center justify-end rounded-[0.6em] pr-[2em] pt-[0.2em]`}
          >
            <span className={`${composition[theme].text1} text-[3.4rem]`}>
              {calc.length > 14 ? Number(calc).toExponential(2) : Number(calc).toLocaleString('en-US')}
            </span>
          </div>
          <div
            className={`${composition[theme].backgroundButtons} col-span-1 mt-[1.5em] grid h-[30em] grid-cols-4 gap-x-[1.55em] rounded-[0.6em] pb-[0.45em] pl-[1.85em] pr-[2em]  pt-[2em]`}
          >
            {['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='].map(
              (x, i) => (
                <button
                  onClick={() => {
                    if (x === 'DEL') {
                      setCalc((prev) => Math.floor(parseFloat(prev) / 10).toString());
                    } else if (x === 'RESET') {
                      setCalc('0');
                      setStoredNumber(null);
                      setStoredOperation(null);
                      setLastInputNumber(null);
                      setLastOperation(null);
                    } else if (x === '=') {
                      if (storedOperation && storedNumber !== null) {
                        const calcFloat = parseFloat(calc);
                        const storedNumberFloat = parseFloat(storedNumber);
                        switch (storedOperation) {
                          case '+':
                            setCalc((storedNumberFloat + calcFloat).toString());
                            break;
                          case '-':
                            setCalc((storedNumberFloat - calcFloat).toString());
                            break;
                          case '/':
                            setCalc((storedNumberFloat / calcFloat).toString());
                            break;
                          case 'x':
                            setCalc((storedNumberFloat * calcFloat).toString());
                            break;
                          default:
                            break;
                        }
                        setLastInputNumber(calc);
                        setLastOperation(storedOperation);
                        setStoredNumber(calc);
                        setStoredOperation(null);
                      } else if (lastOperation && lastInputNumber !== null) {
                        const calcFloat = parseFloat(calc);
                        const lastInputNumberFloat = parseFloat(lastInputNumber);
                        switch (lastOperation) {
                          case '+':
                            setCalc((calcFloat + lastInputNumberFloat).toString());
                            break;
                          case '-':
                            setCalc((calcFloat - lastInputNumberFloat).toString());
                            break;
                          case '/':
                            setCalc((calcFloat / lastInputNumberFloat).toString());
                            break;
                          case 'x':
                            setCalc((calcFloat * lastInputNumberFloat).toString());
                            break;
                          default:
                            break;
                        }
                      }
                    } else if (x === '+' || x === '-' || x === '/' || x === 'x') {
                      if (storedNumber !== null && storedOperation !== null) {
                        setLastInputNumber(calc);
                        setLastOperation(x);
                        const calcFloat = parseFloat(calc);
                        const storedNumberFloat = parseFloat(storedNumber);
                        switch (storedOperation) {
                          case '+':
                            setStoredNumber((storedNumberFloat + calcFloat).toString());
                            break;
                          case '-':
                            setStoredNumber((storedNumberFloat - calcFloat).toString());
                            break;
                          case '/':
                            setStoredNumber((storedNumberFloat / calcFloat).toString());
                            break;
                          case 'x':
                            setStoredNumber((storedNumberFloat * calcFloat).toString());
                            break;
                          default:
                            break;
                        }
                        setCalc('0');
                        setStoredOperation(x);
                      } else {
                        setStoredNumber(calc);
                        setLastInputNumber(calc);
                        setStoredOperation(x);
                        setLastOperation(x);
                        setCalc('0');
                      }
                    } else if (x === '.') {
                      if (!calc.includes('.')) {
                        setCalc((prev) => prev + '.');
                      }
                    } else if (!isNaN(parseInt(x))) {
                      setCalc((prev) => (prev === '0' && !prev.includes('.') ? x : prev + x));
                    }
                  }}
                  key={i}
                  className={`${(i === 16 || i === 17) && 'col-span-2'} ${
                    i === 3 || i === 16
                      ? `${composition[theme].buttonSpecialBackground2}`
                      : i === 17
                        ? `${composition[theme].buttonSpecial2Background2}`
                        : composition[theme].buttonNormalBackground2
                  } flex h-[4em] flex-col rounded-[0.6em] `}
                >
                  <div
                    className={`${
                      i === 3 || i === 16
                        ? `${composition[theme].buttonSpecialBackground1
                            .concat(' ')
                            .concat(composition[theme].buttonSpecialBackground1Hover)}`
                        : i === 17
                          ? `${composition[theme].buttonSpecial2Background1
                              .concat(' ')
                              .concat(composition[theme].buttonSpecial2Background1Hover)}`
                          : `${composition[theme].buttonNormalBackground1
                              .concat(' ')
                              .concat(composition[theme].buttonNormalBackground1Hover)}`
                    } flex h-[94%] w-full flex-col items-center justify-center rounded-[0.6em] `}
                  >
                    <span
                      className={`${
                        i === 3 || i === 16 || i === 17
                          ? `text-[1.7rem] ${composition[theme].text1}`
                          : `text-[2.5rem] ${composition[theme].text2}`
                      } pt-[0.2em]`}
                    >
                      {x}
                    </span>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

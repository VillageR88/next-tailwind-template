'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  enum Theme {
    theme1 = 1,
    theme2 = 2,
    theme3 = 3,
  }

  const composition = {
    [Theme.theme1 as Theme]: {
      backgroundMain: 'bg-[#3B4664]',
      textLabel: 'text-white',
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
    [Theme.theme2 as Theme]: {
      backgroundMain: 'bg-[#E6E6E6]',
      textLabel: 'text-[#38382E]',
      text1: 'text-white',
      text2: 'text-[#36362C]',
      backgroundThemeSelector: 'bg-[#D3CDCD]',
      backgroundResult: 'bg-[#EEEEEE]',
      backgroundButtons: 'bg-[#D3CDCD]',
      switchNormal: 'bg-[#C85401]',
      switchHover: 'bg-[#FF8B38]',
      buttonNormalBackground1: 'bg-[#E5E4E0]',
      buttonNormalBackground1Hover: 'hover:bg-[#FFFFFF]',
      buttonNormalBackground2: 'bg-[#A69C92]',
      buttonSpecialBackground1: 'bg-[#388187]',
      buttonSpecialBackground1Hover: 'hover:bg-[#62B5BD]',
      buttonSpecialBackground2: 'bg-[#1D5C65]',
      buttonSpecial2Background1: 'bg-[#C85401]',
      buttonSpecial2Background1Hover: 'hover:bg-[#FF8B38]',
      buttonSpecial2Background2: 'bg-[#863700]',
    },
    [Theme.theme3 as Theme]: {
      backgroundMain: 'bg-[#17062A]',
      textLabel: 'text-[#FFE540]',
      text1: 'text-white',
      text2: 'text-[#FFE540]',
      backgroundThemeSelector: 'bg-[#1E0836]',
      backgroundResult: 'bg-[#1E0836]',
      backgroundButtons: 'bg-[#1E0836]',
      switchNormal: 'bg-[#00D8CE]',
      switchHover: 'bg-[#8AF9F0]',
      buttonNormalBackground1: 'bg-[#331B4D]',
      buttonNormalBackground1Hover: 'hover:bg-[#6B34AC]',
      buttonNormalBackground2: 'bg-[#86209D]',
      buttonSpecialBackground1: 'bg-[#56077C]',
      buttonSpecialBackground1Hover: 'hover:bg-[#8631B0]',
      buttonSpecialBackground2: 'bg-[#BF15F4]',
      buttonSpecial2Background1: 'bg-[#00DECF]',
      buttonSpecial2Background1Hover: 'hover:bg-[#94FFF9]',
      buttonSpecial2Background2: 'bg-[#6DF7EF]',
    },
  };

  const preferredTheme = useRef<Theme>(null);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('preferredTheme'))
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme(Theme.theme1);
      else setTheme(Theme.theme2);
  }, [Theme.theme1, Theme.theme2, preferredTheme]);

  useEffect(() => {
    if (!theme) {
      const savedTheme = localStorage.getItem('preferredTheme');
      savedTheme && setTheme(savedTheme as unknown as Theme);
    }
  }, [theme]);
  const [switchHover, setSwitchHover] = useState<number | null>(null);
  const [calc, setCalc] = useState<string>('0');
  const [storedNumber, setStoredNumber] = useState<string | null>(null);
  const [storedOperation, setStoredOperation] = useState<string | null>(null);
  const [lastInputNumber, setLastInputNumber] = useState<string | null>(null);
  const [lastOperation, setLastOperation] = useState<string | null>(null);
  const value = Number(calc).toLocaleString('en-US', { maximumFractionDigits: 7 });
  console.log(theme);

  return (
    theme !== null && (
      <main className="flex w-full flex-col items-center justify-center bg-inherit font-leagueSpartan sm:min-h-screen sm:bg-auto ">
        <div
          className={`${composition[theme].backgroundMain} flex h-full w-full flex-col items-center transition sm:h-[56.25em]`}
        >
          <div className="flex min-h-screen w-full flex-col px-2 py-2 sm:min-h-fit sm:w-[33.7em] sm:px-0 sm:py-0 sm:pt-[5.9em]">
            <div className="flex w-full justify-between">
              <div className="mt-2">
                <span className={`${composition[theme].textLabel} absolute pl-[0.2em] text-[1.9rem] transition`}>
                  calc
                </span>
              </div>
              <div className="flex items-end gap-[1.7em]">
                <span
                  className={`${
                    theme !== Theme.theme3 ? composition[theme].textLabel : 'text-[#D4BF5C]'
                  } mb-[0.2em] flex text-[0.75rem] tracking-widest transition`}
                >
                  THEME
                </span>
                <div>
                  <div
                    className={`${
                      theme !== Theme.theme3 ? composition[theme].textLabel : 'text-[#D4BF5C]'
                    } font flex w-full justify-between px-[0.7em] text-[0.85rem] transition`}
                  >
                    {['1', '2', '3'].map((x, i) => (
                      <span key={i}>{x}</span>
                    ))}
                  </div>
                  <div
                    className={`${composition[theme].backgroundThemeSelector} flex h-[1.6em] w-[4.4em] justify-between rounded-full`}
                  >
                    <div
                      style={{ transform: `translateX(${{ 1: -1.3, 2: 0, 3: 1.5 }[theme]}em)` }}
                      className={`absolute ml-0.5 mt-0.5 flex h-[1.4em] w-[4em] items-center justify-center bg-transparent transition duration-300`}
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
                          if (x !== (theme as number)) {
                            setTheme(x);
                            localStorage.setItem('preferredTheme', x.toString());
                          } else setTheme(x + 1 > 3 ? 1 : x + 1);
                        }}
                        className="z-10 h-full w-full rounded-full bg-transparent"
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${composition[theme].backgroundResult} mt-[2em] flex h-[8em] w-full items-center justify-end rounded-[0.6em] pr-[2em] pt-[0.2em] transition`}
            >
              <span
                className={`${composition[theme].textLabel} ${
                  value.length > 14 ? 'text-[2rem] sm:text-[3rem]' : 'text-[2.5rem] sm:text-[3.4rem]'
                } transition `}
              >
                {value.length > 20 ? Number(calc).toExponential(2) : value}
              </span>
            </div>
            <div
              className={`${composition[theme].backgroundButtons} col-span-1 mt-[1.5em] grid h-[30em] grid-cols-4 gap-x-[1.55em] rounded-[0.6em] pb-[0.45em] pl-[1.85em] pr-[2em]  pt-[2em] transition`}
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
                    } flex h-[4em] flex-col rounded-[0.6em] transition`}
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
                      } flex h-[94%] w-full flex-col items-center justify-center rounded-[0.6em] transition`}
                    >
                      <span
                        className={`${
                          i === 3 || i === 16 || (i === 17 && theme !== Theme.theme3)
                            ? `text-[1.7rem] ${composition[theme].text1}`
                            : i !== 17
                              ? `text-[2.5rem] ${composition[theme].text2}`
                              : 'text-[1.7rem]'
                        } pt-[0.2em] transition`}
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
    )
  );
}

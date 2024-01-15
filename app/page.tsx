'use client';
import { useState } from 'react';

export default function Home() {
  const [switchHover, setSwitchHover] = useState<number | null>(null);
  const [theme, setTheme] = useState<number>(1);
  const [calc, setCalc] = useState<string>('0');
  const [storedNumber, setStoredNumber] = useState<string | null>(null);
  const [storedOperation, setStoredOperation] = useState<string | null>(null);
  const [lastInputNumber, setLastInputNumber] = useState<string | null>(null);
  const [lastOperation, setLastOperation] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-leagueSpartan">
      <div className="flex h-[56.25em] w-full flex-col items-center bg-[#3B4664]">
        <div className="flex w-[33.7em] flex-col pt-[5.9em]">
          <div className="flex w-full justify-between">
            <div className="mt-2">
              <span className="absolute pl-[0.2em] text-[1.9rem] text-white">calc</span>
            </div>
            <div className="flex items-end gap-[1.7em]">
              <span className="mb-[0.2em] flex text-[0.75rem] tracking-widest text-white">THEME</span>
              <div>
                <div className="font flex w-full justify-between px-[0.7em] text-[0.85rem] text-white">
                  {['1', '2', '3'].map((x, i) => (
                    <span key={i}>{x}</span>
                  ))}
                </div>
                <div className="flex h-[1.6em] w-[4.4em] justify-between rounded-full bg-[#252D44]">
                  <div
                    className={`${
                      theme === 1 ? '-translate-x-[1.3em]' : theme === 2 ? 'translate-x-0' : 'translate-x-[1.5em]'
                    } absolute ml-0.5 mt-0.5 flex h-[1.4em] w-[4em] items-center justify-center bg-transparent transition duration-300`}
                  >
                    <div
                      className={`${
                        switchHover === theme ? 'bg-[#FA6A5F]' : 'bg-[#D43D31]'
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
                        if (x !== theme) setTheme(x);
                        else setTheme(x + 1 > 3 ? 1 : x + 1);
                      }}
                      className="z-10 h-full w-full rounded-full bg-transparent"
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[2em] flex h-[8em] w-full items-center justify-end rounded-[0.6em] bg-[#181F32] pr-[2em] pt-[0.2em]">
            <span className="text-[3.4rem] text-white">{Number(calc).toLocaleString('en-US')}</span>
          </div>
          <div className="col-span-1 mt-[1.5em] grid h-[30em] grid-cols-4 gap-x-[1.55em] rounded-[0.6em] bg-[#252D44] pb-[0.45em] pl-[1.85em] pr-[2em]  pt-[2em]">
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
                    i === 3 || i === 16 ? 'bg-[#424E6E]' : i === 17 ? 'bg-[#8F2316]' : 'bg-[#B6A499]'
                  } flex h-[4em] flex-col rounded-[0.6em] `}
                >
                  <div
                    className={`${
                      i === 3 || i === 16
                        ? 'bg-[#647299] hover:bg-[#A2B2E2]'
                        : i === 17
                          ? 'bg-[#D13F30] hover:bg-[#F96C5B]'
                          : 'bg-[#EAE3DB] hover:bg-[#FFFFFF]'
                    } flex h-[94%] w-full flex-col items-center justify-center rounded-[0.6em] `}
                  >
                    <span
                      className={`${
                        i === 3 || i === 16 || i === 17 ? 'text-[1.7rem] text-white' : 'text-[2.5rem] text-[#43495A]'
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

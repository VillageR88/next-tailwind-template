'use client';
import { useEffect, useState } from 'react';
import Loading from 'react-simple-loading';
export default function Home() {
  const [text, setText] = useState<AdviceSlip | null>(null);
  const [awaitingText, setAwaitingText] = useState<AdviceSlip | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const dataJson = 'https://api.adviceslip.com/advice';
  interface AdviceSlip {
    slip: {
      id: number;
      advice: string;
    };
  }

  useEffect(() => {
    if (text === null)
      fetch(dataJson)
        .then((response) => response.json() as Promise<AdviceSlip>)
        .then((data) => {
          setText(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      if (text?.slip.advice === awaitingText?.slip.advice) {
        fetch(dataJson)
          .then((response) => response.json() as Promise<AdviceSlip>)
          .then((data) => {
            setAwaitingText(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    }, 1000);
  }, [awaitingText, clicked, loading, text]);

  useEffect(() => {
    if (clicked && text?.slip.advice !== awaitingText?.slip.advice) {
      setText(awaitingText);
      setLoading(false);
      setClicked(false);
    } else if (clicked && text?.slip.advice === awaitingText?.slip.advice) {
      setLoading(true);
    }
  }, [awaitingText, clicked, text?.slip.advice]);

  return !loading && text ? (
    <main className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-10 font-manrope md:min-h-screen">
      <div className="flex min-h-[20.7em] w-full flex-col items-center justify-center gap-6 rounded-[1em] bg-darkGrayishBlue text-center md:w-[33.7em] ">
        <span className="mt-6 pt-6 text-[0.8rem] font-[600] tracking-[0.35em] text-neonGreen">
          ADVICE #{text.slip.id}
        </span>
        <span className="px-4 text-[1.7rem] font-[700] leading-[1.4em]  text-lightCyan md:px-14">
          {text.slip.advice}
        </span>
        <div className="hidden pb-8 pt-4 md:flex">
          <svg className="w-[4.8em]" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <svg className="mb-8 w-[4.8em]" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="flex pb-8  md:hidden">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div
        onClick={() => {
          setClicked(true);
        }}
        className="hover:shadow-t-aura2 mt-[-2em] flex items-center justify-center rounded-full bg-neonGreen p-5 hover:cursor-pointer hover:shadow-emerald-400"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </main>
  ) : (
    <div className="flex min-h-[100dvh] w-full items-center justify-center md:min-h-screen">
      <Loading color={'green'} stroke={'10px'} size={'100px'} />
    </div>
  );
}

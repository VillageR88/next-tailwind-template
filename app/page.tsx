'use client';
import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState<AdviceSlip | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const dataJson = 'https://api.adviceslip.com/advice';
  // Define an interface representing the structure of your JSON data
  interface AdviceSlip {
    slip: {
      id: number;
      advice: string;
    };
  }

  useEffect(() => {
    fetch(dataJson)
      .then((response) => response.json() as Promise<AdviceSlip>)
      .then((data) => {
        setText(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [clicked]);

  return text ? (
    <main className="md:0 flex h-screen w-full flex-col items-center justify-center px-4 font-manrope md:min-h-screen">
      <div className="flex min-h-[20.7em] w-full flex-col items-center justify-center gap-6 rounded-[1em] bg-darkGrayishBlue text-center md:w-[33.7em] ">
        <span className="pt-6 text-[0.8rem] font-[600] tracking-[0.35em] text-neonGreen">
          ADVICE #{text.slip.id}
          {/*117*/}
        </span>
        <span className="px-4 text-[1.7rem] font-[700] leading-[1.4em]  text-lightCyan md:px-14">
          {text.slip.advice}
          {/*&ldquo;It is easy to sit up and take notice, what's difficult is getting up and taking action.&rdquo;*/}
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
          <svg className="w-[4.8em]" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
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
          setClicked(!clicked);
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
    <div className="h-screen w-screen text-white">Loading...</div>
  );
}

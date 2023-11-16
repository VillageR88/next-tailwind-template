'use client';
import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState<JSON>();
  const dataJson = 'https://api.adviceslip.com/advice';
  useState(() => {
    fetch(dataJson)
      .then((response) => response.json())
      .then((data: JSON | undefined) => {
        setText(data.slip);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  return text ? (
    <main className="flex min-h-screen flex-col items-center justify-center font-manrope">
      <div className="flex h-[20.7em] max-w-[33.7em] flex-col items-center justify-center gap-6 rounded-[1em] bg-darkGrayishBlue text-center">
        <span className="text-[0.8rem] font-[600] tracking-[0.35em] text-neonGreen">
          ADVICE #{text.id}
          {/*117*/}
        </span>
        <span className="px-14 text-[1.7rem] font-[700] leading-[1.4em] text-lightCyan">
          {text.advice}
          {/*&ldquo;It is easy to sit up and take notice, what's difficult is getting up and taking action.&rdquo;*/}
        </span>
        <div className="flex pb-6 pt-4">
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
      </div>
      <div className="hover:shadow-t-aura2 mt-[-2em] flex items-center justify-center rounded-full bg-neonGreen p-5 hover:cursor-pointer hover:shadow-emerald-400">
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

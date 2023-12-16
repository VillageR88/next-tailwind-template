'use client';
import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState<number>(0);
  const buttons = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 1; i <= 100; i++) {
    buttons.push(
      <button
        onClick={() => {
          setClicked(i);
        }}
        className="h-10 w-10 outline outline-1 hover:bg-slate-300"
        key={i}
      ></button>,
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <span>debug selected number: {clicked}</span>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="h-10 w-10"></div>
          <div className="flex flex-col">
            {letters.map((_, i) => (
              <button disabled className="h-10 w-10" key={i + 1}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-10">
            {letters.map((x, i) => (
              <button disabled className="h-10 w-10" key={i}>
                {x}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-10 outline outline-2">{buttons}</div>
        </div>
      </div>
    </div>
  );
}

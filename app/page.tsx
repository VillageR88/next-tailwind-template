'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  enum GamePhase {
    setup,
  }
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

  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.setup);
  const [clicked, setClicked] = useState<number>(0);
  const [border1, setBorder1] = useState<number[]>([]);
  const [border2, setBorder2] = useState<number[]>([]);
  useEffect(() => {
    clicked !== 0 && setBorder1([clicked, clicked - 10]);
  }, [clicked]);
  useEffect(() => {
    function calculateBorder2() {
      const array1 = [];
      const array2 = [];
      array1.push(border1[0] + 10);
      for (const i of border1) array1.push(i);
      array1.push(border1[border1.length - 1] - 10);
      for (const i of array1) {
        array2.push(i - 1, i, i + 1);
      }
      const array3 = array2.filter((x) => !border1.includes(x));
      return array3;
    }
    clicked !== 0 && setBorder2(calculateBorder2);
  }, [clicked, border1]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-300 to-cyan-200">
      <div className="flex flex-col">
        <span>debug selected number: {clicked}</span>
        <span>debug shipSizeOf2Vertical sector: {border1.toLocaleString()}</span>
        <span>buffer shipSizeOf2Vertical sector: {border2.toLocaleString()}</span>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="h-10 w-10"></div>
          <div className="flex flex-col">
            {letters.map((x, i) => (
              <button disabled className="h-10 w-10" key={i + 1}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-10">
            {letters.map((_, i) => (
              <button disabled className="h-10 w-10" key={i}>
                {i + 1}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-10 outline outline-2">{buttons}</div>
        </div>
      </div>
    </div>
  );
}

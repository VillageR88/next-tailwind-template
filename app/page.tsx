'use client';
import React, { useEffect, useState } from 'react';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Image from 'next/image';

interface DataItem {
  day: string;
  amount: number;
}

const ChartComponent = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const dataJson = './data.json';

    fetch(dataJson)
      .then((response) => response.json())
      .then((jsonData: DataItem[]) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      });
  }, []);
  return (
    <div className="flex justify-around">
      {data.map((item) => (
        <div key={item.day} className="flex flex-col">
          <span>{item.amount}</span>
          <span>{item.day}</span>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="font-dmSans flex h-screen flex-col items-center justify-center">
      {/* main wrapper */}
      <div className="md:f w-screen px-4 md:w-auto md:px-0">
        {/* first wrapper */}
        <div className="bg-softRed flex justify-between md:w-[30em]">
          {/* left */}
          <div className="flex flex-col text-white">
            <span>My balance</span>
            <span>$921.48</span>
          </div>
          <Image className="h-auto w-[5em]" src="/images/logo.svg" alt="Logo" height={10} width={10} priority></Image>
        </div>
        {/* second wrapper */}
        <div>
          <span>Spending - Last 7 days</span>
          <ChartComponent />
        </div>
      </div>
    </main>
  );
}

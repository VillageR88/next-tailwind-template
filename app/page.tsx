'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Image from 'next/image';
Chart.register(BarElement, CategoryScale, LinearScale, Title);

interface DataItem {
  day: string;
  amount: number;
}

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

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
    <main className="flex h-screen flex-col items-center justify-center font-dmSans">
      {/* main wrapper */}
      <div className="md:f w-screen px-4 md:w-auto md:px-0">
        {/* first wrapper */}
        <div className="flex justify-between bg-softRed md:w-[30em]">
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
      <BarChart />
    </main>
  );
}

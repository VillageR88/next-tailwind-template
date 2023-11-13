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
  const [data1, setData] = useState<DataItem[]>([]);

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

  if (data1.length === 0) {
    return null;
  }

  const data = {
    labels: [data1[0].day, data1[1].day, data1[2].day, data1[3].day, data1[4].day, data1[5].day, data1[6].day],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        //borderWidth: 1,
        //hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [
          data1[0].amount,
          data1[1].amount,
          data1[2].amount,
          data1[3].amount,
          data1[4].amount,
          data1[5].amount,
          data1[6].amount,
        ],
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-dmSans">
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
          <BarChart />
        </div>
      </div>
    </main>
  );
}

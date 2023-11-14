'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Tooltip, BarElement, CategoryScale, LinearScale, Title, Colors } from 'chart.js';

import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Image from 'next/image';
Chart.register(BarElement, CategoryScale, LinearScale, Colors, Title, Tooltip);
Chart.defaults.color = 'hsl(28, 10%, 53%)';

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
    return <div>Loading...</div>; // Display a loading message while fetching data
  }
  const maxAmount = Math.max(...data1.map((item) => item.amount));
  const labels = [data1[0].day, data1[1].day, data1[2].day, data1[3].day, data1[4].day, data1[5].day, data1[6].day];
  const chartData = {
    labels: labels,
    datasets: [
      {
        backgroundColor: data1.map((item) => (item.amount === maxAmount ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)')),
        hoverBackgroundColor: data1.map((item) => (item.amount === maxAmount ? '#B4DFE5' : '#FF9B87')),
        data: [
          data1[0].amount,
          data1[1].amount,
          data1[2].amount,
          data1[3].amount,
          data1[4].amount,
          data1[5].amount,
          data1[6].amount,
        ],
        borderRadius: 5,
      },
    ],
  };
  const labelTooltip = (tooltipItem: { parsed: { y: string } }) => {
    return '$' + tooltipItem.parsed.y;
  };
  const titleTooltip = () => '';

  const config = {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          padding: {
            x: 8,
            top: 12,
            bottom: 8,
          },
          bodyFont: {
            size: 18,
            weight: '500',
          },
          caretPadding: 8,
          caretSize: 0,
          yAlign: 'bottom',
          xAlign: 'center',
          backgroundColor: 'hsl(25, 47%, 15%)',
          displayColors: false,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
          },
          position: 'nearest',
        },
      },
      onHover: (event: { native: { target: { style: { cursor: string } } } }, chartElement: unknown[]) => {
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      },

      borderSkipped: false,
      borderLine: false,
      scales: {
        x: {
          ticks: {
            font: {
              size: 14,
            },
          },
          display: true,
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
          max: 70,
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={config.options} />;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-dmSans">
      {/* main wrapper */}
      <div className="md:f flex w-screen flex-col gap-y-6 px-4 md:w-auto">
        {/* first wrapper */}
        <div className="flex justify-between rounded-[1.2em] bg-softRed md:w-[33.5em] md:px-8 md:py-6">
          {/* left */}
          <div className="flex flex-col space-y-[0.08em] text-white">
            <span className="text-[1.1rem] font-[400] text-cream">My balance</span>
            <span className="text-[2rem] font-medium text-veryPaleOrange">$921.48</span>
          </div>
          <Image
            className="h-auto w-[4.5em] md:mr-1.5"
            src="/images/logo.svg"
            alt="Logo"
            height={10}
            width={10}
            priority
          ></Image>
        </div>
        {/* second wrapper */}
        <div className="flex flex-col gap-y-2 rounded-[1.2em] bg-veryPaleOrange md:px-8 md:py-7">
          <span className="ml-2 text-[2rem] font-semibold text-darkBrown">Spending - Last 7 days</span>
          <BarChart />
          <hr className="w-full border-t border-gray-300" />
          {/* bottom wrapper */}
          <div className="flex justify-between">
            {/* left */}
            <div className="flex flex-col ">
              <span>Total this month</span>
              <span>$478.33</span>
            </div>
            {/* right */}
            <div className="flex flex-col text-end">
              <span>+2.4%</span>
              <span>from last month</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

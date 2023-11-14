'use client';
import React, { useEffect, useState } from 'react';
import Loading from 'react-simple-loading';

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

const BarChart = ({ data1 }: { data1: DataItem[] }) => {
  if (data1.length === 0) {
    return <div>Loading...</div>;
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
  //@ts-expect-error Someday and that day may never come I will resolve this conflict
  return <Bar data={chartData} options={config.options} />;
};

export default function Home() {
  const [data1, setData1] = useState<DataItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const dataJson = './data.json';
    fetch(dataJson)
      .then((response) => response.json())
      .then((jsonData: DataItem[]) => {
        setData1(jsonData);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false when data fetching is complete
      });
  }, []);
  return (
    <main className="flex h-full flex-col items-center justify-center py-4 align-middle font-dmSans md:min-h-screen">
      {isLoading ? (
        <div className="container flex h-screen w-full justify-center">
          <Loading color={'firebrick'} stroke={'10px'} size={'100px'} />
        </div>
      ) : (
        <div className="md:f flex w-screen flex-col gap-y-6 px-4 md:w-[33.5em]">
          {/* first wrapper */}
          <div className="flex justify-between rounded-[1.2em] bg-softRed px-8 py-6 ">
            {/* left */}
            <div className="flex flex-col space-y-[0.08em] text-white">
              <span className="text-[1.1rem] font-[400] text-cream">My balance</span>
              <span className="text-[2rem] font-medium text-veryPaleOrange">$921.48</span>
            </div>
            <Image
              className="h-auto w-[4.5em] md:mr-1.5"
              src="./images/logo.svg"
              alt="Logo"
              height={10}
              width={10}
              priority
            ></Image>
          </div>
          {/* second wrapper */}
          <div className="flex flex-col gap-y-2 rounded-[1.2em] bg-veryPaleOrange px-8 pb-12 pt-7">
            <span className="text-[1.4rem] font-semibold text-darkBrown md:ml-2 md:text-[2rem]">
              Spending - Last 7 days
            </span>
            {/* Pass the data1 to BarChart component */}
            <BarChart data1={data1} />
            <hr className="mt-5 w-[95%] self-center border-t-2 border-cream pb-3" />
            {/* bottom wrapper */}
            <div className="flex justify-between">
              {/* left */}
              <div className="just flex flex-col leading-[2.9em] ">
                <span className="text-mediumBrown md:text-[1.12rem]">Total this month</span>
                <span className="text-[1.8rem] font-[600] text-darkBrown md:text-[3rem]">$478.33</span>
              </div>
              {/* right */}
              <div className="flex flex-col justify-end text-end">
                <span className="text-[1.15rem] font-[700] text-darkBrown">+2.4%</span>
                <span className="text-mediumBrown md:text-[1.12rem]">from last month</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

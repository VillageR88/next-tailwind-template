'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Tooltip, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Image from 'next/image';
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

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
  const labelTooltip = (tooltipItem) => {
    return '$' + tooltipItem.parsed.y;
  };
  const titleTooltip = () => '';
  const footer = (tooltipItems: any[]) => {
    let sum = 0;

    tooltipItems.forEach(function (tooltipItem: { parsed: { y: number } }) {
      sum += tooltipItem.parsed.y;
    });
    return '$' + sum;
  };

  const config = {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          padding: 10,
          bodyFont: {
            size: 16,
            weight: 'bold',
          },
          caretPadding: 5,
          caretSize: 0,
          yAlign: 'bottom',
          backgroundColor: 'hsl(25, 47%, 15%)',
          displayColors: false,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
            //footer: footer,
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
          max: 80,
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
        <div className="bg-veryPaleOrange">
          <span>Spending - Last 7 days</span>
          <BarChart />
        </div>
      </div>
    </main>
  );
}

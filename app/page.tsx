'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<dataJSON[] | null>(null);

  interface dataJSON {
    id: 1;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data: dataJSON[]) => {
        setData(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-[9.75em] w-full bg-[#5DA5A4] bg-[url('../public/images/bg-header-desktop.svg')]"></div>
      <div className="h-[100em] w-full bg-[#F0FAFB]"></div>
    </main>
  );
}

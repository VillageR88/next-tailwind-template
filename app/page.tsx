'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './home/Navbar';
import Main from './home/Main';

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const tokenTemp = localStorage.getItem('token');
    if (!tokenTemp) {
      router.push('/login');
    }
    setToken(tokenTemp);
    console.log(localStorage.getItem('token'));
  }, [router]);
  return (
    token && (
      <div className="flex min-h-screen w-full flex-col items-center justify-start font-instrumentSans">
        <Navbar />
        <Main />
        <footer className="h-[200px] w-full bg-[#161616]"></footer>
      </div>
    )
  );
}

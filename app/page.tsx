'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Main from './components/Main';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
    console.log(localStorage.getItem('token'));
  }, [router]);
  return (
    localStorage.getItem('token') && (
      <div className="flex min-h-screen w-full flex-col items-center justify-start font-instrumentSans">
        <Navbar />
        <Main />
        <footer className="h-[200px] w-full bg-[#161616]"></footer>
      </div>
    )
  );
}

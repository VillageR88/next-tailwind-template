'use client';
import Header from './components/Header';
import HomePage from '@/pages/HomePage';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-roboto">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

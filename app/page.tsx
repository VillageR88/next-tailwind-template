import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <p className="text-lg">Hello</p>
      <p className="font-mono">World 🌍</p>
    </main>
  );
}

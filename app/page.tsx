import MainPart1 from './components/MainPart1';
import MainPart2 from './components/MainPart2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start font-inter">
      <MainPart1 />
      <MainPart2 />
    </main>
  );
}

import MainBar from './components/MainBar';
import MainPart1 from './MainPart1';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-[64px] pt-[34px] font-plusJakartaSans">
      <MainBar />
      <MainPart1 />
    </main>
  );
}

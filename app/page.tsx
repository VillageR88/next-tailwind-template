import MainBar from './components/MainBar';
import MainPart1 from './components/MainPart1';
import MainPart2 from './components/MainPart2';
import MainPart3 from './components/MainPart3';
import MainPart4 from './components/MainPart4';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-[64px] pt-[34px] font-plusJakartaSans">
      <MainBar />
      <MainPart1 />
      <MainPart2 />
      <MainPart3 />
      <MainPart4 />
      <MainBar additionalClass="mt-[56px]" />
    </main>
  );
}

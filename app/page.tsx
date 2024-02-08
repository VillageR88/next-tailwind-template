import NavBar from './components/NavBar';
import MainRow1 from './components/MainRow1';
import MainRow2 from './components/MainRow2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-poppins">
      <NavBar />
      <MainRow1 />
      <MainRow2 />
      <div className="flex h-[60em] w-full items-center justify-center bg-transparent"></div>
    </main>
  );
}

import NavBar from './components/NavBar';
import MainRow1 from './components/MainRow1';

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <MainRow1 />
      <div className="flex h-[60em] w-full items-center justify-center bg-transparent"></div>
    </main>
  );
}

import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-beVietnamPro">
      <NavBar />
      <div className="flex h-[100em] w-full items-center justify-center bg-[#ffffff]"></div>
    </main>
  );
}

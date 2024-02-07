import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <div className="flex h-[60em] w-full items-center justify-center bg-transparent"></div>
    </main>
  );
}

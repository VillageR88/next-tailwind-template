import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <div className="flex h-[100em] w-full items-center justify-center bg-blue-400"></div>
    </div>
  );
}

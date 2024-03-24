import Navbar from './components/Navbar';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start font-instrumentSans">
      <Navbar />
      <Main />
      <footer className="h-[200px] w-full bg-[#161616]"></footer>
    </div>
  );
}

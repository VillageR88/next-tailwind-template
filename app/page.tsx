import NavBar from './components/NavBar';
import Main from './components/Main/Main';

export default function Home() {
  return (
    <div className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <Main />
      <div className="flex h-[100em] w-full items-center justify-center"></div>
    </div>
  );
}

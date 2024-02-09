import NavBar from './components/NavBar';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-poppins">
      <NavBar />
      <Main />

      <div className="flex h-[60em] w-full items-center justify-center bg-transparent"></div>
    </div>
  );
}

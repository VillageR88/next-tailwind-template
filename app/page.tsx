import NavBar from './components/NavBar';
import Main from './components/Main/Main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-rubik">
      <NavBar />
      <Main />
      <footer></footer>
      <div className="h-[5.5em] w-full bg-[#242946]"></div>
      <div className="h-[1px] w-full bg-white"></div>
    </div>
  );
}

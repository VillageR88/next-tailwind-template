import Nav from './components/Nav';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex min-h-[2494px] flex-col items-center justify-start bg-white">
      <Nav />
      <Main />
    </div>
  );
}

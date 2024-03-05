import Nav from './components/Nav';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="font-plusJakartaSans flex min-h-screen flex-col items-center justify-start bg-white">
      <Nav />
      <Main />
    </div>
  );
}

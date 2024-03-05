import Nav from './components/Nav';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white font-plusJakartaSans">
      <Nav />
      <Main />
    </div>
  );
}

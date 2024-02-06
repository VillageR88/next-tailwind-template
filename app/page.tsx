import NavBar from './components/NavBar';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="font-beVietnamPro flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <Main />
    </div>
  );
}

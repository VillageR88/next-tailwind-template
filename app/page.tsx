import Background1 from './components/Background1';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[white] font-beVietnamPro">
      <Background1 />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="font-publicSans flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

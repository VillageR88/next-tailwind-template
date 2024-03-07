import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-redHatDisplay">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

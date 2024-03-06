import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="font-redHatDisplay flex min-h-screen flex-col items-center justify-start">
      <Header />
      <Main />
    </div>
  );
}

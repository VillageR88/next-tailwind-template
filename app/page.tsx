import Header from './components/Header';
import Main from './components/Main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-ibmPlexSans">
      <Header />
      <Main />
    </div>
  );
}

import Main from '@/app/components/home/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Main />
      <Footer type={1} />
    </div>
  );
}

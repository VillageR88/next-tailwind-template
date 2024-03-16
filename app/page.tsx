import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-[50px] font-epilogue">
      <Main />
      <Footer />
    </div>
  );
}

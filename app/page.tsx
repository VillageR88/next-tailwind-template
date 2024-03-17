import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-[24px] font-epilogue md:pt-[40px] xl:pt-[50px]">
      <Main />
      <Footer />
    </div>
  );
}

import Footer from '@/app/components/Footer';

import Main from './Main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Main />
      <Footer type={2} />
    </div>
  );
}

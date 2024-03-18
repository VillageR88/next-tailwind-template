import Footer from '@/app/components/Footer';
import LeafletMap from '@/app/location/components/LeafletMap';
import Button1And2 from '../components/Button1And2';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative z-20 h-0 w-full">
        <div className="ml-[156px]">
          <Link href="/">
            <Button1And2 type={2} />
          </Link>
        </div>
      </div>
      <div className="h-[600px] w-full max-w-[1440px]">
        <LeafletMap />
      </div>
      <div className="min-h-[548px] w-full max-w-[1440px] bg-almostBlack"></div>
      <Footer type={2} />
    </div>
  );
}

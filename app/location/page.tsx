import Footer from '@/app/components/Footer';
import LeafletMap from '@/app/location/components/LeafletMap';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <div className="h-[600px] w-full max-w-[1440px]">
        <LeafletMap />
      </div>
      <div className="min-h-[548px] w-full max-w-[1440px] bg-almostBlack"></div>
      <Footer type={2} />
    </div>
  );
}

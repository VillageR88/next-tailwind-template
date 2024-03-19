import Button1and2 from '@/app/components/Button1and2';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const LeafletContainer = () => {
  const LeafletMap = dynamic(() => import('@/app/location/components/LeafletMap'), {
    ssr: false,
  });
  return (
    <div className="h-[calc(100dvh-842px)] w-screen md:h-[calc(100dvh-764px)] lg:h-[calc(100dvh-792px)]">
      <div className="relative z-20 h-0 w-full">
        <div className="ml-[80px] lg:ml-[156px]">
          <Link href="/">
            <Button1and2 type={2} />
          </Link>
        </div>
      </div>
      <div className="h-[600px] w-full max-w-[1440px]">
        <LeafletMap />
      </div>
    </div>
  );
};

export default LeafletContainer;

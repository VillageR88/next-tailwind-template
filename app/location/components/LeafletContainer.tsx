import Button1and2 from '@/app/components/Button1and2';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMemo } from 'react';

const LeafletContainer = () => {
  const LeafletMap = useMemo(
    () =>
      dynamic(() => import('@/app/location/components/LeafletMap'), {
        //loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <div className="size-full">
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

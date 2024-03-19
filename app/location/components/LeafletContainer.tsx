'use client';
import LeafletMap from '@/app/location/components/LeafletMap';
import Button1And2 from '@/app/components/Button1And2';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LeafletContainer = () => {
  const [client, setClient] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window === 'undefined') {
      setClient(false);
    }
    setClient(true);
  }, []);
  return (
    client && (
      <div className="size-full">
        <div className="relative z-20 h-0 w-full">
          <div className="ml-[80px] lg:ml-[156px]">
            <Link href="/">
              <Button1And2 type={2} />
            </Link>
          </div>
        </div>
        <div className="h-[600px] w-full max-w-[1440px]">
          <LeafletMap />
        </div>
      </div>
    )
  );
};

export default LeafletContainer;

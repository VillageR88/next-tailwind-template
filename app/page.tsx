'use client';

import { useEffect, useState, useRef } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Navbar from './home/Navbar';
import Main from './home/Main';
import { CollectionGroup } from '@/app/lib/interfaces';
import DataContext from './home/DataContext';
import handleLoadCollectionGroup from '@/app/home/handleLoadCollectionGroup';
import checkToken from './home/checkToken';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [dataContext, setDataContext] = useState<CollectionGroup>({ collections: [] });
  const initialDataContext = useRef<CollectionGroup>({ collections: [] });
  useEffect(() => {
    void checkToken().then((token) => {
      if (token) setToken(token.value);
      else router.push('/login');
    });
  }, [router]);

  useEffect(() => {
    if (token) {
      setLoading(true);
      handleLoadCollectionGroup({ token: token })
        .then((data) => {
          if (!data) return;
          setDataContext(data);
          initialDataContext.current = data;
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [token]);
  return loading ? (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center md:min-h-screen">
      <RotatingLines width="200" strokeColor="orange" />
    </div>
  ) : (
    token !== null && (
      <div className="flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-hidden text-clip md:min-h-screen">
        <DataContext.Provider value={{ dataContext, setDataContext, initialDataContext }}>
          <Navbar token={token} />
          <Main token={token} />
        </DataContext.Provider>
      </div>
    )
  );
}

'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { RotatingLines } from 'react-loader-spinner';
import Navbar from './home/Navbar';
import Main from './home/Main';
import { CollectionGroup } from '@/app/lib/interfaces';
import DataContext from './home/DataContext';
import handleLoadCollectionGroup from '@/app/home/handleLoadCollectionGroup';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [dataContext, setDataContext] = useState<CollectionGroup>({ collections: [] });
  const initialDataContext = useRef<CollectionGroup>({ collections: [] });
  const router = useRouter();
  useEffect(() => {
    const tokenTemp = localStorage.getItem('token');
    if (!tokenTemp) {
      router.push('/login');
    } else {
      setToken(tokenTemp);
    }
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
          <Navbar />
          <Main />
        </DataContext.Provider>
      </div>
    )
  );
}

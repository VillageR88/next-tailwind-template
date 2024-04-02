'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { RotatingLines } from 'react-loader-spinner';
import Navbar from './home/Navbar';
import Main from './home/Main';
import { CollectionGroup } from '@/app/lib/interfaces';
import DataContext from './home/DataContext';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const token = useRef<string | null>(null);
  const [dataContext, setDataContext] = useState<CollectionGroup>({ collections: [] });
  const initialDataContext = useRef<CollectionGroup>({ collections: [] });
  const router = useRouter();
  useEffect(() => {
    const tokenTemp = localStorage.getItem('token');
    if (!tokenTemp) {
      router.push('/login');
    } else {
      token.current = tokenTemp;
    }
  }, [router]);

  useEffect(() => {
    const handleLoadCollectionGroup = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://serverexpress1-production.up.railway.app/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token.current}`,
          },
        });
        if (response.ok) {
          const data = (await response.json()) as CollectionGroup;
          setDataContext(data);
          initialDataContext.current = data;
        } else {
          console.error('Failed to load collection group', response);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    if (token.current) {
      void handleLoadCollectionGroup();
    }
  }, [token]);

  return loading ? (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center md:min-h-screen">
      <RotatingLines width="200" strokeColor="orange" />
    </div>
  ) : (
    token.current !== null && (
      <div className="flex min-h-[100dvh] w-full flex-col items-center justify-start md:min-h-screen">
        <DataContext.Provider value={{ dataContext, setDataContext, initialDataContext }}>
          <Navbar />
          <Main />
        </DataContext.Provider>
      </div>
    )
  );
}

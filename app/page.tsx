'use client';

import { useEffect, useState, createContext, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/navigation';

import { RotatingLines } from 'react-loader-spinner';
import Navbar from './home/Navbar';
import Main from './home/Main';
import { CollectionGroup } from '@/app/lib/interfaces';

export const DataContext = createContext<{
  dataContext: null | CollectionGroup;
  setDataContext: React.Dispatch<React.SetStateAction<null | CollectionGroup>>;
  checkSame(): boolean;
}>({
  dataContext: null,
  setDataContext: () => null,
  checkSame: () => true,
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [dataContext, setDataContext] = useState<null | CollectionGroup>(null);
  const initialDataContext = useRef<null | CollectionGroup>(null);
  const router = useRouter();
  const checkSame = () => dataContext === initialDataContext.current;

  useEffect(() => {
    const tokenTemp = localStorage.getItem('token');
    if (!tokenTemp) {
      router.push('/login');
    } else {
      setToken(tokenTemp);
    }
  }, [router]);

  useEffect(() => {
    const handleLoadCollectionGroup = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://serverexpress1-production.up.railway.app/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
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
    if (token) {
      void handleLoadCollectionGroup();
    }
  }, [token]);

  return loading ? (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center font-instrumentSans md:min-h-screen">
      <RotatingLines width="200" strokeColor="orange" />
    </div>
  ) : (
    token && (
      <div className="flex min-h-[100dvh] w-full flex-col items-center justify-start font-instrumentSans md:min-h-screen">
        <DataContext.Provider value={{ dataContext, setDataContext, checkSame }}>
          <Navbar />
          <Main />
        </DataContext.Provider>
      </div>
    )
  );
}

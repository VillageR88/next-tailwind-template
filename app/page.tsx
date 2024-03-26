'use client';

import { useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/navigation';

import Navbar from './home/Navbar';
import Main from './home/Main';
import { CollectionGroup } from '@/app/lib/interfaces';

export const DataContext = createContext<{
  dataContext: null | CollectionGroup;
  setDataContext: React.Dispatch<React.SetStateAction<null | CollectionGroup>>;
}>({
  dataContext: null,
  setDataContext: () => null,
});

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [dataContext, setDataContext] = useState<null | CollectionGroup>(null);
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
    const handleLoadCollectionGroup = async () => {
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
        } else {
          console.error('Failed to load collection group', response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      void handleLoadCollectionGroup();
    }
  }, [token]);

  return (
    token && (
      <div className="flex min-h-screen w-full flex-col items-center justify-start font-instrumentSans">
        <DataContext.Provider value={{ dataContext, setDataContext }}>
          <Navbar />
          <Main />
        </DataContext.Provider>
        <footer className="h-[200px] w-full bg-[#161616]"></footer>
      </div>
    )
  );
}

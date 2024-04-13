'use client';

import { useEffect, useState, useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Navbar from './home/Navbar';
import Main from './home/Main';
import { DataContext } from './_providers/DataContext';
import handleLoadCollectionGroup from '@/app/home/handleLoadCollectionGroup';
import checkToken from './home/checkToken';
import { useRouter } from 'next/navigation';
import { CollectionGroup } from './lib/interfaces';

export default function Home() {
  const { initialDataContext, setDataContext } = useContext(DataContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setLoading(true);
      void checkToken().then((e) => {
        if (e) setToken(e);
        else router.push('/login');
      });
    }
  }, [router, token]);
  useEffect(() => {
    if (token && loading) {
      handleLoadCollectionGroup({ token: token })
        .then((data) => {
          if (!data) {
            setLoading(false);
            return;
          }
          setDataContext(JSON.parse(JSON.stringify(data)) as CollectionGroup);
          initialDataContext.current = JSON.parse(JSON.stringify(data)) as CollectionGroup;
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [initialDataContext, loading, setDataContext, token]);

  return loading ? (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center md:min-h-screen">
      <RotatingLines width="200" strokeColor="orange" />
    </div>
  ) : (
    token !== null && (
      <div className="flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-hidden text-clip md:min-h-screen">
        <Navbar token={token} />
        <Main token={token} />
      </div>
    )
  );
}

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push('/login');
  }, [router]);

  return null;
};

export default HomePage;

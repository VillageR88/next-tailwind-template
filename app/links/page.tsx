'use client';
import { useRouter } from 'next/navigation'; // Correct import path for useRouter
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient'; // Ensure correct import for supabase

export default function Links() {
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setUserAuth(true);
      else router.replace('/login');
    };

    void checkUser();
  }, [router]);

  return (
    userAuth && (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
        <div className="flex h-[709px] w-[476px] flex-col items-center justify-between ">
          <div className="flex h-[618px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
            <section className="flex h-[80px] w-full flex-col justify-between">
              <h1 className="headingM">Links</h1>
              <p className="bodyM text-[#737373]">Let’s get you started sharing your links!</p>
            </section>
          </div>
        </div>
      </div>
    )
  );
}

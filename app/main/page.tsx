'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import Image from 'next/image';
import IconLink from '../components/IconLink';
import IconProfile from '../components/IconProfile';
import Phone from './Phone';
import Links from './Links';

export default function Main() {
  enum MiddleButtons {
    Links,
    ProfileDetails,
  }
  const [middleSection, setMiddleSection] = useState<MiddleButtons>(MiddleButtons.Links);
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const router = useRouter();
  const [socialInfo, setSocialInfo] = useState<string[]>([]);

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
      <div className="flex min-h-screen flex-col items-center justify-center">
        <nav className="flex h-[126px] w-full flex-col items-center justify-center">
          <div className="flex h-[78px] w-full items-center justify-between rounded-[12px] bg-white pl-[24px] pr-[16px]">
            <Image
              className="h-fit w-[146px]"
              width={16}
              height={16}
              src={'../assets/images/logo-devlinks-large.svg' as string}
              alt="devlinks logo"
              priority
            />
            <div className="flex gap-[16px]">
              <button
                onClick={() => {
                  setMiddleSection(MiddleButtons.Links);
                }}
                className={`${
                  middleSection === MiddleButtons.Links && 'active'
                } tabs flex h-[46px] w-[122px] items-center justify-center gap-[8px]`}
              >
                <IconLink />
                <span className="headingS">Links</span>
              </button>
              <button
                onClick={() => {
                  setMiddleSection(MiddleButtons.ProfileDetails);
                }}
                className={`${
                  middleSection === MiddleButtons.ProfileDetails && 'active'
                } tabs flex h-[46px] w-[187px] items-center justify-center gap-[8px]`}
              >
                <IconProfile />
                <span className="headingS">Profile Details</span>
              </button>
            </div>
            <button className="headingS buttonSecondary h-[46px] w-[114px]">Preview</button>
          </div>
        </nav>
        <main className="flex h-[858px] w-full flex-row justify-between">
          <div className="flex h-[834px] w-[40.3%] items-center justify-center rounded-[12px] bg-white">
            <Phone socialInfo={socialInfo} />
          </div>
          <div className="h-[834px] w-[58%] rounded-[12px] bg-white">
            <Links
              passSocialInfoToMain={(value) => {
                if (value) setSocialInfo(value);
              }}
            />
          </div>
        </main>
      </div>
    )
  );
}

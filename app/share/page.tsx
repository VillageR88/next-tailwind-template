'use client';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Preview from '../components/Preview';
import Link from '../lib/interfaceLink';
import Profile from '../lib/interfaceProfile';
import PopupMessage from '../lib/enumPopupMessage';
import Image from 'next/image';
import popupMessages from '../lib/popupMessages';
import supabase from '../lib/supabaseClient';

const SharePage = () => {
  const [fetchLinks, setFetchLinks] = useState<Link[]>([]);
  const [fetchProfile, setFetchProfile] = useState<Profile | undefined>(undefined);
  const [preloadComplete, setPreloadComplete] = useState<boolean>(false);
  const [popUpBottom, setPopUpBottom] = useState<boolean>(false);
  const [popUpMessage, setPopUpMessage] = useState<PopupMessage>(PopupMessage.ChangesSaved);
  const [resetTimer, setResetTimer] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    void supabase.from('linkSharingAppData').upsert([{ email: userEmail }]);
    const fetchData = async () => {
      const { data } = await supabase
        .from('linkSharingAppData')
        .select('linksJSON, profileJSON, avatarUrl')
        .eq('email', userEmail);
      if (data && data.length > 0) {
        if (data[0].linksJSON) {
          const value = data[0].linksJSON as Link[];
          setFetchLinks(value);
        }
        if (data[0].profileJSON) {
          const value = data[0].profileJSON as Profile;
          setFetchProfile(value);
        }
        if (data[0].avatarUrl) setImageUrl(data[0].avatarUrl as string);
      }
    };
    void fetchData().finally(() => {
      setPreloadComplete(true);
    });
  }, [preloadComplete]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPopUpBottom(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [resetTimer]);

  const handleReset = () => {
    setPopUpBottom(true);
    setResetTimer((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        !preloadComplete ? 'h-screen overflow-hidden' : 'min-h-screen'
      } flex flex-col items-center justify-center transition duration-1000`}
    >
      {!preloadComplete && (
        <div className={`flex h-full w-full flex-col items-center justify-center`}>
          <RotatingLines width="180" strokeColor="cornflowerblue" ariaLabel="loading" />
        </div>
      )}
      <div className={preloadComplete ? 'flex flex-col' : 'hidden'}>
        <Preview
          preloadComplete={preloadComplete}
          fetchLinks={fetchLinks}
          passCopiedToClipboardPopUp={() => {
            handleReset();
            setPopUpBottom(true);
            setPopUpMessage(PopupMessage.LinkCopied);
          }}
          fetchProfile={fetchProfile}
          imageSource={imageUrl ? imageUrl : undefined}
        />
        <div className={`flex h-[126px] w-full flex-col items-center justify-center p-[24px]`}></div>
        <div className="h-[858px]"></div>
      </div>

      <div
        className={`${popUpBottom ? 'opacity-100' : 'opacity-0'} pointer-events-none ${
          preloadComplete ? 'flex duration-300' : 'hidden'
        }  h-0 w-screen transition-opacity duration-[1000ms] ease-in-out`}
      >
        <div className="absolute left-0 flex h-[56px] w-screen justify-center ">
          <div className="mt-[-100px] flex h-full w-[406px] items-center justify-center gap-[8px]  rounded-[12px] bg-[#333333]">
            <Image
              className="h-[20px] w-[20px]"
              height={10}
              width={10}
              src={popupMessages[popUpMessage].image}
              alt="changes saved"
            />
            <span className="headingS text-[#FAFAFA]">{popupMessages[popUpMessage].message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;

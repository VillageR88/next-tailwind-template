'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import supabase from '../lib/supabaseClient';
import Image from 'next/image';
import IconLink from '../components/IconLink';
import IconProfile from '../components/IconProfile';
import Phone from './Phone';
import Links from './Links';
import Link from '../lib/interfaceLink';
import Profile from '../lib/interfaceProfile';
import ProfileDetails from './ProfileDetails';
import MiddleButtons from '../lib/enumMiddleButtons';
import PopupMessage from '../lib/enumPopupMessage';
import popupMessages from '../lib/popupMessages';
import MainView from '../lib/main/enumMainView';
import Preview from '../components/Preview';

export default function Main() {
  const [middleSection, setMiddleSection] = useState<MiddleButtons>(MiddleButtons.Links);
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [fetchLinks, setFetchLinks] = useState<Link[]>([]);
  const [fetchLinksInitial, setFetchLinksInitial] = useState<Link[]>([]);
  const [fetchProfile, setFetchProfile] = useState<Profile | undefined>(undefined);
  const [fetchProfileInitial, setFetchProfileInitial] = useState<Profile | undefined>(undefined);
  const [preloadComplete, setPreloadComplete] = useState<boolean>(false);
  const [popUpBottom, setPopUpBottom] = useState<boolean>(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState<PopupMessage>(PopupMessage.ChangesSaved);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [mainView, setMainView] = useState<MainView>(MainView.Editor);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserAuth(true);
        setUserEmail(user.email);
      } else router.replace('/login');
    };

    void checkUser();
  }, [router]);

  useEffect(() => {
    if (userAuth && userEmail) {
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
            setFetchLinksInitial([...value].map((link) => ({ ...link })));
          }
          if (data[0].profileJSON) {
            const value = data[0].profileJSON as Profile;
            setFetchProfile(value);
            setFetchProfileInitial({ ...value });
          }
          if (data[0].avatarUrl) setImageUrl(data[0].avatarUrl as string);
        }
      };
      void fetchData().finally(() => {
        setPreloadComplete(true);
      });
    }
  }, [preloadComplete, userAuth, userEmail]);

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
      } flex flex-col items-center justify-center px-[24px] transition duration-1000`}
    >
      {!preloadComplete && (
        <div className={`flex h-full w-full flex-col items-center justify-center`}>
          <RotatingLines width="180" strokeColor="cornflowerblue" ariaLabel="loading" />
        </div>
      )}
      {mainView === MainView.Editor ? (
        <>
          <nav
            className={`${
              preloadComplete ? 'opacity-100 transition duration-300' : 'max-h-0 opacity-0'
            } flex h-[126px] w-full flex-col items-center justify-center `}
          >
            <div className="flex h-[78px] w-full items-center justify-between rounded-[12px] bg-white pl-[24px] pr-[16px]">
              <Image
                className="h-fit w-[146px]"
                width={16}
                height={16}
                src={'../assets/images/logo-devlinks-large.svg' as string}
                alt="devlinks logo"
              />
              <div className="flex gap-[16px]">
                <button
                  onClick={() => {
                    setMiddleSection(MiddleButtons.Links);
                  }}
                  className={`${
                    middleSection === MiddleButtons.Links && 'active'
                  } tabs flex h-[46px] w-[122px] items-center justify-center gap-[8px] transition`}
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
              <button
                onClick={() => {
                  setMainView(MainView.Preview);
                }}
                className="headingS buttonSecondary h-[46px] w-[114px]"
              >
                Preview
              </button>
            </div>
          </nav>
          <main
            className={`${
              preloadComplete ? 'opacity-100 transition duration-300' : 'max-h-0 opacity-0'
            } flex h-[858px] w-full flex-row justify-between`}
          >
            <div
              className={`${
                preloadComplete ? 'opacity-100 transition duration-300' : 'max-h-0 opacity-0'
              } hidden h-[834px] w-full items-center justify-center rounded-[12px] bg-white lg:flex lg:w-[40.3%]`}
            >
              <Phone
                fetchProfile={fetchProfile}
                imageSource={imageUrl}
                passCopiedToClipboardPopUp={() => {
                  handleReset();
                  setPopUpBottom(true);
                  setPopUpMessage(PopupMessage.LinkCopied);
                }}
                fetchLinks={fetchLinks}
              />
            </div>
            <div className="h-[834px] w-full rounded-[12px] bg-white transition-all lg:w-[58%]">
              <ProfileDetails
                fetchProfile={fetchProfile}
                setFetchProfile={setFetchProfile}
                fetchProfileInitial={fetchProfileInitial}
                setFetchProfileInitial={setFetchProfileInitial}
                profileImageUrl={imageUrl ? imageUrl : undefined}
                setProfileImageUrl={setImageUrl}
                visible={middleSection === MiddleButtons.ProfileDetails}
                userEmail={userEmail}
                passSavePopUp={() => {
                  handleReset();
                  setPopUpBottom(true);
                  setPopUpMessage(PopupMessage.ChangesSaved);
                }}
              />
              <Links
                fetchLinks={fetchLinks}
                setFetchLinks={setFetchLinks}
                fetchLinksInitial={fetchLinksInitial}
                setFetchLinksInitial={setFetchLinksInitial}
                visible={middleSection === MiddleButtons.Links}
                passSavePopUp={() => {
                  handleReset();
                  setPopUpBottom(true);
                  setPopUpMessage(PopupMessage.ChangesSaved);
                }}
                userEmail={userEmail}
              />
            </div>
          </main>
        </>
      ) : (
        <>
          <Preview
            fetchLinks={fetchLinks}
            passCopiedToClipboardPopUp={() => {
              handleReset();
              setPopUpBottom(true);
              setPopUpMessage(PopupMessage.LinkCopied);
            }}
            fetchProfile={fetchProfile}
            imageSource={imageUrl ? imageUrl : undefined}
          />
          <nav className={`flex h-[126px] w-full flex-col items-center justify-center p-[24px]`}>
            <div className="flex h-[78px] w-full items-center justify-between rounded-[12px] bg-white pl-[24px] pr-[16px]">
              <button
                onClick={() => {
                  setMainView(MainView.Editor);
                }}
                className="headingS buttonSecondary h-[46px] w-[159px]"
              >
                Back to Editor
              </button>
              <button
                onClick={() => {
                  const url = window.location.href.replace('main', 'share').concat(`?userEmail=${userEmail}`);

                  void navigator.clipboard.writeText(url);
                  handleReset();
                  setPopUpBottom(true);
                  setPopUpMessage(PopupMessage.LinkCopied);
                }}
                className="headingS buttonPrimary h-[46px] w-[133px] font-[500]"
              >
                Share Link
              </button>
            </div>
          </nav>
          <div className="h-[858px]"></div>
        </>
      )}
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
}

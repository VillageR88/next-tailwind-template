import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import IconUpload from '../components/IconUpload';
import Profile from '../lib/interfaceProfile';

const ProfileDetails = ({
  passSavePopUp,
  visible,
  userEmail,
  fetchProfile,
  setFetchProfile,
  fetchProfileInitial,
  setFetchProfileInitial,
  profileImageUrl,
  setProfileImageUrl,
}: {
  passSavePopUp(): void;
  visible: boolean;
  userEmail?: string;
  fetchProfile?: Profile;
  setFetchProfile: Dispatch<SetStateAction<Profile | undefined>>;
  fetchProfileInitial?: Profile;
  setFetchProfileInitial: Dispatch<SetStateAction<Profile | undefined>>;
  profileImageUrl?: string;
  setProfileImageUrl: Dispatch<SetStateAction<string | undefined>>;
}) => {
  enum InputState {
    invalid,
    typingOrValid,
  }
  const profileImageStatus = {
    uploadImage: 'Upload Image',
    changeImage: 'Change Image',
  };
  const error = { empty: "Can't be empty", invalid: 'Invalid' };
  const router = useRouter();
  const refs = useRef<HTMLInputElement[]>([]);
  const [firstNameState, setFirstNameState] = useState<InputState>(InputState.typingOrValid);
  const [lastNameState, setLastNameState] = useState<InputState>(InputState.typingOrValid);
  const [emailState, setEmailState] = useState<InputState>(InputState.typingOrValid);
  const [tryUpsert, setTryUpsert] = useState<boolean>(false);
  const noChange = JSON.stringify(fetchProfile) === JSON.stringify(fetchProfileInitial);
  const handleEmailValidation = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        refs.current.forEach((item) => {
          item.blur();
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  useEffect(() => {
    if (tryUpsert) {
      if (
        firstNameState === InputState.typingOrValid &&
        lastNameState === InputState.typingOrValid &&
        emailState === InputState.typingOrValid
      ) {
        const updateData = async () => {
          const { error } = await supabase
            .from('linkSharingAppData')
            .upsert({ email: userEmail, profileJSON: fetchProfile }, { onConflict: 'email' })
            .select();
          if (error) {
            console.error(error);
          }
        };
        void updateData();
        setFetchProfileInitial({ ...fetchProfile } as Profile);
        passSavePopUp();
      }
      setTryUpsert(false);
    }
  }, [
    InputState.typingOrValid,
    emailState,
    fetchProfile,
    firstNameState,
    lastNameState,
    passSavePopUp,
    setFetchProfileInitial,
    tryUpsert,
    userEmail,
  ]);
  const handleUpsert = (): void => {
    if (fetchProfile?.firstName === '') {
      setFirstNameState(InputState.invalid);
    }
    if (fetchProfile?.lastName === '') {
      setLastNameState(InputState.invalid);
    }
    if (fetchProfile && !handleEmailValidation(fetchProfile.email) && fetchProfile.email !== '') {
      setEmailState(InputState.invalid);
    }
    setTryUpsert(true);
  };
  const handleSendToServer = async (file: File) => {
    if (!userEmail) return;
    const timeStamp = new Date().getTime();
    const fileName = `${userEmail}-${timeStamp}`;
    const { error } = await supabase.storage.from('linksharingappdata.avatars').upload(fileName, file, {
      upsert: true,
    });
    if (error) {
      console.log('Error uploading image: ', error);
    }
    const imageURL = supabase.storage.from('linksharingappdata.avatars').getPublicUrl(fileName);
    //imageURL.data;
    const { error: error2 } = await supabase
      .from('linkSharingAppData')
      .upsert({ email: userEmail, avatarUrl: imageURL.data.publicUrl }, { onConflict: 'email' })
      .select();
    if (error2) {
      console.error(error2);
    }
  };

  return (
    <div className={`${visible ? 'flex' : 'hidden'}  h-full w-full flex-col items-center justify-center`}>
      <div className="flex h-full w-full flex-col justify-start gap-[40px] p-[24px] sm:h-[739px] sm:p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Profile Details</h1>
          <p className="text-[#737373]">Add your details to create a personal touch to your profile.</p>
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-[24px] sm:h-[465px]">
          <div className="flex w-full flex-col justify-between gap-[16px] rounded-[12px] bg-[#FAFAFA] p-[20px] sm:h-[233px] sm:flex-row sm:items-center">
            <span className="bodyM text-[#737373]">Profile picture</span>
            <div className="flex h-full w-[344px] flex-col justify-between gap-[16px] sm:flex-row sm:items-center xl:w-[432px]">
              <button
                onClick={() => {
                  const fileInput = document.createElement('input');
                  fileInput.type = 'file';
                  fileInput.accept = 'image/png, image/jpeg';
                  fileInput.setAttribute('max-size', '2097152');
                  fileInput.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      void handleSendToServer(file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const img = new Image();
                        img.src = reader.result as string;
                        img.onload = () => {
                          if (img.width > 1024 || img.height > 1024) {
                            alert('Image resolution exceeds 1024x1024');
                          } else if (file.size > 2097152) alert('Image size exceeds 2MB');
                          else if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                            alert('Invalid file format');
                          } else {
                            setProfileImageUrl(reader.result as string);
                          }
                        };
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                  fileInput.click();
                }}
                style={
                  profileImageUrl
                    ? {
                        backgroundImage: `
                        linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                        url(${profileImageUrl})`,
                      }
                    : {}
                }
                className={`flex h-[100px] max-h-[193px] w-[100px] max-w-[193px] items-center justify-center rounded-[12px] bg-[#EFEBFF] bg-cover min-[300px]:h-[193px] min-[300px]:w-[193px] ${
                  profileImageUrl ? '*:fill-white *:text-white' : '*:fill-[#633CFF] *:text-[#633CFF]'
                }`}
              >
                <div className="flex h-[72px] w-[116px] flex-col items-center justify-between *:fill-current *:text-current">
                  <IconUpload />
                  <span className="headingS font-[600]">
                    {profileImageUrl ? profileImageStatus.changeImage : profileImageStatus.uploadImage}
                  </span>
                </div>
              </button>
              <span className="bodyS w-[127px] xl:w-[215px]">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </span>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              //This doesn't work and I don't know why, but i leave it here for safety
              e.preventDefault();
            }}
            className="flex h-full w-full flex-col justify-between gap-[12px] rounded-[12px] bg-[#FAFAFA] p-[20px] sm:h-[208px]"
          >
            <div className="flex h-full w-full flex-col items-center justify-between sm:h-[48px]">
              <div className="flex h-full w-full flex-col justify-between gap-[4px] sm:flex-row sm:items-center">
                <label htmlFor="firstName" className="alternate1 text-[#737373]">
                  First name*
                </label>
                <input
                  value={fetchProfile ? fetchProfile.firstName : ''}
                  onChange={(e) => {
                    setFetchProfile({ ...fetchProfile, firstName: e.target.value } as Profile);
                  }}
                  onKeyDown={(e) => {
                    setFirstNameState(InputState.typingOrValid);
                    if (e.key === 'Enter') {
                      !noChange && handleUpsert();
                    }
                  }}
                  ref={(el) => (el !== null ? (refs.current[0] = el) : null)}
                  id="firstName"
                  className={`${
                    firstNameState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-[48px] w-full px-[16px] sm:h-full sm:w-[344px] xl:w-[432px]`}
                  placeholder="e.g. John"
                />
              </div>
              {firstNameState === InputState.invalid && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] h-fit bg-white text-[#FF3939]">{error.empty}</span>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-between sm:h-[48px]">
              <div className="flex h-full w-full flex-col justify-between gap-[4px] sm:flex-row sm:items-center">
                <label htmlFor="lastName" className="alternate1 text-[#737373]">
                  Last name*
                </label>
                <input
                  value={fetchProfile ? fetchProfile.lastName : ''}
                  onChange={(e) => {
                    setFetchProfile({ ...fetchProfile, lastName: e.target.value } as Profile);
                  }}
                  onKeyDown={(e) => {
                    setLastNameState(InputState.typingOrValid);
                    if (e.key === 'Enter') {
                      !noChange && handleUpsert();
                    }
                  }}
                  ref={(el) => (el !== null ? (refs.current[1] = el) : null)}
                  id="lastName"
                  className={`${
                    lastNameState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-[48px] w-full px-[16px] sm:h-full sm:w-[344px] xl:w-[432px]`}
                  placeholder="e.g. Appleseed"
                />
              </div>
              {lastNameState === InputState.invalid && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] h-fit bg-white text-[#FF3939]">{error.empty}</span>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-between sm:h-[48px]">
              <div className="flex h-full w-full flex-col justify-between gap-[4px] sm:flex-row sm:items-center">
                <label htmlFor="someEmail" className="alternate1 text-[#737373]">
                  Email
                </label>
                <input
                  value={fetchProfile ? fetchProfile.email : ''}
                  onChange={(e) => {
                    setFetchProfile({ ...fetchProfile, email: e.target.value } as Profile);
                  }}
                  onKeyDown={(e) => {
                    setEmailState(InputState.typingOrValid);
                    if (e.key === 'Enter') {
                      !noChange && handleUpsert();
                    }
                  }}
                  ref={(el) => (el !== null ? (refs.current[2] = el) : null)}
                  id="someEmail"
                  className={`${
                    emailState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-[48px] w-full px-[16px] sm:h-full sm:w-[344px] xl:w-[432px]`}
                  placeholder="e.g. email@example.com"
                />
              </div>
              {emailState === InputState.invalid && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">{error.invalid}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-full sm:h-[95px]">
        <hr className="border-[#D9D9D9]" />
        <div className="flex flex-col-reverse items-center justify-between gap-[18px] px-[16px] py-[24px] sm:flex-row">
          <button
            onClick={() => {
              void supabase.auth.signOut();
              router.replace('/login');
            }}
            className="buttonSecondary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
          >
            Log Out
          </button>
          <div className="flex w-full flex-col-reverse gap-[18px] sm:w-fit sm:flex-row">
            <button
              onClick={() => {
                setFetchProfile({ ...fetchProfileInitial } as Profile);
              }}
              className="buttonSecondary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
            >
              Cancel
            </button>
            <button
              disabled={noChange}
              onClick={() => {
                handleUpsert();
              }}
              className="buttonPrimary headingS min-h-[46px] w-full font-[500] sm:w-[91px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

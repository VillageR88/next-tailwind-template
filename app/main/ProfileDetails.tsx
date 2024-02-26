import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import IconUpload from '../components/IconUpload';
import Profile from '../lib/interfaceProfile';

const ProfileDetails = ({
  visible,
  userEmail,
  fetchProfile,
  setFetchProfile,
  passImageUrl,
}: {
  visible: boolean;
  userEmail: string | undefined;
  fetchProfile: Profile | null;
  setFetchProfile: Dispatch<SetStateAction<Profile | null>>;
  passImageUrl(arg0: string): void;
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
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [firstNameState, setFirstNameState] = useState<InputState>(InputState.typingOrValid);
  const [lastName, setLastName] = useState<string>('');
  const [lastNameState, setLastNameState] = useState<InputState>(InputState.typingOrValid);
  const [email, setEmail] = useState<string>('');
  const [emailState, setEmailState] = useState<InputState>(InputState.typingOrValid);
  const [tryUpsert, setTryUpsert] = useState<boolean>(false);

  useEffect(() => {
    setFetchProfile({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  }, [email, firstName, lastName, setFetchProfile]);

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
      console.log('tryUpsert', tryUpsert);
      if (
        firstNameState === InputState.typingOrValid &&
        lastNameState === InputState.typingOrValid &&
        emailState === InputState.typingOrValid
      ) {
        const updateData = async () => {
          const { data, error } = await supabase
            .from('linkSharingAppData')
            .upsert({ email: userEmail, profileJSON: fetchProfile }, { onConflict: 'email' })
            .select();
          if (error) {
            console.error(error);
          } else {
            console.log(data);
          }
        };
        void updateData();
      }
      setTryUpsert(false);
    }
  }, [InputState.typingOrValid, emailState, fetchProfile, firstNameState, lastNameState, tryUpsert, userEmail]);
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

  useEffect(() => {
    if (fetchProfile) {
      setFirstName(fetchProfile.firstName);
      setLastName(fetchProfile.lastName);
      setEmail(fetchProfile.email);
    }
  }, [fetchProfile]);

  return (
    <div className={`${visible ? 'flex' : 'hidden'}  h-full w-full flex-col items-center justify-center`}>
      <div className="flex h-[739px] w-full flex-col justify-start gap-[40px] p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Profile Details</h1>
          <p className="text-[#737373]">Add your details to create a personal touch to your profile.</p>
        </div>
        <div className="flex h-[465px] w-full flex-col justify-between">
          <div className="flex h-[233px] w-full items-center justify-between rounded-[12px] bg-[#FAFAFA] p-[20px]">
            <span className="bodyM text-[#737373]">Profile picture</span>
            <div className="flex h-full w-[432px] items-center justify-between">
              <button
                onClick={() => {
                  const fileInput = document.createElement('input');
                  fileInput.type = 'file';
                  fileInput.accept = 'image/png, image/jpeg';
                  fileInput.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      //const extension = file.name.split('.').pop();
                      void handleSendToServer(file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const img = new Image();
                        img.src = reader.result as string;
                        img.onload = () => {
                          if (img.width > 1024 || img.height > 1024) {
                            alert('Image resolution exceeds 1024x1024');
                          } else {
                            setProfileImageUrl(reader.result as string);
                            passImageUrl(reader.result as string);
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
                className={`flex h-full w-[193px] items-center justify-center rounded-[12px] bg-[#EFEBFF] bg-cover ${
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
              <span className="bodyS w-[215px]">Image must be below 1024x1024px. Use PNG or JPG format.</span>
            </div>
          </div>
          <form className="flex h-[208px] w-full flex-col justify-between rounded-[12px] bg-[#FAFAFA] p-[20px]">
            <div className="flex h-[48px] w-full flex-col items-center justify-between">
              <div className="flex h-full w-full items-center justify-between">
                <label htmlFor="firstName" className="text-[#737373]">
                  First name*
                </label>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  onKeyDown={() => {
                    setFirstNameState(InputState.typingOrValid);
                  }}
                  ref={(el) => (el !== null ? (refs.current[0] = el) : null)}
                  id="firstName"
                  className={`${
                    firstNameState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-full w-[432px] px-[16px]`}
                  type="text"
                  placeholder="e.g. John"
                />
              </div>
              {firstNameState === InputState.invalid && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">{error.empty}</span>
                </div>
              )}
            </div>
            <div className="flex h-[48px] w-full flex-col items-center justify-between">
              <div className="flex h-full w-full items-center justify-between">
                <label htmlFor="lastName" className="text-[#737373]">
                  Last name*
                </label>
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  onKeyDown={() => {
                    setLastNameState(InputState.typingOrValid);
                  }}
                  ref={(el) => (el !== null ? (refs.current[1] = el) : null)}
                  id="lastName"
                  className={`${
                    lastNameState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-full w-[432px] px-[16px]`}
                  type="text"
                  placeholder="e.g. Appleseed"
                />
              </div>
              {lastNameState === InputState.invalid && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">{error.empty}</span>
                </div>
              )}
            </div>
            <div className="flex h-[48px] w-full flex-col items-center justify-between">
              <div className="flex h-full w-full items-center justify-between">
                <label htmlFor="someEmail" className="text-[#737373]">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyDown={() => {
                    setEmailState(InputState.typingOrValid);
                  }}
                  ref={(el) => (el !== null ? (refs.current[2] = el) : null)}
                  id="someEmail"
                  className={`${
                    emailState === InputState.invalid && 'textFieldError'
                  } textField bodyM h-full w-[432px] px-[16px]`}
                  type="email"
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
      <div className="h-[95px] w-full ">
        <hr className="border-[#D9D9D9]" />
        <div className="flex items-center justify-between px-[40px] py-[24px]">
          <button
            onClick={() => {
              void supabase.auth.signOut();
              router.replace('/login');
            }}
            className="buttonSecondary headingS h-[46px] w-[91px] font-[500]"
          >
            Log Out
          </button>
          <div className="flex gap-[18px]">
            <button className="buttonSecondary headingS h-[46px] w-[91px] font-[500]">Cancel</button>
            <button
              onClick={() => {
                if (firstName === '') {
                  setFirstNameState(InputState.invalid);
                }
                if (lastName === '') {
                  setLastNameState(InputState.invalid);
                }
                if (!handleEmailValidation(email) && email !== '') {
                  setEmailState(InputState.invalid);
                }
                setTryUpsert(true);
              }}
              className="buttonPrimary headingS h-[46px] w-[91px] font-[500]"
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

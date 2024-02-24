import supabase from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import IconUpload from '../components/iconUpload';

const ProfileDetails = ({
  visible,
  passImageUrl,
  passFirstName,
  passLastName,
  passEmail,
}: {
  visible: boolean;
  passImageUrl(arg0: string): void;
  passFirstName(arg0: string): void;
  passLastName(arg0: string): void;
  passEmail(arg0: string): void;
}) => {
  enum InputState {
    emptyError,
    typingOrValid,
  }
  const profileImageStatus = {
    uploadImage: 'Upload Image',
    changeImage: 'Change Image',
  };
  const error = "Can't be empty";
  const router = useRouter();
  const refs = useRef<HTMLInputElement[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [firstNameState, setFirstNameState] = useState<InputState>(InputState.typingOrValid);
  const [lastName, setLastName] = useState<string>('');
  const [lastNameState, setLastNameState] = useState<InputState>(InputState.typingOrValid);
  const [email, setEmail] = useState<string>('');
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
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const img = new Image();
                        img.src = reader.result as string;
                        img.onload = () => {
                          if (img.width > 1024 || img.height > 1024) {
                            alert('Image resolution exceeds 1024x1024');
                          } else {
                            setProfileImage(reader.result as string);
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
                  profileImage
                    ? {
                        backgroundImage: `
                        linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                        url(${profileImage})`,
                      }
                    : {}
                }
                className={`flex h-full w-[193px] items-center justify-center rounded-[12px] bg-[#EFEBFF] bg-cover ${
                  profileImage ? '*:fill-white *:text-white' : '*:fill-[#633CFF] *:text-[#633CFF]'
                }`}
              >
                <div className="flex h-[72px] w-[116px] flex-col items-center justify-between *:fill-current *:text-current">
                  <IconUpload />
                  <span className="headingS font-[600]">
                    {profileImage ? profileImageStatus.changeImage : profileImageStatus.uploadImage}
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
                    passFirstName(e.target.value);
                  }}
                  onKeyDown={() => {
                    setFirstNameState(InputState.typingOrValid);
                  }}
                  ref={(el) => (el !== null ? (refs.current[0] = el) : null)}
                  id="firstName"
                  className={`${
                    firstNameState === InputState.emptyError && 'textFieldError'
                  } textField bodyM h-full w-[432px] px-[16px]`}
                  type="text"
                  placeholder="e.g. John"
                />
              </div>
              {firstNameState === InputState.emptyError && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">{error}</span>
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
                    passLastName(e.target.value);
                  }}
                  onKeyDown={() => {
                    setLastNameState(InputState.typingOrValid);
                  }}
                  ref={(el) => (el !== null ? (refs.current[1] = el) : null)}
                  id="lastName"
                  className={`${
                    lastNameState === InputState.emptyError && 'textFieldError'
                  } textField bodyM h-full w-[432px] px-[16px]`}
                  type="text"
                  placeholder="e.g. Appleseed"
                />
              </div>
              {lastNameState === InputState.emptyError && (
                <div className="flex h-0 w-full justify-end">
                  <span className="bodyS mr-[16px] mt-[-32px] text-[#FF3939]">{error}</span>
                </div>
              )}
            </div>
            <div className="flex h-[48px] w-full items-center justify-between">
              <label htmlFor="email" className="text-[#737373]">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  passEmail(e.target.value);
                }}
                ref={(el) => (el !== null ? (refs.current[2] = el) : null)}
                id="email"
                className="textField bodyM h-full w-[432px] px-[16px]"
                type="text"
                placeholder="e.g. email@example.com"
              />
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
                  setFirstNameState(InputState.emptyError);
                }
                if (lastName === '') {
                  setLastNameState(InputState.emptyError);
                }
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

import Image from 'next/image';
import iconUploadImage from '@/public/assets/images/icon-upload-image.svg';
const ProfileDetails = ({ visible }: { visible: boolean }) => {
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
              <button className="flex h-full w-[193px] items-center justify-center rounded-[12px] bg-[#EFEBFF]">
                <div className="flex h-[72px] w-[116px] flex-col items-center justify-between">
                  <Image
                    className="h-[40px] w-[40px]"
                    width={10}
                    height={10}
                    src={iconUploadImage as string}
                    alt="iconUploadImage"
                  />
                  <span className="headingS text-[#633CFF]">+ Upload Image</span>
                </div>
              </button>
              <span className="bodyS w-[215px]">Image must be below 1024x1024px. Use PNG or JPG format.</span>
            </div>
          </div>
          <div className="h-[208px] w-full rounded-[12px] bg-[#FAFAFA]"></div>
        </div>
      </div>
      <div className="h-[95px] w-full ">
        <hr className="border-[#D9D9D9]" />
        <div className="flex items-center justify-between px-[40px] py-[24px]">
          <button>BUTTON</button>
          <div className="flex gap-[18px]">
            <button className="buttonSecondary headingS h-[46px] w-[91px]">BUTTON</button>
            <button className="buttonPrimary headingS h-[46px] w-[91px]">BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

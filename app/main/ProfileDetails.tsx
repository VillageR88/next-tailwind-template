const ProfileDetails = ({ visible }: { visible: boolean }) => {
  return (
    <div className={`${visible ? 'flex' : 'hidden'}  h-full w-full flex-col items-center justify-center`}>
      <div className="flex h-[739px] w-full flex-col justify-between p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Profile Details</h1>
          <p className="text-[#737373]">Add your details to create a personal touch to your profile.</p>
        </div>
        <div className="flex h-[539px] w-full flex-col justify-between"></div>
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

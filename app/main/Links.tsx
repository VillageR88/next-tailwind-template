import Image from 'next/image';

const StartDiv = () => (
  <div className="h-[469px] w-full rounded-[16px] bg-[#FAFAFA] px-[20px] py-[62.5px]">
    <section className="flex h-full w-full flex-col items-center justify-between">
      <Image
        className="h-fit w-[250px]"
        src={'../assets/images/illustration-empty.svg'}
        alt="links"
        width={100}
        height={100}
        priority
      />
      <div className="flex h-[144px] w-[488px] flex-col items-center justify-between text-center">
        <h2 className="headingM text-[#333333]">Let’s get you started</h2>
        <p className="bodyM text-[#737373]">
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
          We’re here to help you share your profiles with everyone!
        </p>
      </div>
    </section>
  </div>
);

const Links = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="flex h-[739px] w-full flex-col justify-between p-[40px]">
        <div className="flex h-[80px] w-full flex-col justify-between">
          <h1 className="headingM text-[#333333]">Customize your links</h1>
          <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <div className="flex h-[539px] w-full flex-col justify-between">
          <button className="buttonSecondary h-[46px] w-full">+ Add new link</button>
          <StartDiv />
        </div>
      </div>
      <div className="h-[95px} w-full ">
        <hr className="border-[#D9D9D9]" />
        <div className="flex items-center justify-end px-[40px] py-[24px] ">
          <button disabled className="buttonPrimary h-[46px] w-[91px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;

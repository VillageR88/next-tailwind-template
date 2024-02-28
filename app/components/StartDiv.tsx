import Image from 'next/image';

const StartDiv = () => (
  <div className="h-full w-full rounded-[16px] bg-[#FAFAFA] px-[20px] py-[62.5px] sm:h-[469px]">
    <section className="flex h-full w-full flex-col items-center justify-between">
      <Image
        className="h-fit w-[125px] sm:w-[250px] sm:px-0"
        src={'../assets/images/illustration-empty.svg'}
        alt="links"
        width={100}
        height={100}
        priority
      />
      <div className="flex w-full flex-col items-center justify-between gap-[24px] px-[20px] text-center sm:h-[144px] sm:w-[488px]">
        <h2 className="headingM text-[#333333]">Let’s get you started</h2>
        <p className="bodyM text-[#737373]">
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
          We’re here to help you share your profiles with everyone!
        </p>
      </div>
    </section>
  </div>
);
export default StartDiv;

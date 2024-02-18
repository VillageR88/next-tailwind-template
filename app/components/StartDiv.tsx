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
export default StartDiv;

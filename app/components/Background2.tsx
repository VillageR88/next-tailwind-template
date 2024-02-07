import Image from 'next/image';

const Background2 = () => {
  return (
    <div className="top-0 hidden h-0 w-full md:flex">
      <Image
        className="ml-[-30em] mt-[-25em] flex h-fit w-fit md:h-[50em] "
        src={'images/bg-tablet-pattern.svg'}
        width={10}
        height={10}
        alt="background image"
      />
    </div>
  );
};
export default Background2;

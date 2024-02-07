import Image from 'next/image';

const Background1 = () => {
  return (
    <div className="top-0 flex h-0 w-full justify-end">
      <div className="flex h-full w-[80%] xl:w-[69%] ">
        <Image
          className="z-20 ml-[18.5em] mt-[-9em] flex h-[50em] w-fit lg:ml-[27em] xl:ml-[20.5em] "
          src={'images/bg-tablet-pattern.svg'}
          width={10}
          height={10}
          alt="background image"
        />
      </div>
    </div>
  );
};
export default Background1;

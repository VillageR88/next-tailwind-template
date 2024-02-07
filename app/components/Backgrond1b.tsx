import Image from 'next/image';

const Background1b = () => {
  return (
    <div className="top-0 flex h-0 w-full justify-end md:w-0">
      <Image
        className=" mr-[-12em] mt-[-1em] flex h-[20em] w-fit "
        src={'images/bg-tablet-pattern.svg'}
        width={10}
        height={10}
        alt="background image"
      />
    </div>
  );
};
export default Background1b;

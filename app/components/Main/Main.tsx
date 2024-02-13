import Image from 'next/image';
const Main = () => {
  return (
    <div className="mt-[7.68em] flex w-[46em] flex-col items-center justify-start rounded-[1.5em] bg-white">
      <div className="flex h-[70em] w-full items-start justify-center px-[2.5em] pt-[2.5em]">
        <Image
          className="h-fit w-fit rounded-[0.7em]"
          src={'./assets/images/image-omelette.jpeg'}
          alt="image of omelette"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Main;

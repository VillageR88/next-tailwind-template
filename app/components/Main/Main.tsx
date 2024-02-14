import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="mb-[7.75em] mt-[7.68em] flex w-[46em] flex-col items-center justify-start rounded-[1.5em] bg-white">
      <div className="flex h-full w-full flex-col items-start justify-start px-[2.5em] pb-[2.5em] pt-[2.5em]">
        <Image
          className="h-fit w-fit rounded-[0.7em]"
          src={'./assets/images/image-omelette.jpeg'}
          alt="image of omelette"
          width={500}
          height={500}
        />
        <h1 className="mt-[0.79em] font-youngSerif text-[2.5rem] text-[hsl(24,5%,18%)]">Simple Omelette Recipe</h1>
        <p className="mt-[0.8em] font-outfit text-[hsl(30,10%,34%)]">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
};

export default Main;

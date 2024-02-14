import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white md:mb-[7.75em] md:mt-[7.68em] md:w-[46em] md:rounded-[1.5em]">
      <div className="flex h-full w-full flex-col items-start justify-start pb-[2.5em] md:px-[2.5em] md:pt-[2.5em]">
        <Image
          className="h-fit w-fit md:rounded-[0.7em]"
          src={'./assets/images/image-omelette.jpeg'}
          alt="image of omelette"
          width={500}
          height={500}
        />
        <div className="flex flex-col px-[1.6em] md:px-0">
          <h1 className="mt-[0.79em] font-youngSerif text-[2.5rem] text-[hsl(24,5%,18%)]">Simple Omelette Recipe</h1>
          <p className="mt-[0.8em] font-outfit text-[hsl(30,10%,34%)]">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
            perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>
    </div>
  );
};

export default Main;

import Section1 from './Section1';
import Section2 from './Section2';
import Image from 'next/image';
const Main = () => {
  return (
    <div className="mt-[7.68em] flex w-[46em] flex-col items-center justify-start rounded-[1.5em] bg-white">
      <div className="flex h-[70em] w-full flex-col items-start justify-start px-[2.5em] pt-[2.5em]">
        <Image
          className="h-fit w-fit rounded-[0.7em]"
          src={'./assets/images/image-omelette.jpeg'}
          alt="image of omelette"
          width={500}
          height={500}
        />
        <h1 className="font-youngSerif mt-[0.79em] text-[2.5rem] text-[hsl(24,5%,18%)]">Simple Omelette Recipe</h1>
        <p className="font-outfit mt-[0.8em] text-[hsl(30,10%,34%)]">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Main;

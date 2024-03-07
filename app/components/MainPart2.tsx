import Image from 'next/image';
import images from '../lib/images';

const MainPart2 = () => (
  <div className="mt-[64px] flex h-full w-full flex-col items-center">
    <ul className="grid h-[242px] w-full max-w-[1110px] grid-flow-col xl:gap-[30px]">
      {images.map((image, index) => (
        <li key={index} className="relative h-full w-full">
          <Image src={image.src} alt={image.alt} fill className="max-w-[255px] rounded-[8px]" />
        </li>
      ))}
    </ul>
  </div>
);

export default MainPart2;

import Image from 'next/image';
import images from '../lib/images';
import Numerator from './Numerator';

const MainPart2 = () => (
  <div className="mt-[64px] flex h-full w-full flex-col items-center">
    <ul className="grid h-[242px] w-full max-w-[1110px] grid-flow-col xl:gap-[30px]">
      {images.map((image, index) => (
        <li key={index} className="relative h-full w-full">
          <Image src={image.src} alt={image.alt} fill className="max-w-[255px] rounded-[8px]" />
        </li>
      ))}
    </ul>
    <div className="mt-[80px] flex min-h-[240px] w-full max-w-[540px] flex-col items-center">
      <span className="text-[16px] font-[900] leading-[26px] tracking-[4px] text-[#4D96A9]">
        {'Built for modern use'.toLocaleUpperCase()}
      </span>
      <section className="mt-[16px] flex flex-col items-center gap-[32px] text-center">
        <h2 className="max-w-[445px] text-[40px] font-[900] leading-[44px] text-[#28283D]">
          Smarter meetings, all in one place
        </h2>
        <p className="max-w-[525px] text-[18px] font-medium leading-[26px] text-[#87879D]">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </section>
    </div>
    <Numerator number={2} additionalClass="mt-[72px]" />
  </div>
);

export default MainPart2;

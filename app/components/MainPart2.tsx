import Image from 'next/image';
import images from '../lib/images';
import Numerator from './Numerator';

const MainPart2 = () => (
  <div className="mt-[67px] flex h-full w-full flex-col items-center xl:mt-[64px]">
    <ul className="min-[400px]-min-w-[200px] min-[400px]-min-h-[200px] grid h-[605px] w-[151px] gap-[11px] min-[400px]:h-[310px] min-[400px]:w-full min-[400px]:max-w-[327px] min-[400px]:grid-cols-2 md:h-[156px] md:min-h-[156px] md:min-w-[689px] md:max-w-[689px] md:grid-cols-4 xl:h-[242px] xl:max-w-[1110px] xl:gap-[30px]">
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
        <p className="max-w-[525px] text-[16px] font-medium leading-[26px] text-[#87879D] xl:text-[18px]">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </section>
    </div>
    <Numerator number={2} additionalClass="mt-[72px] z-10" />
  </div>
);

export default MainPart2;

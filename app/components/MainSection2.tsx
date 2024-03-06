import Image from 'next/image';
import itemsList from '../lib/itemList';

const MainSection2 = () => (
  <div className="min-h-[888px] w-full bg-gradient-to-b from-white to-[#F0F1FF] pb-[86px]">
    <ul className="grid min-h-[748px] w-full grid-cols-1 flex-col gap-x-[30px] gap-y-[16px] pl-[16px] pr-[16px] sm:grid-cols-2 sm:gap-y-[56px] sm:pl-[39px] sm:pr-[40px] lg:pl-[80px] lg:pr-[80px] min-[1200px]:grid-cols-3 xl:px-[165px]">
      {itemsList.map((item, index) =>
        index > 0 ? (
          <li key={index} className="flex min-h-[283px] w-full flex-col sm:h-[346px] xl:max-w-[350px]">
            {item.image && (
              <Image className="z-10 mb-[-32px] ml-[32px]" width={56} height={56} src={item.image} alt={item.title} />
            )}
            <div className="flex w-full flex-col justify-between gap-[24px] rounded-[15px] bg-white px-[22px] pb-[40px] shadow-[0_15px_50px_1px_rgba(6,22,141,0.1)] sm:h-[322px] sm:px-[18px] min-[900px]:px-[19px] xl:max-w-[350px] xl:px-[20px] min-[1350px]:px-[32px]">
              <section className="mt-[64px] flex flex-col gap-[24px]">
                <h2 className="HeadingS text-[#13183F]">{item.title}</h2>
                <p className="BodyM text-[#83869A]">{item.description}</p>
              </section>
              <button className="h-[28px] w-[104px] text-[18px] font-bold leading-[28px] text-[#F74780] transition hover:text-[#FFA7C3]">
                Get Started
              </button>
            </div>
          </li>
        ) : (
          <li
            key={index}
            className="HeadingM w-full rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-[32px] pb-[32px] pt-[24px] text-white sm:mt-[24px] sm:h-[322px] sm:py-[64px] sm:pb-0 sm:pt-[64px] xl:max-w-[350px]"
          >
            {item.description}
          </li>
        ),
      )}
    </ul>
  </div>
);

export default MainSection2;

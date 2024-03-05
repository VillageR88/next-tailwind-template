import Image from 'next/image';
import itemsList from '../lib/itemList';

const MainSection2 = () => (
  <div className="h-[888px] w-full bg-gradient-to-b from-white to-[#F0F1FF]">
    <ul className="grid min-h-[748px] w-full grid-cols-3 flex-col gap-x-[30px] gap-y-[56px] px-[165px]">
      {itemsList.map((item, index) =>
        index > 0 ? (
          <li key={index} className="flex h-[346px] w-full max-w-[350px] flex-col">
            {item.image && (
              <Image className="z-10 mb-[-32px] ml-[32px]" width={56} height={56} src={item.image} alt={item.title} />
            )}
            <div className="flex h-[322px] w-full max-w-[350px] flex-col justify-between gap-[24px] rounded-[15px] bg-white px-[32px] pb-[40px] shadow-[0_15px_50px_1px_rgba(6,22,141,0.1)]">
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
            className="HeadingM mt-[24px] h-[322px] w-full max-w-[350px] rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-[32px] py-[64px] text-white"
          >
            {item.description}
          </li>
        ),
      )}
    </ul>
  </div>
);

export default MainSection2;

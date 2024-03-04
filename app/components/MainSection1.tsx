import itemsList from '../lib/itemsList';

const MainSection1 = () => (
  <div className="mt-[-277px] flex h-[1260px] w-full max-w-[1440px] justify-center bg-[url('../public/assets/images/background2Small.svg')] bg-cover bg-bottom md:h-[1060px] md:bg-[url('../public/assets/images/background2Medium.svg')] lg:mt-[-205px] lg:h-[1000px] lg:bg-[url('../public/assets/images/background2.svg')] xl:h-[960px]">
    <ul className="mt-[481px] flex h-[308px] w-full max-w-[1114px] flex-col items-center justify-between gap-[48px] md:px-4 lg:mt-[380px] lg:grid lg:grid-cols-2 lg:gap-[26px] lg:px-0 xl:mt-[481px] xl:grid-cols-3">
      {itemsList.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              index === 2 ? 'lg:col-span-2 xl:col-span-1' : 'col-span-1'
            } flex w-full flex-col items-center gap-[32px] px-[16px] sm:w-[573px] sm:px-0 md:flex-row md:justify-center lg:w-full lg:flex-col lg:justify-between lg:gap-[10px] xl:gap-[56px]`}
          >
            <div className="flex min-h-[46px] min-w-[46px] items-center justify-center rounded-full border border-davysGrey font-[Fraunces144] text-[24px] font-[500] text-darkPurple lg:min-h-[56px] lg:min-w-[56px]">
              {index + 1}
            </div>
            <div className="lg:item-center flex h-fit w-full flex-col items-start justify-center gap-[12px] text-center sm:w-fit xl:gap-[28px]">
              <h2 className="w-full text-center font-[Fraunces144] text-[28px] font-[500] leading-[36px] text-darkPurple md:text-left md:text-[32px] md:leading-[40px] lg:text-center">
                {item.title}
              </h2>
              <p className="Body w-full text-center text-[18px] text-darkPurple sm:max-w-[470px] md:text-left lg:max-w-[354px] lg:text-center">
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default MainSection1;

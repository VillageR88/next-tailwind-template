import itemsList from '../lib/itemsList';

const MainSection1 = () => (
  <div className="mt-[-225px] flex h-[960px] w-full max-w-[1440px] justify-center bg-[url('../public/assets/images/background2.svg')] bg-center">
    <ul className="mt-[481px] flex h-[308px] w-full max-w-[1114px] justify-between gap-[26px]">
      {itemsList.map((item, index) => {
        return (
          <li key={index} className="flex w-fit flex-col items-center justify-between">
            <div className="border-davysGrey flex h-[56px] w-[56px] items-center justify-center rounded-full border font-[Fraunces144] text-[24px] font-[500] text-darkPurple">
              {index + 1}
            </div>
            <h2 className="font-[Fraunces144] text-[32px] font-[500] text-darkPurple">{item.title}</h2>
            <p className="Body w-full max-w-[354px] text-center text-[18px] text-darkPurple">{item.description}</p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default MainSection1;

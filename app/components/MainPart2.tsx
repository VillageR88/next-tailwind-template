import Button1n2 from './Button1n2';

const MainPart2 = () => (
  <div className="flex size-full justify-center pl-8 lg:px-8 xl:pl-0">
    <div className="flex w-full justify-center sm2:mt-[83px] sm2:block sm2:min-h-[480px] lg:max-w-[1110px] ">
      <div className="flex flex-col gap-[64px] sm2:flex-row sm2:gap-[69px] lg:max-w-[1395px] lg:gap-[125px] ">
        <div className="mt-[64px] flex w-full flex-col items-center gap-[40px] sm2:mt-[60px] sm2:min-h-[312px] sm2:items-start lg:max-w-[445px]">
          <section className="flex w-full flex-col gap-[24px]">
            <h1>{'Typemaster Keyboard'.toUpperCase()}</h1>
            <p className="text-[18px]">
              Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical
              typing experience.
            </p>
          </section>
          <div className="flex min-h-[58px] w-full max-w-[342px] items-center justify-between gap-[25px]">
            <Button1n2 type={2} />
            <span className="font-bold">{'Release on 5/27'.toUpperCase()}</span>
          </div>
        </div>
        <div className="flex min-h-[331px] w-full justify-between sm2:min-h-[480px] lg:mr-[-285px] lg:max-w-[825px]">
          <div className="size-full rounded-[20px] bg-[url('../public/assets/images/mobile/image-keyboard.jpg')] bg-cover bg-center sm2:min-w-[478px] sm2:max-w-[540px] sm2:bg-[url('../public/assets/images/desktop/image-keyboard.jpg')]"></div>
          <div className="hidden size-full max-w-[255px] rounded-[20px] bg-[#E8EFF2] sm2:max-h-[240px] lg:block"></div>
        </div>
      </div>
    </div>
  </div>
);

export default MainPart2;

import Button1n2 from './Button1n2';

const MainPart2 = () => (
  <div className="flex size-full justify-center px-8">
    <div className="mt-[83px] min-h-[480px]  w-full max-w-[1110px]">
      <div className="flex size-full gap-[125px] lg:max-w-[1395px]">
        <div className="mt-[60px] flex min-h-[312px] w-full max-w-[445px] flex-col gap-[40px]">
          <section className="flex flex-col gap-[24px]">
            <h1>{'Typemaster Keyboard'.toUpperCase()}</h1>
            <p className="text-[18px]">
              Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical
              typing experience.
            </p>
          </section>
          <div className="flex min-h-[58px] w-full max-w-[342px] items-center justify-between">
            <Button1n2 type={2} />
            <span className="font-bold">{'Release on 5/27'.toUpperCase()}</span>
          </div>
        </div>
        <div className="flex  min-h-[480px] w-full max-w-[825px] justify-between lg:mr-[-285px]">
          <div className="size-full max-w-[540px] rounded-[20px] bg-[url('../public/assets/images/desktop/image-keyboard.jpg')] bg-cover"></div>
          <div className="hidden size-full max-h-[240px] max-w-[255px] rounded-[20px] bg-[#E8EFF2] lg:block"></div>
        </div>
      </div>
    </div>
  </div>
);

export default MainPart2;

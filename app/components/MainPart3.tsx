const MainPart3 = () => (
  <div className=" mt-[30px] min-h-[480px] w-full max-w-[1110px] px-8 min-[1150px]:px-0">
    <div className="flex h-[500px] flex-col justify-between gap-6 lg:flex-row min-[1150px]:ml-[-285px] min-[1150px]:max-w-[1395px]">
      <div className="flex min-h-[320px] w-full max-w-[730px] justify-between gap-[30px] lg:min-h-[480px] min-[1150px]:max-w-[1015px]">
        <div className="hidden size-full max-h-[240px] max-w-[255px] rounded-[20px] bg-[#E8EFF2] min-[1150px]:block"></div>
        <div className="size-full max-w-[214px] rounded-[20px] bg-[#F16718] lg:max-w-[255px]">
          <div className="size-full rounded-[20px] bg-[url('../public/assets/images/desktop/image-phone-and-keyboard.jpg')] bg-cover opacity-80 mix-blend-multiply"></div>
        </div>
        <div className="size-full max-w-[445px] rounded-[20px] bg-[url('../public/assets/images/desktop/image-glass-and-keyboard.jpg')] bg-cover md:min-w-[420px]"></div>
      </div>
      <div className="mt-[112px] flex min-h-[108px] w-full gap-[27px] lg:min-h-[312px] lg:max-w-[255px] lg:flex-col">
        <h2 className="max-w-[255px]">{'mechanical wireless Keyboard'.toUpperCase()}</h2>
        <p className="max-w-[398px] lg:max-w-[255px]">
          The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and
          keycaps, along with reliable wireless connectivity.
        </p>
      </div>
    </div>
  </div>
);

export default MainPart3;

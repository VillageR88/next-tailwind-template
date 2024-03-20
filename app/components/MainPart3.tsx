const MainPart3 = () => (
  <div className=" mt-[30px] min-h-[480px] w-full px-8 min-[1150px]:max-w-[1110px] min-[1150px]:px-0">
    <div className="flex h-[500px] flex-col justify-between gap-6 lg:flex-row min-[1150px]:ml-[-285px] min-[1150px]:max-w-[1395px]">
      <div className="flex min-h-[320px] w-full justify-between gap-[30px] min-[850px]:min-h-[400px] lg:min-h-[480px] lg:max-w-[730px] min-[1150px]:max-w-[1015px]">
        <div className="hidden size-full max-h-[240px] rounded-[20px] bg-[#E8EFF2] lg:max-w-[255px] min-[1150px]:block"></div>
        <div className="size-full max-w-[214px] overflow-hidden rounded-[20px] bg-[#F16718] md:max-w-[320px] lg:max-w-[255px]">
          <div className="size-full scale-125 rounded-[20px] bg-[url('../public/assets/images/desktop/image-phone-and-keyboard.jpg')] bg-cover bg-[0_-50px] opacity-80 mix-blend-multiply md:scale-100 lg:scale-100 lg:bg-center"></div>
        </div>
        <div className="size-full rounded-[20px] bg-[url('../public/assets/images/desktop/image-glass-and-keyboard.jpg')] bg-cover sm:bg-[0_-30px] md:min-w-[420px] md:bg-[0_-50px] lg:max-w-[480px] lg:bg-center"></div>
      </div>
      <div className="mt-[112px] flex min-h-[108px] w-full justify-between gap-[50px] lg:min-h-[312px] lg:max-w-[255px] lg:flex-col lg:justify-stretch lg:gap-[27px]">
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

const MainPart3 = () => (
  <div className="mt-[30px] min-h-[480px] w-full pr-4 sm2:px-8  min-[1150px]:max-w-[1110px] ">
    <div className="flex h-full min-h-[500px] flex-col justify-between gap-6 lg:flex-row min-[1150px]:ml-[-285px] min-[1150px]:max-w-[1395px]">
      <div className="ml-[-25px] flex h-[193px] w-full justify-between gap-[30px] sm2:ml-0 sm2:h-[320px] sm2:min-h-[320px] min-[850px]:min-h-[400px] lg:h-[480px] lg:min-h-[480px] lg:max-w-[730px] min-[1150px]:max-w-[1015px]">
        <div className=" hidden size-full max-h-[240px] rounded-[20px] bg-[#E8EFF2] lg:max-w-[255px] min-[1150px]:block"></div>
        <div className="size-full max-w-[129px] overflow-hidden rounded-[20px] bg-[#F16718] bg-center sm2:min-w-[214px] sm2:max-w-[150px] md:max-w-[330px] lg:max-w-[255px]">
          <div className="size-full scale-125 rounded-[20px] bg-[url('../public/assets/images/mobile/image-phone-and-keyboard.jpg')] bg-cover opacity-80 mix-blend-multiply sm2:bg-[url('../public/assets/images/desktop/image-phone-and-keyboard.jpg')] md:scale-100 md:bg-[0_-50px] lg:scale-100 lg:bg-center"></div>
        </div>
        <div className="size-full min-w-[220px] rounded-[20px] bg-[url('../public/assets/images/mobile/image-glass-and-keyboard.jpg')] bg-cover min-[540px]:bg-[0_-50px] sm2:bg-[url('../public/assets/images/desktop/image-glass-and-keyboard.jpg')] sm2:bg-[0_-30px] md:min-w-[420px] md:bg-[0_-50px] lg:max-w-[480px] lg:bg-center"></div>
      </div>
      <div className="mt-[75px] flex w-full flex-col items-center justify-between gap-[24px] px-6 pr-0 text-center sm2:flex-row sm2:gap-[70px] sm2:px-0 sm2:pr-8 sm2:text-start lg:mt-[112px] lg:min-h-[108px] lg:max-w-[255px] lg:flex-col lg:justify-stretch  lg:gap-[50px]">
        <h2 className="w-full max-w-[255px] sm2:max-w-[320px] lg:max-w-[255px]">
          {'mechanical wireless Keyboard'.toUpperCase()}
        </h2>
        <p className="max-w-[327px] sm2:max-w-[570px] lg:max-w-[255px]">
          The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and
          keycaps, along with reliable wireless connectivity.
        </p>
      </div>
    </div>
  </div>
);

export default MainPart3;

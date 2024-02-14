import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="flex h-[573px] w-[476px] flex-col items-center justify-between ">
        <Image
          className="h-fit w-fit"
          width={10}
          height={10}
          src={'./assets/images/logo-devlinks-large.svg' as string}
          alt="logo"
        />
        <div className="flex h-[482px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
          <div className="h-[80px] w-full">DIV1</div>
          <div className="h-[282px] w-full">DIV2</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

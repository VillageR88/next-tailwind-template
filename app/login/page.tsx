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
          alt="devlinks logo"
        />
        <div className="flex h-[482px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
          <section className="flex h-[80px] w-full flex-col justify-between">
            <h1 className="headingM">Login</h1>
            <p className="bodyM text-[#737373]">Add your details below to get back into the app</p>
          </section>
          <div className="h-[282px] w-full">DIV2</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

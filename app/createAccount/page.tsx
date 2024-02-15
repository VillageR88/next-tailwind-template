import Image from 'next/image';
import FormCreateAccount from './FormCreateAccount';

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="flex h-[709px] w-[476px] flex-col items-center justify-between ">
        <Image
          className="h-fit w-fit"
          width={10}
          height={10}
          src={'../assets/images/logo-devlinks-large.svg' as string}
          alt="devlinks logo"
          priority
        />
        <div className="flex h-[618px] w-full flex-col justify-between rounded-[12px] bg-[white] px-[40px] py-[40px]">
          <section className="flex h-[80px] w-full flex-col justify-between">
            <h1 className="headingM">Create account</h1>
            <p className="bodyM text-[#737373]">Let’s get you started sharing your links!</p>
          </section>
          <FormCreateAccount />
        </div>
      </div>
    </div>
  );
};

export default Login;

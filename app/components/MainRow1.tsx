import Image from 'next/image';
import ButtonRequestInvite from './ButtonRequestInvite';
const MainRow1 = () => {
  return (
    <div className="flex h-[41em] w-full bg-[#FAFAFA]">
      <div className="flex w-[43.5%] flex-col justify-center md:pl-[2em] lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h1 className="font-[300] leading-[1.2em] text-[hsl(233,26%,24%)] md:text-[2.65rem] lg:text-[2.8rem] xl:text-[3.42rem]">
          Next&thinsp;generation digital&thinsp;banking
        </h1>
        <span className="mb-[2.2em] mt-[1.5em] text-[hsl(233,8%,62%)] xl:scale-y-[110%] xl:text-[1.09rem]">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </span>
        <ButtonRequestInvite />
      </div>
      <div className="z-10 flex w-[56.6%] items-center justify-start bg-[url('../public/images/bg-intro-desktop.svg')] bg-[0_69%]">
        <Image
          className="ml-[22%] mt-[2.4em] h-max min-h-[35em] w-max min-w-[35em] min-[1458px]:min-h-fit min-[1458px]:min-w-fit"
          src={'images/image-mockups.png'}
          width={100}
          height={100}
          alt="image of smartphones"
          priority
        />
      </div>
    </div>
  );
};

export default MainRow1;

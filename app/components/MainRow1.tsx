import Image from 'next/image';
import ButtonRequestInvite from './ButtonRequestInvite';
const MainRow1 = () => {
  return (
    <div className="flex w-full flex-col-reverse gap-[2em] bg-[#FAFAFA] pb-[5em] md:h-[41em] md:flex-row md:gap-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-6 text-center md:w-[43.5%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h1 className="text-[2.65rem] font-[300] leading-[1.2em] text-[hsl(233,26%,24%)] md:text-[2.65rem] lg:text-[2.8rem] xl:text-[3.42rem]">
          Next&thinsp;generation digital&thinsp;banking
        </h1>
        <span className="mb-[2.2em] mt-[1.5em] text-[hsl(233,8%,62%)] xl:scale-y-[110%] xl:text-[1.09rem]">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </span>
        <ButtonRequestInvite />
      </div>
      <div className="z-10 flex items-center justify-start bg-[url('../public/images/bg-intro-mobile.svg')] bg-cover bg-right  bg-no-repeat md:w-[56.6%] md:bg-[url('../public/images/bg-intro-desktop.svg')] md:bg-auto md:bg-[0_69%]">
        <Image
          className="mt-[-9em] h-fit w-full md:ml-[22%] md:mt-[2.4em] md:h-max md:min-h-[35em] md:w-max md:min-w-[35em] md:min-[1458px]:min-w-fit md:min-[1458px]:min-h-fit"
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

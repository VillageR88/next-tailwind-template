import ButtonGetStarted from './ButtonGetStarted';

const MainRow4 = () => {
  return (
    <div className="flex h-[15.6em] w-full flex-col items-center justify-center gap-[1.4em] bg-[#3A3053] bg-[url('../public/images/bg-boost-mobile.svg')] bg-cover bg-center md:bg-[url('../public/images/bg-boost-desktop.svg')]">
      <h2 className="text-center text-[1.7rem] font-[700] tracking-[-0.025em] text-[white] md:text-[2.5rem]">
        Boost your links today
      </h2>
      <ButtonGetStarted />
    </div>
  );
};
export default MainRow4;

import MainPart1Tiles from '../components/MainPart1Tiles';

const MainPart1 = () => (
  <div className="flex w-full flex-col items-center px-4 transition-all duration-300 ease-in-out xl:px-0">
    <section className="mt-[32px] flex max-w-[343px] flex-col items-center gap-[23px] text-center md:mt-[66px] md:max-w-[752px]">
      <h1 className="HeadingL">Design solutions made easy</h1>
      <p className="BodyM max-w-[730px] text-mediumBrown">
        With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
      </p>
    </section>
    <MainPart1Tiles />
  </div>
);

export default MainPart1;

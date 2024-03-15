import MainPart1Tiles from '../components/MainPart1Tiles';

const MainPart1 = () => (
  <div className="flex flex-col items-center px-4 transition-all duration-300 ease-in-out xl:px-0">
    <section className="mt-[66px] flex max-w-[752px] flex-col items-center gap-[23px] text-center">
      <h1 className="HeadingL">Design solutions made easy</h1>
      <p className="BodyM max-w-[730px] text-mediumBrown">
        With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
      </p>
    </section>
    <MainPart1Tiles />
  </div>
);

export default MainPart1;

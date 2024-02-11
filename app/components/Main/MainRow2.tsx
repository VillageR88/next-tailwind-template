import Carousel from './Carousel';
const MainRow2 = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[white] pt-[4.1em]">
      <section className="flex w-full flex-col items-center gap-[1.2em] text-center md:w-[34em]">
        <h2 className="text-[1.98rem] font-[500] text-[hsl(229,31%,21%)]">Features</h2>
        <p className="text-[0.92rem] leading-[1.6em] text-[hsl(229,8%,60%)] md:text-[1.13rem]">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
          your devices so you can access them on the go.
        </p>
      </section>
      <Carousel />
    </div>
  );
};

export default MainRow2;
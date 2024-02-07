const middleButtons = ({ forMobile }: { forMobile: boolean }) => {
  const middleButtonsList = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'];

  return (
    <div
      className={`${
        forMobile ? 'grid md:hidden' : 'hidden md:grid'
      } mt-[0.15em] grid-flow-col grid-rows-7 justify-start gap-x-[6em] gap-y-[0.8em] min-[250px]:grid-rows-4 md:gap-x-[3em] lg:gap-x-[5em] xl:gap-x-[14em]`}
    >
      {middleButtonsList.map((x) => (
        <button
          aria-label={x}
          className="text-left text-[0.88rem] font-[400] text-[hsl(0,0%,98%)] transition hover:text-[hsl(12,88%,59%)]"
          key={x}
        >
          {x}
        </button>
      ))}
    </div>
  );
};
export default middleButtons;

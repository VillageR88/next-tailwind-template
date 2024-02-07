const ButtonGetStarted = ({ inverted, hideMobile }: { inverted?: boolean; hideMobile?: boolean }) => (
  <button
    className={`${
      inverted
        ? 'bg-[white] font-[700] text-[hsl(12,88%,59%)] hover:text-opacity-50'
        : 'bg-[hsl(12,88%,59%)] font-[500] text-[hsl(13,100%,96%)] shadow-[#FFC5BA] hover:bg-opacity-70'
    } ${
      hideMobile && 'hidden md:flex'
    } rounded-[2em] px-[2.8em] pb-[0.9em] pt-[1.25em] text-[0.75rem] shadow-lg transition`}
  >
    Get Started
  </button>
);

export default ButtonGetStarted;

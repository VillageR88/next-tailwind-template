const Button1And2 = ({ type }: { type: 1 | 2 }) => (
  <button
    className={`${
      type === 1 ? 'bg-black hover:bg-galacticBlue' : 'bg-lightRed hover:bg-summerYellow'
    } h-[56px] w-full max-w-[228px] rounded-[28px] text-[16px] font-bold leading-[28px] text-lightCream transition `}
  >
    Free Consultation
  </button>
);

export default Button1And2;

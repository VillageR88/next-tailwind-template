const Button1n2 = ({ type }: { type: 1 | 2 }) => {
  const typeItems = {
    1: {
      bgColor: 'bg-[#E8EFF2]',
      textColor: 'text-[#162542]',
      hoverBgColor: 'hover:bg-[#162542]',
      hoverTextColor: 'hover:text-white',
    },
    2: {
      bgColor: 'bg-[#F16718]',
      textColor: 'text-white',
      hoverBgColor: 'hover:bg-[#FF9B62]',
      hoverTextColor: 'hover:text-white',
    },
  };
  return (
    <button
      className={`${typeItems[type].bgColor} ${typeItems[type].textColor} ${typeItems[type].hoverBgColor} ${typeItems[type].hoverTextColor} h-[58px] w-full max-w-[175px] rounded-[8px]  text-[16px] font-bold leading-[26px] transition`}
    >
      {'Pre-order now'.toUpperCase()}
    </button>
  );
};

export default Button1n2;

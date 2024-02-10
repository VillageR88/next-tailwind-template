const MiddleButtons = ({ title, buttons }: { title: string; buttons: string[] }) => {
  return (
    <div className="mt-[0.15em] flex flex-col items-center justify-start gap-[1.3em] text-center md:items-start md:text-left">
      <h4 className="text-[0.95rem] font-[700] text-[hsl(0,0%,98%)]">{title}</h4>
      <ul className="flex flex-col gap-[0.5em]">
        {buttons.map((item, index) => (
          <li key={index}>
            <button
              aria-label={item}
              className="scale-y-[110%] text-left text-[0.92rem] font-[400] text-[#A5A4A9] transition hover:text-[#3BD0CC]"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MiddleButtons;

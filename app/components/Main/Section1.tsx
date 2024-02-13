const Section1 = () => {
  return (
    <div className="font-outfit mt-[1.9em] flex w-full flex-col items-start justify-start rounded-[0.8em] bg-[hsl(330,100%,98%)] px-[1.75em] pb-[1.75em] pt-[1.5em]">
      <h2 className="text-[1.255rem] font-[600] text-[hsl(332,51%,32%)]">Preparation time</h2>
      <ul className="custom-list mt-[0.7em] flex flex-col gap-[0.5em] text-[hsl(30,10%,34%)]">
        <li>
          <span className="font-[700]">Total</span>
          <span>: Approximately 10 minutes</span>
        </li>
        <li>
          <span className="font-[700]">Preparation</span>
          <span>: 5 minutes</span>
        </li>
        <li>
          <span className="font-[700]">Cooking</span>
          <span>: 5 minutes</span>
        </li>
      </ul>
    </div>
  );
};

export default Section1;

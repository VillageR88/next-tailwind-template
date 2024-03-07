const Numerator = ({ additionalClass, number }: { additionalClass?: string; number: number }) => (
  <div className={`${additionalClass} mt-[110px] flex h-[140px] w-[56px] flex-col items-center`}>
    <div className="h-[84px] w-[1px] bg-[#D8D8D8]"></div>
    <div className="border-1 flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#D8D8D8] bg-[#FAFAFA] text-[16px] font-[900] leading-[26px] text-[#87879D]">
      {number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
    </div>
  </div>
);

export default Numerator;

const Section4 = () => {
  const listItems = [
    {
      left: 'Calories',
      right: '277kcal',
    },
    {
      left: 'Carbs',
      right: '0g',
    },
    {
      left: 'Protein',
      right: '20g',
    },
    {
      left: 'Fat',
      right: '22g',
    },
  ];
  return (
    <div className="mt-[1.62em] flex w-full flex-col items-start justify-start">
      <h2 className="scale-y-105 font-youngSerif text-[1.75rem] font-[500] text-[hsl(14,45%,36%)]">Nutrition</h2>
      <p className="mt-[1em] font-outfit text-[hsl(30,10%,34%)]">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <ul className="mt-[1em] flex w-full flex-col gap-[0.25em]">
        {listItems.map((item, index) => {
          return (
            <div className="flex flex-col gap-[0.7em]" key={index}>
              <li
                key={index}
                className="ml-[2.01em] mt-[0.5em] grid w-[92.65%] grid-cols-2 justify-between font-outfit text-[hsl(30,10%,34%)]"
              >
                <span className="font-[400] text-[hsl(30,10%,34%)]">{item.left}</span>
                <span className="font-[700] text-[hsl(14,45%,36%)]">{item.right}</span>
              </li>
              <hr className={`${index === listItems.length - 1 && 'hidden'} h-[1px] w-full`} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Section4;

const Section2 = () => {
  const articleItems = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ];
  return (
    <div className="mt-[1.65em] flex w-full flex-col items-start justify-start">
      <h2 className="scale-y-105 font-youngSerif text-[1.75rem] font-[500] text-[hsl(14,45%,36%)]">Ingredients</h2>
      <ul className="custom-list brownLi mt-[1em] flex flex-col gap-[0.5em] font-outfit text-[hsl(30,10%,34%)]">
        {articleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr className="mt-[1.9em] h-1 w-full" />
    </div>
  );
};

export default Section2;

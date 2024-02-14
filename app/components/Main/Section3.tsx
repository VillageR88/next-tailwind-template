const Section3 = () => {
  const articleItems = [
    {
      title: 'Beat the eggs',
      description:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      title: 'Heat the pan',
      description: 'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      title: 'Cook the omelette',
      description:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      title: 'Add fillings (optional)',
      description:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      title: 'Fold and serve',
      description:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      title: 'Enjoy',
      description: 'Serve hot, with additional salt and pepper if needed.',
    },
  ];
  return (
    <div className="mt-[1.53em] flex w-full flex-col items-start justify-start">
      <h2 className="scale-y-105 font-youngSerif text-[1.75rem] font-[500] text-[hsl(14,45%,36%)]">Instructions</h2>
      <ul className="custom-listNumber mt-[0.95em] flex flex-col gap-[0.5em] pr-[3em] font-outfit text-[hsl(14,45%,36%)]">
        {articleItems.map((item, index) => (
          <li key={index}>
            <span className="font-[700] text-[hsl(30,10%,34%)]">{item.title}</span>
            <span className="font-[400] text-[hsl(30,10%,34%)]">: {item.description}</span>
          </li>
        ))}
      </ul>
      <hr className="mt-[1.9em] h-[1px] w-full" />
    </div>
  );
};

export default Section3;

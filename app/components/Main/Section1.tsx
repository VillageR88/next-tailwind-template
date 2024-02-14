const Section1 = () => {
  const articleItems = [
    { title: 'Total', description: 'Approximately 10 minutes' },
    { title: 'Preparation', description: '5 minutes' },
    { title: 'Cooking', description: '5 minutes' },
  ];
  return (
    <div className="mt-[1.9em] flex w-full flex-col items-start justify-start rounded-[0.8em] bg-[hsl(330,100%,98%)] px-[1.75em] pb-[1.75em] pt-[1.5em] font-outfit">
      <h2 className="text-[1.255rem] font-[600] text-[hsl(332,51%,32%)]">Preparation time</h2>
      <ul className="custom-list violetLi brownLi mt-[0.7em] flex flex-col gap-[0.5em] text-[hsl(30,10%,34%)] pr-[2em]">
        {articleItems.map((item, index) => (
          <li key={index}>
            <span className="font-[700]">{item.title}</span>
            <span>: {item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section1;

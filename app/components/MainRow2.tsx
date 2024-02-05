const MainRow2 = () => {
  const articles = [
    {
      title: 'Track company-wide progress',
      description:
        'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    },
    {
      title: 'Advanced built-in reports',
      description:
        'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    },
    {
      title: 'Everything you need in one place',
      description:
        'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
    },
  ];

  return (
    <div className="flex w-full flex-col-reverse gap-[2em] bg-[#FFFFFF] pb-[5em] pt-[3em] md:h-[39.3em] md:flex-row md:gap-0 md:pb-0">
      <div className="mb-[0.4em] flex flex-col items-center justify-start px-6 text-center md:w-[50%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h2 className="ml-[0.25em] mt-[0.3em] scale-x-[103%] scale-y-[105%] text-[2.65rem] font-[700] leading-[1.16em] text-[hsl(233,26%,24%)] md:text-[1.85rem] lg:text-[2.1rem] xl:text-[2.25rem]">
          What’s different about Manage?
        </h2>
        <span className="mb-[2.4em] mt-[1.8em] max-w-[20em] tracking-[-0.03em] text-[hsl(233,8%,62%)] xl:text-[1.05rem]">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
          modern digital product teams.
        </span>
      </div>
      <ul className="z-10 ml-[1.7em]  flex flex-col items-start justify-start gap-[2.3em] md:w-[50%]">
        {articles.map((article, index) => (
          <li className="flex items-start gap-[1.6em]" key={index}>
            <div className="rounded-[1.8em] bg-[hsl(12,88%,59%)] px-[1.55em] py-[0.5em] font-[500] text-[hsl(13,100%,96%)]">
              {(index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </div>
            <div className="mt-[0.5em] flex flex-col gap-[1.2em]">
              <h3 className="text-[0.97rem] font-[700] tracking-[-0.03em] text-[hsl(233,26%,24%)]">{article.title}</h3>
              <span className="max-w-[28em] text-[0.97rem] leading-[1.7em] text-[hsl(233,8%,62%)]">
                {article.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainRow2;

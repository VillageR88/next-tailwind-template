const MainRow1 = () => {
  return (
    <div className="flex w-full flex-col-reverse gap-[2em] bg-[#FFFFFF] pb-[5em] pt-[3em] md:h-[39.3em] md:flex-row md:gap-0 md:pb-0">
      <div className="mb-[0.4em] flex flex-col items-center justify-start px-6 text-center md:w-[50%] md:items-start md:pl-[2em] md:text-left lg:pl-[5em] xl:pr-[1em] min-[1458px]:pl-[10.3em]">
        <h2 className="ml-[0.25em] scale-x-[103%] scale-y-[105%] text-[2.65rem] font-[700] leading-[1.16em] text-[hsl(233,26%,24%)] md:text-[1.85rem] lg:text-[2.1rem] xl:text-[2.25rem]">
          What’s different about Manage?
        </h2>
        <span className="mb-[2.4em] mt-[2.2em] max-w-[20em] tracking-[-0.03em] text-[hsl(233,8%,62%)] xl:text-[1.05rem]">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
          modern digital product teams.
        </span>
      </div>
      <ul className="z-10 ml-[1.7em] flex items-start justify-start gap-[1.6em] md:w-[50%]">
        <div className="rounded-[1.8em] bg-[hsl(12,88%,59%)] px-[1.6em] py-[0.5em] font-[500] text-[hsl(13,100%,96%)]">
          01
        </div>
        <div className="mt-[0.5em] flex flex-col gap-[1.2em]">
          <h3 className="font-[700] tracking-[-0.03em] text-[hsl(233,26%,24%)]">Track company-wide progress</h3>
          <span className="max-w-[28em] text-[hsl(233,8%,62%)]">
            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level
            all the way done to the smallest of details. Never lose sight of the bigger picture again.
          </span>
        </div>
      </ul>
    </div>
  );
};

export default MainRow1;

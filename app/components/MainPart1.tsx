const MainPart1 = () => (
  <div className="size-full max-h-[600px] max-w-[1110px]">
    <div className="mt-[103px] flex h-[405px] w-full max-w-[635px] flex-col gap-[52px]">
      <section className="flex flex-col gap-[40px]">
        <h1 className="text-[72px] leading-[78px] text-darkBlue">
          A <strong className="tracking-[-1px]">super solution</strong> for your{' '}
          <strong className="tracking-[-1px]">business.</strong>
        </h1>{' '}
        <p className="Body h-[96px] w-full max-w-[350px] text-grey">
          Our marketing and sales automations help you scale your outreach to get more leads for your company.
        </p>
      </section>
      <button className="h-[61px] w-full max-w-[256px] rounded-[6px] bg-darkBlue text-[18px] font-bold leading-[32px] tracking-[-0.18px] text-creamWhite">
        Request Beta Access
      </button>
    </div>
  </div>
);

export default MainPart1;

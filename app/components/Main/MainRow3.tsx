import Image from 'next/image';

const MainRow3 = () => {
  const items = [
    {
      logo: '/images/logo-chrome.svg',
      title: 'Add to Chrome',
      description: 'Minimum version 62',
    },
    {
      logo: '/images/logo-firefox.svg',
      title: 'Add to Firefox',
      description: 'Minimum version 55',
    },
    {
      logo: '/images/logo-opera.svg',
      title: 'Add to Opera',
      description: 'Minimum version 46',
    },
  ];
  return (
    <div className="flex flex-col items-center bg-[white] pb-[2em]">
      <section className="flex w-full flex-col items-center gap-[1.2em] text-center md:w-[34em]">
        <h2 className="text-[1.98rem] font-[500] text-[hsl(229,31%,21%)]">Download the extension</h2>
        <p className="text-[0.92rem] leading-[1.6em] text-[hsl(229,8%,60%)] md:text-[1.13rem]">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
          prioritize.
        </p>
      </section>
      <ul className="mt-[3em] flex flex-col items-start gap-[2.05em] md:flex-row ">
        {items.map((item, index) => {
          const marginTop = index === 1 ? 'md:mt-[2.5em]' : index === 2 && 'md:mt-[5em]';
          return (
            <li
              className={`${marginTop} flex flex-col items-center justify-center rounded-[1em] pb-[1.5em] pt-[2.9em] shadow-[0_10px_8px_3px_rgb(231,237,249,0.75)]`}
              key={index}
            >
              <Image className="h-fit w-fit" height={100} width={100} src={item.logo} alt="logo" />
              <h3 className="mt-[1.4em] text-[1.3rem] font-[500] text-[hsl(229,31%,21%)]">{item.title}</h3>
              <p className="mt-[0.4em] text-[0.95rem] text-[hsl(229,8%,60%)]">{item.description}</p>
              <Image
                className="mt-[2em] h-fit w-fit"
                height={100}
                width={100}
                src="./images/bg-dots.svg"
                alt="background dots"
              />
              <button className="mt-[1.7em] w-fit rounded-[0.5em] border-2 border-[hsl(231,69%,60%)] bg-[hsl(231,69%,60%)] px-[2.5em] py-[0.95em] text-[0.9rem] font-[500] text-[white] transition hover:bg-[white] hover:text-[hsl(231,69%,60%)]">
                Add & Install Extension
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainRow3;

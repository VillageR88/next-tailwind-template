import Image from 'next/image';
const MainRow3 = () => {
  const listItems = [
    {
      icon: '/images/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      icon: '/images/icon-detailed-records.svg',
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      icon: '/images/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F0F1F6] px-6 pb-[5em] md:px-[2em] md:pb-[7.5em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <section className="flex flex-col items-center gap-[0.7em] ">
        <h2 className="text-center text-[1.7rem] font-[700] tracking-[-0.025em] text-[#34313C] md:text-[2.5rem]">
          Advanced Statistics
        </h2>
        <p className="max-w-[30em] text-center leading-8 tracking-[0.008em] text-[#A5A4A9] md:text-[1.12rem]">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </section>
      <div className="h-full w-full ">
        <div className="flex h-0 w-full justify-center">
          <div className="mt-[15.5em] h-[40em] w-[0.5em] bg-[#2ED1D8] md:h-[0.5em] md:w-full"></div>
        </div>
        <ul className="mt-[6.3em] flex w-full flex-col justify-center gap-[1.88em] md:flex-row">
          {listItems.map((item, index) => (
            <li
              style={{ marginTop: index * 2.8 + 'em' }}
              className="flex w-full flex-col items-center gap-[1em] rounded-[0.3em] bg-[white] px-[1.95em] pb-[2.75em] md:h-[27em] md:items-start min-[900px]:h-[23em] min-[1100px]:h-[18em] min-[1458px]:h-fit"
              key={index}
            >
              <div className="mt-[-3em] flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#3A3053]  text-center md:text-left">
                <Image
                  width={index !== 2 ? 40 : 50}
                  height={index !== 2 ? 40 : 50}
                  src={item.icon}
                  alt={item.title}
                ></Image>
              </div>
              <h3 className="mt-[0.8em] text-[1.4rem] font-[700] text-[#34313C]">{item.title}</h3>
              <p className="scale-y-105 text-center text-[0.93rem] leading-[1.6em] text-[#A5A4A9] md:text-left">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainRow3;

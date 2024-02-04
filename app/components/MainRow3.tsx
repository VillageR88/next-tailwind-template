import Image from 'next/image';
const MainRow3 = () => {
  return (
    <div className="flex min-h-[41.215em] w-full flex-col bg-[#FAFAFA] pb-[4.9em] pt-[5.2em] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <h2 className="scale-y-[105%] pl-[0.03em] text-[2.41rem] font-[300] text-[hsl(233,26%,24%)]">Latest Articles</h2>
      <ul className="flex flex-wrap justify-around gap-[2em] min-[909px]:justify-between min-[1458px]:gap-0">
        {[
          {
            image: 'images/image-currency.jpg',
            byText: 'By Claire Robinson',
            h3: 'Receive money in any currency with no fees',
            main: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
          },
          {
            image: 'images/image-restaurant.jpg',
            byText: 'By Wilson Hutton',
            h3: 'Treat yourself without worrying about money',
            main: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
          },
          {
            image: 'images/image-plane.jpg',
            byText: 'By Wilson Hutton',
            h3: 'Take your Easybank card wherever you go',
            main: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
          },
          {
            image: 'images/image-confetti.jpg',
            byText: 'By Claire Robinson',
            h3: 'Our invite-only Beta accounts are now live!',
            main: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …',
          },
        ].map((x) => (
          <li className="mt-[2.6em] flex w-[15.9em] flex-col" key={x.h3}>
            <Image
              className="h-[12.5em] w-full rounded-t-[0.3em] object-cover"
              src={x.image}
              width={100}
              height={100}
              alt={x.image.slice(7, -4).replace('-', ' ')}
            />
            <div className="mt-[0.2em] flex min-h-[12.1em] w-full flex-col justify-center gap-[0.6em] rounded-b-[0.3em] bg-white pl-[1.52em] pr-[1.3em]">
              <span className="mt-[0.5em] text-[0.6rem] text-[hsl(233,8%,62%)]">{x.byText}</span>
              <button className="h-fit w-fit scale-y-[105%] text-left text-[0.96rem] leading-[1.2em] text-[hsl(233,26%,24%)] transition hover:text-[#87DEC3]">
                <h3>{x.h3}</h3>
              </button>
              <span className="text-[0.785rem] leading-[1.5em] text-[hsl(233,8%,62%)]">{x.main}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainRow3;

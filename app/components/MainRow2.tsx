import Image from 'next/image';
const MainRow2 = () => {
  return (
    <div className="flex min-h-[42.25em] w-full flex-col bg-[#F4F5F7] py-[6.2em] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex w-[40em] flex-col">
        <h2 className="scale-y-[105%] pl-[0.03em] text-[2.41rem] font-[300] text-[hsl(233,26%,24%)]">
          Why choose Easybank?
        </h2>
        <span className="mt-[1.2em] text-[hsl(233,8%,62%)] xl:scale-y-[105%] xl:text-[1.085rem]">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never
          before.
        </span>
      </div>
      <ul className="mt-[4.6em] flex h-full flex-wrap justify-around gap-x-[2em] gap-y-[5em] text-wrap min-[900px]:justify-between min-[1458px]:gap-0">
        {[
          {
            image: 'images/icon-online.svg',
            h3: 'Online Banking',
            span: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
          },
          {
            image: 'images/icon-budgeting.svg',
            h3: 'Simple Budgeting',
            span: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
          },
          {
            image: 'images/icon-onboarding.svg',
            h3: 'Fast Onboarding',
            span: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
          },
          {
            image: 'images/icon-api.svg',
            h3: 'Open API',
            span: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
          },
        ].map((x) => (
          <li className="flex max-w-[16.06em] flex-col" key={x.h3}>
            <Image className="h-fit w-fit" src={x.image} width={10} height={10} alt="icon" />
            <h3 className="mt-[1.6em] text-[1.45rem] text-[hsl(233,26%,24%)]">{x.h3}</h3>
            <span className="mt-[1.7em] scale-y-[105%] text-[0.97rem] leading-[1.6em] text-[hsl(233,8%,62%)]">
              {x.span}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainRow2;

import Image from 'next/image';
const itemsList = [
  {
    description: 'Check out our most popular courses!',
  },
  {
    image: '../assets/images/icon-animation.svg',
    title: 'Animation',
    description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
  },
  {
    image: '../assets/images/icon-design.svg',
    title: 'Design',
    description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
  },
  {
    image: '../assets/images/icon-photography.svg',
    title: 'Photography',
    description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
  },
  {
    image: '../assets/images/icon-crypto.svg',
    title: 'Crypto',
    description:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
  },
  {
    image: '../assets/images/icon-business.svg',
    title: 'Business',
    description:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
  },
];
const MainSection2 = () => (
  <div className="h-[888px] w-full bg-gradient-to-b from-white to-[#F0F1FF]">
    <ul className="grid min-h-[748px] w-full grid-cols-3 flex-col gap-x-[30px] gap-y-[56px] px-[165px]">
      {itemsList.map((item, index) =>
        index > 0 ? (
          <li key={index} className="flex h-[346px] w-[350px] flex-col">
            {item.image && (
              <Image className="z-10 mb-[-32px] ml-[32px]" width={56} height={56} src={item.image} alt={item.title} />
            )}
            <div className="flex h-[322px] w-[350px] flex-col justify-between gap-[24px] rounded-[15px] bg-white px-[32px] pb-[40px] shadow-[0_15px_50px_1px_rgba(6,22,141,0.1)]">
              <section className="mt-[64px] flex flex-col gap-[24px]">
                <h2 className="HeadingS text-[#13183F]">{item.title}</h2>
                <p className="BodyM text-[#83869A]">{item.description}</p>
              </section>
              <button className="h-[28px] w-[104px] text-[18px] font-bold leading-[28px] text-[#F74780] transition hover:text-[#FFA7C3]">
                Get Started
              </button>
            </div>
          </li>
        ) : (
          <li
            key={index}
            className="HeadingM mt-[24px] h-[322px] w-[350px] rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-[32px] py-[64px] text-white"
          >
            {item.description}
          </li>
        ),
      )}
    </ul>
  </div>
);

export default MainSection2;

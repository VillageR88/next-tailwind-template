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
  <ul className="grid min-h-[888px] w-full grid-cols-3 flex-col bg-gradient-to-b from-white to-[#F0F1FF] px-[165px]">
    {itemsList.map((item, index) =>
      index > 0 ? (
        <li key={index} className="flex h-[346px] w-[350px] flex-col">
          {item.image && <Image className="z-10 mb-[-32px]" width={56} height={56} src={item.image} alt={item.title} />}
          <div className="h-[322px] w-[350px] rounded-[15px] bg-white shadow-xl"></div>
        </li>
      ) : (
        <li
          key={index}
          className="mt-[24px] h-[322px] w-[322px] rounded-[15px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6]"
        ></li>
      ),
    )}
  </ul>
);

export default MainSection2;

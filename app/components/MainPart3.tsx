import Image from 'next/image';
import iconEating from '@/public/assets/images/icon-eating.svg';
import iconExercise from '@/public/assets/images/icon-exercise.svg';
import iconSleep from '@/public/assets/images/icon-sleep.svg';

const listItems = [
  {
    image: iconEating as string,
    title: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    image: iconExercise as string,
    title: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    image: iconSleep as string,
    title: 'Adequate sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const MainPart3 = () => (
  <div className="mt-[96px] flex min-h-[402px] w-full justify-center rounded-[35px] bg-gradient-to-br from-transparent via-[rgba(214,252,254,0.2)] to-[rgba(214,230,254,0.3)] px-[24px]">
    <ul className="mt-[60px] flex w-full max-w-[768px] flex-col justify-center gap-[32px] pl-6 lg:mt-[72px] lg:min-h-[234px] lg:max-w-[1159px] lg:flex-row lg:gap-[40px] lg:pr-6 xl:px-0">
      {listItems.map((item, index) => (
        <li
          key={index}
          className="flex min-h-[234px] max-w-[686px] flex-row items-center gap-[40px] lg:max-w-[365px] lg:flex-col lg:items-start lg:gap-0"
        >
          <Image width={64} height={64} src={item.image} alt="icon-eating" />
          <div className="flex max-h-[101px] flex-col justify-between gap-[24px] lg:max-h-[125px] lg:gap-0">
            <h3 className="Heading3 text-[#253347] lg:mt-[45px]">{item.title}</h3>
            <p className="Body1 text-[#5E6E85] lg:mt-[24px]">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default MainPart3;

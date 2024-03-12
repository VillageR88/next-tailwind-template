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
    <ul className="mt-[72px] flex h-[234px] w-full max-w-[1159px] justify-center gap-[32px] pl-6 xl:pl-0">
      {listItems.map((item, index) => (
        <li key={index} className="flex h-[234px] w-[365px] flex-col">
          <Image width={64} height={64} src={item.image} alt="icon-eating" />
          <h3 className="Heading3 mt-[45px] text-[#253347]">{item.title}</h3>
          <p className="Body1 mt-[24px] text-[#5E6E85]">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default MainPart3;

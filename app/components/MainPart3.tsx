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
    <ul className="mt-[72px] flex h-[234px] w-full max-w-[1159px] justify-center gap-[32px]">
      {listItems.map((item, index) => (
        <li key={index} className="flex h-[234px] w-[365px] flex-col">
          <Image src={item.image} alt="icon-eating" />
          <h3 className="mt-[24px] text-[24px] font-bold leading-[28px] text-[#1E2A32]">{item.title}</h3>
          <p className="mt-[16px] text-[16px] leading-[24px] text-[#1E2A32]">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default MainPart3;

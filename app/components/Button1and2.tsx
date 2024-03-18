import Image from 'next/image';
import arrowRight from '@/public/assets/images/icon-arrow-right.svg';
import arrowLeft from '@/public/assets/images/icon-arrow-left.svg';

const Button1And2 = ({ type }: { type: 1 | 2 }) => {
  const typeItems = {
    1: {
      text: 'OUR LOCATION',
      arrow: arrowRight as string,
      alt: 'arrow right',
      direction: 'flex-row',
    },
    2: {
      text: 'BACK TO HOME',
      arrow: arrowLeft as string,
      alt: 'arrow left',
      direction: 'flex-row-reverse',
    },
  };
  return (
    <button className={`group ${typeItems[type].direction} flex h-[72px] w-[260px]`}>
      <div
        className={`flex h-full w-[204px] items-center justify-center bg-almostBlack font-bigShouldersDisplay text-[20px] font-extrabold tracking-[3.64px] text-white transition group-hover:bg-gold`}
      >
        {typeItems[type].text}
      </div>
      <div className={`flex h-full w-[56px] items-center justify-center bg-gold transition group-hover:bg-almostBlack`}>
        <Image width={8} height={24} src={typeItems[type].arrow} alt="arrow right" />
      </div>
    </button>
  );
};

export default Button1And2;

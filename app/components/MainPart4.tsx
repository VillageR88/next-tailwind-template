import Image from 'next/image';
import imageCompatible from '@/public/assets/images/shared/icon-compatible.svg';
import imageBluetooth from '@/public/assets/images/shared/icon-bluetooth.svg';
import imageBattery from '@/public/assets/images/shared/icon-battery.svg';
import imageLight from '@/public/assets/images/shared/icon-light.svg';

const items = [
  {
    image: imageCompatible as string,
    title: 'HIGHLY COMPATIBLE',
    description:
      'Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.',
  },
  {
    image: imageBluetooth as string,
    title: 'WIRELESS WITH BLUETOOTH',
    description:
      'Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.',
  },
  {
    image: imageBattery as string,
    title: 'HIGH CAPACITY BATTERY',
    description:
      'Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.',
  },
  {
    image: imageLight as string,
    title: 'RGB BACKLIT MODES',
    description:
      'Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.',
  },
];

const MainPart4 = () => (
  <div className="mt-[168px] flex min-h-[323px] w-full max-w-[1110px] justify-between">
    {items.map((item, index) => (
      <div key={index} className="flex size-full max-w-[255px] flex-col gap-[48px]">
        <div className="flex h-[65px] w-[64px] items-center justify-center rounded-[16px] bg-[#F16718]">
          <Image className="size-fit" src={item.image} alt={item.title} />
        </div>
        <section className="flex flex-col gap-[24px]">
          <h3 className="mt-[27px]">{item.title}</h3>
          <p>{item.description}</p>
        </section>
      </div>
    ))}
  </div>
);

export default MainPart4;

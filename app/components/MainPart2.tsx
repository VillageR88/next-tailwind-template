import Image from 'next/image';
import imageMan from '@/public/assets/images/image-man-eating.webp';
import curvedLineLeft from '@/public/assets/images/pattern-curved-line-left.svg';

const MainPart2 = () => (
  <div className="flex size-full flex-col items-center">
    <div className=" flex h-0 w-full max-w-[1160px] justify-end pr-[27px]">
      <Image
        className="mt-[13px] h-[200px] w-[85px]"
        width={85}
        height={200}
        src={curvedLineLeft as string}
        alt="pattern"
      />
    </div>
    <div className="mt-[65px] flex min-h-[533px] w-full max-w-[1080px] justify-between xl:max-w-[1160px]">
      <Image height={533} width={564} src={imageMan} alt="Image of a man eating sushi" priority />
      <div className="mt-[184px] flex h-[309px] w-[465px] flex-col justify-between">
        <h2 className="Heading2 text-[#253347]">What your BMI result means</h2>
        <p className="Body1 text-[#5E6E85]">
          {
            "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week."
          }
        </p>
      </div>
    </div>
  </div>
);

export default MainPart2;

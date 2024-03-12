import Image from 'next/image';
import imageMan from '@/public/assets/images/image-man-eating.webp';
import curvedLineLeft from '@/public/assets/images/pattern-curved-line-left.svg';

const MainPart2 = () => (
  <div className="flex size-full flex-col items-center">
    <div className="hidden h-0 w-full max-w-[1160px] justify-end pr-[27px] min-[1200px]:flex">
      <Image
        className="mt-[13px] h-[200px] w-[85px]"
        width={85}
        height={200}
        src={curvedLineLeft as string}
        alt="pattern"
      />
    </div>
    <div className="mt-[65px] flex min-h-[411px] w-full max-w-[841px] justify-between min-[1200px]:min-h-[533px] min-[1200px]:max-w-[1080px] xl:max-w-[1160px]">
      <Image
        className="h-[411px] w-[435px] min-[1200px]:h-[533px] min-[1200px]:w-[564px]"
        height={533}
        width={564}
        src={imageMan}
        alt="Image of a man eating sushi"
        priority
      />
      <div className="mt-[131px] flex min-h-[342px] w-[311px] flex-col justify-between min-[1200px]:mt-[184px] min-[1200px]:h-[309px] min-[1200px]:w-[465px]">
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

import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import MainForm from './MainForm';

const MainPart1 = () => (
  <div className="ml-[24px] flex min-h-[737px] w-full max-w-[1276px] items-start justify-between self-start">
    <div className="flex size-full min-h-[737px] max-w-[978px] flex-col rounded-b-[35px] bg-gradient-to-br from-transparent to-[#D6E6FE] pl-[116px]">
      <Image className="mt-[75px]" width={64} height={64} src={logo as string} alt="logo" />
      <section className="mt-[127px] flex min-h-[271px] w-full max-w-[564px] flex-col justify-between">
        <h1 className="Heading max-w-[465px] text-[#253347]">Body Mass Index Calculator</h1>
        <p className="Body max-w-[465px] text-[#5E6E85]">
          Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI
          is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall
          health and well-being.
        </p>
      </section>
    </div>
    <div className="mt-[166px]">
      <MainForm />
    </div>
  </div>
);

export default MainPart1;

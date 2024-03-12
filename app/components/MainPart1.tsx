import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';
import MainForm from './MainPart1Form';

const MainPart1 = () => (
  <div className="flex min-h-[737px] w-full max-w-full flex-col items-start justify-between min-[1200px]:max-w-[1276px] min-[1200px]:flex-row min-[1200px]:self-start">
    <div className="flex size-full min-h-[737px] w-full flex-col items-center rounded-b-[35px] bg-gradient-to-br from-transparent via-[rgba(214,252,254,0.3)] to-[#D6E6FE] min-[1200px]:w-[978px] min-[1200px]:items-start min-[1200px]:pl-[90px] min-[1300px]:pl-[100px] min-[1400px]:pl-[116px]">
      <Image className="mt-[75px]" width={64} height={64} src={logo as string} alt="logo" />
      <section className="mt-[127px] flex min-h-[271px] w-full max-w-[564px] flex-col items-center justify-between text-center min-[1200px]:items-stretch min-[1200px]:text-start">
        <h1 className="Heading1 max-w-[465px] text-[#253347]">Body Mass Index Calculator</h1>
        <p className="Body1 max-w-[465px] text-[#5E6E85]">
          Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI
          is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall
          health and well-being.
        </p>
      </section>
    </div>
    <MainForm />
  </div>
);

export default MainPart1;

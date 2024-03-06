import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';

const Section2 = () => (
  <div className="z-10 mt-[321px] px-[165px]">
    <div className="flex h-[600px] w-full justify-between rounded-[12px] bg-[#191826] bg-[url('../public/assets/images/bg-pattern-2.svg')] bg-[43.1%_-30%] bg-no-repeat">
      <Image
        className="ml-[110px] mt-[-213px] h-[642px] w-[312px]"
        width={369}
        height={642}
        src={illustrationApp}
        alt="illustration"
      />
      <div className="mr-[95px] mt-[90px] h-[625px] w-[446px] rounded-[12px] bg-[#FA7453]"></div>
    </div>
  </div>
);

export default Section2;

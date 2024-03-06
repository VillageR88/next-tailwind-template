import Image from 'next/image';
import illustrationApp from '@/public/assets/images/illustration-app.png';

const Section2 = () => (
  <div className="z-10 mt-[321px] px-[165px]">
    <div className="flex h-[600px] w-full rounded-[12px] bg-[#191826] bg-[url('../public/assets/images/bg-pattern-2.svg')] bg-[43.1%_-30%] bg-no-repeat">
      <Image
        className="ml-[110px] mt-[-213px] h-[642px] w-[312px]"
        width={369}
        height={642}
        src={illustrationApp}
        alt="illustration"
      />
    </div>
  </div>
);

export default Section2;

import Image from 'next/image';
import iconGender from '@/public/assets/images/icon-gender.svg';
const items = {
  gender: {
    image: iconGender as string,
    title: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
};

const MainPart4 = () => (
  <div className="mt-[120px] flex min-h-[704px] w-full max-w-[1160px] justify-between">
    <div className="mr-[-365px] flex h-[184px] w-[564px] flex-col justify-between">
      <h2 className="Heading2 text-[#253347]">Limitations of BMI</h2>
      <p className="Body1 text-[#5E6E85]">
        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
        groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial
        to use.
      </p>
    </div>
    <div className="flex h-[704px] w-[961px] flex-col items-end">
      <div className="mr-[99px] flex h-[232px] w-[365px] flex-col justify-between rounded-[16px] p-[32px] shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]">
        <div className="flex items-center gap-[16px]">
          <Image width={32} height={32} src={items.gender.image} alt={items.gender.title} />
          <h3 className="Heading4 text-[#253347]">{items.gender.title}</h3>
        </div>
        <p className="Body1 text-[#5E6E85]">{items.gender.description}</p>
      </div>
    </div>
  </div>
);

export default MainPart4;

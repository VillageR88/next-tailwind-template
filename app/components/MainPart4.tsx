import Image from 'next/image';
import curvedLineRight from '@/public/assets/images/pattern-curved-line-right.svg';
import iconGender from '@/public/assets/images/icon-gender.svg';
import iconAge from '@/public/assets/images/icon-age.svg';
import iconMuscle from '@/public/assets/images/icon-muscle.svg';
import iconPregnancy from '@/public/assets/images/icon-pregnancy.svg';
import iconRace from '@/public/assets/images/icon-race.svg';
const items = {
  gender: {
    image: iconGender as string,
    title: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  age: {
    image: iconAge as string,
    title: 'Age',
    description:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  muscle: {
    image: iconMuscle as string,
    title: 'Muscle',
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  pregnancy: {
    image: iconPregnancy as string,
    title: 'Pregnancy',
    description:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  race: {
    image: iconRace as string,
    title: 'Race',
    description:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
};

const Block = ({
  title,
  description,
  image,
  additionalClass,
}: {
  title: string;
  description: string;
  image: string;
  additionalClass: string;
}) => (
  <div
    className={`${additionalClass} w-fit flex-col rounded-[16px] p-[32px] shadow-[10px_10px_30px_5px_rgba(179,211,241,0.3)] lg:w-[365px] lg:justify-between lg:shadow-[10px_25px_50px_5px_rgba(179,211,241,0.3)]`}
  >
    <div className="flex items-center gap-[16px]">
      <Image width={32} height={32} src={image} alt={title} />
      <h3 className="Heading4 text-[#253347]">{title}</h3>
    </div>
    <p className="Body1 mt-[16px] text-[#5E6E85] lg:mt-0">{description}</p>
  </div>
);

const MainPart4 = () => (
  <div className="mt-[96px] flex min-h-[963px] w-full max-w-[1160px] flex-col items-center lg:mt-[120px] lg:min-h-[704px] lg:flex-row lg:items-start lg:justify-between lg:pr-6 min-[1200px]:p-0">
    <div className="flex min-h-[139px] max-w-[327px] flex-col items-center justify-between gap-[32px] text-center md:max-w-[686px] md:gap-0 md:pl-10 lg:mr-[-365px] lg:min-h-[160px] lg:max-w-[564px] lg:items-start lg:gap-6 lg:text-start min-[1200px]:min-h-[184px] xl:pl-0">
      <h2 className="Heading2 text-[#253347]">Limitations of BMI</h2>
      <p className="Body1 text-[#5E6E85]">
        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
        groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial
        to use.
      </p>
    </div>
    <div className="flex min-h-[704px] max-w-[327px] flex-col items-center md:max-w-[961px] lg:items-end">
      <Block
        additionalClass={'h-[232px] mr-[99px] lg:flex hidden'}
        title={items.gender.title}
        image={items.gender.image}
        description={items.gender.description}
      />
      <div className="hidden h-0 w-full min-[1100px]:block">
        <Image className="ml-[-35px] mt-[19px]" src={curvedLineRight as string} alt="pattern" />
      </div>
      <div className="mt-[32px] hidden gap-[32px] lg:flex">
        <Block
          additionalClass={'flex h-[184px]'}
          title={items.age.title}
          image={items.age.image}
          description={items.age.description}
        />
        <Block
          additionalClass={'flex h-[184px]'}
          title={items.muscle.title}
          image={items.muscle.image}
          description={items.muscle.description}
        />
      </div>
      <div className="mr-[199px] mt-[24px] hidden gap-[32px] lg:flex">
        <Block
          additionalClass="flex h-[232px]"
          title={items.pregnancy.title}
          image={items.pregnancy.image}
          description={items.pregnancy.description}
        />
        <Block
          additionalClass="flex h-[232px]"
          title={items.race.title}
          image={items.race.image}
          description={items.race.description}
        />
      </div>
      <div className="mt-[56px] flex min-h-[768px] max-w-[686px] flex-col items-center gap-[24px] lg:hidden">
        <div className="flex min-h-[232px] flex-col gap-[16px] md:flex-row">
          <Block
            additionalClass={'flex'}
            title={items.gender.title}
            image={items.gender.image}
            description={items.gender.description}
          />
          <Block
            additionalClass={'flex'}
            title={items.age.title}
            image={items.age.image}
            description={items.age.description}
          />
        </div>
        <div className="flex min-h-[256px] flex-col gap-[16px] md:flex-row">
          <Block
            additionalClass={'flex'}
            title={items.muscle.title}
            image={items.muscle.image}
            description={items.muscle.description}
          />
          <Block
            additionalClass={'flex'}
            title={items.pregnancy.title}
            image={items.pregnancy.image}
            description={items.pregnancy.description}
          />
        </div>
        <Block
          additionalClass={'flex max-w-[365px] min-h-[232px]'}
          title={items.race.title}
          image={items.race.image}
          description={items.race.description}
        />
      </div>
    </div>
  </div>
);

export default MainPart4;

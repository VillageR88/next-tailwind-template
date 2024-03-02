import Image from 'next/image';
import backgroundImageDesktop from '../public/assets/images/background-pattern-desktop.svg';
import iconStar from '../public/assets/images/icon-star.svg';
export default function Home() {
  const articleItems = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  return (
    <main className="font-workSans flex min-h-screen flex-col items-center justify-center">
      <Image width={1440} height={320} src={backgroundImageDesktop as string} alt="background image" />
      <div className="flex min-h-[580px] w-full items-start justify-center bg-[hsl(275,100%,97%)]">
        <div className="mt-[-152px] min-h-[564px] w-[600px] rounded-[15px] bg-white px-[40px] pt-[32px]">
          <section className="flex items-center gap-[24px]">
            <Image className="h-fit w-[41px]" width={40} height={41} src={iconStar as string} alt="star icon" />
            <h1>FAQs</h1>
          </section>
          <ul></ul>
        </div>
      </div>
    </main>
  );
}

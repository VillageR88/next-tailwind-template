'use client';
import { useState } from 'react';

const ImageArrow = ({ open }: { open: boolean }) => {
  return (
    <svg
      className={`${open ? 'rotate-180' : 'rotate-0'} transition`}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
    >
      <path
        className="transition"
        fill="none"
        stroke={open ? '#DC6465' : '#5267DF'}
        stroke-width="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  );
};

const MainRow4 = () => {
  const [questionsOpen, setQuestionsOpen] = useState<[boolean, boolean, boolean, boolean]>([
    false,
    false,
    false,
    false,
  ]);
  const items = [
    {
      question: 'What is Bookmark?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ];
  return (
    <div className="flex flex-col items-center bg-white pb-[9em] pt-[7em]">
      <section className="flex w-full flex-col items-center gap-[1.2em] text-center md:w-[33em]">
        <h2 className="text-[1.98rem] font-[500] text-[hsl(229,31%,21%)]">Frequently Asked Questions</h2>
        <p className="text-[0.92rem] leading-[1.6em] text-[hsl(229,8%,60%)] md:text-[1.13rem]">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
        </p>
      </section>
      <ul className="flex w-[35em] flex-col items-center gap-[1.2em] pr-[2em] pt-[3.5em] text-center">
        <div className="h-[1px] w-full bg-[#ddd8d8]"></div>

        {items.map((item, index) => (
          <li key={index} className="flex w-full flex-col items-center justify-between transition-all">
            <button
              className="z-10 flex h-full w-full items-center justify-between transition hover:text-[#DC6465]"
              onClick={() => {
                const newQuestionsOpen = [...questionsOpen];
                newQuestionsOpen[index] = !newQuestionsOpen[index];
                setQuestionsOpen(newQuestionsOpen as [boolean, boolean, boolean, boolean]);
              }}
            >
              <h3
                className={`ml-[1px] w-fit text-[1.13rem] text-[hsl(229,31%,21%)] ${
                  !questionsOpen[index] && 'text-inherit'
                }`}
              >
                {item.question}
              </h3>
              <ImageArrow open={questionsOpen[index]} />
            </button>
            <p
              className={`${
                questionsOpen[index]
                  ? 'mb-[2em] mt-[2em]  text-[#6b6d74]'
                  : 'h-0 -translate-y-[50%] scale-y-0 text-[white] opacity-0'
              } mb-[1em] mr-[-0.3em] scale-y-[105%] transform text-left leading-[2.2em] duration-[0.4s] ease-out`}
            >
              {item.answer}
            </p>

            <div
              className={`${
                questionsOpen[index] ? '' : ''
              } h-[1px] w-full  bg-[#ddd8d8] transition duration-500 ease-in-out`}
            ></div>
          </li>
        ))}
      </ul>
      <button className="mt-[4em] w-fit rounded-[0.5em] border-2 border-[hsl(231,69%,60%)] bg-[hsl(231,69%,60%)] px-[1.7em] py-[0.8em] text-[0.9rem] font-[500] text-[white] transition hover:bg-[white] hover:text-[hsl(231,69%,60%)]">
        More info
      </button>
    </div>
  );
};

export default MainRow4;

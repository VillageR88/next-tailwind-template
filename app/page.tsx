'use client';
import Image from 'next/image';
import { useState } from 'react';
import '@fontsource/epilogue';
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/500.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/epilogue/700.css';

enum DropdownState {
  open = 'open',
  closed = 'closed',
}

enum Names {
  features = 'Features',
  company = 'Company',
  careers = 'Careers',
  about = 'About',
  login = 'Login',
  register = 'Register',
  todoList = 'Todo List',
  calendar = 'Calendar',
  reminders = 'Reminders',
  planing = 'Planing',
  history = 'History',
  outTeam = 'Out Team',
  blog = 'Blog',
  learnMore = 'Learn more',
}

const navSingleLayout = 'flex items-center hover:cursor-pointer';
const navButtonsLayout = 'text-[0.9rem] font-[600] text-mediumGray hover:text-almostBlack';

const TodoList = () => {
  return (
    <div className="flex gap-4 hover:text-almostBlack hover:underline">
      <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
          fill="#726CEE"
        />
      </svg>
      <span className="ml-[-0.1em]">{Names.todoList}</span>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="ml-[-0.1em] flex gap-4 hover:text-almostBlack hover:underline">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
          fill="#4BB1DA"
        />
      </svg>
      <span className="ml-[-0.1em]">{Names.calendar}</span>
    </div>
  );
};

const Reminders = () => {
  return (
    <div className="flex gap-4 hover:text-almostBlack hover:underline">
      <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
          fill="#EDD556"
        />
      </svg>
      <span>{Names.reminders}</span>
    </div>
  );
};

const Planing = () => {
  return (
    <div className="ml-[-0.1em] flex gap-4 hover:text-almostBlack hover:underline">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
          fill="#8E4CB6"
        />
      </svg>
      <span className="ml-[-0.1em]">{Names.planing}</span>
    </div>
  );
};

const NormalButton = ({ name }: { name: Names }) => {
  return (
    <div>
      <span className="hidden hover:text-almostBlack hover:underline md:flex">{name}</span>
      <button className="flex flex-col gap-[0.8em] rounded-[1em] pl-6 pr-6 text-[1.1rem] font-[600] text-mediumGray drop-shadow-2xl hover:text-almostBlack hover:underline md:hidden">
        {name}
      </button>
    </div>
  );
};

const ButtonArrow = ({ name }: { name: Names }) => {
  const [arrow, setArrow] = useState(DropdownState.closed);
  return (
    <div>
      {/*desktop*/}
      <div
        className="hidden items-center gap-1.5 hover:cursor-pointer md:flex"
        onMouseEnter={() => {
          setArrow(DropdownState.open);
        }}
        onMouseLeave={() => {
          setArrow(DropdownState.closed);
        }}
      >
        <span className={`${navButtonsLayout}`}>{name}</span>
        {arrow === DropdownState.closed ? (
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
          </svg>
        ) : (
          <div>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path stroke="hsl(0, 0%, 8%)" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
            </svg>
            {/*dropdownList*/}
            {name === Names.features ? (
              <div className="absolute">
                <canvas className="ml-[-9em] h-[1.3em] w-[10em] bg-transparent"></canvas>
                <div className=" ml-[-9.9em] flex flex-col gap-[0.8em] rounded-[1em] bg-white pb-4 pl-6 pr-6 pt-6 text-[0.9rem] font-[500] text-mediumGray drop-shadow-2xl ">
                  <TodoList />
                  <Calendar />
                  <Reminders />
                  <Planing />
                </div>
              </div>
            ) : (
              <div>
                <div className="absolute">
                  <canvas className="ml-[-4.6em] h-[1.3em] w-[7.2em] bg-transparent"></canvas>
                  <div className=" ml-[-5.1em] flex flex-col gap-[0.8em] rounded-[1em] bg-white pb-4 pl-6 pr-6 pt-6 text-[0.9rem] font-[500] text-mediumGray drop-shadow-2xl ">
                    <NormalButton name={Names.history} />
                    <NormalButton name={Names.outTeam} />
                    <NormalButton name={Names.blog} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/*mobile*/}
      <div className="items-left flex flex-col gap-3 pl-6 hover:cursor-pointer md:hidden">
        {arrow === DropdownState.closed ? (
          <div
            onClick={() => {
              setArrow(DropdownState.open);
            }}
            className="flex items-center gap-3"
          >
            <span className={`${navButtonsLayout} text-[1.1rem]`}>{name}</span>
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
            </svg>
          </div>
        ) : (
          <div>
            <div
              onClick={() => {
                setArrow(DropdownState.closed);
              }}
              className="flex items-center gap-3"
            >
              <span className={`${navButtonsLayout} text-[1.1rem]`}>{name}</span>
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path stroke="hsl(0, 0%, 8%)" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
              </svg>
            </div>
            {/*dropdownList*/}
            {name === Names.features ? (
              <div className="flex flex-col gap-[0.8em] rounded-[1em] pb-4 pl-6 pr-6 pt-6 text-[1.1rem] font-[500] text-mediumGray drop-shadow-2xl ">
                <TodoList />
                <Calendar />
                <Reminders />
                <Planing />
              </div>
            ) : (
              <div className="flex flex-col gap-[0.8em] rounded-[1em] pb-4 pl-6 pr-6 pt-6 text-[1.1rem] font-[500] text-mediumGray drop-shadow-2xl ">
                <NormalButton name={Names.history} />
                <NormalButton name={Names.outTeam} />
                <NormalButton name={Names.blog} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ButtonBurger = () => {
  const [dropdown, setDropdown] = useState(DropdownState.closed);
  {
    return dropdown === DropdownState.closed ? (
      <div className="flex pr-4 md:hidden">
        <button
          onClick={() => {
            setDropdown(DropdownState.open);
          }}
        >
          <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#151515" fillRule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        </button>
      </div>
    ) : (
      <div className="flex md:hidden">
        <canvas className="fixed left-0 top-0 h-screen w-screen bg-almostBlack opacity-70" />
        <div className="fixed right-0 top-0 flex h-full w-2/3 flex-col  bg-almostWhite pr-4 md:hidden">
          <button
            className="fixed right-5 pt-[1.4em]"
            onClick={() => {
              setDropdown(DropdownState.closed);
            }}
          >
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fillRule="evenodd">
                <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
              </g>
            </svg>
          </button>
          <div className="flex flex-col gap-4 pt-16">
            <ButtonArrow name={Names.features} />
            <ButtonArrow name={Names.company} />
            <NormalButton name={Names.careers} />
            <NormalButton name={Names.about} />
          </div>
        </div>
      </div>
    );
  }
};

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-[2em] py-4 font-epilogue md:min-h-screen md:gap-14 md:px-4 md:py-6">
      <nav className="flex w-full flex-row justify-between xl:pr-10">
        {/*navbar left wrapper*/}
        <div className="flex items-center px-4 md:gap-16 md:px-0">
          <Image
            className="mt-2 h-[1.7em] w-[5.3em]"
            src="./images/logo.svg"
            alt="logo"
            height={10}
            width={10}
            priority
          />
          <div className="hidden gap-8 md:flex ">
            <ButtonArrow name={Names.features} />
            <ButtonArrow name={Names.company} />
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>{Names.careers}</span>
            </div>
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>{Names.about}</span>
            </div>
          </div>
        </div>
        {/*navbar right wrapper(desktop)*/}
        <div className="hidden gap-8 md:flex">
          <div className={navSingleLayout}>
            <span className={navButtonsLayout}>{Names.login}</span>
          </div>
          <div className={navSingleLayout}>
            <button
              className={`${navButtonsLayout} rounded-[1em] border-2 border-mediumGray px-5 pb-1.5 pt-2 text-center hover:border-almostBlack`}
            >
              {Names.register}
            </button>
          </div>
        </div>
        {/*navbar right wrapper(mobile)*/}
        <ButtonBurger />
      </nav>
      <main className="flex w-full flex-col-reverse justify-around gap-[2em] md:flex-row xl:pl-[8em]">
        {/*1st col wrapper*/}
        <div className="flex w-full flex-col items-center justify-between text-center md:w-1/2 md:items-start md:whitespace-break-spaces md:text-left">
          <span className="text-[2.2rem] font-[700] leading-[1em] text-almostBlack md:pt-[1em] md:text-[3.5rem] xl:text-[4.8rem]">
            {'Make\nremote work'}
          </span>
          <span className="md:text[0.8rem] lg:text[1rem] max-w-[26em] px-4 pb-[2em] pt-[2em] font-[600] text-mediumGray md:px-0 md:pb-[3em] xl:text-[1.1rem]">
            {
              'Get your team in sync, no matter your location.\nStreamline processes, create team rituals, and watch productivity soar.'
            }
          </span>
          <button
            className={
              'rounded-[1em] border-[1px]  bg-almostBlack px-8 py-3 text-[1.1rem] font-[600] text-almostWhite hover:border-almostBlack hover:bg-almostWhite hover:text-almostBlack md:self-start md:px-6'
            }
          >
            {Names.learnMore}
          </button>{' '}
          <div className="flex w-full items-center justify-between px-4 pt-[2.5em] md:scale-100 md:justify-start md:gap-1 md:px-0 md:pt-[3em] lg:pt-[7em] xl:gap-10">
            <Image
              className="h-[1em] w-[5em] md:h-[1.3em] md:w-[7em]"
              src="./images/client-databiz.svg"
              alt="databiz logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[2em] w-[4em]  md:h-[2.2em] md:w-[4.4em]"
              src="./images/client-audiophile.svg"
              alt="audiophile logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1em] w-[4em]  md:h-[1.3em] md:w-[6em]"
              src="./images/client-meet.svg"
              alt="meet logo"
              height={10}
              width={10}
            />
            <Image
              className="h-[1.4em] w-[5em]  md:h-[1.4em] md:w-[5em]"
              src="./images/client-maker.svg"
              alt="maker logo"
              height={10}
              width={10}
            />
          </div>
        </div>
        {/*2nd col wrapper*/}
        <div className="flex h-full self-center md:w-1/2">
          <Image
            className="hidden h-full w-[30em] md:flex"
            src="./images/image-hero-desktop.png"
            alt="logo"
            height={10}
            width={10}
            priority
          />
          <Image
            className="flex h-full w-full md:hidden"
            src="./images/image-hero-mobile.png"
            alt="logo"
            height={10}
            width={10}
            priority
          />
        </div>
      </main>
    </div>
  );
}

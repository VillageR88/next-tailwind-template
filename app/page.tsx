'use client';
import Image from 'next/image';
import iconSun from './images/icon-sun.svg';
import { useEffect, useState } from 'react';

const TodoBlock = ({ completed, task }: { completed: boolean; task: string }) => {
  return (
    <div className=" flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] pl-[1.5em]">
      <button>
        <div className="h-[1.45em] w-[1.45em] rounded-full outline outline-1 outline-[#37394E]">
          {completed && 'ok'}
        </div>
      </button>
      <span
        className={`${
          !completed ? 'text-[#CACCE3]' : 'text-[#4E5065] line-through'
        } w-[25em] bg-transparent px-2 text-[1.1rem]  placeholder-[#73758A]`}
      >
        {task}
      </span>
    </div>
  );
};

interface TodoJSON {
  completed: boolean;
  task: string;
}

export default function Home() {
  const [dataJSON, setDataJSON] = useState<TodoJSON[]>([]);
  console.log(dataJSON);
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setDataJSON(data as TodoJSON[]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    dataJSON.length > 0 && (
      <main className="font-josefinSans min-h-screen items-center justify-start pt-[4.55em]">
        <div className="flex h-[50em] w-full flex-col items-center justify-start bg-[#181824] text-[#FEFFFE]">
          <div className="h-full w-full bg-[url('./images/bg-desktop-dark.jpg')] bg-top bg-no-repeat"></div>
          <div className="mt-[-45.7em] flex w-[33.8em] flex-col justify-center">
            <div className="flex items-center justify-between">
              <span className="text-[2.45rem] font-[700] tracking-[0.4em]">TODO</span>
              <button>
                <Image className="h-fit pb-[0.5em]" src={iconSun as string} alt="icon-sun" />
              </button>
            </div>
            <div className="mt-[1.9em] flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] pl-[1.5em]">
              <button>
                <div className="h-[1.45em] w-[1.45em] rounded-full outline outline-1 outline-[#37394E]"></div>
              </button>
              <input
                className="mt-[0.3em] w-[25em] bg-transparent px-2 text-[1.1rem] text-[#CACCE3] placeholder-[#73758A]"
                placeholder="Create a new todo..."
                type="text"
              />
            </div>
            <div></div>
            <div className="mt-[1.5em] w-full">
              {dataJSON.map((x, i) => (
                <div key={i} className="flex flex-col">
                  <TodoBlock completed={x.completed} task={x.task} />
                  <div className="h-[1px] w-full bg-[#34364C]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  );
}

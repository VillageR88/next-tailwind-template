'use client';
import Image from 'next/image';
import iconCheck from './images/icon-check.svg';
import iconCross from './images/icon-cross.svg';
import iconSun from './images/icon-sun.svg';
import { useEffect, useState } from 'react';

interface TodoJSON {
  completed: boolean;
  task: string;
}

export default function Home() {
  const [dataJSON, setDataJSON] = useState<TodoJSON[]>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
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
  useEffect(() => {
    if (dataJSON.length > 0 && !firstLoad) setFirstLoad(true);
  }, [dataJSON.length, firstLoad]);
  const [active, setActive] = useState<number>(0);

  const TodoBlock = ({
    completed,
    task,
    buttonCheckClick,
    buttonCrossCLick,
  }: {
    completed: boolean;
    task: string;
    buttonCheckClick(): void;
    buttonCrossCLick(): void;
  }) => {
    const [xIsVisible, setXIsVisible] = useState<boolean>(false);
    return (
      <div
        onMouseEnter={() => {
          setXIsVisible(true);
        }}
        onMouseLeave={() => {
          setXIsVisible(false);
        }}
        className=" flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] px-[1.5em]"
      >
        <button onClick={buttonCheckClick}>
          <div
            className={`${
              completed && 'bg-gradient-to-br hover:outline-offset-2 hover:outline-[#CACCE3]'
            } flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br`}
          >
            {completed ? (
              <Image src={iconCheck as string} alt="check" />
            ) : (
              <div className="h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"></div>
            )}
          </div>
        </button>
        <span
          className={`${
            !completed ? 'text-[#CACCE3]' : 'text-[#4E5065] line-through'
          } w-[25em] bg-transparent px-2 text-[1.1rem]  placeholder-[#73758A]`}
        >
          {task}
        </span>
        {xIsVisible && (
          <button onClick={buttonCrossCLick}>
            <Image src={iconCross as string} alt="delete Task" />
          </button>
        )}
      </div>
    );
  };
  return (
    firstLoad && (
      <main className="flex min-h-screen flex-col items-center justify-center font-josefinSans">
        <div className="h-[18.8em] w-full items-center bg-[url('./images/bg-desktop-dark.jpg')] bg-top bg-no-repeat"></div>
        <div className="flex min-h-[31.2em] w-full flex-col items-center bg-[#181824] text-[#FEFFFE]">
          <div className="mt-[-14.4em] w-[33.8em] flex-col justify-center">
            <div className="flex items-center justify-between">
              <span className="text-[2.45rem] font-[700] tracking-[0.4em]">TODO</span>
              <button>
                <Image className="h-fit pb-[0.5em]" src={iconSun as string} alt="icon-sun" />
              </button>
            </div>
            <div className="mt-[1.9em] flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] pl-[1.5em]">
              <button
                onClick={() => {
                  if (inputText === '') return;
                  dataJSON.push({ completed: false, task: inputText });
                  setInputText('');
                }}
              >
                <div className="flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br ">
                  <div className="h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"></div>
                </div>
              </button>
              <input
                value={inputText}
                className="mt-[0.3em] w-[25em] bg-transparent px-2 text-[1.1rem] text-[#CACCE3] placeholder-[#73758A]"
                placeholder="Create a new todo..."
                type="text"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
            </div>
            <div></div>
            <div className="mt-[1.5em] flex w-full flex-col">
              {dataJSON.map((x, i) => (
                <div key={i} className="flex flex-col">
                  <TodoBlock
                    buttonCheckClick={() => {
                      setDataJSON((value) => {
                        const newValue = [...value];
                        newValue[i] = { ...newValue[i], completed: !newValue[i].completed };
                        return newValue;
                      });
                    }}
                    buttonCrossCLick={() => {
                      setDataJSON((value) => {
                        const newValue = [...value];
                        newValue.splice(i, 1);
                        return newValue;
                      });
                    }}
                    completed={x.completed}
                    task={x.task}
                  />
                  <div className="h-[1px] w-full bg-[#34364C]"></div>
                </div>
              ))}
              <div className="flex h-[3em] w-full items-center justify-between bg-[#25273C]  px-6 text-[#62647D]">
                <span className="text-[0.9rem]">{dataJSON.filter((x) => !x.completed).length} items left</span>
                <div className="flex gap-[3.3em]">
                  <div className="flex gap-[1em]">
                    {['All', 'Active', 'Completed'].map((x, i) => (
                      <button
                        onClick={() => {
                          setActive(i);
                        }}
                        key={i}
                        className={`${
                          i === active ? 'text-[#5480D8]' : 'hover:text-[#CACCE3]'
                        } text-[0.9rem] font-[600] `}
                      >
                        {x}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setDataJSON((value) => {
                        return [...value.filter((x) => !x.completed)];
                      });
                    }}
                    className="text-[0.9rem] hover:text-[#CACCE3]"
                  >
                    Clear Completed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}

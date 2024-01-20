'use client';
import Image from 'next/image';
import iconCheck from './images/icon-check.svg';
import iconCross from './images/icon-cross.svg';
import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg';
import { useEffect, useRef, useState } from 'react';

interface TodoJSON {
  completed: boolean;
  task: string;
}

enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

const composition = {
  [Theme.Light]: { background: "bg-[url('./images/bg-desktop-light.jpg')]", icon: iconMoon as string },
  [Theme.Dark]: { background: "bg-[url('./images/bg-desktop-dark.jpg')]", icon: iconSun as string },
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const [dataJSON, setDataJSON] = useState<TodoJSON[]>([]);
  const dataJSONDivRef = useRef<HTMLDivElement | null>(null);
  const dataJSONRefIndex = useRef<number | null>(null);
  const [mouseHoverReference, setMouseHoverReference] = useState<number | null>(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const dragImageRef2 = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (inputText.length > 40) setInputText(inputText.slice(0, 40));
  }, [inputText]);

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) setIsMobile(true);
    else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (dataJSONRefIndex.current !== null && mouseHoverReference !== null) {
      if (mouseHoverReference !== dataJSONRefIndex.current) {
        if (mouseHoverReference < dataJSONRefIndex.current) {
          setDataJSON([
            ...dataJSON.slice(0, mouseHoverReference),
            dataJSON[dataJSONRefIndex.current],
            ...dataJSON.slice(mouseHoverReference, dataJSONRefIndex.current),
            ...dataJSON.slice(dataJSONRefIndex.current + 1),
          ]);
        } else {
          setDataJSON([
            ...dataJSON.slice(0, dataJSONRefIndex.current),
            ...dataJSON.slice(dataJSONRefIndex.current + 1, mouseHoverReference + 1),
            dataJSON[dataJSONRefIndex.current],
            ...dataJSON.slice(mouseHoverReference + 1),
          ]);
        }
      }
      dataJSONRefIndex.current = mouseHoverReference;
    }
  }, [dataJSON, mouseHoverReference]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('mouseup', () => {
      setDragging(false);
      document.body.style.cursor = 'default';
    });
    return () => {
      window.removeEventListener('mouseup', () => {
        setDragging(false);
        document.body.style.cursor = 'default';
      });
    };
  }, [dragging, isMobile]);

  useEffect(() => {
    if (dragging) {
      const handleMouseMove = (e: MouseEvent) => {
        if (dragImageRef2.current) {
          dragImageRef2.current.style.top = `${e.clientY - 30}px`;

          if (dataJSONDivRef.current && dataJSONDivRef.current.getBoundingClientRect().top + 20 > e.clientY)
            dragImageRef2.current.style.top = `${dataJSONDivRef.current.getBoundingClientRect().top}px`;

          if (dataJSONDivRef.current && dataJSONDivRef.current.getBoundingClientRect().bottom + 10 < e.clientY + 100)
            dragImageRef2.current.style.top = `${dataJSONDivRef.current.getBoundingClientRect().bottom - 120}px`;
          //q: help me with dataJSONDivRef.current?.getBoundingClientRect()?.bottom
        }
        console.log(e.clientY + 100);
        console.log(dataJSONDivRef.current?.getBoundingClientRect()?.bottom);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (dragImageRef2.current) document.body.removeChild(dragImageRef2.current);
        dataJSONRefIndex.current = null;
      };
    }
  }, [dragging]);

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
  enum Mode {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed',
  }
  const [mode, setMode] = useState<Mode>(Mode.All);

  const TodoBlock = ({
    completed,
    task,
    buttonCheckClick,
    buttonCrossCLick,
    classExtension,
    index,
  }: {
    completed: boolean;
    task: string;
    buttonCheckClick(): void;
    buttonCrossCLick(): void;
    classExtension: string;
    index: number;
  }) => {
    const dragImageRef = useRef<HTMLDivElement | null>(null);

    return (
      <div>
        <div
          style={{ visibility: dragging && dataJSONRefIndex.current === index ? 'hidden' : 'visible' }}
          ref={dragImageRef}
          draggable
          onMouseEnter={() => {
            setMouseHoverReference(index);
          }}
          onDragStart={(e) => {
            e.preventDefault();
            //if (isMobile) return;
            dataJSONRefIndex.current = index;
            if (dragImageRef.current) {
              dragImageRef2.current = dragImageRef.current.cloneNode(true) as HTMLDivElement;
              dragImageRef2.current.style.position = 'fixed';
              dragImageRef2.current.style.left = screen.width > 768 ? 'calc(50% - 15.5em)' : 'calc(50% - 15.5em)';
              dragImageRef2.current.style.width = '30.8em';
              dragImageRef2.current.style.height = 'full';
              dragImageRef2.current.style.boxShadow = '0 0 0.5em 0.1em #000000';
              dragImageRef2.current.style.color = '#CACCE3';
              dragImageRef2.current.style.fontFamily = 'Josefin Sans';
              dragImageRef2.current.style.fontSize = '1.1rem';
              dragImageRef2.current.style.fontWeight = 'normal';
              dragImageRef2.current.style.userSelect = 'none';
              dragImageRef2.current.style.pointerEvents = 'none';
              document.body.appendChild(dragImageRef2.current);
              document.body.style.cursor = 'grabbing';
              setDragging(true);
            }
          }}
          className={`${classExtension} self h-[4em] w-full items-center gap-[1em] bg-[#25273C] px-[1.5em]`}
        >
          <button className=" select-none" onClick={buttonCheckClick}>
            <div
              className={`${
                completed && 'bg-gradient-to-br hover:outline-offset-2 hover:outline-[#CACCE3]'
              } flex h-[1.45em]  w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br`}
            >
              {completed ? (
                <Image src={iconCheck as string} alt="check" priority unoptimized />
              ) : (
                <div className="h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"></div>
              )}
            </div>
          </button>
          <span
            className={`${
              !completed ? 'text-[#CACCE3]' : 'text-[#4E5065] line-through'
            } w-full select-none bg-transparent px-2 text-[1.1rem] placeholder-[#73758A] md:w-[25em]`}
          >
            {task}
          </span>
          {mouseHoverReference === index && (
            <button className="select-none" onClick={buttonCrossCLick}>
              <Image src={iconCross as string} alt="delete Task" />
            </button>
          )}
        </div>
        <div
          onMouseEnter={() => {
            setMouseHoverReference(index);
          }}
          className={`${!dragging && 'pointer-events-none'} absolute left-0 mt-[-4em] h-[4em] w-screen`}
        ></div>
      </div>
    );
  };
  return (
    firstLoad && (
      <main className="flex min-h-screen flex-col items-center justify-center font-josefinSans">
        <div className={`h-[18.8em] w-full items-center ${composition[theme].background} bg-top bg-no-repeat`}></div>
        <div className="flex min-h-[31.2em] w-full flex-col items-center bg-[#181824] text-[#FEFFFE]">
          <div className="mt-[-14.4em] w-full flex-col justify-center md:w-[33.8em]">
            <div className="flex select-none items-center justify-between">
              <span draggable={false} className="pointer-events-none text-[2.45rem] font-[700] tracking-[0.4em]">
                TODO
              </span>
              <button
                onClick={() => {
                  setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
                }}
                className={`${dragging && 'pointer-events-none'}`}
              >
                <Image draggable={false} className="h-fit pb-[0.5em]" src={composition[theme].icon} alt="icon-sun" />
              </button>
            </div>
            <form
              onClick={() => {
                inputRef.current && inputRef.current.focus();
              }}
              className="mt-[1.9em] flex h-[4em] w-full items-center gap-[1em] bg-[#25273C] pl-[1.5em]"
              onSubmit={(e) => {
                e.preventDefault();
                if (inputText === '') return;
                dataJSON.push({ completed: false, task: inputText });
                setInputText('');
              }}
            >
              <button className={`${dragging && 'pointer-events-none'}`} type="submit">
                <div className="flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 outline-[#37394E] hover:bg-gradient-to-br ">
                  <div className="h-[1.29em] w-[1.29em] rounded-full bg-[#25273C]"></div>
                </div>
              </button>
              <input
                disabled={dragging}
                value={inputText}
                className={`${
                  dragging && 'pointer-events-none'
                } mt-[0.3em] w-[25em] bg-transparent px-2 text-[1.1rem] text-[#CACCE3] placeholder-[#73758A] outline-none`}
                placeholder="Create a new todo..."
                type="text"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
            </form>
            <div ref={dataJSONDivRef} className="mt-[1.5em] flex w-full flex-col transition duration-300">
              {dataJSON.map((x: TodoJSON, i: number) => (
                <div key={i} className="flex flex-col">
                  <TodoBlock
                    index={i}
                    classExtension={
                      mode === Mode.All
                        ? 'flex'
                        : mode === Mode.Active
                          ? dataJSON[i].completed
                            ? 'hidden'
                            : 'flex'
                          : dataJSON[i].completed
                            ? 'flex'
                            : 'hidden'
                    }
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
              <div className="flex h-[3em] w-full select-none items-center justify-between bg-[#25273C]  px-6 text-[#62647D]">
                <span className="text-[0.9rem]">{dataJSON.filter((x) => !x.completed).length} items left</span>
                <div className={`${dragging && 'pointer-events-none'} flex gap-[3.3em]`}>
                  <div className="flex gap-[1em]">
                    {[Mode.All, Mode.Active, Mode.Completed].map((x) => (
                      <button
                        onClick={() => {
                          setMode(x);
                        }}
                        key={x}
                        className={`${
                          x === mode ? 'text-[#5480D8]' : 'hover:text-[#CACCE3]'
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

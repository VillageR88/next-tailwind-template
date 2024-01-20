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

enum Mode {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

const composition = {
  [Theme.Light]: {
    placeholder: 'placeholder-[#98979D]',
    textInput: 'text-[#3A393D]',
    text1: 'text-[#5A586E]',
    text2: 'text-[#BFBEC3]',
    text3: 'text-[#B3B2BA]',
    textBottom: 'text-[#93929A]',
    textHover: 'hover:text-[#646578]',
    backgroundImage: "sm:bg-[url('./images/bg-desktop-light.jpg')] bg-[url('./images/bg-mobile-light.jpg')]",
    icon: iconMoon as string,
    background1Color: 'bg-[#FAFAFA]',
    background2Color: 'bg-[#FFFFFF]',
    lineColor: 'bg-[#E9E8EC]',
    outlineColor: 'outline-[#d7d7d7]',
    hoverOutlineColor: 'hover:outline-black',
  },
  [Theme.Dark]: {
    placeholder: 'placeholder-[#73758A]',
    textInput: 'text-[#CACCE3]',
    text1: 'text-[#CACCE3]',
    text2: 'text-[#4E5065]',
    text3: 'text-[#62647D]',
    textBottom: 'text-[#50516D]',
    textHover: 'hover:text-[#CACCE3]',
    backgroundImage: "sm:bg-[url('./images/bg-desktop-dark.jpg')] bg-[url('./images/bg-mobile-dark.jpg')]",
    icon: iconSun as string,
    background1Color: 'bg-[#181824]',
    background2Color: 'bg-[#25273C]',
    lineColor: 'bg-[#34364C]',
    outlineColor: 'outline-[#37394E]',
    hoverOutlineColor: 'hover:outline-[#CACCE3]',
  },
};

export default function Home() {
  const [dataJSON, setDataJSON] = useState<TodoJSON[]>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  useEffect(() => {
    const savedJSON = localStorage.getItem('savedJSON');
    if (savedJSON) setDataJSON(JSON.parse(savedJSON) as TodoJSON[]);
    else
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
    if (dataJSON.length > 0) localStorage.setItem('savedJSON', JSON.stringify(dataJSON));
  }, [dataJSON]);

  useEffect(() => {
    if (dataJSON.length > 0 && !firstLoad) setFirstLoad(true);
  }, [dataJSON.length, firstLoad]);

  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    {
      const savedTheme = localStorage.getItem('preferredTheme');
      console.log(savedTheme);

      if (savedTheme && (savedTheme === 'Light' || savedTheme === 'Dark')) setTheme(savedTheme as unknown as Theme);
      else {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('preferredTheme');
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme(Theme.Dark);
            localStorage.setItem('preferredTheme', Theme.Dark);
          } else {
            setTheme(Theme.Light);
            localStorage.setItem('preferredTheme', Theme.Light);
          }
        }
      }
    }
  }, []);

  const inputRef = useRef<HTMLDivElement | null>(null);
  const dataJSONDivRef = useRef<HTMLDivElement | null>(null);
  const dataJSONRefIndex = useRef<number | null>(null);
  const [mouseHoverReference, setMouseHoverReference] = useState<number | null>(null);
  const [inputText, setInputText] = useState<string>('');
  const dragImageRef2 = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>(Mode.All);

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
      theme !== null && (
        <div>
          <div
            style={{
              visibility: dragging && dataJSONRefIndex.current === index ? 'hidden' : 'visible',
              transition: 'visibility 0.3s',
            }}
            ref={dragImageRef}
            draggable
            onMouseEnter={() => {
              setMouseHoverReference(index);
            }}
            onDragStart={(e) => {
              e.preventDefault();
              dataJSONRefIndex.current = index;
              if (dragImageRef.current) {
                dragImageRef2.current = dragImageRef.current.cloneNode(true) as HTMLDivElement;
                dragImageRef2.current.style.left = window.innerWidth > 768 ? 'calc(50% - 15.4em)' : '0';
                dragImageRef2.current.style.height = 'full';
                dragImageRef2.current.style.paddingInline = '1.5em';
                dragImageRef2.current.style.boxShadow = '0 0 0.5em 0.1em #000000';
                dragImageRef2.current.style.color = '#CACCE3';
                dragImageRef2.current.style.fontFamily = 'Josefin Sans';
                dragImageRef2.current.style.fontSize = '1.1rem';
                dragImageRef2.current.style.fontWeight = 'normal';
                dragImageRef2.current.style.userSelect = 'none';
                dragImageRef2.current.style.pointerEvents = 'none';
                dragImageRef2.current.classList.add('w-[calc(100%-1.98rem)]');
                dragImageRef2.current.classList.add('md:w-[30.8em]');
                dragImageRef2.current.classList.add('self-center');
                dragImageRef2.current.classList.add('fixed');
                dragImageRef2.current.classList.add('md:ml-0');
                dragImageRef2.current.classList.add('ml-4');
                document.body.appendChild(dragImageRef2.current);
                document.body.style.cursor = 'grabbing';
                setDragging(true);
              }
            }}
            className={`${classExtension} h-[4em] w-full items-center gap-[1em] ${
              composition[theme].background2Color
            } px-[1.5em] ${index === 0 && 'rounded-t-[0.3em]'}`}
          >
            <button className=" select-none" onClick={buttonCheckClick}>
              <div
                className={`${
                  completed &&
                  'bg-gradient-to-br transition hover:outline-offset-2'
                    .concat(' ')
                    .concat(composition[theme].hoverOutlineColor)
                } 
            
              flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 ${
                composition[theme].outlineColor
              } transition hover:bg-gradient-to-br`}
              >
                {completed ? (
                  <Image src={iconCheck as string} alt="check" priority unoptimized />
                ) : (
                  <div
                    className={`h-[1.29em] w-[1.29em] rounded-full ${composition[theme].background2Color} transition`}
                  ></div>
                )}
              </div>
            </button>
            <span
              className={`${
                !completed ? composition[theme].text1 : composition[theme].text2.concat(' ').concat('line-through')
              } w-full select-none break-words bg-transparent px-2 text-[1.1rem] transition md:w-[25em]`}
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
      )
    );
  };
  return (
    firstLoad &&
    theme !== null && (
      <main className="flex min-h-screen w-full flex-col items-center justify-center font-josefinSans">
        <div
          className={`h-[10em] w-full items-center bg-cover md:h-[18.8em] ${composition[theme].backgroundImage} bg- bg-top bg-no-repeat md:bg-auto`}
        ></div>
        <div
          className={`flex min-h-[31.2em] w-full flex-col items-center ${composition[theme].background1Color} text-[#FEFFFE] transition`}
        >
          <div className="mt-[-8em] w-full flex-col justify-center px-4 md:mt-[-14.4em] md:w-[33.8em] md:px-0">
            <div className="flex select-none items-center justify-between pr-2 md:pl-0 md:pr-0">
              <span draggable={false} className="pointer-events-none text-[2.45rem] font-[700] tracking-[0.4em]">
                TODO
              </span>
              <button
                onClick={() => {
                  localStorage.setItem('preferredTheme', theme === Theme.Dark ? Theme.Light : Theme.Dark);
                  setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
                }}
                className={`${dragging && 'pointer-events-none'}`}
              >
                <Image
                  draggable={false}
                  className="h-fit pb-[0.5em] transition"
                  src={composition[theme].icon}
                  alt="icon-sun"
                />
              </button>
            </div>
            <form
              onClick={() => {
                inputRef.current && inputRef.current.focus();
              }}
              className={`${
                theme === Theme.Dark
                  ? 'shadow-[0_20px_30px_0px_rgba(0,0,0,0.3)]'
                  : 'shadow-[0_20px_30px_0px_rgba(141,120,240,0.7)]'
              } mt-[1.9em] flex h-[4em] w-full items-center gap-[1em] ${
                composition[theme].background2Color
              } rounded-[0.3em] pl-[1.5em] transition`}
              onSubmit={(e) => {
                e.preventDefault();
                if (inputText === '') return;
                dataJSON.push({ completed: false, task: inputText });
                setInputText('');
              }}
            >
              <button className={`${dragging && 'pointer-events-none'}`} type="submit">
                <div
                  className={`flex h-[1.45em] w-[1.45em] items-center justify-center rounded-full from-[#6ABFFB] to-[#A373E8] outline outline-1 ${composition[theme].outlineColor} transition hover:bg-gradient-to-br`}
                >
                  <div
                    className={`h-[1.29em] w-[1.29em] rounded-full ${composition[theme].background2Color} transition`}
                  ></div>
                </div>
              </button>
              <input
                disabled={dragging}
                value={inputText}
                className={`${
                  dragging && 'pointer-events-none'
                } mt-[0.3em] w-[25em] bg-transparent px-2 text-[1.1rem] ${composition[theme].textInput} ${
                  composition[theme].placeholder
                } outline-none transition`}
                placeholder="Create a new todo..."
                type="text"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
            </form>
            <div
              ref={dataJSONDivRef}
              className={`mt-[1.5em] flex w-full flex-col ${
                theme === Theme.Dark
                  ? 'shadow-[0_30px_50px_-0px_rgba(0,0,0,0.4)]'
                  : 'shadow-[0_30px_50px_-0px_rgba(0,0,0,0.07)]'
              } transition `}
            >
              {dataJSON.map((x: TodoJSON, i: number) => (
                <div key={i} className="flex flex-col transition">
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
                  <div className={`h-[1px] w-full ${composition[theme].lineColor} transition`}></div>
                </div>
              ))}
              <div
                className={`flex h-[3em] w-full select-none items-center justify-between rounded-b-[0.3em] px-6 ${composition[theme].background2Color} px-1 md:px-6 ${composition[theme].text3} transition`}
              >
                <span className="text-[0.9rem]">{dataJSON.filter((x) => !x.completed).length} items left</span>
                <div className={`${dragging && 'pointer-events-none'} flex gap-[3.3em]`}>
                  <div className="hidden gap-[0.9em] md:flex">
                    {[Mode.All, Mode.Active, Mode.Completed].map((x) => (
                      <button
                        onClick={() => {
                          setMode(x);
                        }}
                        key={x}
                        className={`${
                          x === mode ? 'text-[#5480D8]' : composition[theme].textHover
                        } text-[0.9rem] font-[700] transition`}
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
                    className={`text-[0.9rem] transition ${composition[theme].textHover}`}
                  >
                    Clear Completed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:hidden">
            <div
              className={`mt-4 flex h-[3em] w-full items-center justify-center rounded-[0.3em] ${
                composition[theme].background2Color
              } ${
                theme === Theme.Dark
                  ? 'shadow-[0_30px_50px_-0px_rgba(0,0,0,0.4)]'
                  : 'shadow-[0_30px_50px_-0px_rgba(0,0,0,0.07)]'
              } ${composition[theme].text3} transition`}
            >
              <div className="flex gap-[1em]">
                {[Mode.All, Mode.Active, Mode.Completed].map((x) => (
                  <button
                    onClick={() => {
                      setMode(x);
                    }}
                    key={x}
                    className={`${
                      x === mode ? 'text-[#5480D8]' : composition[theme].textHover
                    } text-[0.9rem] font-[700] transition`}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <span className={`mt-[3.6em] text-[0.85rem] ${composition[theme].textBottom} pb-[3em]`}>
            Drag and drop to reorder list
          </span>
        </div>
      </main>
    )
  );
}

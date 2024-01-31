'use client';
import Image from 'next/image';
import Chevron_left_font_awesome from '../public/images/Chevron_left_font_awesome.svg';
import Chevron_right from '../public/images/Feather-arrows-chevron-right.svg';
import avatar from '../public/images/avatar.jpg';
import dogImage1 from '../public/images/dog-image-1.jpg';
import dogImage2 from '../public/images/dog-image-2.jpg';
import dogImage3 from '../public/images/dog-image-3.jpg';
import { useEffect, useMemo, useState, useRef } from 'react';
export default function Home() {
  const [chat1Visible, setChat1Visible] = useState<boolean>(false);
  const [chat2Visible, setChat2Visible] = useState<boolean>(false);
  const [chat3Visible, setChat3Visible] = useState<boolean>(false);
  const [chat4Visible, setChat4Visible] = useState<boolean>(false);
  const [chat5Visible, setChat5Visible] = useState<boolean>(false);
  const [chat6Visible, setChat6Visible] = useState<boolean>(false);
  const [chat7Visible, setChat7Visible] = useState<boolean>(false);
  const [chat8Visible, setChat8Visible] = useState<boolean>(false);
  const [shortBreak, setShortBreak] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputText, setInputText] = useState<string>('');
  const [textState, setTextState] = useState<number>(1);
  const messageSelected = useMemo(() => {
    return {
      1: 'That sounds great. I’d be happy with that.',
      2: 'Could you send over some pictures of your dog, please?',
      3: 'Here are a few pictures. She’s a happy girl!',
      4: 'Can you make it?',
      5: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
    };
  }, []);
  useEffect(() => {
    if (inputRef.current) inputRef.current.scrollTo(1000, 0);
  });

  useEffect(() => {
    if (shortBreak) {
      setTimeout(() => {
        setShortBreak(false);
      }, 1000);
      return;
    }
    if (textState > 5) {
      setTimeout(() => {
        setChat7Visible(true);
      }, 2000);
      setTimeout(() => {
        setChat8Visible(true);
      }, 3000);
      setTimeout(() => {
        setTextState(1);
        setChat1Visible(false);
        setChat2Visible(false);
        setChat3Visible(false);
        setChat4Visible(false);
        setChat5Visible(false);
        setChat6Visible(false);
        setChat7Visible(false);
        setChat8Visible(false);
      }, 10000);
      return;
    }
    if (
      (inputText.length === 18 && textState === 1) ||
      (inputText.length === 45 && textState === 2) ||
      (textState === 5 && (inputText.length === 19 || inputText.length === 48))
    ) {
      setTimeout(() => {
        setInputText((prev: string) => prev + (messageSelected as unknown as string[])[textState][inputText.length]);
      }, 400);
      return;
    }

    if (textState === 3) {
      setTimeout(() => {
        setChat3Visible(true);
        setChat4Visible(true);
        setInputText('');
        setTextState(4);
        setShortBreak(true);
      }, 5000);
      return;
    }
    if (textState === 4) {
      setTimeout(() => {
        setChat5Visible(true);
        setInputText('');
        setTextState(5);
        setShortBreak(true);
      }, 2000);
      return;
    }

    const interval = setInterval(() => {
      if (inputText.length < (messageSelected as unknown as string[])[textState].length) {
        setInputText((prev: string) => prev + (messageSelected as unknown as string[])[textState][inputText.length]);
      } else if (textState === 1 && !chat1Visible) {
        setChat1Visible(true);
        setInputText('');
        setTextState(2);
        setShortBreak(true);
      } else if (textState === 2 && !chat2Visible) {
        setChat2Visible(true);
        setInputText('');
        setTextState(3);
        setShortBreak(true);
      } else if (textState === 5 && !chat6Visible) {
        setChat6Visible(true);
        setInputText('');
        setTextState(6);
        setShortBreak(true);
      }
    }, 70);
    return () => {
      clearInterval(interval);
    };
  }, [
    chat1Visible,
    chat2Visible,
    chat3Visible,
    chat5Visible,
    chat6Visible,
    inputText.length,
    messageSelected,
    shortBreak,
    textState,
  ]);

  const ChatTextLeft = ({ text, visibility }: { text: string; visibility: boolean }) => {
    return (
      <div
        className={`${
          !visibility && 'invisible'
        } mt-[1em] max-w-[16em] self-start rounded-[1em] rounded-bl-[0.6em] bg-[#EDE5F4] px-[1em] py-[0.65em] leading-[1.4em]`}
      >
        <span className="text-[hsl(276,55%,52%)]">{text}</span>
      </div>
    );
  };
  const ChatTextRight = ({ text, visibility }: { text: string; visibility: boolean }) => {
    return (
      <div
        className={`${
          !visibility && 'invisible'
        } mt-[1em] max-w-[16em] self-end rounded-[1em] rounded-br-[0.6em] bg-[#FFFFFF] px-[1em] py-[0.65em] leading-[1.4em]`}
      >
        <span className="text-[hsl(240,1%,32%)]">{text}</span>
      </div>
    );
  };
  const Offer = ({ time, price, visibility }: { time: string; price: string; visibility: boolean }) => {
    return (
      <div
        className={`${
          !visibility && 'invisible'
        } mt-[1em] flex w-[20em] items-center justify-between self-start rounded-[1.5em] rounded-bl-[0.4em] bg-gradient-to-r from-[hsl(293,100%,63%)] to-[hsl(264,100%,61%)] px-[1em] py-[1em] leading-[1.4em]`}
      >
        <div className="flex h-[2em] items-center gap-[1em]">
          <div className="h-[1.5em] w-[1.5em] rounded-full border border-[#ed7afc]"></div>
          <span className="text-[0.45rem] text-[#eec8ee]">{time}</span>
        </div>
        <div className="mr-[1em] flex items-center">
          <span className="text-[0.75rem] font-[700] text-[#FFDFFF]">{price}</span>
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-rubik">
      <div className="relative flex h-[57em] w-full justify-between bg-[#FAFAFA] md:h-[50em]">
        <div className="absolute flex h-full flex-col  items-center justify-center gap-10 px-4 py-10 sm:gap-[3em] md:inset-0 md:ml-[3em] md:flex-row md:gap-[6em] md:px-10 md:py-0 lg:ml-[5em] xl:ml-[6.6em] xl:gap-[7.8em]">
          <div className="xs:w-auto xs:min-w-[15.45em] flex w-[16em] items-center justify-center rounded-[2em] bg-[#FFFFFF] px-[0.6em] pb-[0.6em] pt-[0.7em] shadow-2xl md:h-[31.5em]">
            <div className="flex h-full w-[99.5%] flex-col items-center justify-center rounded-[1.2em] bg-[#F5F3F8]">
              <div className="flex h-[4.8em] w-full flex-col items-center rounded-[0.3em] rounded-t-[1.2em] bg-gradient-to-r from-[hsl(264,100%,61%)] to-[hsl(293,100%,63%)]">
                <div className="h-[1.55em] w-[8em] rounded-b-[0.8em] bg-[#FFFFFF]"></div>
                <div className="flex h-full w-full items-center justify-between pl-2.5 pr-2">
                  <div className="flex items-center gap-1">
                    <Image
                      className="h-fit w-[0.8em] scale-x-[65%] select-none"
                      src={Chevron_left_font_awesome as string}
                      alt="chevron left"
                    />
                    <Image
                      className="h-[1.4em] w-[1.4em] select-none rounded-full outline outline-1 outline-[#FFDFFF]"
                      src={avatar}
                      alt="avatar"
                    />
                    <div className="ml-1 mt-1 flex flex-col">
                      <span className="select-none text-[0.7rem] font-[500] leading-3 text-[#FFDFFF]">
                        Samuel Green
                      </span>
                      <span className="animate-pulse select-none text-[0.5rem] text-[#d9a9ee]">Available to Walk</span>
                    </div>
                  </div>
                  <button disabled className="flex flex-col gap-[1px] rounded-full p-2">
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                  </button>
                </div>
              </div>
              <form
                id="chat"
                className="flex h-full w-[100.5%] flex-col justify-between rounded-b-[3.2em] bg-[#F5F3F8] px-[1em] pb-[1.3em] pt-[0.5em] text-[0.5rem]"
              >
                <div className="flex select-none flex-col">
                  <div>
                    <ChatTextLeft visibility={chat1Visible} key={'step1'} text={messageSelected[1]} />
                  </div>
                  <ChatTextLeft visibility={chat2Visible} text={messageSelected[2]} />
                  <div className={`${!chat3Visible && 'invisible'} mt-[2.1em] flex justify-end gap-[0.95em]`}>
                    <Image className="rounded-[1.2em]" height={40} src={dogImage1} alt="dog image" />
                    <Image className="rounded-[1.2em]" height={40} src={dogImage2} alt="dog image" />
                    <Image className="rounded-[1.2em]" height={40} src={dogImage3} alt="dog image" />
                  </div>
                  <ChatTextRight visibility={chat4Visible} text={messageSelected[3]} />
                  <ChatTextRight visibility={chat5Visible} text={messageSelected[4]} />
                  <div className="h-[1.5em]"></div>
                  <ChatTextLeft visibility={chat6Visible} text={messageSelected[5]} />
                  <Offer visibility={chat7Visible} time="30 minutes walk" price="$29" />
                  <Offer visibility={chat8Visible} time="1 hour walk" price="$49" />
                </div>
                <div className="flex h-[4.5em] items-center justify-between rounded-[4em] bg-white pr-1">
                  <div className="z-20 h-full w-full select-none"></div>
                  <input
                    ref={inputRef}
                    value={inputText}
                    className="absolute z-0 w-[19em] select-none rounded-[4em] pl-5 pr-1 font-rubik text-[0.6rem] placeholder-[hsl(206,6%,79%)] outline-none selection:bg-inherit disabled:bg-white"
                    placeholder="Type a message..."
                    type="text"
                  />
                  <div className="flex select-none items-center justify-center rounded-full bg-[#3C2553] p-[0.5em] ">
                    <Image
                      className="mr-[-1px] select-none"
                      height={21}
                      width={19}
                      src={Chevron_right as string}
                      alt="send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[1.1em] md:w-[28em] md:items-start ">
            <span className="flex  text-center text-[2.5rem] font-[500] text-[hsl(271,36%,24%)] md:text-left">
              {'Simple booking'}
            </span>
            <span className="flex text-center leading-[1.75em] text-[hsl(270,7%,64%)] md:text-left">
              Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements
              and make bookings. Once the walk has been completed you can rate your walker and book again all through
              the chat.
            </span>
          </div>
        </div>
        <div className="ml-[-20em] h-[60%] min-w-[32em] rounded-b-full bg-gradient-to-b from-[#CE41FF] to-[hsl(264,100%,61%)] md:ml-[-5.75em] md:h-[87.5%] "></div>
        <div className="flex flex-col justify-end">
          <div className="mr-[-11.75em] h-[50%] w-[32em] rounded-t-full bg-[#F7F5FA] md:h-[87.5%]"></div>
        </div>
      </div>
    </main>
  );
}

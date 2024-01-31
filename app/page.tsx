'use client';
import Image from 'next/image';
import Chevron_left_font_awesome from '../public/images/Chevron_left_font_awesome.svg';
import Chevron_right from '../public/images/Feather-arrows-chevron-right.svg';
import avatar from '../public/images/avatar.jpg';
import dogImage1 from '../public/images/dog-image-1.jpg';
import dogImage2 from '../public/images/dog-image-2.jpg';
import dogImage3 from '../public/images/dog-image-3.jpg';
import { LegacyRef, useEffect, useRef } from 'react';
export default function Home() {
  const chatRef1 = useRef<HTMLDivElement | null>(null);
  const chatRef2 = useRef<HTMLDivElement | null>(null);
  const chatRef3 = useRef<HTMLDivElement | null>(null);
  const chatRef4 = useRef<HTMLDivElement | null>(null);
  const chatRef5 = useRef<HTMLDivElement | null>(null);
  const chatRef6 = useRef<HTMLDivElement | null>(null);
  const chatRef7 = useRef<HTMLDivElement | null>(null);
  const chatRef8 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatRef1.current) chatRef1.current.classList.remove('invisible');
  }, []);

  const ChatTextLeft = ({ text, reference }: { text: string; reference: LegacyRef<HTMLDivElement> | undefined }) => {
    return (
      <div
        ref={reference}
        className="invisible mt-[1em] max-w-[16em] self-start rounded-[1em] rounded-bl-[0.6em] bg-[#EDE5F4] px-[1em] py-[0.65em] leading-[1.4em]"
      >
        <span className="text-[hsl(276,55%,52%)]">{text}</span>
      </div>
    );
  };
  const ChatTextRight = ({ text, reference }: { text: string; reference: LegacyRef<HTMLDivElement> | undefined }) => {
    return (
      <div
        ref={reference}
        className="invisible mt-[1em] max-w-[16em] self-end rounded-[1em] rounded-br-[0.6em] bg-[#FFFFFF] px-[1em] py-[0.65em] leading-[1.4em]"
      >
        <span className="text-[hsl(240,1%,32%)]">{text}</span>
      </div>
    );
  };
  const Offer = ({
    time,
    price,
    reference,
  }: {
    time: string;
    price: string;
    reference: LegacyRef<HTMLDivElement> | undefined;
  }) => {
    return (
      <div
        ref={reference}
        className="invisible mt-[1em] flex w-[20em] items-center justify-between self-start rounded-[1.5em] rounded-bl-[0.4em] bg-gradient-to-r from-[hsl(293,100%,63%)] to-[hsl(264,100%,61%)] px-[1em] py-[1em] leading-[1.4em]"
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

  //const color1HoverSimulation = 'bg-[#fd729c]';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-rubik">
      <div className="relative flex h-[50em] w-full justify-between bg-[#FAFAFA]">
        <div className="absolute inset-0 ml-[6.6em] flex items-center justify-center gap-[7.8em]">
          <div className="flex h-[31.5em] min-w-[15.45em] items-center justify-center rounded-[2em] bg-[#FFFFFF] px-[0.6em] pb-[0.6em] pt-[0.7em] shadow-2xl">
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
                className="flex h-full w-[100.5%] flex-col justify-between rounded-b-[1.2em] bg-[#F5F3F8] px-[1em] pb-[1.3em] pt-[0.5em] text-[0.5rem]"
              >
                <div className="flex select-none flex-col">
                  <div>
                    <ChatTextLeft
                      reference={chatRef1}
                      key={'step1'}
                      text="That sounds great. I’d be happy with that."
                    />
                  </div>
                  <ChatTextLeft reference={chatRef2} text="Could you send over some pictures of your dog, please?" />
                  <div ref={chatRef3} className="invisible mt-[2.1em] flex justify-end gap-[0.95em]">
                    <Image className="rounded-[1.2em]" height={40} src={dogImage1} alt="dog image" />
                    <Image className="rounded-[1.2em]" height={40} src={dogImage2} alt="dog image" />
                    <Image className="rounded-[1.2em]" height={40} src={dogImage3} alt="dog image" />
                  </div>
                  <ChatTextRight reference={chatRef4} text="Here are a few pictures. She’s a happy girl!" />
                  <ChatTextRight reference={chatRef5} text="Can you make it?" />
                  <div className="h-[1.5em]"></div>
                  <ChatTextLeft
                    reference={chatRef6}
                    text="She looks so happy! The time we discussed works. How long shall I take her out for? "
                  />
                  <Offer reference={chatRef7} time="30 minutes walk" price="$29" />
                  <Offer reference={chatRef8} time="1 hour walk" price="$49" />
                </div>
                <div className="flex h-[4.5em] items-center justify-between rounded-[4em] bg-white pr-1">
                  <input
                    value={''}
                    disabled
                    className="text h-full w-full select-none rounded-[4em] pl-5 pr-1 font-rubik text-[0.6rem] placeholder-[hsl(206,6%,79%)] outline-none disabled:bg-white"
                    placeholder="Type a message..."
                    type="text"
                  />
                  <div className="flex select-none items-center justify-center rounded-full bg-[#3C2553] p-[0.5em]">
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
          <div className="flex w-[28em] flex-col gap-[1.1em]">
            <span className="text-[2.5rem] font-[500] text-[hsl(271,36%,24%)]">{'Simple booking'}</span>
            <span className="leading-[1.75em] text-[hsl(270,7%,64%)]">
              Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements
              and make bookings. Once the walk has been completed you can rate your walker and book again all through
              the chat.
            </span>
          </div>
        </div>
        <div className="ml-[-5.75em] h-[87.5%] w-[32em] rounded-b-full bg-gradient-to-b from-[#CE41FF] to-[hsl(264,100%,61%)] "></div>
        <div className="flex flex-col justify-end">
          <div className="mr-[-11.75em] h-[85.1%] w-[32em] rounded-t-full bg-[#F7F5FA]"></div>
        </div>
      </div>
    </main>
  );
}

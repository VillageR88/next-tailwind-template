import Image from 'next/image';
import Chevron_left_font_awesome from '../public/images/Chevron_left_font_awesome.svg';
import avatar from '../public/images/avatar.jpg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-rubik">
      <div className="relative flex h-[50em] w-full justify-between bg-[#FAFAFA]">
        <div className="absolute inset-0 ml-[6.6em] flex items-center justify-center gap-[7.8em]">
          <div className="flex h-[31.5em] min-w-[15.45em] items-center justify-center rounded-[2em] bg-[#FFFFFF] px-[0.6em] pb-[0.6em] pt-[0.7em] shadow-2xl">
            <div className="flex h-full w-[99.5%] flex-col items-center justify-center rounded-[1.2em] bg-[#F5F3F8]">
              <div className="flex h-[4.8em] w-full flex-col items-center rounded-[0.3em] rounded-t-[1.2em] bg-gradient-to-r from-[#8C3AFE] to-[#E044FF]">
                <div className="h-[1.55em] w-[8em] rounded-b-[0.8em] bg-[#FFFFFF]"></div>
                <div className="flex h-full w-full items-center justify-between pl-2.5 pr-2">
                  <div className="flex items-center gap-1">
                    <Image
                      className="h-fit w-[0.8em] scale-x-[65%]"
                      src={Chevron_left_font_awesome as string}
                      alt="chevron left"
                    />
                    <Image
                      className="h-[1.4em] w-[1.4em] rounded-full outline outline-1 outline-[#FFDFFF]"
                      src={avatar}
                      alt="avatar"
                    />
                    <div className="ml-1 mt-1 flex flex-col">
                      <span className="text-[0.7rem] font-[500] leading-3 text-[#FFDFFF]">Samuel Green</span>
                      <span className="text-[0.5rem] text-[#D880FF]">Available to Walk</span>
                    </div>
                  </div>
                  <button className="flex flex-col gap-[0.05em] p-2">
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                    <div className="rounded bg-[#FFDFFF] p-[1px]"></div>
                  </button>
                </div>
              </div>
              <div className="h-full w-[100.5%] rounded-b-[1.2em] bg-[#F5F3F8]"></div>
            </div>
          </div>
          <div className="flex w-[28em] flex-col gap-[1.1em]">
            <span className="text-[2.5rem] font-[500] text-[#452E5D]">{'Simple booking'}</span>
            <span className="leading-[1.75em] text-[#a8a7ad]">
              {
                'Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.                '
              }
            </span>
          </div>
        </div>
        <div className="ml-[-5.75em] h-[87.5%] w-[32em] rounded-b-full bg-gradient-to-b from-[#CE43FF] to-[#903AFF]"></div>
        <div className="flex flex-col justify-end">
          <div className="mr-[-11.75em] h-[85.1%] w-[32em] rounded-t-full bg-[#F7F5FA]"></div>
        </div>
      </div>
    </main>
  );
}

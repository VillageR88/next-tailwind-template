import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800-italic.css';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center font-['Poppins']">
      {/* wrapper */}
      <div className="flex max-w-full flex-col gap-6 rounded-t-3xl rounded-bl-3xl rounded-br-[12em] bg-white p-6 md:gap-1 md:p-16">
        {/* sub_wrapper1 */}
        <div className="flex gap-5">
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">DAY</span>
            <input
              className="placeholder-grey h-16 w-24 rounded-lg border border-solid px-6 font-bold md:w-36 md:text-3xl"
              type="text"
              name="dayInput"
              id=""
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">MONTH</span>
            <input
              className="placeholder-grey h-16 w-24 rounded-lg border border-solid px-6 font-bold md:w-36 md:text-3xl"
              type="text"
              name="monthInput"
              id=""
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">YEAR</span>
            <input
              className="placeholder-grey h-16 w-24 rounded-lg border border-solid px-6 font-bold md:w-36 md:text-3xl"
              type="text"
              name="yearInput"
              id=""
              placeholder="YYYY"
            />
          </div>
        </div>
        {/* sub_wrapper2 */}
        <div className="flex justify-between">
          <hr className="flex w-full self-center"></hr>
          <Image
            className="h-auto w-14 rounded-full bg-[#864CFF] p-4 md:w-24 md:p-5"
            src={iconArrow as string}
            alt="arrow image"
          />
          <hr className="flex w-full self-center md:hidden"></hr>
        </div>
        {/* sub_wrapper3 */}
        <div className="flex flex-col text-[3rem] font-[800] italic leading-[1.1em] text-[#864CFF] md:text-[6.5rem]">
          <span className="flex gap-3">
            - -<span className="text-[black]">years</span>
          </span>
          <span className="flex gap-3">
            - -<span className="text-[black]">months</span>
          </span>
          <span className="flex gap-3">
            - -<span className="text-[black]">days</span>
          </span>
        </div>
      </div>
    </main>
  );
}

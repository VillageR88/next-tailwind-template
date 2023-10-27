import Image from 'next/image';
import iconArrow from './assets/images/icon-arrow.svg';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800-italic.css';

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center font-['Poppins']">
      {/* wrapper */}
      <div className="flex flex-col rounded-t-3xl rounded-bl-3xl rounded-br-[12em] bg-white p-16">
        {/* sub_wrapper1 */}
        <div className="flex gap-5">
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">DAY</span>
            <input
              className="placeholder-grey h-12 w-24 border border-solid text-3xl font-bold"
              type="text"
              name="dayInput"
              id=""
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">MONTH</span>
            <input
              className="placeholder-grey h-12 w-24 border border-solid text-3xl font-bold"
              type="text"
              name="monthInput"
              id=""
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-smokeyGrey text-sm font-bold">YEAR</span>
            <input
              className="placeholder-grey h-12 w-24 border border-solid text-3xl font-bold"
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
            className="h-auto w-24 border-spacing-2 rounded-full bg-[#864CFF] p-5"
            src={iconArrow as string}
            alt="arrow image"
          />
        </div>
        {/* sub_wrapper3 */}
        <div className="flex flex-col text-[6.5rem] font-[800] italic leading-[1.1em] text-[#864CFF]">
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

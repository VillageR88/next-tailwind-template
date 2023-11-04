'use client';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="main flex min-h-screen max-w-full font-spaceGrotesk md:pb-[1.7em] md:pt-[1.72em]">
      {/* main wrapper */}
      <div className="flex max-h-full w-full flex-col gap-4 bg-white md:flex-row md:pr-8">
        {/* first column */}
        <div className="flex w-full justify-center bg-bgMainDesktop bg-cover md:w-1/2 md:bg-contain md:bg-no-repeat md:pl-1">
          {/* first column wrapper */}
          <div className="flex h-full flex-col items-center justify-center gap-[2.3em] md:max-w-full">
            {/* card1 */}
            <div
              className="flex h-[15.5em] w-full max-w-full  flex-col justify-around rounded-[0.8em] bg-bgCardFront bg-no-repeat md:w-[27.9em] 
              xl:ml-[3.9em]"
            >
              <Image
                className=" ml-8 flex h-auto w-[5em]"
                src={'./images/card-logo.svg' as string}
                alt="card logo"
                width={10}
                height={10}
              />
              <div className="space-y-[1.5em]">
                <div className="flex w-full justify-center gap-[2.5%] px-[1em] text-[1.75rem] text-white md:tracking-[0.12em]">
                  <span>0000</span>
                  <span>0000</span>
                  <span>0000</span>
                  <span>0000</span>
                </div>
                <div className="flex w-full justify-between px-[1.5em] text-[0.9rem] tracking-[0.12em] text-white md:px-[2.5em]">
                  <span>JANE APPLESEED</span>
                  <span>00/00</span>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex h-[15.5em] w-full max-w-full rounded-[0.8em] bg-bgCardBack bg-cover bg-no-repeat md:w-[27.9em] md:bg-contain xl:ml-[15em]"></div>
          </div>
        </div>
        {/* second column */}
        <div className="max-h-auto flex w-full items-center justify-center bg-[#FFFFFF] md:mr-[4em] md:w-1/2">
          <div className="flex">
            <form className="max-h-auto flex max-w-full flex-col gap-[1.4em] ">
              <div>
                <label
                  className="mb-2 block text-[0.75rem] font-bold tracking-[0.1em] text-gray-700"
                  htmlFor="username"
                >
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium placeholder-[#C8C4C9]"
                  placeholder="e.g. Jane Appleseed"
                />
              </div>
              <div className="">
                <label className="mb-2 block text-[0.8rem] font-bold tracking-[0.1em] text-gray-700" htmlFor="username">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium placeholder-[#C8C4C9]"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
              </div>
              <div className="flex justify-between gap-5">
                <div>
                  <label
                    className="mb-2 block w-full text-[0.8rem] font-bold  tracking-[0.1em] text-gray-700 placeholder-[#C8C4C9]"
                    htmlFor="username"
                  >
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex gap-[0.7em]">
                    <input
                      type="text"
                      className="w-[4.5em] rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium placeholder-[#C8C4C9]"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      className="w-[4.5em] rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium placeholder-[#C8C4C9]"
                      placeholder="YY"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block w-full text-[0.8rem] font-bold tracking-[0.1em] text-gray-700"
                    htmlFor="username"
                  >
                    CVC
                  </label>
                  <div className="flex w-[12em]">
                    <input
                      type="text"
                      className="w-full rounded-lg border border-solid px-4 py-2 text-[1.1rem] font-medium placeholder-[#C8C4C9]"
                      placeholder="e.g. 123"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-veryDarkViolet mt-4 rounded-lg py-[0.75em] text-[1.1rem] text-white">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

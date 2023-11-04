'use client';
import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/400.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main font-spaceGrotesk flex min-h-screen max-w-full pb-[1.7em] pt-[1.72em]">
      {/* main wrapper */}
      <div className="flex max-h-full w-full flex-col bg-white md:flex-row">
        {/* first column */}
        <div className="bg-bgMainDesktop flex w-full justify-center bg-cover md:bg-contain md:bg-no-repeat ">
          {/* first column wrapper */}
          <div className="flex h-auto max-w-full flex-col justify-center gap-[2.3em]">
            {/* card1 */}
            <div
              className="bg-bgCardFront flex h-[15em] max-w-full flex-col justify-around rounded-[0.8em] md:w-[27.9em] 
              xl:ml-[10em]"
            >
              <Image
                className=" ml-8 flex h-auto w-[5em]"
                src={'./images/card-logo.svg' as string}
                alt="card logo"
                width={10}
                height={10}
              />
              <div className="space-y-[1.5em]">
                <span className="flex w-full justify-center text-[1.75rem] tracking-[0.12em] text-white">
                  0000 0000 0000 0000
                </span>
                <div className="flex w-full justify-between px-[1em] text-[0.9rem] tracking-[0.12em] text-white md:ml-[-0.5em] md:px-[3em]">
                  <span>JANE APPLESEED</span>
                  <span>00/00</span>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="bg-bgCardBack flex h-[15em] max-w-full rounded-[0.8em] md:w-[27.9em] xl:ml-[15em]"></div>
          </div>
        </div>
        {/* second column */}
        <div className="mr-[4.7em] flex max-h-auto w-full items-center justify-center bg-[#FFFFFF]">
          <div className="flex w-[23.8em]">
            <form className="flex max-h-auto max-w-full flex-col gap-[1.4em]">
              <div>
                <label className="mb-2 block text-[0.8rem] font-bold tracking-[0.1em] text-gray-700" htmlFor="username">
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  className="w-full border border-solid px-4 py-2 text-[1.1rem]"
                  placeholder="e.g. Jane Appleseed"
                />
              </div>
              <div className="">
                <label className="mb-2 block text-[0.8rem] font-bold tracking-[0.1em] text-gray-700" htmlFor="username">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  className="w-full border border-solid px-4 py-2 text-[1.1rem]"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    className="mb-2 block w-full text-[0.8rem] font-bold tracking-[0.1em] text-gray-700"
                    htmlFor="username"
                  >
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex gap-[0.7em]">
                    <input
                      type="text"
                      className="w-[4.5em] border border-solid px-4 py-2 text-[1.1rem]"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      className="w-[4.5em] border border-solid px-4 py-2 text-[1.1rem]"
                      placeholder="MM"
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
                      className="w-full border border-solid px-4 py-2 text-[1.1rem]"
                      placeholder="MM"
                    />
                  </div>
                </div>
              </div>
              <button className="mt-4 bg-[#220930] py-[0.9em] text-white">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

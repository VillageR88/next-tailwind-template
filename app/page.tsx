import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/800.css';
import Image from 'next/image';
import markWebber from './assets/images/avatar-mark-webber.webp';

export default function Home() {
  return (
    <main className="font-plusJakartaSans flex h-screen max-w-full flex-col items-center py-[4em]">
      <div className="flex h-full max-w-full flex-col items-center rounded-xl bg-white px-8 ">
        <div className="flex w-[42em] max-w-full justify-between py-7">
          <span className="text-[1.5rem] font-bold text-veryDarkBlue">
            Notifications{' '}
            <span className="ml-1.5 rounded-md bg-blue px-[0.7em] py-0.5 align-[3px] text-[1rem] font-semibold text-white">
              3
            </span>
          </span>
          <button className="font-medium text-darkGrayishBlue">Mark all as read</button>
        </div>
        <div className="flex w-[42em] max-w-full gap-2.5 rounded-xl bg-veryLightGrayishBlue px-5 py-4">
          <Image className="h-11 w-auto" src={markWebber} alt="Image of Mark Webber" />
          <div className="ml-2 flex flex-col">
            <div className="flex items-center">
              <div className="flex">
                <span className="font-semibold">
                  Mark Webber
                  <span className="ml-1.5 font-medium text-darkGrayishBlue">
                    reacted to your recent post
                    <span className="ml-1.5 font-semibold text-darkGrayishBlue">My first tournament today!</span>
                  </span>
                </span>
              </div>
              <div className="ml-1.5 flex h-1 w-1 rounded-full bg-red p-1"></div>
            </div>
            <span className="font-medium text-grayishBlue">1m ago</span>
          </div>
        </div>
      </div>
    </main>
  );
}

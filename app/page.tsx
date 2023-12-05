import '@fontsource/inter';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import Image from 'next/image';
import image1 from './images/image-tanya.jpg';
import image2 from './images/image-john.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-inter">
      <div className="h-[50em] w-full bg-white">
        <div className="h-full w-full bg-[url('./images/pattern-curve.svg')] bg-left-bottom bg-no-repeat">
          <div className="h-full w-full bg-[url('./images/pattern-bg.svg')] bg-[90.2%_35%] bg-no-repeat">
            <div className="flex h-full w-full items-center justify-between px-[10.3em]">
              <div className="z-10 mb-[1em] mr-[-17em] flex w-[40em] flex-col gap-[2.2em] bg-[url('./images/pattern-quotes.svg')] bg-[18.4%_0%] bg-no-repeat pt-[4em]">
                <span className="text-[2em] font-[300] leading-[1.38em] text-darkBlue">
                  “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend
                  this course enough. I’m now in the job of my dreams and so excited about the future. ”
                </span>
                <div className='flex gap-[0.5em]'>
                  <span className="text-[1.25rem] font-[700] text-darkBlue">Tanya Sinclair</span>
                  <span className='text-[1.25rem] font-[500] text-grayishBlue'>UX Engineer</span>
                </div>
              </div>
              <div>
                <Image src={image1} alt="Image of person" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

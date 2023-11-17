import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import Image from 'next/image';

const ShortBox = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-lightRedStudy mb-[-1em] inline-grid h-[3.8em] w-[16em] justify-end  overflow-hidden rounded rounded-t-[0.8em]">
        <Image
          className="mr-[1em] mt-[-0.7em]"
          src="./images/icon-work.svg"
          width="79"
          height="79"
          alt="work icon"
          priority
        />
      </div>
      <div className="bg-darkBlue rounded] h-[12.5em] w-[16em] rounded-[0.8em] p-7">
        <span className="text-white">TEST</span>;
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <ShortBox />
    </main>
  );
}

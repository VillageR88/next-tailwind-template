import '@fontsource/rubik';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';

const ShortBox = () => {
  return (
    <div className="flex flex-col">
      <div className="rounded] mb-[-1em] h-[3.5em] w-[16em] rounded-t-[1em] bg-orange-300"></div>
      <div className="bg-darkBlue rounded] h-[12em] w-[16em] rounded-[1em] p-7">
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

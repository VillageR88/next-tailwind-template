import '@fontsource/inter';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-inter">
      <div className="h-[50em] w-full bg-white">
        <div className="h-full w-full bg-[url('./images/pattern-curve.svg')] bg-left-bottom bg-no-repeat">
          <div className="h-full w-full bg-[url('./images/pattern-bg.svg')] bg-[90.2%_35%] bg-no-repeat"></div>
        </div>
      </div>
    </main>
  );
}

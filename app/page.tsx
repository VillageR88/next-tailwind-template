import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center font-montserrat">
      <div className="h-[53.125em] w-full bg-veryLightGrayishBlue">
        <div className="h-full w-full bg-[url('./images/bg-top.svg')] bg-right-top bg-no-repeat ">
          {' '}
          <div className="h-full w-full bg-[url('./images/bg-bottom.svg')] bg-left-bottom bg-no-repeat "></div>
        </div>
      </div>
    </main>
  );
}

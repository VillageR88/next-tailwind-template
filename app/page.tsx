import Image from 'next/image';
import '@fontsource/epilogue';
import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/500.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/epilogue/700.css';

export default function Home() {
  const navButtonsLayout = 'text-[0.9rem] font-[600] text-mediumGray';
  const navDoubleLayout = 'flex items-center gap-1.5';
  const navSingleLayout = 'flex items-center';
  const arrowDown = (
    <Image className="h-[0.5em] w-[0.7em]" src="./images/icon-arrow-down.svg" alt="arrow down" height={1} width={10} />
  );
  return (
    <div className="flex flex-col items-center py-8 font-epilogue md:min-h-screen">
      <nav className="flex w-full flex-row justify-between">
        {/*navbar left wrapper*/}
        <div className="flex items-center gap-16">
          <Image className="h-[1.7em] w-[5.3em]" src="./images/logo.svg" alt="logo" height={10} width={10} priority />
          <div className="flex gap-8">
            <div className={navDoubleLayout}>
              <span className={navButtonsLayout}>Feauters</span>
              {arrowDown}
            </div>
            <div className={navDoubleLayout}>
              <span className={navButtonsLayout}>Company</span>
              {arrowDown}
            </div>
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>Careers</span>
            </div>
            <div className={navSingleLayout}>
              <span className={navButtonsLayout}>About</span>
            </div>
          </div>
        </div>
        {/*navbar right wrapper*/}
        <div className="flex gap-8">
          <div className={navSingleLayout}>
            <span className={navButtonsLayout}>Login</span>
          </div>
          <div className={navSingleLayout}>
            <span
              className={`${navButtonsLayout} rounded-[1em] border-2 border-mediumGray px-5 pb-1.5 pt-2 text-center`}
            >
              Register
            </span>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  );
}

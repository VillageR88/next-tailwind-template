import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

export default function Home() {
  return (
    <main className="font-raleway flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-veryDarkBlue">
        <div className="h-[50em] w-full bg-[url('./images/bg-desktop.png')] bg-bottom bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center">
            <div className="mb-[1.22em] flex items-end gap-[1.88em]">
              <div className="h-[12.58em] w-[21.88em] rounded-l-[0.6em] rounded-br-[0.6em] rounded-tr-[6.2em] bg-darkBlue"></div>
              <div className="h-[9.7em] w-[33.8em] rounded-[0.6em] bg-darkBlue"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

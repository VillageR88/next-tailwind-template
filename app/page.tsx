import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

export default function Home() {
  return (
    <main className="font-raleway flex min-h-screen flex-col items-center justify-center">
      <div className='bg-veryDarkBlue w-full h-full'>
        <div className="h-[50em] w-full bg-[url('./images/bg-desktop.png')] bg-bottom bg-no-repeat"></div>
      </div>
    </main>
  );
}

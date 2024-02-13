import Main from './components/Main/Main';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[hsl(30,54%,90%)]">
      <Main />
      <div className="flex h-[70em] w-full items-center justify-center "></div>
    </div>
  );
}

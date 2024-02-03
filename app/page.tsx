import NavBar from './components/NavBar';
export default function Home() {
  return (
    <div className="font-publicSans flex min-h-screen flex-col items-center justify-center">
      <NavBar />
      <div className="h-[100em] w-full bg-[#FAFAFA]"></div>
    </div>
  );
}

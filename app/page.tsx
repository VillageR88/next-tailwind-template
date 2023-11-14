import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-6 md:min-h-screen">
      <nav className="flex w-full flex-row justify-between">
        <div>
          <Image className="h-auto w-[4em]" src="./images/logo.svg" alt="logo" height={10} width={10} />
        </div>
        <div>Login</div>
      </nav>
      <main></main>
    </div>
  );
}

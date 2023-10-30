import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav>
        <Image src="\app\assets\images\logo.svg"></Image>
      </nav>
      <main className="flex h-screen flex-col items-center justify-center">
        <p className="text-lg">Hello</p>
        <p className="font-mono">World 🌍</p>
      </main>
    </div>
  );
}

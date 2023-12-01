import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-white">
      <p className="font-josefinSans text-lg">Hello</p>
      <p className="font-alata text-lg">Hello</p>
      <p className="text-lg">Hello</p>
      <p className="font-mono">World 🌍</p>
    </main>
  );
}

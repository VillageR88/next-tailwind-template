import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <p className="text-commissioner">Hello</p>
      <p className="font-commissioner">World 🌍</p>
      <p className="text-lg">Hello</p>
      <p className="font-mono">World 🌍</p>
    </main>
  );
}

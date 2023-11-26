import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-commissioner">
      <nav className="flex h-full w-full">
        <div className="h-[25em] w-full bg-[url('./images/image-hero-desktop.jpg')]"></div>
      </nav>
    </div>
  );
}

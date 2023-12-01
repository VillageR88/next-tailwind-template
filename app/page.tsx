import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="h-[40.6em] w-full bg-[url('./images/desktop/image-hero.jpg')] bg-center">
          <div className="h-full w-full bg-black bg-opacity-40"></div>
        </div>
      </nav>
      <div className="h-[120em] w-full bg-white"></div>
    </div>
  );
}

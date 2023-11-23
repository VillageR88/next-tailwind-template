import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="bg h-[37.5em] w-full overflow-hidden rounded-bl-[6.5em] bg-gradient-to-r  from-veryLightRed to-lightRed">
        <div className="static ml-[-27.5em] mt-[-84em] h-[140em] w-auto bg-[url('./images/bg-pattern-intro-desktop.svg')]"></div>
      </nav>
      <main></main>
    </div>
  );
}

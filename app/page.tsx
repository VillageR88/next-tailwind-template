import '@fontsource/alata/400.css';
import '@fontsource/josefin-sans/300.css';
import Image from 'next/image';
import logo from './images/logo.svg';

const rightNavTracking = 'tracking-[0.02em]';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="h-full w-full">
        <div className="h-[40.6em] w-full bg-[url('./images/desktop/image-hero.jpg')] bg-center">
          <div className="h-full w-full bg-black bg-opacity-40">
            <div className="h-full w-full">
              {/*first row*/}
              <div className="flex h-fit w-full flex-row items-center justify-between pl-[10.35em] pr-[10.35em] pt-[4em]">
                {/*left*/}
                <Image className="h-fit" src={logo as string} alt="logo image" />
                {/*right desktop*/}
                <div className="flex h-fit gap-[2.26em] mt-1 font-alata text-[0.9rem] tracking-tighter text-white opacity-90">
                  <button className={rightNavTracking}>About</button>
                  <button className={rightNavTracking}>Careers</button>
                  <button className={rightNavTracking}>Events</button>
                  <button className={rightNavTracking}>Products</button>
                  <button className={rightNavTracking}>Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[120em] w-full bg-white"></div>
    </div>
  );
}

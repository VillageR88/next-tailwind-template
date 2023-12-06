import '@fontsource/inter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center font-inter">
      <div className="h-[50em] w-full bg-white">
        <nav className="h-[15.3em] w-full rounded-b-[1.3em] bg-veryPaleBlue_Top_BG_Pattern">
          <div className="flex flex-row justify-between px-[10.1em] pt-[2.3em]">
            <div className="flex flex-col">
              <span className="text-[1.75rem] leading-[1.25em] font-[700]">Social Media Dashboard</span>
              <span className='text-[0.9rem] font-[700]'>Total Followers: 23,004</span>
            </div>
            <div className="flex flex-row">
              <span>Dark Mode</span>
              <div>DIV</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

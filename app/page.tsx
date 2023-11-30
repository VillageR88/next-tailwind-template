import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/800.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-manrope">
      <div className="flex h-[50em] w-full justify-center bg-[#F9FAFF] bg-[url('./images/bg-pattern.svg')] bg-top bg-no-repeat ">
        {/*top*/}
        <div className="mt-[3.75em] flex h-[10em] w-fit flex-col items-center justify-center gap-[0.62em] bg-[url('./images/pattern-circles.svg')] bg-center  bg-no-repeat">
          <span className="text-[1.75rem] font-[800] text-darkDesaturatedBlue_TextCTABackground">
            Simple, traffic-based pricing
          </span>
          <span className="text-[0.94rem] font-[600] text-grayishBlue_Text">
            Sign-up for our 30-day trial. No credit card required.
          </span>
        </div>
      </div>
    </main>
  );
}

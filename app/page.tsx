import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/800.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-manrope">
      <div className="flex h-[50em] w-full justify-center bg-[#F9FAFF] bg-[url('./images/bg-pattern.svg')] bg-top bg-no-repeat ">
        {/*top*/}
        <div className="mt-[4em] flex h-[10em] w-fit flex-col justify-center items-center bg-[url('./images/pattern-circles.svg')] bg-center  bg-no-repeat">
          <span>Simple, traffic-based pricing</span>
          <span>Sign-up for our 30-day trial. No credit card required.</span>
        </div>
      </div>
    </main>
  );
}

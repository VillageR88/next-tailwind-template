import '@fontsource/manrope';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

export default function Home() {
  return (
    <main className="font-manrope flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col">
        <span className='text-neonGreen'>ADVICE #117</span>
        <span className='text-lightCyan'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</span>
      </div>
    </main>
  );
}

import icon_list from './assets/images/icon-list.svg';
import icon_success from './assets/images/icon-success.svg';
import illustration_desktop from './assets/images/illustration-sign-up-desktop.svg';
import illustration_mobile from './assets/images/illustration-sign-up-mobile.svg';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {/* wrapper */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* column1 */}
        <div className="flex flex-col justify-center">
          <span className="text-base">Stay updated!</span>
          <span>Join 60,000+ product managers receiving monthly updates on:</span>
          <div className="flex">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="flex">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="flex">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>And much more!</span>
          </div>
          <span>Email address</span>
          <input type="text" name="emailAddress" id="emailAddress" placeholder="email@company.com" />
          <button>Subscribe to monthly newsletter</button>
          <div className="font-sans">Ten tekst używa czcionki "Roboto".</div>
        </div>
        {/* column2 */}
        <Image className="hidden md:flex" src={illustration_desktop as string} alt="illustration" />
        <Image className="flex md:hidden" src={illustration_mobile as string} alt="illustration" />
      </div>
    </main>
  );
}

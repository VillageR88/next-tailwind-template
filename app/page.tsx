import icon_list from './assets/images/icon-list.svg';
import icon_success from './assets/images/icon-success.svg';
import illustration_desktop from './assets/images/illustration-sign-up-desktop.svg';
import illustration_mobile from './assets/images/illustration-sign-up-mobile.svg';

import Image from 'next/image';

export default function Home() {

  return (

    <main className="flex h-screen flex-col items-center justify-center">
      {/* wrapper */}
      <div className="flex flex-col-reverse md:flex-row text-dark-slate-grey bg-white p-5 rounded-3xl tracking-tight">
        {/* column1 */}
        <div className="flex flex-col pl-10 pr-14 w-[30em]">
          <span className="pt-16 text-[3.5rem] font-bold tracking-tighter">Stay updated!</span>
          <span className='pt-6 font-medium'>Join 60,000+ product managers receiving monthly updates on:</span>
          <div className="flex pt-4 gap-4 font-medium">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="flex pt-2 gap-4 font-medium">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="flex pt-2 gap-4 font-medium">
            <Image className="" src={icon_list as string} alt="icon of list" />
            <span>And much more!</span>
          </div>
          <span className='text-xs font-semibold pt-8 tracking-tighter'>Email address</span>
          <input className='border solid px-6 py-4' type="text" name="emailAddress" id="emailAddress" placeholder="email@company.com" />
          <button>Subscribe to monthly newsletter</button>
        </div>
        {/* column2 */}
        <Image className="hidden md:flex" src={illustration_desktop as string} alt="illustration" />
        <Image className="flex md:hidden" src={illustration_mobile as string} alt="illustration" />
      </div>
    </main>
  );
}

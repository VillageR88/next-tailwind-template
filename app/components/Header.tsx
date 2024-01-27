import { useState } from 'react';
import { mdiFacebook, mdiInstagram, mdiYoutube } from '@mdi/js';
import { Icon } from '@mdi/react';
import Link from 'next/link';

const Header = () => {
  const [facebookHover, setFacebookHover] = useState(false);

  return (
    <nav className="flex h-full w-full justify-center bg-[#5DBA3B] px-4 py-2 lg:px-6 xl:px-10">
      <div className="flex w-full flex-col items-center justify-between pb-[0.1em] text-[0.94rem] text-[#fff] sm:flex-row xl:w-[75.7em]">
        <Link href={'/'}>
          <button>
            <span className="hover:underline">{'Mały Skarb - Centrum twórczego rozwoju'}</span>
          </button>
        </Link>
        <div className="flex items-center gap-4">
          <button className="transition-all duration-300 hover:text-[#FF5157] hover:underline">
            <span className=" text-[1.05rem] ">{'RODO'}</span>
          </button>
          <button
            onMouseEnter={() => {
              setFacebookHover(true);
            }}
            onMouseLeave={() => {
              setFacebookHover(false);
            }}
          >
            <div className="mb-[0.28em] flex h-full w-full items-center justify-center">
              <Icon className="z-10" path={mdiFacebook} size={1} color="#5DBA3B" />
              <div
                style={{ transition: 'all 300ms ease-in-out' }}
                className={`absolute h-[1.2em] w-[0.5em] ${facebookHover ? 'bg-[#FF5157]' : 'bg-white'}`}
              ></div>
            </div>
          </button>
          <button>
            <Icon className="transition-all duration-300 hover:text-[#FF5157]" path={mdiInstagram} size={0.75} />
          </button>
          <button>
            <Icon className=" transition-all duration-300 hover:text-[#FF5157]" path={mdiYoutube} size={0.75} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

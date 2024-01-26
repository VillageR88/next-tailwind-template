import { mdiEmailOpenOutline, mdiInstagram, mdiMapMarker, mdiPhone, mdiYoutube } from '@mdi/js';
import Icon from '@mdi/react';

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-[#5dba3b] bg-[url('./images/absurdity.png')] px-4 py-8 text-white lg:h-[23em] lg:px-0 lg:py-0">
      <div className="flex h-full w-full flex-col items-center gap-[1.5em] text-[15px] lg:flex-row lg:justify-around lg:px-4 xl:w-[78em] xl:justify-center xl:gap-0 xl:px-6">
        <div className="flex h-full flex-col justify-center gap-[3em] xl:w-1/2">
          <span className="text-center md:text-left lg:whitespace-pre-wrap xl:whitespace-normal">
            {'Niepubliczne Przedszkole Muzyczno - Językowe Mały Skarb. \nGdańsk Ujeścisko, Zakoniczyn.'}
          </span>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <button className="mb-[0.1em] fill-white transition-all duration-300 hover:fill-[#FF5157]">
              <svg
                style={{
                  height: '2em',
                  verticalAlign: 'middle',
                  overflow: 'hidden',
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M725.333333 85.333333v170.666667h-85.333333c-29.44 0-42.666667 34.56-42.666667 64V426.666667h128v170.666666h-128v341.333334h-170.666666v-341.333334H298.666667v-170.666666h128V256a170.666667 170.666667 0 0 1 170.666666-170.666667h128z" />
              </svg>
            </button>
            <button>
              <Icon className="transition-all duration-300 hover:text-[#FF5157]" path={mdiInstagram} size={1} />
            </button>
            <button className="ml-1">
              <Icon className=" transition-all duration-300 hover:text-[#FF5157]" path={mdiYoutube} size={1} />
            </button>
          </div>
        </div>
        <div className="flex h-full flex-col justify-center xl:w-1/2">
          <h1 className="flex justify-center font-baloo text-[24px] lg:justify-start">{'Skontaktuj się z nami'}</h1>
          <span className="mt-[2em] text-center lg:text-left">
            {'Napisz do nas email bądź zadzwoń na jeden z podanych numerów telefonu.'}
          </span>
          <div className="mt-[2em] flex flex-col items-center gap-[1em] sm:flex-row">
            <div className="flex gap-[1.5em]">
              <Icon path={mdiMapMarker} size={1.6} />
              <button className="duration-300 hover:text-[#337ab7]">
                <span className="flex whitespace-pre-wrap text-left">{'11 Listopada 68,\n80-180 Gdańsk'}</span>
              </button>
            </div>
            <div className="flex gap-[1.5em]">
              <Icon path={mdiPhone} size={1.6} />
              <div className="flex flex-col">
                <button className="duration-300 hover:text-[#337ab7]">
                  <span>{'608-674-006'}</span>
                </button>
                <button className="duration-300 hover:text-[#337ab7]">
                  <span>{'698-675-406'}</span>
                </button>
              </div>
            </div>
            <div className="flex gap-[1.5em]">
              <Icon path={mdiEmailOpenOutline} size={1.6} />
              <button className="duration-300 hover:text-[#337ab7]">
                <span>{'poczta@malyskarb.pl'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

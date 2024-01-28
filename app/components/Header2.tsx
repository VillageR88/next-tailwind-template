import Image from 'next/image';
import logo from '@/public/images/logo.png';
import { mdiEmailOpenOutline, mdiMapMarker, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import color5 from '@/app/components/color5';

const Header2 = () => (
  <div className="flex w-full flex-col items-center xl:px-10">
    <div className="mt-5 flex w-full flex-col justify-between px-10 lg:flex-row xl:w-[75.7em]">
      <button>
        <div className="flex flex-col items-center decoration-[#23527c] hover:underline">
          <Image height={60} src={logo} alt="logo" />
          <span className="mt-[0.3em] font-varelaRound text-[1.7rem] font-[800] tracking-[0.1em] text-[#00b596]">
            przedszkole
          </span>
        </div>
      </button>
      <div className="mt-[2em] grid flex-row items-center justify-center gap-[1em] text-[15px] text-[#777] sm2:gap-[3em] md:flex xl:pr-8">
        <div className="flex w-full items-center gap-[0.5em] sm3:justify-center md:w-fit">
          <Icon className="text-[#3a3f38]" path={mdiPhone} size={1.6} />
          <div className="flex flex-col gap-[0.2em]">
            <button className="duration-300 hover:text-[#5255c5]">
              <span>{'608-674-006'}</span>
            </button>
            <button className="duration-300 hover:text-[#5255c5]">
              <span>{'698-675-406'}</span>
            </button>
          </div>
        </div>
        <div className="flex w-full items-center gap-[0.5em] sm:justify-center md:w-fit">
          <Icon className="text-[#ff8b00]" path={mdiMapMarker} size={1.6} />
          <button className="duration-300 hover:text-[#5255c5]">
            <span className="flex whitespace-pre-wrap text-left leading-7">{'11 Listopada 68,\n80-180 Gdańsk'}</span>
          </button>
        </div>
        <div className="flex w-full gap-[0.5em] sm3:col-span-2 sm3:justify-center md:w-fit">
          <Icon className="text-[#ff5157]" path={mdiEmailOpenOutline} size={1.6} />
          <button className="duration-300 hover:text-[#5255c5]">
            <span>{'poczta@malyskarb.pl'}</span>
          </button>
        </div>
      </div>
    </div>
    <div className="mt-[2.9em] h-0">
      <div className="absolute left-0 h-[1px] w-full bg-gray-200"></div>
    </div>
    <div className="mt-[1px] hidden w-full justify-between px-9 lg:flex xl:w-[75.7em]">
      {['Start', 'O nas', 'Co jemy?', 'Kadra', 'Pliki', 'Rekrutacja', 'Wirtualny spacer', 'Zajęcia dodatkowe'].map(
        (item, index) => {
          color5({ index });
          return (
            <button className={`${color5({ index })?.hover} transition duration-[250ms]`} key={index}>
              <Link
                key={item}
                href={
                  item === 'Start'
                    ? '/start'
                    : item === 'O nas'
                      ? '/o-nas'
                      : item === 'Co jemy?'
                        ? '/co-jemy'
                        : item === 'Kadra'
                          ? '/kadra'
                          : item === 'Pliki'
                            ? '/pliki'
                            : item === 'Rekrutacja'
                              ? '/rekrutacja'
                              : item === 'Wirtualny spacer'
                                ? '/wirtualny-spacer'
                                : item === 'Zajęcia dodatkowe'
                                  ? '/zajecia-dodatkowe'
                                  : '/start'
                }
              >
                <div className="flex flex-col items-center gap-[0.75em]">
                  <div
                    style={{
                      width: `${0.8 * item.length * (item.length < 10 ? 1 : 0.85)}em`,
                      backgroundColor: `${color5({ index })?.color}`,
                    }}
                    className="h-[0.3em] rounded-[1em]"
                  ></div>
                  <h2 className="font-baloo text-[20px]">{item}</h2>
                </div>
              </Link>
            </button>
          );
        },
      )}
    </div>
  </div>
);

export default Header2;

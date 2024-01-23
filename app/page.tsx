'use client';
import Image from 'next/image';
import iconArrow from './images/icon-arrow.svg';
import { useEffect, useState } from 'react';
export default function Home() {
  interface locationJSON {
    ip: '8.8.8.8';
    location: {
      country: 'US';
      region: 'California';
      timezone: '-07:00';
    };
    domains: ['0d2.net', '003725.com', '0f6.b0094c.cn', '007515.com', '0guhi.jocose.cn'];
    as: {
      asn: 15169;
      name: 'Google LLC';
      route: '8.8.8.0/24';
      domain: 'https://about.google/intl/en/';
      type: 'Content';
    };
    isp: 'Google LLC';
  }

  const [text, setText] = useState('');
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState<locationJSON | null>(null);
  const [sendRequest, setSendRequest] = useState(false);
  console.log(location);
  useEffect(() => {
    if (sendRequest) {
      const fetchData = async () => {
        await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_xqRkAKbgy6cRtBa0DgnrGia2novyw&ipAddress=${ip}`)
          .then((res) => res.json())
          .then((data) => {
            setLocation(data as locationJSON);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      void fetchData();
      setSendRequest(false);
    }
  }, [ip, sendRequest]);

  return (
    <main className="font-rubik flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-[50em] w-full flex-col bg-white">
        <div className="flex h-full w-full flex-col bg-[url('./images/pattern-bg-desktop.png')] bg-no-repeat">
          <div className="mt-[1.6em] flex h-[24.5em] w-full flex-col items-center">
            <h1>IP Address Tracker</h1>
            <form
              id="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIp(text);
                  setSendRequest(true);
                }
              }}
              className="mt-[1.35em] flex h-[3.65em] w-[34.688em] rounded-[1em] bg-white"
            >
              <input
                onChange={(e) => {
                  setText(e.target.value);
                }}
                value={text}
                className="h-full w-full rounded-l-[1em] pl-[1.3em] pr-[2.5em] text-[1.15em] tracking-[-0.008em] outline-none"
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <button
                aria-label="search"
                onClick={() => {
                  setIp(text);
                  setSendRequest(true);
                }}
                className="flex h-full w-[4.1em] items-center justify-center rounded-r-[1em] bg-[#000000] pl-[0.1em]"
              >
                <Image src={iconArrow as string} alt="arrow" />
              </button>
            </form>
            <div className="absolute z-10 mt-[10.95em] flex min-h-[10.05em] w-[69.4em] rounded-[1em] bg-white pb-[1em] pl-[2em] ">
              <div className="flex w-[15.3em] flex-col gap-[0.45em] pt-[2.1em]">
                <h2>IP ADDRESS</h2>
                <span className="span1">{location?.ip}</span>
              </div>
              <div className="flex items-start gap-[2em]">
                <div className="mt-[1em] h-[4.7em] w-[1px] self-center bg-[#d3cfcf]"></div>
                <div className="flex w-[15.35em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                  <h2>LOCATION</h2>
                  <span className="span1 leading-[1.2em]">
                    {location?.location.country + ', ' + location?.location.region}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-[2em]">
                <div className="mt-[1em] h-[4.7em]  w-[1px] self-center bg-[#d3cfcf]"></div>
                <div className="flex w-[15.25em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                  <h2>TIMEZONE</h2>
                  <span className="span1 leading-[1.2em]">{'UTC ' + location?.location.timezone}</span>
                </div>
              </div>
              <div className="flex items-start gap-[2em]">
                <div className="mt-[1em] h-[4.7em]  w-[1px] self-center bg-[#d3cfcf]"></div>
                <div className="flex w-[12em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                  <h2>ISP</h2>
                  <span className="span1 leading-[1.2em]">{location?.isp}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full bg-slate-200"></div>
        </div>
      </div>
    </main>
  );
}

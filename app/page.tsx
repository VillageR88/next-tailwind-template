'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState<dataJSON[] | null>(null);

  interface dataJSON {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data: dataJSON[]) => {
        setData(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  return (
    data && (
      <main className="flex min-h-screen flex-col items-center justify-center font-leagueSpartan">
        <div className="h-[9.75em] w-full bg-[hsl(180,29%,50%)] bg-[url('../public/images/bg-header-desktop.svg')]"></div>
        <ul className="flex h-full w-full flex-col items-center gap-[1.5em] bg-[#F0FAFB] pb-[7.55em] pt-[4.7em]">
          {data.map((x, i) => (
            <li
              key={i}
              className="flex h-[9.5em] w-[69.37em] items-center justify-between bg-[white] shadow-lg shadow-[#cae1e4]"
            >
              <div className="flex">
                <div
                  className={`${!x.featured && 'invisible'} flex h-[9.5em] w-[0.31em] rounded-l-[1em] bg-[#5DA5A2]`}
                ></div>
                <div className="flex items-center">
                  <Image className="ml-[2.2em]" src={x.logo} alt="logo" height={88} width={88} />
                  <div className="ml-[1.5em] flex flex-col gap-[0.1em]">
                    <div className="mb-[0.2em] flex gap-[1em]">
                      <h2 className="text-[1.12rem] font-[700] text-[#56A3A2]">{x.company}</h2>
                      <ul className="flex items-center gap-[0.6em] text-[0.9rem] leading-[1.38em] text-white">
                        {x.new && <li className="flex rounded-[1em] bg-[#59A2A3] px-[0.55em] pt-[0.28em]">NEW!</li>}
                        {x.featured && (
                          <li className="flex rounded-[1em] bg-[#2F3C3B] px-[0.55em] pt-[0.28em]">FEATURED</li>
                        )}
                      </ul>
                    </div>
                    <h1 className="text-[1.375rem] font-[700]">{x.position}</h1>
                    <div
                      className={`flex items-center ${
                        i === 0 ? 'gap-[0.92em]' : 'gap-[0.78em]'
                      } text-[1.12rem] text-[hsl(180,8%,52%)]`}
                    >
                      {[x.postedAt, null, x.contract, null, x.location.replace('Only', 'only')].map((x, i) =>
                        [0, 2, 4].includes(i) ? (
                          <span key={i}>{x}</span>
                        ) : (
                          <div className="text-[0.9rem] text-[#c5c4c4]" key={i}>
                            &#8226;
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>asdasd</div>
            </li>
          ))}
        </ul>
      </main>
    )
  );
}

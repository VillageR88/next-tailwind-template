'use client';
import '@fontsource/commissioner';
import '@fontsource/commissioner/400.css';
import '@fontsource/commissioner/500.css';
import '@fontsource/commissioner/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import bookmark from './images/icon-bookmark.svg';
import mastercraft from './images/logo-mastercraft.svg';
import { ThreeDots } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

const SingleBar = ({ value, target }: { value: number; target: number }) => {
  const progress = () => {
    return (value / target) * 100;
  };
  return (
    <div className="h-full w-full px-[3em]">
      <div className="h-[0.8em] w-full rounded-full bg-[#F4F4F4]">
        <div className={`h-full duration-500 ease-in-out w-[${progress()}%] rounded-full bg-moderateCyan`}></div>
      </div>
    </div>
  );
};

const Loader = () => (
  <div className="flex justify-center">
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#3CB4AC"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </div>
);

export default function Home() {
  interface DataJSON {
    backed: number;
    backers: number;
  }
  const [backed, setBacked] = useState<number | undefined>();
  const [backers, setBackers] = useState<number>();
  const formattedNumber = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    });
  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((fetchedData: DataJSON) => {
        setBacked(fetchedData.backed);
        setBackers(fetchedData.backers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-commissioner">
      <nav className="h-full w-full">
        <div className="h-[25em] w-full bg-[url('./images/image-hero-desktop.jpg')]">
          <div className="flex h-[8.05em] items-end justify-between bg-gradient-to-b from-customDark from-5% to-transparent to-100% pb-[3.8em] pl-[10.4em] pr-[10.3em]">
            <Image className="h-fit" src={logo as string} alt="logo image" />
            <div className="flex gap-[2.44em] text-[0.83rem] text-gray-50">
              <button>About</button>
              <button>Discover</button>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex flex-col gap-[1.6em]">
          {/*first block*/}
          <div className="border-1 mt-[-5.67em] flex h-[16.7em] w-[45.5em] flex-col items-center rounded-[0.5em] bg-white outline outline-1 outline-gray-100">
            <div className="z-10 mt-[-1.8em] h-0 pb-[1.8em]">
              <Image src={mastercraft as string} alt="mastercraft logo" />
            </div>
            <span className="mt-[1.88em] text-[1.72rem] font-[700] tracking-[0.010em]">
              Mastercraft Bamboo Monitor Riser
            </span>
            <span className="mt-[0.6em] font-[400] text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </span>
            <div className="mt-[2.38em] flex w-full justify-between pl-[3em] pr-[3em]">
              <button className="rounded-[1.8em] bg-moderateCyan px-[2.5em] py-[1em] text-[1rem] font-[500] text-white">
                Back this project
              </button>
              <button>
                <div className="flex items-center gap-[1em] rounded-[3em] bg-[#F4F4F4] pr-[1.5em]">
                  <Image src={bookmark as string} alt="bookmark image" />
                  <span className="font-[700] text-darkGray">Bookmark</span>
                </div>
              </button>
            </div>
          </div>
          {/*second block*/}
          <div className="border-1 flex h-[13.15em] w-full rounded-[0.5em] bg-white outline outline-1 outline-gray-100">
            <div className="flex w-full flex-col justify-center gap-[2em]">
              <div className="flex h-fit w-full items-center justify-start">
                <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                  {backed ? <span className="text-[2rem] font-[700]">${formattedNumber(backed)}</span> : <Loader />}
                  <span className="text-darkGray">of $100,000 backed</span>
                </div>
                <div className="flex items-center">
                  <span className="h-[4em] w-[1px] bg-slate-300"></span>
                  <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                    {backers ? <span className="text-[2rem] font-[700]">${formattedNumber(backers)}</span> : <Loader />}
                    <span className="text-darkGray">total backers</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="h-[4em] w-[1px] bg-slate-300"></span>
                  <div className="flex min-w-[14em] flex-col content-center pl-[3em]">
                    <span className="text-[2rem] font-[700]">{56}</span>
                    <span className="text-darkGray">days left</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <SingleBar value={backed ?? 0} target={100000} />
              </div>
            </div>
          </div>
          <div className="border-1 h-[40em] w-[45.5em] rounded-[0.5em] bg-white outline outline-1 outline-gray-100"></div>
        </div>
      </main>
    </div>
  );
}

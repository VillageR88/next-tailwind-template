'use client';
import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import documentIcon from './images/icon-document.svg';
import folderIcon from './images/icon-folder.svg';
import uploadIcon from './images/icon-upload.svg';
import { useEffect, useState } from 'react';

const SingleBar = ({ value, target }: { value: number; target: number }) => {
  const result = (value / target) * 100;

  const progress = () => {
    return {
      width: `${result < 100 ? result : 100}%`,
    };
  };
  return (
    <div className="h-fit w-full pb-[0.35em] pt-[0.85em]">
      <div className="h-[1.2em] w-full rounded-full bg-[#151E49] p-[0.17em]">
        <div
          style={{
            ...progress(),

            background: `linear-gradient(to right, hsl(6, 100%, 80%) ${
              100 - Math.pow(result, 2) / 100
            }%, hsl(335, 100%, 65%) 100%)`,
            borderRadius: '9999px',
          }}
          className="flex h-full items-center justify-end rounded-full duration-100"
        >
          <div className="mr-0.5 h-[0.6em] w-[0.6em] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  interface dataJSON {
    storage: number;
  }
  const [space, setSpace] = useState<number>(0);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response: dataJSON) => {
        const targetSpace = response.storage;
        const delay = 50;
        const step = 10;

        const updateSpace = (current: number, target: number) => {
          if (current < target) {
            setSpace(current);
            setTimeout(() => {
              updateSpace(current + step, target);
            }, delay);
          } else {
            setSpace(target);
          }
        };

        updateSpace(space, targetSpace);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [space]);

  return (
    <main className="flex h-full flex-col items-center justify-center font-raleway md:min-h-screen">
      <div className="h-full w-full bg-veryDarkBlue">
        <div className="h-screen w-full bg-[url('./images/bg-mobile.png')] bg-cover bg-center bg-no-repeat md:h-[50em] md:bg-[url('./images/bg-desktop.png')] md:bg-auto md:bg-bottom">
          <div className="flex h-full w-full items-center justify-center">
            <div className="mb-[2em] flex w-full flex-col items-center gap-[1.88em] px-6 md:mb-[1.22em] md:w-fit md:px-0 lg:flex-row lg:items-end">
              {/*left wrapper*/}
              <div
                style={{ boxShadow: '10px 60px 100px 20px rgba(0, 0, 0, 0.15)' }}
                className="flex h-[12.58em] w-full flex-col justify-center gap-[2.08em] rounded-l-[0.6em] rounded-br-[0.6em] rounded-tr-[6.2em] bg-darkBlue pl-[2.6em] md:w-[20em] lg:w-[21.88em] "
              >
                <Image className="h-fit" src={logo as string} alt="logo" />
                <div className="flex flex-row items-center gap-[1em]">
                  <button className="rounded-[0.6em] bg-veryDarkBlue py-[0.75em] pl-[0.85em] pr-[0.87em]">
                    <Image className="h-fit" src={documentIcon as string} alt="document icon" />
                  </button>
                  <button className="rounded-[0.6em] bg-veryDarkBlue pb-[0.87em] pl-[0.76em] pr-[0.74em] pt-[0.88em]">
                    <Image className="h-fit" src={folderIcon as string} alt="folder icon" />
                  </button>
                  <button className="rounded-[0.6em] bg-veryDarkBlue px-[0.75em] py-[1em]">
                    <Image className="h-fit" src={uploadIcon as string} alt="upload icon" />
                  </button>
                </div>
              </div>
              {/*right wrapper*/}
              <div
                style={{ boxShadow: '40px 60px 100px 20px rgba(0, 0, 0, 0.15)' }}
                className="flex h-[9.65em] w-full flex-col items-center justify-center rounded-[0.6em] bg-darkBlue lg:w-[33.8em] "
              >
                <div className="h-0 w-0">
                  <div className="relative z-10 ml-[-5.5em] mt-[5.7em] flex h-[4.5em] w-[11.2em] rounded-l-[0.6em] rounded-br-[0.6em] rounded-tr-[0.6em] bg-white lg:ml-[3.2em] lg:mt-[-5.3em] lg:rounded-br-none">
                    <div className="relative flex h-full w-full items-center justify-center gap-[0.6em]">
                      <span className="text-[2.5rem] font-[700] text-veryDarkBlue">{1000 - space}</span>
                      <span className="pt-[0.3em] text-[0.75rem] font-[700] tracking-[0.08em] text-grayishBlue">
                        GB LEFT
                      </span>
                    </div>
                    <svg
                      className="absolute ml-[9.31em] hidden pt-[4em] lg:block"
                      width="200"
                      height="200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="30,0 0,0 30,30" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="w-full px-[2em] md:w-[37em] md:px-8 lg:w-[28.7em] lg:px-0">
                  <div className="flex justify-center gap-1  self-start whitespace-nowrap text-[0.85rem] tracking-[0.017em] text-paleBlue lg:justify-normal lg:whitespace-normal">
                    <span>You’ve used</span>
                    <span className="font-[600]">{space}</span>
                    <span className="font-[600]">GB</span>
                    <span>of your storage</span>
                  </div>
                  <SingleBar value={space} target={1000} />
                  <div className="flex w-full justify-between text-[0.8rem] font-[600] tracking-[-0.05em] text-paleBlue ">
                    <span>0 GB</span>
                    <span>1000 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

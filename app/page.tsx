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
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderRadius: '9999px',
          }}
          className="flex h-full justify-end rounded-full duration-[2000ms]"
        ></div>
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
        setSpace(response.storage);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-raleway">
      <div className="h-full w-full bg-veryDarkBlue">
        <div className="h-[50em] w-full bg-[url('./images/bg-desktop.png')] bg-bottom bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center">
            <div className="mb-[1.22em] flex items-end gap-[1.88em]">
              {/*left wrapper*/}
              <div
                style={{ boxShadow: '10px 60px 100px 20px rgba(0, 0, 0, 0.15)' }}
                className="flex h-[12.58em] w-[21.88em] flex-col justify-center gap-[2.08em] rounded-l-[0.6em] rounded-br-[0.6em] rounded-tr-[6.2em] bg-darkBlue pl-[2.6em] "
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
                className="flex h-[9.65em] w-[33.8em] flex-col items-center justify-center rounded-[0.6em] bg-darkBlue "
              >
                <div className="w-[28.7em]">
                  <div className="flex gap-1 self-start text-[0.85rem] tracking-[0.017em] text-paleBlue">
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

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

const SingleBar = ({ value, target }: { value: number; target: number }) => {
  const result = (value / target) * 100;
  const progress = () => {
    return {
      width: `${100 - (result < 100 ? result : 100)}%`,
    };
  };
  return (
    <div className="h-fit w-full pb-[0.35em] pt-[0.75em]">
      <div className="h-[1.2em] w-full rounded-full bg-[#151E49] p-[0.17em]">
        <div className="from-gradientStart to-gradientEnd flex h-full w-full justify-end rounded-full bg-gradient-to-r">
          <div
            className={`flex h-full w-full items-center justify-start rounded-full bg-[#151E49]  duration-500 ease-in-out`}
            style={progress()}
          >
            <div className="h-[0.6em] w-[0.6em] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="font-raleway flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-veryDarkBlue">
        <div className="h-[50em] w-full bg-[url('./images/bg-desktop.png')] bg-bottom bg-no-repeat">
          <div className="flex h-full w-full items-center justify-center">
            <div className="mb-[1.22em] flex items-end gap-[1.88em]">
              {/*left wrapper*/}
              <div className="flex h-[12.58em] w-[21.88em] flex-col justify-center gap-[2.08em] rounded-l-[0.6em] rounded-br-[0.6em] rounded-tr-[6.2em] bg-darkBlue pl-[2.6em] shadow-2xl">
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
              <div className="flex h-[9.65em] w-[33.8em] flex-col items-center justify-center rounded-[0.6em] bg-darkBlue shadow-2xl">
                <div className="w-[28.7em]">
                  <span className="self-start text-[0.85rem] tracking-[0.017em] text-paleBlue">
                    You’ve used <span className="font-[600]">815 GB</span> of your storage
                  </span>
                  <SingleBar value={815} target={1000} />
                  <div className="flex w-full justify-between text-[0.8rem] font-[600] tracking-[-0.05em] text-paleBlue">
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

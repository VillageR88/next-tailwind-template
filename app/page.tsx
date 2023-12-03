import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import documentIcon from './images/icon-document.svg';
import folderIcon from './images/icon-folder.svg';
import uploadIcon from './images/icon-upload.svg';

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
              <div className="flex h-[9.65em] w-[33.8em] rounded-[0.6em] bg-darkBlue shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

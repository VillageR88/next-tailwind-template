import '@fontsource/bai-jamjuree';
import '@fontsource/bai-jamjuree/400.css';
import '@fontsource/bai-jamjuree/600.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import computer from './images/image-computer.png';

enum CustomButtonType {
  iOS,
  mac,
}

const CustomButton = ({ type }: { type: CustomButtonType }) => {
  return (
    <button
      className={`${
        type === CustomButtonType.iOS ? 'bg-[#2F9681] shadow-[#D5F7E9]' : 'bg-[#5964BE]'
      } flex h-[3.5em] w-[14.15em] items-start rounded-[3em] shadow-xl`}
    >
      <div
        className={`${
          type === CustomButtonType.iOS ? 'bg-[#26BBA5]' : 'bg-[#6174FF]'
        } flex h-[95%] w-full items-center justify-center rounded-[3em] pt-[0.2em] text-[1.1rem] font-[600] tracking-[0.05em] text-white`}
      >
        {type === CustomButtonType.iOS ? 'Download for iOS' : 'Download for Mac'}
      </div>
    </button>
  );
};

const Article1 = () => {
  return (
    <div className="flex flex-col">
      <span className="mt-[4.2em] text-[2.18rem] font-[600] text-darkGrayishBlue">Keep track of your snippets</span>
      <span className="mt-[0.9em] text-[1.14rem] leading-[1.65em] text-grayishBlue">
        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on
        all your devices. Our Mac and iOS apps will help you organize everything.
      </span>
    </div>
  );
};

const Article2 = ({ header, main }: { header: string; main: string }) => {
  return (
    <div className="flex w-[22em] flex-col">
      <span className="text-[1.5rem] font-[600] text-darkGrayishBlue">{header}</span>
      <span className="mt-[0.5em] text-[1rem] leading-[1.65em] text-grayishBlue">{main}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-baiJamjuree flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full bg-white">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[url('./images/bg-header-desktop.png')] bg-[0_0.2em] bg-no-repeat">
          <div className="flex h-full w-[44em] flex-col items-center text-center">
            <Image className="mt-[8.2em] h-fit" src={logo as string} alt="logo" />
            <span className="mt-[1.15em] text-[2.8rem] font-[600] tracking-[-0.005em] text-darkGrayishBlue">
              A history of everything you copy
            </span>
            <span className="mt-[0.55em] text-[1.25rem] tracking-[0.008em] text-grayishBlue">
              Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
              your devices.
            </span>
            <div className="mt-[3em] flex gap-[1em]">
              <CustomButton type={CustomButtonType.iOS} />
              <CustomButton type={CustomButtonType.mac} />
            </div>
            <Article1 />
          </div>
          <div className="mt-[5em] flex w-full gap-[7em]">
            <Image className="ml-[-2em] h-fit" src={computer} alt="computer image" />
            <div className="mb-[5em] mt-[2em] flex flex-col justify-around">
              <Article2
                header="Quick Search"
                main="Easily search your snippets by content, category, web address, application, and more."
              />
              <Article2 header="iCloud Sync" main="Instantly saves and syncs snippets across all your devices." />
              <Article2
                header="Complete History"
                main="Retrieve any snippets from the first moment you started using the app."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

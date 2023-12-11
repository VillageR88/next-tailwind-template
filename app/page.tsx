import '@fontsource/bai-jamjuree';
import '@fontsource/bai-jamjuree/400.css';
import '@fontsource/bai-jamjuree/600.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import computer from './images/image-computer.png';
import pad from './images/image-devices.png';
import iconBlacklist from './images/icon-blacklist.svg';
import iconText from './images/icon-text.svg';
import iconPreview from './images/icon-preview.svg';
import logoGoogle from './images/logo-google.png';
import logoIBM from './images/logo-ibm.png';
import logoMicrosoft from './images/logo-microsoft.png';
import logoHP from './images/logo-hp.png';
import logoVG from './images/logo-vector-graphics.png';

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

const Article1 = ({ header, main, mt }: { header: string; main: string; mt?: string }) => {
  return (
    <div className="flex w-[44em] flex-col text-center">
      <span className={`${mt ? mt : 'mt-[4.2em]'} text-[2.18rem] font-[600] text-darkGrayishBlue`}>{header}</span>
      <span className="mt-[0.9em] text-[1.14rem] leading-[1.65em] text-grayishBlue">{main}</span>
    </div>
  );
};

const Article2 = ({ header, main }: { header: string; main: string }) => {
  return (
    <div className="flex w-[22em] flex-col">
      <span className="text-[1.45rem] font-[600] leading-[1.4em] text-darkGrayishBlue">{header}</span>
      <span className="mt-[0.5em] text-[1rem] leading-[1.85em] text-grayishBlue">{main}</span>
    </div>
  );
};

const Article3 = ({
  image,
  header,
  main,
  optionalMt,
  optionalMt2,
}: {
  image: string;
  header: string;
  main: string;
  optionalMt?: string;
  optionalMt2?: string;
}) => {
  return (
    <div className="flex w-[22em] flex-col items-center text-center">
      <Image className={`${optionalMt ? optionalMt : 'mt-[1.85em]'} h-fit`} src={image} alt="icon" />
      <span className={`${optionalMt2 ? optionalMt2 : 'mt-[1.85em]'} text-[1.45rem] font-[600] text-darkGrayishBlue`}>
        {header}
      </span>
      <span className="mt-[0.8em] text-[1rem] leading-[1.85em] tracking-[0.01em] text-grayishBlue">{main}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-baiJamjuree flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full bg-white pb-[9.5em]">
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
            <Article1
              header="Keep track of your snippets"
              main="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on
        all your devices. Our Mac and iOS apps will help you organize everything."
            />
          </div>
          <div className="mt-[5em] flex w-full gap-[6.9em]">
            <Image className="ml-[-2em] h-fit" src={computer} alt="computer image" />
            <div className="mb-[4.4em] mt-[2.5em] flex flex-col justify-around">
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
          <Article1
            header="Access Clipboard anywhere"
            main="Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks."
          />
          <Image className="mt-[6em] h-fit" src={pad} alt="image of an IPad" />
          <Article1
            header="Supercharge your workflow"
            main="We’ve got the tools to boost your productivity."
            mt={'mt-[2em]'}
          />
          <div className="mt-[2.8em] flex gap-[1.8em]">
            <Article3
              image={iconBlacklist as string}
              header="Create blacklists"
              main="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
              optionalMt="mt-[1.55em]"
              optionalMt2="mt-[1.68em]"
            />
            <Article3
              image={iconText as string}
              header="Plain text snippets"
              main="Remove unwanted formatting from copied text for a consistent look."
            />
            <Article3
              image={iconPreview as string}
              header="Sneak preview"
              main="Quick preview of all snippets on your Clipboard for easy access."
            />
          </div>
          <div className="mt-[10em] flex flex-row items-center gap-[6em]">
            <Image className="h-fit w-fit" src={logoGoogle} alt="Google logo" />
            <Image className="h-fit w-fit" src={logoIBM} alt="IBM logo" />
            <Image className="h-fit w-fit" src={logoMicrosoft} alt="Microsoft logo" />
            <Image className="h-fit w-fit" src={logoHP} alt="Hewlett Packard logo" />
            <Image className="h-fit w-fit" src={logoVG} alt="Vector Graphics logo" />
          </div>
          <Article1
            header="Clipboard for iOS and Mac OS"
            main="Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
            and you’re ready to start adding to your clipboard."
            mt='mt-[4.45em]'
          />
          <div className="mt-[3em] flex gap-[1em]">
            <CustomButton type={CustomButtonType.iOS} />
            <CustomButton type={CustomButtonType.mac} />
          </div>
        </div>
      </main>
    </div>
  );
}

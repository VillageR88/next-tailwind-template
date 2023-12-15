import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import imageMockup from './images/screen-mockups.svg';
import imageCommunities from './images/icon-communities.svg';
import imageMessages from './images/icon-messages.svg';
import illustrationGrowTogether from './images/illustration-grow-together.svg';

const SmallBlock1 = ({
  image,
  scale,
  text1,
  text2,
}: {
  image: string;
  scale?: string;
  text1: string;
  text2: string;
}) => {
  return (
    <div className="flex flex-col text-center">
      <Image className={`${scale} mb-[-0.5em] h-fit w-fit pl-[0.3em]`} src={image} alt="image of communities" />
      <span className="font-openSans text-[6rem] font-[700] text-veryDarkCyan">{text1}</span>
      <span className="font-openSans text-[1.5rem] text-[#979EA8]">{text2}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <nav className="flex h-[12.2em] w-full items-center justify-between bg-white md:px-[2em] lg:px-[3em] xl:px-0 xl:pl-[5em] xl:pr-[4em]">
        <Image src={logo as string} alt="logo" />
        <button className="rounded-[2em] px-[1.7em] py-[0.42em] font-openSans font-[600] text-lightPink shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)] shadow-[#FBE5FC] outline outline-2 hover:opacity-50">
          Try It Free
        </button>
      </nav>
      <main className="h-full w-full bg-white">
        <div className="mt-[9.55em] flex w-full flex-col items-center">
          <span className="text-center font-poppins text-[2.99rem] font-[700] text-veryDarkCyan drop-shadow-md">
            Build The Community Your Fans Will Love
          </span>
          <span className="mt-[1.15em] w-[31em] text-center font-openSans text-[1.25rem] font-[400] text-veryDarkCyan drop-shadow-sm">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </span>
          <button className="mt-[2.35em] rounded-[3em] bg-pink px-[5.1em] py-[1.25em] font-openSans text-[1.25rem] font-[600] text-white drop-shadow-xl">
            Get Started For Free
          </button>
          <Image className="mt-[6.86em] h-fit" src={imageMockup as string} alt="image of computer" />
          <div className="mt-[7.45em] flex w-full flex-row justify-between lg:px-[10em] xl:px-[17.5em]">
            <SmallBlock1 image={imageCommunities as string} text1="1.4k+" text2="Communities Formed" />
            <SmallBlock1 scale="scale-[84%]" image={imageMessages as string} text1="2.7m+" text2="Messages Sent" />
          </div>
        </div>
        <div className="mt-[8.4em] h-[10em] w-full bg-[url('./images/bg-section-top-desktop-1.svg')]"></div>
        <div className="h-[33em] w-full bg-[#F6FBFF]">
          <div className="flex h-full w-full items-center justify-between pr-[9.5em] pl-[8.1em]">
            <div className="flex w-[44%] gap-[1.4em] flex-col">
              <span className="font-poppins text-[2.5rem] font-[700] text-veryDarkCyan">Grow Together</span>
              <span className="font-openSans text-veryDarkCyan">
                Generate meaningful discussions with your audience and build a strong, loyal community. Think of the
                insightful conversations you miss out on with a feedback form.
              </span>
            </div>
            <Image
              className="h-fit w-[44.5%] items-center"
              src={illustrationGrowTogether as string}
              alt="image of two people"
            />
          </div>
        </div>
        <div className="h-[10em] w-full bg-[url('./images/bg-section-bottom-desktop-1.svg')]"></div>
      </main>
    </div>
  );
}

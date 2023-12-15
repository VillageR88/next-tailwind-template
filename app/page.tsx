import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import logoWhite from './images/logoWhite.svg';
import imageMockup from './images/screen-mockups.svg';
import imageCommunities from './images/icon-communities.svg';
import imageMessages from './images/icon-messages.svg';
import illustrationGrowTogether from './images/illustration-grow-together.svg';
import illustrationFlowingConversation from './images/illustration-flowing-conversation.svg';
import illustrationYourUsers from './images/illustration-your-users.svg';
import iconPhone from './images/icon-phone.svg';
import iconEmail from './images/icon-email.svg';

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

const Article1 = ({ header, main, width }: { header: string; main: string; width?: string }) => {
  return (
    <div className={`flex ${width ? width : 'w-[44%]'}  flex-col gap-[1.4em]`}>
      <span className="font-poppins text-[2.5rem] font-[700] text-veryDarkCyan">{header}</span>
      <span className="font-openSans text-veryDarkCyan">{main}</span>
    </div>
  );
};

const Block1 = ({
  header,
  main,
  width,
  image,
  reversed,
  optionalPr,
}: {
  header: string;
  main: string;
  width?: string;
  image: string;
  reversed?: boolean;
  optionalPr?: string;
}) => {
  return (
    <div
      className={`flex ${
        reversed ? 'flex-row-reverse' : 'flex-row'
      } h-full w-full items-center justify-between pl-[8.1em] ${optionalPr ? optionalPr : 'pr-[9.5em]'}`}
    >
      <Article1 header={header} main={main} width={width} />
      <Image className="h-fit w-[44.5%] items-center" src={image} alt="image of two people" />
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
        <div className="mt-[8.4em] h-[9.8em] w-full bg-[url('./images/bg-section-top-desktop-1.svg')]"></div>
        <div className="h-[34em] w-full bg-[#F6FBFF] pt-[2em]">
          <Block1
            header="Grow Together"
            main="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful
        conversations you miss out on with a feedback form."
            image={illustrationGrowTogether as string}
          />
        </div>
        <div className="h-[8.6em] w-full bg-[url('./images/bg-section-bottom-desktop-1.svg')]"></div>
        <div className="h-[42.8em] pt-[5.5em]">
          <Block1
            header="Flowing Conversations"
            main="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
            width="w-[44.2%]"
            image={illustrationFlowingConversation as string}
            reversed={true}
            optionalPr="pr-[7em]"
          />
        </div>
        <div className="h-[8.6em] w-full bg-[url('./images/bg-section-top-desktop-2.svg')]"></div>{' '}
        <div className="h-[31em] w-full bg-[#F6FBFF] pt-[1em]">
          <Block1
            header="Your Users"
            main="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately."
            image={illustrationYourUsers as string}
            width="w-[45%]"
          />
        </div>
        <div className="h-[8.6em] w-full bg-[url('./images/bg-section-bottom-desktop-2.svg')]"></div>
        <div className="flex h-[32.5em] flex-col items-center justify-center">
          <span className="font-poppins text-[2.5rem] font-[700] text-veryDarkCyan">
            Ready To Build Your Community?
          </span>
          <button className="mt-[2em] rounded-[3em] bg-pink px-[5.1em] py-[1.25em] font-openSans text-[1.25rem] font-[600] text-white drop-shadow-xl">
            Get Started For Free
          </button>
        </div>
        <div className="h-[9.8em] w-full bg-[url('./images/bg-footer-top-desktop.svg')]"></div>
      </main>
      <footer className="h-full w-full bg-veryDarkCyan pl-[7em] pr-[15em]">
        <div className="flex h-[35.2em] w-full flex-row justify-between pt-[7.7em]">
          <div>
            <Image
              className="mb-[2.5em] h-[2.35em] w-[15em]"
              height={10}
              width={10}
              src={logoWhite as string}
              alt="logo"
            />
            <div className="flex flex-col gap-[1.5em]">
              <div className="flex flex-row items-start gap-[1.68em] md:w-[20em]">
                <span className="text-veryPaleCyan font-openSans text-[1.1rem] text-white md:text-[0.9rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                  vestibulum a, ultrices quis sem.
                </span>
              </div>
              <div className="flex flex-row items-center gap-[1.2em] md:w-[25em]">
                <Image className="h-fit md:ml-[0.15em]" src={iconPhone as string} alt="phone icon" />
                <span className="text-veryPaleCyan font-openSans text-[1rem] text-white">Phone: +1-543-123-4567</span>
              </div>
              <div className="flex flex-row items-center gap-[1.1em] md:w-[25em]">
                <Image className="h-fit md:ml-[0.13em]" src={iconEmail as string} alt="email icon" />
                <span className="text-veryPaleCyan font-openSans text-[1rem] text-white">example@huddle.com</span>
              </div>
            </div>
          </div>
          <div>
            <span className="font-openSans text-[1.5rem] font-[600] text-white">NEWSLETTER</span>
            <div className="flex flex-col gap-[1.5em]">
              <div className="flex flex-row items-start gap-[1.68em] md:w-[22em]">
                <span className="text-veryPaleCyan pt-[1.3em] font-openSans text-[1.1rem] font-[600] text-white md:text-[0.9rem]">
                  To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you
                  spam or pass on your email address
                </span>
              </div>
              <div className="flex flex-row items-center gap-[1.2em] md:w-[25em]">
                <input></input>
                <button className="mt-[2em] rounded-[0.2em] bg-pink px-[5.1em] py-[1.25em] font-openSans text-[1.25rem] font-[600] text-white drop-shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

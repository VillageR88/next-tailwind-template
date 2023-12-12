import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import illustrationMockups from './images/illustration-mockups.svg';
import illustrationGrowTogether from './images/illustration-grow-together.svg';
import illustrationFlowingConversation from './images/illustration-flowing-conversation.svg';
import illustrationYourUsers from './images/illustration-your-users.svg';

const LongBox1 = ({
  image,
  header,
  main,
  textWidth,
  fit,
  mr,
  reversed,
}: {
  image: string;
  header: string;
  main: string;
  textWidth: string;
  fit: string;
  mr: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`${
        reversed ? 'flex-row-reverse' : 'flex-row'
      } flex h-[27.5em] w-full items-center justify-between rounded-[1em] shadow-[0_1px_15px_-5px_rgba(0,0,0,0.2)]`}
    >
      <div className={`${!reversed ? 'ml-[7.55em]' : 'mr-[2em]'} flex ${textWidth} flex-col gap-[0.66em]`}>
        <span className="font-poppins text-[1.75rem] font-[700] text-veryDarkCyan">{header}</span>
        <span className="font-openSans text-[1.125rem] text-grayishBlue">{main}</span>
      </div>
      <Image className={`${reversed && 'ml-[7.55em]'} ${mr} h-fit ${fit}`} src={image} alt="picture of people" />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="h-full w-full">
        <div className="flex h-[45.06em] w-full bg-veryPaleCyan">
          <div className="h-full w-full bg-[url('./images/bg-hero-desktop.svg')] pb-[3em] pt-[3em] md:px-[5em]">
            <div className=" flex items-center justify-between">
              <Image className="h-[1.95em] w-[12.5em]" src={logo as string} alt="logo" />
              <button className="h-[3.3em] w-[13.8em] rounded-[2em] bg-white font-openSans text-[0.9rem] font-[700] shadow-[0_4px_30px_-13px_rgba(0,0,0,0.3)]">
                Try It Free
              </button>
            </div>
            <div className="flex h-full w-full items-center justify-between">
              <div className="mt-[0.9em] flex w-[32em] flex-col items-start gap-[1.7em]">
                <span className="font-poppins text-[2.48rem] font-[600]">Build The Community Your Fans Will Love</span>
                <div className="flex flex-col items-start gap-[2em]">
                  <span className="font-openSans text-[1.125rem]">
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
                    connections with your users as you engage in genuine discussion.
                  </span>
                  <button className="rounded-[2.5em] bg-[#FE52C0] px-[5.3em] py-[1.3em] font-openSans text-[0.85rem] font-[700] text-white">
                    Get Started For Free
                  </button>
                </div>
              </div>
              <Image className="mr-[0.2em] h-fit w-[54.2%]" src={illustrationMockups as string} alt="computer image" />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full justify-center bg-white pb-[21.4em]">
          <div className="flex h-full w-[85.5566%] flex-col gap-[2.5em] pt-[10em]">
            <LongBox1
              image={illustrationGrowTogether as string}
              header="Grow Together"
              main="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the
          insightful conversations you miss out on with a feedback form."
              textWidth="w-[30em]"
              fit="w-[33%]"
              mr="mr-[2em]"
            />
            <LongBox1
              image={illustrationFlowingConversation as string}
              header="Flowing Conversations"
              main="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
            have just-in-time loading for a more natural flow."
              textWidth="w-[31em]"
              fit="w-[33.8%]"
              mr="0"
              reversed={true}
            />
            <LongBox1
              image={illustrationYourUsers as string}
              header="Your Users"
              main="It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately."
              textWidth="w-[30em]"
              fit="w-[34%]"
              mr="mr-[1.5em]"
            />
          </div>
        </div>
      </main>
      <footer className="flex h-[35em] w-full flex-col items-center bg-veryDarkCyan">
        <div className="h-[17.5em] md:w-[80%] mt-[-11.5em] rounded-[1em] lg:w-[55.5%] bg-white shadow-[0_1px_15px_-5px_rgba(0,0,0,0.2)]"></div>
      </footer>
    </div>
  );
}

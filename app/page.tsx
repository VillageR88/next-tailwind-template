import '@fontsource/raleway';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import Image from 'next/image';
import logo from './images/logo.svg';
import intro from './images/illustration-intro.png';
import iconAccessAnywhere from './images/icon-access-anywhere.svg';
import iconSecurity from './images/icon-security.svg';
import iconCollaboration from './images/icon-collaboration.svg';
import iconAnyFile from './images/icon-any-file.svg';

const Article1 = ({
  width,
  image,
  alt,
  header,
  main,
}: {
  width: string;
  image: string;
  alt: string;
  header: string;
  main: string;
}) => {
  return (
    <div className="flex justify-center">
      <div className={`flex ${width} flex-col items-center text-center`}>
        <div className="flex h-[5.5em] justify-center">
          <Image className="h-fit" src={image} alt={alt} />
        </div>
        <span className="font-raleway mt-[1em] text-[1.2rem] font-[700] text-white">{header}</span>
        <span className="font-openSans mt-[0.3em] text-[0.9rem] text-[#BFC6CE]">{main}</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-full w-full bg-[#1C2230]">
        <div className="h-[76.5em] w-full bg-[url('./images/bg-curvy-desktop.svg')] bg-bottom bg-no-repeat">
          <nav className="mt-[4.55em] flex w-full flex-row items-center justify-between px-[5em]">
            <Image className="h-fit" src={logo as string} alt="logo" />
            <div className="flex gap-[3.7em]">
              {['Features', 'Team', 'Sign In'].map((x, i) => (
                <button className="font-raleway text-[0.97rem] text-[#BFC6CE]" key={i}>
                  {x}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-[4.7em] flex h-full w-full flex-col items-center">
            <Image className="h-fit" src={intro} alt="image of the people" />
            <div className="mt-[2.2em] flex h-full w-full flex-col items-center text-center">
              <span className="font-raleway w-[20em] text-[2.52rem] font-[700] text-white">
                All your files in one secure location, accessible anywhere.
              </span>
              <span className="font-openSans mt-[1.65em] w-[30em] text-[1.25rem] text-[#FBFFFF]">
                Fylo stores all your most important files in one secure location. Access them wherever you need, share
                and collaborate with friends family, and co-workers.
              </span>
              <button className="from-cyanInside_call_to_action_gradient font-raleway to-blueInside_call_to_action_gradient mt-[2em] rounded-[2em] bg-gradient-to-r px-[5.95em] py-[1em] font-[700] text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="h-s[81em] mt-[-2em] w-full bg-[#181E2A]">
          <div className="flex w-full justify-center">
            <div className="grid grid-cols-2 gap-x-[7em] gap-y-20">
              <Article1
                width="w-[22em]"
                header="Access your files, anywhere"
                main="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                image={iconAccessAnywhere as string}
                alt="image of computer"
              />
              <Article1
                width="w-[25em]"
                header="Security you can trust"
                main="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
                image={iconSecurity as string}
                alt="image of shield"
              />
              <Article1
                width="w-[25em]"
                header="Real-time collaboration"
                main="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
                image={iconCollaboration as string}
                alt="image of people together"
              />
              <Article1
                width="w-[22em]"
                header="Store any type of file"
                main="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                image={iconAnyFile as string}
                alt="image of folder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import ButtonFacebook from './ButtonFacebook';
import ButtonYoutube from './ButtonYoutube';
import ButtonTwitter from './ButtonTwitter';
import ButtonPinterest from './ButtonPinterest';
import ButtonInstagram from './ButtonInstagram';
import ButtonRequestInvite from './ButtonRequestInvite';

const middleButtonsList = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'];
const Footer = () => {
  return (
    <footer className="flex h-full min-h-[11.9em] w-full items-center justify-between bg-[#2D314E] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex gap-[8.2em]">
        <div className="flex flex-col justify-center gap-[3.4em]">
          <Image className="h-fit w-fit" src={'images/logoWhite.svg' as string} alt="logo" width={10} height={10} />
          <div className="flex h-fit gap-[0.81em]">
            <ButtonFacebook />
            <ButtonYoutube />
            <ButtonTwitter />
            <ButtonPinterest />
            <ButtonInstagram />
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-3 gap-x-[8em] gap-y-[0.5em]">
          {middleButtonsList.map((x) => (
            <button
              aria-label={x}
              className="text-left text-[0.9rem] font-[300] text-[white] hover:text-[#31C588]"
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-[1.55em]">
        <ButtonRequestInvite />
        <span className="text-[0.91rem] text-[hsl(233,8%,62%)]">© Easybank. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

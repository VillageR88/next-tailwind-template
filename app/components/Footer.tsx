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
    <footer className="flex h-full w-full flex-col items-center justify-between gap-[2em] bg-[#2D314E] py-[3em] md:min-h-[11.9em] md:flex-row md:gap-0 md:px-[2em] md:py-0 lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex flex-col gap-[2em] md:flex-row md:gap-[3em] lg:gap-[5em] xl:gap-[8.2em]">
        <div className="flex flex-col justify-center gap-[2em] md:gap-[3.4em]">
          <Image className="h-fit w-fit" src={'images/logoWhite.svg' as string} alt="logo" width={10} height={10} />
          <div className="flex h-fit justify-center flex-wrap gap-[0.81em] md:scale-100">
            <ButtonFacebook />
            <ButtonYoutube />
            <ButtonTwitter />
            <ButtonPinterest />
            <ButtonInstagram />
          </div>
        </div>
        <div className="grid gap-y-[0.5em] md:grid-flow-col md:grid-rows-3 md:gap-x-[3em] lg:gap-x-[5em] xl:gap-x-[8em]">
          {middleButtonsList.map((x) => (
            <button
              aria-label={x}
              className="text-[0.9rem] font-[300] text-[white] transition hover:text-[#31C588] md:text-left"
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-[1.55em] md:items-end">
        <ButtonRequestInvite />
        <span className="text-[0.91rem] text-[hsl(233,8%,62%)]">© Easybank. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

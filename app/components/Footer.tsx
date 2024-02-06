import Logo from './Logo';
import ButtonFacebook from './ButtonFacebook';
import ButtonYoutube from './ButtonYoutube';
import ButtonTwitter from './ButtonTwitter';
import ButtonPinterest from './ButtonPinterest';
import ButtonInstagram from './ButtonInstagram';
import Form from './Form';

const middleButtonsList = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'];
const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-between gap-[2em] bg-[#1E1E26] py-[3em] md:min-h-[11.9em] md:flex-row md:gap-0 md:px-[2em] md:py-[3.65em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex flex-col gap-[2em] md:flex-row md:gap-[3em] lg:gap-[5em] xl:gap-[8.2em]">
        <div className="flex flex-col justify-center gap-[2em] md:gap-[5.2em]">
          <Logo color="white" />
          <div className="flex h-fit flex-wrap justify-center gap-[0.81em] md:scale-100">
            <ButtonFacebook />
            <ButtonYoutube />
            <ButtonTwitter />
            <ButtonPinterest />
            <ButtonInstagram />
          </div>
        </div>
        <div className="grid gap-y-[1em] md:grid-flow-col md:grid-rows-4 md:gap-x-[3em] lg:gap-x-[5em] xl:gap-x-[14em]">
          {middleButtonsList.map((x) => (
            <button
              aria-label={x}
              className="text-[0.88rem] font-[400] text-[hsl(0,0%,98%)] transition hover:text-[hsl(12,88%,59%)] md:text-left"
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-[4em] md:items-end">
        <Form />
        <span className="text-[0.8rem] tracking-[-0.03em] text-[#7d7d83]">Copyright 2020. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

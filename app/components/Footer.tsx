import Logo from './Logo';
import ButtonFacebook from './ButtonFacebook';
import ButtonYoutube from './ButtonYoutube';
import ButtonTwitter from './ButtonTwitter';
import ButtonPinterest from './ButtonPinterest';
import ButtonInstagram from './ButtonInstagram';
import Copyright from './Copyright';
import MiddleButtons from './MiddleButtons';
import Form from './Form';

const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col-reverse items-center justify-between gap-[2em] bg-[#1E1E26] pt-[3.85em] md:min-h-[11.9em] md:flex-row md:gap-0 md:px-[2em] md:pb-[3.85em] lg:px-[5em] min-[1458px]:px-[10.3em] min-[1458px]:pl-[10.7em]">
      <div className="flex flex-col gap-[2em] md:flex-row md:gap-[3em] lg:gap-[5em] xl:gap-[7.8em]">
        <div className="flex flex-col-reverse justify-center gap-[2em] md:flex-col md:gap-[5.2em]">
          <div className="flex justify-center pb-[2em] pt-[1em] md:hidden">
            <Copyright forMobile={true} />
          </div>
          <Logo color="white" />
          <div className="flex h-fit flex-wrap justify-center gap-[2.7em] py-[2em] md:scale-100 md:gap-[0.81em] md:py-0">
            <ButtonFacebook />
            <ButtonYoutube />
            <ButtonTwitter />
            <ButtonPinterest />
            <ButtonInstagram />
          </div>
        </div>
        <MiddleButtons forMobile={false} />
      </div>
      <div className="flex flex-col items-center gap-[4em] md:items-end">
        <Form />
        <Copyright forMobile={false} />
        <MiddleButtons forMobile={true} />
      </div>
    </footer>
  );
};

export default Footer;

import Logo from './Logo';
import ButtonFacebook from './ButtonFacebook';
import ButtonTwitter from './ButtonTwitter';
import ButtonPinterest from './ButtonPinterest';
import ButtonInstagram from './ButtonInstagram';
import MiddleButtons from './MiddleButtons/MiddleButtons';
import column1 from './MiddleButtons/column1';
import column2 from './MiddleButtons/column2';
import column3 from './MiddleButtons/column3';

const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-between gap-[3em] bg-[#232027] pb-[3.85em] pt-[3.3em] md:h-[19.4em] md:flex-row md:items-start md:gap-0 md:px-[2em] md:pt-[4.5em] lg:px-[5em] min-[1458px]:px-[10.3em] ">
      <Logo color="white" />
      <div className="flex flex-col gap-[2em] md:flex-row md:gap-[5em] lg:gap-[5.5em] xl:gap-[6.5em]">
        <div className="flex flex-col gap-[2.3em] md:flex-row md:gap-[1.5em] lg:gap-[5em] xl:gap-[5.8em]">
          <div className="md:lg:mr-[-1em]">
            <MiddleButtons title={column1.title} buttons={column1.buttons} />
          </div>
          <div className="md:mr-4">
            <MiddleButtons title={column2.title} buttons={column2.buttons} />
          </div>
          <MiddleButtons title={column3.title} buttons={column3.buttons} />
        </div>
        <div className="flex h-fit flex-wrap justify-center gap-[1.8em] pt-[0.8em] md:grid md:scale-100 md:grid-cols-2 md:gap-[1.75em] md:py-0 md:pt-0 lg:grid-cols-4">
          <ButtonFacebook />
          <ButtonTwitter />
          <ButtonPinterest />
          <ButtonInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

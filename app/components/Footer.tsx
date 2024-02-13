import Logo from './Logo';
import middleItems from './navAndFooterMiddleItems';
import ButtonFacebook from './ButtonFacebook';
import ButtonTwitter from './ButtonTwitter';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-[3em] bg-[#242946] px-6 py-[3em] md:h-[5.5em] md:flex-row md:gap-0 md:px-[2em] md:py-0 lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex w-full flex-col items-center gap-[3em] md:flex-row md:gap-[4em]">
        <Logo color="white" />
        <ul className="flex flex-col gap-[2em] text-center md:flex-row md:gap-[2.8em]">
          {middleItems.map((item, index) => (
            <li key={index}>
              <button className="font-[400] tracking-[0.11em] text-white transition hover:text-[#DC6465] md:text-[0.82rem]">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[2.7em]">
        <ButtonFacebook />
        <ButtonTwitter />
      </div>
    </footer>
  );
};

export default Footer;

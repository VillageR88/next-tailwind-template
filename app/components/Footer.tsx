import Logo from './Logo';
import middleItems from './navAndFooterMiddleItems';

const Footer = () => {
  return (
    <footer className="flex h-[5.5em] w-full items-center bg-[#242946] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className="flex gap-[4em]">
        <Logo color="white" />
        <ul className="flex gap-[2.8em]">
          {middleItems.map((item, index) => (
            <li key={index}>
              <button className="text-[0.82rem] font-[400] tracking-[0.11em] text-white transition hover:text-[#DC6465]">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

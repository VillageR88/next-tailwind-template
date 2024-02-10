import Logo from './Logo';
import middleItems from './navAndFooterMiddleItems';

const NavBar = () => {
  return (
    <nav className="flex h-[6em] w-full items-center justify-between bg-[#FFFFFF] px-6 md:h-[8.5em] md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <Logo additionalClasses="ml-[0.4em]" />
      <div className="mr-[0.1em] flex items-center gap-[3.1em]">
        <ul className="flex gap-[2.85em]">
          {middleItems.map((item, index) => (
            <li key={index}>
              <button className="text-[0.82rem] font-[400] tracking-[0.11em] transition hover:text-[#DC6465]">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`mr-[-0.15em] h-[3em] w-[8.5em] rounded-[0.3em] border-2 border-[#FB5859] bg-[#FB5859] text-[0.82rem] font-[500] tracking-widest text-[white] shadow-[0_3px_5px_4px_#E5EBF8] transition hover:border-[#DC6465] hover:bg-[white] hover:text-[#DC6465]`}
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

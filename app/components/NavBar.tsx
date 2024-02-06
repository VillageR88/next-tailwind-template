import Logo from './Logo';
import ButtonGetStarted from './ButtonGetStarted';

const navBarItems = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];
const NavBar = () => {
  return (
    <nav className="z-20 flex h-[9.9em] w-full items-center justify-between bg-[white] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <div className=" mt-[0.65em]">
        <Logo />
      </div>
      <ul className="mr-[0.6em] flex gap-[2em]">
        {navBarItems.map((item, iterator) => (
          <li key={iterator}>
            <button
              aria-label={item}
              className="scale-y-[90%] text-[0.8rem] font-[500] tracking-[-0.01em] text-[hsl(228,39%,23%)] transition hover:text-[hsl(227,12%,61%)]"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ButtonGetStarted />
    </nav>
  );
};

export default NavBar;

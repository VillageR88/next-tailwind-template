import Logo from './Logo';
const navBarItems = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];
const NavBar = () => {
  return (
    <nav className="z-20 flex h-[10.6em] w-full items-center justify-between bg-[white] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <Logo />
      <ul className="flex">
        {navBarItems.map((item, iterator) => (
          <li key={iterator}>
            <button aria-label={item} className="text-[0.9rem]">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

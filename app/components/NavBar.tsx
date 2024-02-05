import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="z-20 flex h-[10.6em] w-full items-center justify-between bg-[white] px-6 md:px-[2em] lg:px-[5em] min-[1458px]:px-[10.3em]">
      <Logo />
    </nav>
  );
};

export default NavBar;

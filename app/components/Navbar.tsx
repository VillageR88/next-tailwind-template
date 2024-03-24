import Logo from './Logo';

const Navbar = () => (
  <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8">
    <div className="flex h-[80px] w-full max-w-[90em] items-center justify-between  ">
      <Logo />
      <div className="flex gap-4"></div>
    </div>
  </nav>
);

export default Navbar;

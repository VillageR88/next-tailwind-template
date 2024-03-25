import Logo from './Logo';

const Navbar = () => (
  <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8">
    <div className="flex h-[80px] w-full max-w-[90em] items-center justify-between  ">
      <Logo />
      <div className="flex gap-4">
        <button
          className="mt-1.5 flex h-[45px] w-[120px] items-center justify-center gap-[2px] rounded-[6px] bg-gradient-to-b from-[orange] to-[#9a6502] text-[16px] font-extrabold tracking-[1px] text-white  transition hover:brightness-[118%]"
          type="submit"
        >
          <span>Log out</span>
          <span className="font-materialSymbolsOutlined">login</span>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;

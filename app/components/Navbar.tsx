const Navbar = () => (
  <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] font-robotoFlex">
    <div className="flex h-[80px] w-full max-w-[90em] items-center justify-between  px-8">
      <div></div>
      <div className="flex gap-4">
        <button className="flex h-[40px] w-[110px] items-center justify-center rounded-[25px] bg-gradient-to-t from-[#9e7225] to-[#d19f47] text-[14px] font-extrabold tracking-[1px] text-[white] shadow-[0_1px_22px_-12px_rgb(209,159,71)] transition hover:opacity-80">
          <div className="flex h-[80%] w-[92%] items-center justify-center rounded-[25px] bg-gradient-to-b from-[#9e7225] to-[#d19f47]">
            Login
          </div>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;

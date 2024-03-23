import Button1 from '../Button1';

const Navbar = () => (
  <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8">
    <div className="flex h-[80px] w-full max-w-[90em] items-center justify-between  ">
      <h1 className="flex items-center gap-2">
        <span className="font-materialSymbolsOutlined text-[50px] text-[orange]">database</span>
        <span className="text-4xl font-medium text-[white]">Database</span>
      </h1>
      <div className="flex gap-4">
        <Button1 title="Plchldr" />
      </div>
    </div>
  </nav>
);

export default Navbar;

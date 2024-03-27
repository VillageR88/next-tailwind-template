const Logo = ({ alternate }: { alternate?: boolean }) => (
  <span className="flex items-start gap-2">
    <span
      className={`${alternate ? 'text-[40px]' : 'text-[45px]'} font-materialSymbolsOutlined leading-[2.5rem] text-[orange] md:text-[50px]`}
    >
      edit_note
    </span>
    <div className="flex">
      <span className={`${alternate ? 'hidden md:block' : 'text-3xl'} font-bold text-[orange] md:text-4xl`}>My</span>
      <span className={`${alternate ? 'hidden md:block' : 'text-3xl'} font-medium text-white md:text-4xl`}>
        Notebook
      </span>
    </div>
  </span>
);
export default Logo;

const Button1 = ({ title }: { title: string }) => (
  <button className="flex h-[40px] w-[110px] items-center justify-center rounded-[25px] bg-gradient-to-t from-[#9e7225] to-[#d19f47] text-[14px] font-extrabold tracking-[1px] text-[white] shadow-[0_1px_22px_-12px_rgb(209,159,71)] transition hover:brightness-[120%]">
    <div className="flex h-[80%] w-[92%] items-center justify-center rounded-[25px] bg-gradient-to-b from-[#9e7225] to-[#d19f47]">
      {title}
    </div>
  </button>
);

export default Button1;

const FormLogin = () => {
  return (
    <form className="flex size-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-2" htmlFor="email">
            <span className="font-materialSymbolsOutlined">email</span>
            <span>Email</span>
          </label>
          <button className="text-[14px] text-[orange] transition hover:brightness-[117%]">Create new account</button>
        </div>
        <div>
          <input placeholder="example@domain.com" className="w-full" id="email" type="email" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-1">
          <label className="flex w-fit items-center gap-[6px]" htmlFor="password">
            <span className="font-materialSymbolsOutlined">lock</span>
            <span>Password</span>
          </label>
          <button className="text-[14px] text-[orange] transition hover:brightness-[117%]">Remind my password</button>
        </div>
        <input placeholder="Enter your password" id="password" type="password" />
      </div>
      <button
        className="mt-1.5 flex h-[45px] w-full items-center justify-center rounded-[6px] bg-gradient-to-b from-[#edb43a] to-[#9a6502] text-[16px] font-extrabold tracking-[1px] text-white  transition hover:brightness-[118%]"
        type="button"
      >
        Login
      </button>
    </form>
  );
};
export default FormLogin;

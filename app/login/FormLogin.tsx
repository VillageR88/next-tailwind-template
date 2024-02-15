const FormLogin = () => {
  return (
    <form className="flex h-[282px] w-full flex-col justify-between">
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="email">
          Email address
        </label>
        <input
          className="textField h-full w-full bg-[url('../public/assets/images/icon-email.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]"
          placeholder="e.g. alex@email.com"
          type="email"
          name="email"
          id="email"
          aria-required="true"
          required
        />
      </div>
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="password">
          Password
        </label>
        <input
          className="textField h-full w-full bg-[url('../public/assets/images/icon-password.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]"
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          aria-required="true"
          required
        />
      </div>
      <button className="buttonPrimary headingS h-[46px] w-full text-white" type="submit">
        Login
      </button>
      <div className="bodyM flex justify-center gap-1">
        <span className="text-[#737373]">Don&rsquo;t have an account?</span>
        <span className="text-[#633CFF]">Create account</span>
      </div>
    </form>
  );
};

export default FormLogin;

const FormLogin = () => {
  return (
    <form className="flex h-[282px] w-full flex-col justify-between">
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="email">
          Email address
        </label>
        <input
          className="h-full w-full rounded-[8px] border bg-[url('../public/assets/images/icon-email.svg')] bg-[length:20px_20px] bg-[10px_center] bg-no-repeat pl-[40px]"
          type="email"
          name="email"
          id="email"
          aria-required="true"
          required
        />
      </div>
      <div>subdiv2</div>
      <button type="submit">Login</button>
      <span>text</span>
    </form>
  );
};

export default FormLogin;

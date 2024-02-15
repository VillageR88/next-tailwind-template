import Link from 'next/link';

const FormCreateAccount = () => {
  return (
    <form className="flex h-[418px] w-full flex-col justify-between">
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
          Create password
        </label>
        <input
          className={`textField h-full w-full bg-[url('../public/assets/images/icon-password.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]`}
          placeholder="At least 8 characters"
          type="password"
          name="password"
          id="password"
          aria-required="true"
          required
        />
      </div>
      <div className="flex h-[70px] flex-col justify-between gap-[4px]">
        <label className="bodyS h-[18px]" htmlFor="passwordConfirm">
          Confirm password
        </label>
        <input
          className={`textField h-full w-full bg-[url('../public/assets/images/icon-password.svg')] bg-[length:16px_16px] bg-[16px_center] bg-no-repeat pl-[44px]`}
          placeholder="At least 8 characters"
          type="passwordConfirm"
          name="passwordConfirm"
          id="passwordConfirm"
          aria-required="true"
          required
        />
      </div>
      <span className="bodyS text-[#737373]">Password must contain at least 8 characters</span>
      <button className="buttonPrimary headingS h-[46px] w-full text-white" type="submit">
        Create new account
      </button>
      <div className="bodyM flex justify-center gap-1">
        <span className="text-[#737373]">Already have an account?</span>
        <Link href={'/login'}>
          <span className="text-[#633CFF]">Login</span>
        </Link>
      </div>
    </form>
  );
};

export default FormCreateAccount;

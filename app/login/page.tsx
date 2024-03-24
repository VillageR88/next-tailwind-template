import FormLogin from './FormLogin';
import Logo from '../components/Logo';

export default function Login() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-8 font-instrumentSans">
      <div className="flex w-full max-w-[500px] flex-col items-center justify-between ">
        <header className="flex w-full justify-start">
          <Logo />
        </header>
        <main className="mt-[10px] flex h-[482px] w-full flex-col gap-[48px] rounded-[6px] border border-[#313131] bg-[#232323] px-8 py-10">
          <h1>Login</h1>
          <div className="size-full">
            <FormLogin />
          </div>
        </main>
      </div>
    </div>
  );
}

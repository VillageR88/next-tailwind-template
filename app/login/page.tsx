import FormLogin from './FormLogin';
import LayoutAccount from '../components/LayoutAccount';

export default function Login() {
  return (
    <LayoutAccount>
      <main className="mt-[10px] flex min-h-full w-full flex-col gap-[48px] rounded-[6px] border border-[#f5f5f5] bg-[white] px-8 pb-14 pt-10 shadow-[0_10px_30px_-1px_rgba(0,0,0,0.03)] transition dark:border-[#313131] dark:bg-[#232323] dark:shadow-none">
        <div className="flex h-full items-start">
          <h1 className="leading-[32px]">Login</h1>
        </div>
        <div className="size-full">
          <FormLogin />
        </div>
      </main>
    </LayoutAccount>
  );
}

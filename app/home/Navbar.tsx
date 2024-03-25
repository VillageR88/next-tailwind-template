'use client';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <Logo />
        <div className="flex gap-4">
          <button
            className="flex h-[40px] w-[110px] items-center justify-center gap-[2px] rounded-[6px] border border-[white] bg-gradient-to-b text-[16px] font-extrabold tracking-[1px] text-white transition hover:border-[orange] hover:text-[orange] hover:brightness-[118%]"
            type="button"
          >
            <span>Save</span>
            <span className="font-materialSymbolsOutlined">save</span>
          </button>
          <button
            className="flex h-[40px] w-[110px] items-center justify-center gap-[2px] rounded-[6px] border border-[white] bg-gradient-to-b text-[16px] font-extrabold tracking-[1px] text-white transition hover:border-[orange] hover:text-[orange] hover:brightness-[118%]"
            type="button"
          >
            <span>Revert</span>
            <span className="font-materialSymbolsOutlined">undo</span>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="flex h-[40px] w-[110px] items-center justify-center gap-[2px] rounded-[6px] border border-[white] bg-gradient-to-b text-[16px] font-extrabold tracking-[1px] text-white transition hover:border-[orange] hover:text-[orange] hover:brightness-[118%]"
            type="submit"
          >
            <span>Log out</span>
            <span className="font-materialSymbolsOutlined">login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

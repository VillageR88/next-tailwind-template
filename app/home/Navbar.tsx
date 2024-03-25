'use client';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8 py-2">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <Logo />
        <div className="flex gap-4">
          <button disabled className="button1" type="button">
            <span>Save</span>
            <span className="font-materialSymbolsOutlined">save</span>
          </button>
          <button disabled className="button1" type="button">
            <span>Revert</span>
            <span className="font-materialSymbolsOutlined">undo</span>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="button2 group"
            type="submit"
          >
            <div className="group-hover: flex size-full items-center justify-center rounded-[6px] bg-[#1C1C1C]/0 text-white transition hover:text-[orange] group-hover:bg-[#1C1C1C]/100">
              <span>Log out</span>

              <span className="font-materialSymbolsOutlined">login</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

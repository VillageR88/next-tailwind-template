'use client';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { DataContext } from '../page';
import { useContext } from 'react';

const Navbar = () => {
  const router = useRouter();
  const context = useContext(DataContext);

  return (
    <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8 py-4">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <Logo />
        <div className="flex gap-4">
          <button
            disabled={context.dataContext === context.initialDataContext.current}
            className="button1"
            type="button"
          >
            <span>Save</span>
            <span className="font-materialSymbolsOutlined">save</span>
          </button>
          <button
            disabled={context.dataContext === context.initialDataContext.current}
            className="button1"
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
            className="button2 group"
            type="submit"
          >
            <div className="button2Inner">
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

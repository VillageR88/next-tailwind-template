'use client';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';
import IconSave from '../components/IconSave';
import IconUndo from '../components/IconUndo';
import IconLogout from '../components/IconLogout';

const Navbar = () => {
  const router = useRouter();
  const context = useContext(DataContext);
  //create function checkSame and check if deep copy of JSON is the same as the original
  const checkSame = () => {
    return (
      JSON.stringify(context.dataContext?.collections) ===
      JSON.stringify(context.initialDataContext.current?.collections)
    );
  };

  return (
    <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8 py-4">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <Logo alternate />
        <div className="flex gap-4">
          <button disabled={checkSame()} className="button1 flex" type="button">
            <span className="hidden md:block">Save</span>
            <IconSave />
          </button>
          <button
            onClick={() => {
              context.setDataContext(context.initialDataContext.current);
            }}
            disabled={checkSame()}
            className="button1 flex"
            type="button"
          >
            <span className="hidden md:block">Revert</span>
            <IconUndo />
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="button2 group"
            type="submit"
          >
            <div className="button2Inner gap-[3px]">
              <span className="hidden md:block">Log out</span>
              <IconLogout />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

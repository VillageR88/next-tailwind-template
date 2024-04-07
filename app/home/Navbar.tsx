import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';
import IconSave from '../components/IconSave';
import IconUndo from '../components/IconUndo';
import IconLogout from '../components/IconLogout';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';
import { CollectionGroup } from '../lib/interfaces';

const Navbar = () => {
  const router = useRouter();
  const context = useContext(DataContext);
  const checkSame = () => {
    return (
      JSON.stringify(context.dataContext.collections) === JSON.stringify(context.initialDataContext.current.collections)
    );
  };

  return (
    <nav className="flex w-full justify-center border-b border-[#313131] bg-[#1C1C1C] px-8 py-4">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <Logo alternate />
        <div className="flex gap-4">
          <button
            onClick={() => {
              const style = document.createElement('style');
              style.innerHTML = `* { cursor: wait}`;
              document.head.appendChild(style);
              const token = localStorage.getItem('token');
              if (!token) return;
              handleSaveCollectionGroup({ data: context.dataContext, token: token })
                .then((res) => {
                  if (res) {
                    const newData = JSON.parse(JSON.stringify(context.dataContext)) as CollectionGroup;
                    context.initialDataContext.current = newData;
                    context.setDataContext(newData);
                  }
                  document.head.removeChild(style);
                })
                .catch((error) => {
                  console.error(error);
                  document.head.removeChild(style);
                });
            }}
            disabled={checkSame()}
            className="button1 flex"
            type="button"
          >
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
              const token = localStorage.getItem('token');
              if (!token) return;
              void handleSaveCollectionGroup({ data: context.dataContext, token: token });
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

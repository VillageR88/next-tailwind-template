import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { useContext, useRef } from 'react';
import DataContext from '@/app/home/DataContext';
import IconSave from '../components/IconSave';
import IconUndo from '../components/IconUndo';
import IconLogout from '../components/IconLogout';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';
import newData from '../lib/newData';
import { CollectionGroup } from '../lib/interfaces';
import clearToken from './clearToken';
import ButtonTheme from '../components/ButtonTheme';

const Navbar = ({ token }: { token: string }) => {
  const logoutRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const context = useContext(DataContext);
  const checkSame = () => {
    return (
      JSON.stringify(context.dataContext.collections) === JSON.stringify(context.initialDataContext.current.collections)
    );
  };

  return (
    <nav className="flex w-full justify-center  border-[#313131]  px-8 py-4">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo alternate />
          <ButtonTheme />
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              const style = document.createElement('style');
              style.innerHTML = `* { cursor: wait}`;
              document.head.appendChild(style);
              const safeContext = () => {
                const safe = JSON.parse(JSON.stringify(context.dataContext)) as CollectionGroup;
                safe.collections.forEach((collection) => {
                  if (collection.title.length === 0) {
                    collection.title = 'Untitled Collection';
                  }
                });
                return safe;
              };
              handleSaveCollectionGroup({ data: newData({ data: safeContext() }), token: token })
                .then((res) => {
                  if (res) {
                    context.initialDataContext.current = JSON.parse(JSON.stringify(safeContext())) as CollectionGroup;
                    context.setDataContext(JSON.parse(JSON.stringify(safeContext())) as CollectionGroup);
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
            ref={logoutRef}
            onClick={() => {
              if (logoutRef.current) logoutRef.current.disabled = true;
              const style = document.createElement('style');
              style.innerHTML = `* { cursor: wait}`;
              document.head.appendChild(style);
              const safeContext = () => {
                const safe = JSON.parse(JSON.stringify(context.dataContext)) as CollectionGroup;
                safe.collections.forEach((collection) => {
                  if (collection.title.length === 0) {
                    collection.title = 'Untitled Collection';
                  }
                });
                return safe;
              };
              void handleSaveCollectionGroup({ data: newData({ data: safeContext() }), token: token });
              void clearToken().then(() => {
                document.head.removeChild(style);
                router.push('/login');
              });
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

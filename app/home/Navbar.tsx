import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { useContext, useRef } from 'react';
import { DataContext } from '@/app/_providers/DataContext';
import IconSave from '../components/IconSave';
import IconUndo from '../components/IconUndo';
import IconLogout from '../components/IconLogout';
import { handleSaveCollectionGroup, clearToken } from '@/app/lib/functionsServer';
import { newData, safeContext } from '@/app/lib/functionsClient';
import { CollectionGroup } from '../lib/interfaces';
import ButtonTheme from '../components/ButtonTheme';

const Navbar = ({ token, loading }: { token: string; loading: boolean }) => {
  const logoutRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { dataContext, initialDataContext, setDataContext } = useContext(DataContext);
  const checkSame = () => {
    return JSON.stringify(dataContext.collections) === JSON.stringify(initialDataContext.current.collections);
  };

  return (
    <nav className="flex w-full justify-center border-[#313131] px-8 py-4">
      <div className="flex size-full max-w-[90em] items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
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
                const safe = JSON.parse(JSON.stringify(dataContext)) as CollectionGroup;
                safe.collections.forEach((collection) => {
                  if (collection.title.length === 0) {
                    collection.title = 'Untitled Collection';
                  }
                  collection.notes.forEach((note) => {
                    if (note.title.length === 0) {
                      note.title = 'Untitled Note';
                    }
                    if (note.description.length === 0) {
                      note.description = 'Add a description here';
                    }
                  });
                });
                return safe;
              };
              handleSaveCollectionGroup({ data: newData({ data: safeContext() }), token: token })
                .then((res) => {
                  if (res) {
                    initialDataContext.current = JSON.parse(JSON.stringify(safeContext())) as CollectionGroup;
                    setDataContext(JSON.parse(JSON.stringify(safeContext())) as CollectionGroup);
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
              setDataContext(JSON.parse(JSON.stringify(initialDataContext.current)) as CollectionGroup);
            }}
            disabled={checkSame()}
            className="button1 flex"
            type="button"
          >
            <span className="hidden md:block">Revert</span>
            <IconUndo />
          </button>
          <button
            disabled={loading}
            ref={logoutRef}
            onClick={() => {
              if (logoutRef.current) logoutRef.current.disabled = true;
              const style = document.createElement('style');
              style.innerHTML = `* { cursor: wait}`;
              document.head.appendChild(style);
              void handleSaveCollectionGroup({
                data: newData({ data: safeContext({ dataContext: dataContext }) }),
                token: token,
              });
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

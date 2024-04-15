import { Dispatch, SetStateAction, useContext, useState } from 'react';
import IconReturn from '../components/IconReturn';
import { DataContext } from '../_providers/DataContext';
import ButtonDelete from '../components/ButtonDelete';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';

export default function NotePage({
  token,
  collectionPage,
  notePage,
  setNotePage,
}: {
  token: string;
  collectionPage: number;
  notePage: number;
  setNotePage: Dispatch<SetStateAction<number | null>>;
}) {
  token; //TODO: Remove this line after adding token to the function
  const [titleEditable, setTitleEditable] = useState(false);
  const { dataContext, setDataContext } = useContext(DataContext);
  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <div className="group flex select-none flex-col gap-[6px] rounded-[6px] border border-[#f5f5f5] bg-white px-3 py-4 drop-shadow-sm dark:border-[#313131] dark:bg-[#232323]">
        <div className="flex justify-between px-1">
          {!titleEditable ? (
            <button
              onClick={() => {
                setTitleEditable(true);
              }}
              className="max-w-[80%] truncate pb-[8px] text-left text-[18px] font-bold transition hover:text-[darkorange] dark:text-white dark:hover:text-[orange]"
            >
              {dataContext.collections[collectionPage - 1].notes[notePage - 1].title}
            </button>
          ) : (
            <input
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (e.currentTarget.value.length === 0) {
                    e.currentTarget.value = 'Untitled Note';
                    return;
                  }
                  setTitleEditable(false);
                }
              }}
              type="text"
              value={dataContext.collections[collectionPage - 1].notes[notePage - 1].title}
              onChange={(e) => {
                /*const newCollections = dataContext.collections.map((collection) => {
                  if (collection.id === collectionPage) {
                    collection.title = e.target.value;
                  }
                  return collection;
                });
                const newDataContext = { collections: newCollections };
                setDataContext(newDataContext);
                */
                const newCollections = dataContext.collections.map((collection) => {
                  if (collection.id === collectionPage) {
                    collection.notes.map((note) => {
                      if (note.id === notePage) {
                        note.title = e.target.value;
                      }
                      return note;
                    });
                  }
                  return collection;
                });
                setDataContext({ collections: newCollections });
              }}
              className="h-fit w-[84%] border-none bg-transparent p-0 text-left text-[18px] font-bold outline-none transition dark:text-white"
            />
          )}
          <div className="flex gap-2 pb-3">
            <ButtonDelete
              alwaysVisible
              func={() => {
                const newNotes = dataContext.collections[collectionPage - 1].notes.filter(
                  (note) => note.id !== notePage,
                );
                const newCollections = dataContext.collections.map((collection) => {
                  if (collection.id === collectionPage) {
                    collection.notes = newNotes;
                  }
                  return collection;
                });
                setDataContext({ collections: newCollections });
                void handleSaveCollectionGroup({
                  data: { collections: newCollections },
                  token: token,
                });
                setNotePage(null);
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="button1 flex pt-[3px]"
        onClick={() => {
          /*
         
          setCollectionPage(null);
          if (!token) return;
          const safeContext = () => {
            const safe = JSON.parse(JSON.stringify(dataContext)) as CollectionGroup;
            safe.collections.forEach((collection) => {
              if (collection.title.length === 0) {
                collection.title = 'Untitled Collection';
              }
            });
            return safe;
          };
          initialDataContext.current = newData({ data: safeContext() });
          setDataContext(newData({ data: safeContext() }));
          void handleSaveCollectionGroup({
            data: newData({ data: safeContext() }),
            token: token,
          });
        */
          setNotePage(null);
        }}
      >
        <IconReturn />
        <span className="hidden pl-1 md:block">Return</span>
      </button>
    </div>
  );
}

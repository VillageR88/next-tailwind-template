import DataContext from './DataContext';
import { useContext, useState } from 'react';
import IconReturn from '../components/IconReturn';
import ButtonAdd from '../components/ButtonAdd';
import ButtonDelete from '../components/ButtonDelete';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';
import newData from '../lib/newData';
import { CollectionGroup } from '../lib/interfaces';
import { Reorder, useDragControls } from 'framer-motion';
import ButtonDrag from '../components/ButtonDrag';

const CollectionPage = ({
  token,
  page,
  setPage,
}: {
  token: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const controls = useDragControls();
  const context = useContext(DataContext);
  const [titleEditable, setTitleEditable] = useState<boolean>(false);
  const [noteEditable, setNoteEditable] = useState<null | number>(null);
  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <div className="group flex select-none flex-col gap-[6px] rounded-[6px] border border-[#f5f5f5] bg-white  px-3  py-4 drop-shadow-sm dark:border-[#313131] dark:bg-[#232323] ">
        <div className="flex justify-between px-1">
          {!titleEditable ? (
            <button
              onClick={() => {
                setTitleEditable(true);
              }}
              className="max-w-[92%] truncate pb-[8px] text-left text-[18px] font-bold transition hover:text-[darkorange] dark:text-white dark:hover:text-[orange]"
            >
              {context.dataContext.collections[page - 1].title}
            </button>
          ) : (
            <input
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  //if current input length is 0 return
                  if (e.currentTarget.value.length === 0) {
                    e.currentTarget.value = 'Untitled Collection';
                    return;
                  }
                  setTitleEditable(false);
                }
              }}
              type="text"
              value={context.dataContext.collections[page - 1].title}
              onChange={(e) => {
                const newCollections = context.dataContext.collections.map((collection) => {
                  if (collection.id === page) {
                    collection.title = e.target.value;
                  }
                  return collection;
                });
                const newDataContext = { collections: newCollections };
                context.setDataContext(newDataContext);
              }}
              className="h-fit w-[92%] border-2 bg-transparent p-0 text-left text-[18px] font-bold transition dark:text-white"
            />
          )}
          <div className="flex gap-2 pb-3">
            <ButtonAdd
              alwaysVisible
              func={() => {
                const newCollections = context.dataContext.collections.map((collection) => {
                  if (collection.id === page) {
                    collection.Notes.push({
                      id: Math.floor(Math.random() * 1000000),
                      description: 'New Note',
                      title: '',
                    });
                  }
                  return collection;
                });
                const newDataContext = { collections: newCollections };
                const stringifiedData = JSON.parse(JSON.stringify(newDataContext)) as CollectionGroup;
                context.setDataContext(stringifiedData);
              }}
            />
            <ButtonDelete
              alwaysVisible
              func={() => {
                const newCollections = context.dataContext.collections.filter((collection) => collection.id !== page);
                const newDataContext = { collections: newCollections };
                const stringifiedData = JSON.parse(JSON.stringify(newDataContext)) as CollectionGroup;
                context.initialDataContext.current = stringifiedData;
                context.setDataContext(stringifiedData);
                if (!token) return;
                void handleSaveCollectionGroup({
                  data: newData({ data: newDataContext }),
                  token: token,
                });
                setPage(null);
              }}
            />
          </div>
        </div>
        <Reorder.Group
          values={context.dataContext.collections[page - 1].Notes}
          onReorder={(newOrder) => {
            const newCollections = context.dataContext.collections.map((collection) => {
              if (collection.id === page) {
                collection.Notes = newOrder;
              }
              return collection;
            });
            const newDataContext = { collections: newCollections };
            context.setDataContext(newDataContext);
          }}
          className="flex flex-col gap-2"
        >
          {context.dataContext.collections[page - 1].Notes.map((note, index) => (
            <Reorder.Item
              dragListener={false}
              dragControls={controls}
              value={note}
              className="rounded-[6px] border border-[rgba(0,0,0,0.2)] p-[10px] dark:border-[#1C1C1C] dark:bg-[#1C1C1C]"
              key={note.id}
            >
              <div className="flex justify-between pl-1 pr-2">
                {noteEditable === index ? (
                  <input
                    autoFocus
                    className="h-fit w-[92%] border-none bg-transparent p-0 text-left transition dark:text-white"
                    type="text"
                    value={note.description}
                    onChange={(e) => {
                      const newCollections = context.dataContext.collections.map((collection) => {
                        if (collection.id === page) {
                          collection.Notes[index].description = e.target.value;
                        }
                        return collection;
                      });
                      const newDataContext = { collections: newCollections };
                      context.setDataContext(newDataContext);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (e.currentTarget.value.length === 0) {
                          e.currentTarget.value = 'Untitled Note';
                          return;
                        }
                        setNoteEditable(null);
                      }
                    }}
                  />
                ) : (
                  <button
                    onClick={() => {
                      setNoteEditable(index);
                    }}
                    className="font-semibold transition hover:text-[darkorange] dark:font-normal dark:text-white dark:hover:text-[orange]"
                  >
                    {note.description}
                  </button>
                )}
                <ButtonDrag
                  alwaysVisible
                  func={(e) => {
                    controls.start(e);
                  }}
                />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <button
        className="button1 flex pt-[3px]"
        onClick={() => {
          setPage(null);
          if (!token) return;
          const safeContext = () => {
            const safe = JSON.parse(JSON.stringify(context.dataContext)) as CollectionGroup;
            safe.collections.forEach((collection) => {
              if (collection.title.length === 0) {
                collection.title = 'Untitled Collection';
              }
            });
            return safe;
          };
          context.initialDataContext.current = newData({ data: safeContext() });
          context.setDataContext(newData({ data: safeContext() }));
          void handleSaveCollectionGroup({
            data: newData({ data: safeContext() }),
            token: token,
          });
        }}
      >
        <IconReturn />
        <span className="hidden pl-1 md:block">Return</span>
      </button>
    </div>
  );
};

export default CollectionPage;

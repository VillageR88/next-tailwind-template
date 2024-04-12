import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';
import { Reorder, useDragControls } from 'framer-motion';
import { Collection, Note } from '../lib/interfaces';
import ButtonDrag from '../components/ButtonDrag';
import IconAdd from '../components/IconAdd';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';
import newData from '../lib/newData';

const Item = ({
  collection,
  setPage,
  index,
}: {
  collection: Collection;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}) => {
  const controls = useDragControls();
  const context = useContext(DataContext);

  const handleReorderItem = (newOrder: Note[], collectionId: number) => {
    context.setDataContext((prevState) => {
      const collectionIndex = prevState.collections.findIndex((collection) => collection.id === +collectionId);

      const newCollections = [...prevState.collections];

      newCollections[collectionIndex] = {
        ...newCollections[collectionIndex],
        Notes: newOrder,
      };

      return {
        ...prevState,
        collections: newCollections,
      };
    });
  };

  return (
    <Reorder.Item
      dragListener={false}
      dragControls={controls}
      value={collection}
      key={collection.id}
      className="group/group2 flex select-none flex-col gap-[6px] rounded-[6px] border border-[#f5f5f5] bg-white px-3 py-4 drop-shadow-sm dark:border-[#313131]  dark:bg-[#232323] "
    >
      <div className="flex justify-between px-1">
        <div className="flex items-center gap-3 pb-[8px]">
          <button
            onClick={() => {
              setPage(index + 1);
              const token = localStorage.getItem('token');
              if (!token) return;
              void handleSaveCollectionGroup({ data: newData({ data: context.dataContext }), token: token });
              context.initialDataContext.current = newData({ data: context.dataContext });
              context.setDataContext(newData({ data: context.dataContext }));
            }}
            className="text-left text-[18px] font-bold transition-colors duration-[150ms] hover:text-[darkorange] dark:text-white dark:hover:text-[orange]"
          >
            {collection.title}
          </button>
        </div>
        <ButtonDrag
          alwaysVisible
          func={(e) => {
            controls.start(e);
          }}
        />
      </div>
      <Reorder.Group
        onReorder={(newOrder) => {
          handleReorderItem(newOrder, collection.id);
        }}
        key={collection.id}
        values={collection.Notes}
        className="flex flex-col gap-2"
      >
        {collection.Notes.map((note) => (
          <ItemsNested key={note.id} note={note} />
        ))}
      </Reorder.Group>
    </Reorder.Item>
  );
};

const ItemsNested = ({ note }: { note: Note }) => {
  const controls = useDragControls();
  return (
    <Reorder.Item
      dragListener={false}
      dragControls={controls}
      value={note}
      key={note.id}
      className="group/group3 rounded-[6px] border-2 p-[10px] font-semibold dark:border-[#1C1C1C] dark:bg-[#1C1C1C] dark:font-normal dark:text-white"
    >
      <div className="flex justify-between pl-1 pr-2">
        <span>{note.description}</span>
        {/*
          <ButtonDrag
            func={(e) => {
              controls.start(e);
            }}
          />
          */}
      </div>
    </Reorder.Item>
  );
};

const Notebook = ({ setPage }: { setPage: React.Dispatch<React.SetStateAction<number | null>> }) => {
  const context = useContext(DataContext);

  const handleReorderGroup = (newOrder: Collection[]) => {
    context.setDataContext((prevState) => ({
      ...prevState,
      collections: newOrder,
    }));
  };

  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <Reorder.Group
        className="flex w-full flex-col gap-8"
        values={context.dataContext.collections}
        onReorder={handleReorderGroup}
      >
        {context.dataContext.collections.map((collection, index) => {
          return <Item index={index} key={collection.id} collection={collection} setPage={setPage} />;
        })}
      </Reorder.Group>

      <button
        className="button1 flex pt-[1px]"
        onClick={() => {
          context.setDataContext((prevState) => {
            const newNotebook = [...prevState.collections];
            newNotebook.push({
              id: newNotebook.length + 1,
              title: 'New Collection',
              Notes: [],
            });
            return {
              ...prevState,
              collections: newNotebook,
            };
          });
        }}
      >
        <IconAdd />
        <span className="hidden pl-1 pt-[1px] md:block">Add</span>
      </button>
    </div>
  );
};
export default Notebook;

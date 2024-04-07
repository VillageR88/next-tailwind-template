import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';
import { Reorder, useDragControls } from 'framer-motion';
import { Collection, Note } from '../lib/interfaces';
import ButtonDrag from '../components/ButtonDrag';
import ButtonEdit from '../components/ButtonEdit';
import newData from '../lib/newData';
import handleSaveCollectionGroup from './handleSaveCollectionGroup';

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
      className="group/group2 flex select-none flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4 "
    >
      <div className="flex justify-between px-1">
        <div className="flex items-center gap-3 pb-[8px]">
          <span className="text-left text-[18px] font-bold text-white">{collection.title}</span>
          <ButtonEdit
            autosave={() => {
              const token = localStorage.getItem('token');
              if (!token) return;
              void handleSaveCollectionGroup({ data: newData({ data: context.dataContext }), token: token });
              context.initialDataContext.current = newData({ data: context.dataContext });
              context.setDataContext(newData({ data: context.dataContext }));
            }}
            collectionId={index + 1}
            setPage={setPage}
          />
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
      className="group rounded-[6px] bg-[#1C1C1C] p-[10px] text-white"
    >
      <div className="flex justify-between pl-1 pr-2">
        <span>{note.description}</span>
        <ButtonDrag
          func={(e) => {
            controls.start(e);
          }}
        />
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
    <Reorder.Group
      className="flex w-full max-w-4xl flex-col gap-8"
      values={context.dataContext.collections}
      onReorder={handleReorderGroup}
    >
      {context.dataContext.collections.map((collection, index) => {
        return <Item index={index} key={collection.id} collection={collection} setPage={setPage} />;
      })}
    </Reorder.Group>
  );
};
export default Notebook;

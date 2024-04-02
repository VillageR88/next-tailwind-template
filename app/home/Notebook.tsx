'use client';
import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';
import { Reorder } from 'framer-motion';
import { Collection, Note } from '../lib/interfaces';

const Notebook = () => {
  const context = useContext(DataContext);

  const handleReorderGroup = (newOrder: Collection[]) => {
    context.setDataContext((prevState) => ({
      ...prevState,
      collections: newOrder,
    }));
  };

  const handleReorderItem = (newOrder: Note[], collectionId: number) => {
    context.setDataContext((prevState) => {
      // Find the index of the collection to update
      const collectionIndex = prevState.collections.findIndex((collection) => collection.id === +collectionId);

      // Make a copy of the collections array
      const newCollections = [...prevState.collections];

      // Update the Notes of the specific collection
      newCollections[collectionIndex] = {
        ...newCollections[collectionIndex],
        Notes: newOrder,
      };

      // Return the updated collections array
      return {
        ...prevState,
        collections: newCollections,
      };
    });
  };
  return (
    <Reorder.Group
      className="flex w-full max-w-4xl flex-col gap-8 "
      values={context.dataContext.collections}
      onReorder={handleReorderGroup}
    >
      {context.dataContext.collections.map((collection) => (
        <Reorder.Item
          value={collection}
          key={collection.id}
          className="flex flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4"
        >
          <span className="pb-[8px] pl-1 text-left text-[18px] font-bold leading-6 text-white">{collection.title}</span>
          <Reorder.Group
            onReorder={(newOrder) => {
              handleReorderItem(newOrder, collection.id);
            }}
            key={collection.id}
            values={collection.Notes}
            className="flex flex-col gap-2"
          >
            {collection.Notes.map((note) => (
              <Reorder.Item value={note} key={note.id} className="rounded-[6px] bg-[#1C1C1C] p-[10px] text-white">
                {note.description}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
export default Notebook;

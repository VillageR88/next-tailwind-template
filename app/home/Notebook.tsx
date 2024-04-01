import { useContext, useRef } from 'react';
import DataContext from '@/app/home/DataContext';

const Notebook = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const context = useContext(DataContext);

  return (
    <div className="flex w-full max-w-4xl flex-col gap-8 ">
      {context.dataContext?.collections.map((collection) => (
        <div
          ref={dragRef}
          draggable
          //create Drag and drop and include context.setDataContext
          /*
               onDragStart={(e) => {
                      e.dataTransfer.setData('text/plain', index.toString());
                      e.dataTransfer.effectAllowed = 'move';
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const from = Number(e.dataTransfer.getData('text/plain'));
                      const to = index;
                      const newLinks = [...fetchLinks];
                      const item = newLinks.splice(from, 1)[0];
                      newLinks.splice(to, 0, item);
                      setFetchLinks(newLinks);
                    }}
                    use this as inspiration
         */
          onDragStart={(e) => {
            e.dataTransfer.setData('text/plain', collection.title);
            e.dataTransfer.effectAllowed = 'move';
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            const from = e.dataTransfer.getData('text/plain');
            const to = collection.title;
            const newCollections = [...context.dataContext?.collections];
            const fromIndex = newCollections.findIndex((c) => c.title === from);
            const toIndex = newCollections.findIndex((c) => c.title === to);
            const item = newCollections.splice(fromIndex, 1)[0];
            newCollections.splice(toIndex, 0, item);
            context.setDataContext({ ...context.dataContext, collections: newCollections });
          }}
          className="flex flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4"
          key={collection.id}
        >
          <span className="pb-[8px] pl-1 text-left text-[18px] font-bold leading-6 text-white">{collection.title}</span>
          <div className="flex flex-col gap-2">
            {collection.Notes.map((note) => (
              <div key={note.id} className="rounded-[6px] bg-[#1C1C1C] p-[10px] text-white">
                {note.description}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Notebook;

import { useContext, useRef } from 'react';
import DataContext from '@/app/home/DataContext';

const Notebook = () => {
  const dragRef = useRef<HTMLDivElement[]>([]);
  const context = useContext(DataContext);
  let clone: HTMLDivElement | null = null;

  return (
    <div className="flex w-full max-w-4xl flex-col gap-8 ">
      {context.dataContext?.collections.map((collection) => {
        return (
          <div
            ref={(el) => {
              if (el) {
                dragRef.current.push(el);
              }
            }}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', collection.title);
              e.dataTransfer.effectAllowed = 'move';
              clone = dragRef.current.find((el) => el === e.target)?.cloneNode(true) as HTMLDivElement;
              document.body.appendChild(clone);
              clone.style.position = 'fixed';

              e.dataTransfer.setDragImage(clone, 0, 0);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDrag={(e) => {
              if (clone) {
                clone.style.left = `${e.clientX}px`;
                clone.style.top = `${e.clientY}px`;
              }
            }}
            onDrop={(e) => {
              if (!context.dataContext?.collections) return;
              e.preventDefault();
              const from = e.dataTransfer.getData('text/plain');
              const to = collection.title;
              const newCollections = [...context.dataContext.collections];
              const fromIndex = newCollections.findIndex((c) => c.title === from);
              const toIndex = newCollections.findIndex((c) => c.title === to);
              const item = newCollections.splice(fromIndex, 1)[0];
              newCollections.splice(toIndex, 0, item);
              context.setDataContext({ ...context.dataContext, collections: newCollections });
              document.body.removeChild(clone as Node);
            }}
            onDragEnd={() => {
              if (clone) document.body.removeChild(clone as Node);
            }}
            className="flex flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4"
            key={collection.id}
          >
            <span className="pb-[8px] pl-1 text-left text-[18px] font-bold leading-6 text-white">
              {collection.title}
            </span>
            <div className="flex flex-col gap-2">
              {collection.Notes.map((note) => (
                <div key={note.id} className="rounded-[6px] bg-[#1C1C1C] p-[10px] text-white">
                  {note.description}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Notebook;

import { useContext } from 'react';
import DataContext from '@/app/home/DataContext';

const Notebook = () => {
  const context = useContext(DataContext);

  return (
    <div className="flex w-full max-w-4xl flex-col gap-8 ">
      {context.dataContext?.collections.map((collection) => (
        <div
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

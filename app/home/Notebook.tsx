import { useState } from 'react';

interface Note {
  id: number;
  title: string;
  description: string;
}

interface Collection {
  id: number;
  title: string;
  Notes: Note[];
}

interface CollectionGroup {
  collections: Collection[];
}

const Notebook = () => {
  const [myCollections, setMyCollections] = useState<CollectionGroup | null>(null);

  return (
    <div className="flex flex-col gap-8 ">
      {myCollections?.collections.map((collection) => (
        <div
          className="flex flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4"
          key={collection.id}
        >
          <span className="pb-[8px] pl-1 text-left text-[18px] font-bold leading-6 text-white">{collection.title}</span>
          <div className="flex flex-col gap-2">
            {collection.Notes.map((note) => (
              <div
                key={note.id}
                className="rounded-[6px] border border-double border-[#414141] bg-[#1f1f1f] p-[10px] text-white"
              >
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

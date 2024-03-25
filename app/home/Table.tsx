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

const Table = () => {
  const mockupJSON: CollectionGroup = {
    collections: [
      {
        id: 1,
        title: 'Collection 1',
        Notes: [
          {
            id: 1,
            title: 'Note 1',
            description: 'Description 1',
          },
          {
            id: 2,
            title: 'Note 2',
            description: 'Description 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Collection B',
        Notes: [
          {
            id: 3,
            title: 'Note A',
            description: 'Description A',
          },
          {
            id: 4,
            title: 'Note B',
            description: 'Description B',
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 ">
      {mockupJSON.collections.map((collection) => (
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
export default Table;

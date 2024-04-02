import DataContext from './DataContext';
import { useContext } from 'react';

const CollectionPage = ({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const context = useContext(DataContext);
  return (
    <div className="flex size-full flex-col items-center gap-8">
      <div className="flex w-full max-w-4xl flex-col gap-8">
        <div className="flex select-none flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4 ">
          <div className="flex justify-between px-1">
            <div className="flex items-center gap-3 pb-[8px]">
              <span className="text-left text-[18px] font-bold text-white">
                {context.dataContext.collections[page - 1].title}
              </span>
            </div>
          </div>
          {context.dataContext.collections[page - 1].Notes.map((note) => (
            <div key={note.id}>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-[#1C1C1C] text-3xl text-white"
        onClick={() => {
          setPage(null);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CollectionPage;

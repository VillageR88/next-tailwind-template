import DataContext from './DataContext';
import { useContext } from 'react';
import IconReturn from '../components/IconReturn';

const CollectionPage = ({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const context = useContext(DataContext);
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <div className="flex select-none flex-col gap-[6px] rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4 ">
        <div className="flex justify-between px-1">
          <div className="flex items-center gap-3 pb-[8px]">
            <span className="text-left text-[18px] font-bold text-white">
              {context.dataContext.collections[page - 1].title}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {context.dataContext.collections[page - 1].Notes.map((note) => (
            <div className="rounded-[6px] bg-[#1C1C1C] p-[10px] text-white" key={note.id}>
              <div className="flex justify-between pl-1 pr-2">
                <p>{note.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="button1 flex"
        onClick={() => {
          setPage(null);
        }}
      >
        <IconReturn />
        <span className="pl-1">Return</span>
      </button>
    </div>
  );
};

export default CollectionPage;
